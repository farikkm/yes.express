import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2Icon, EditIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface PaymentMethod {
  id: number;
  cardNumber: string;
  expiryDate: string;
  cardHolder: string;
}

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: 1, cardNumber: "1234 5678 9876 5432", expiryDate: "12/25", cardHolder: "John Doe" },
    { id: 2, cardNumber: "9876 5432 1234 5678", expiryDate: "06/23", cardHolder: "Jane Smith" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleAddPaymentMethod = () => {
    setIsModalOpen(true);
    setCurrentPaymentMethod(null); // Очистить форму для нового метода
  };

  const handleEditPaymentMethod = (method: PaymentMethod) => {
    setIsModalOpen(true);
    setCurrentPaymentMethod(method);
  };

  const handleDeletePaymentMethod = (id: number) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };

  const handleSavePaymentMethod = (method: PaymentMethod) => {
    if (currentPaymentMethod) {
      setPaymentMethods(prev => prev.map(m => (m.id === currentPaymentMethod.id ? method : m)));
    } else {
      setPaymentMethods(prev => [...prev, { ...method, id: Date.now() }]); // Добавляем новый метод с уникальным id
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">💳 Методы оплаты</h2>

      <Button variant="outline" onClick={handleAddPaymentMethod}>
        Добавить метод оплаты
      </Button>

      <div className="mt-6 space-y-4">
        {paymentMethods.map(method => (
          <Card key={method.id}>
            <CardContent className="flex justify-between items-center">
              <div>
                <div>Номер карты: **** **** **** {method.cardNumber.slice(-4)}</div>
                <div>Срок действия: {method.expiryDate}</div>
                <div>Владелец карты: {method.cardHolder}</div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleEditPaymentMethod(method)}>
                  <EditIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDeletePaymentMethod(method.id)}>
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Модальное окно для добавления/редактирования метода оплаты */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogTitle>{currentPaymentMethod ? "Редактировать метод оплаты" : "Добавить новый метод оплаты"}</DialogTitle>
          <DialogDescription>
            Пожалуйста, введите данные карты.
          </DialogDescription>
          <PaymentMethodForm
            initialData={currentPaymentMethod}
            onSave={handleSavePaymentMethod}
            onCancel={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Форма для добавления/редактирования метода оплаты
const PaymentMethodForm = ({
  initialData,
  onSave,
  onCancel,
}: {
  initialData: PaymentMethod | null;
  onSave: (method: PaymentMethod) => void;
  onCancel: () => void;
}) => {
  const [cardNumber, setCardNumber] = useState(initialData?.cardNumber || "");
  const [expiryDate, setExpiryDate] = useState(initialData?.expiryDate || "");
  const [cardHolder, setCardHolder] = useState(initialData?.cardHolder || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: initialData ? initialData.id : Date.now(), cardNumber, expiryDate, cardHolder });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Номер карты</Label>
        <Input
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Введите номер карты"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="expiryDate">Срок действия</Label>
        <Input
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="Введите срок действия (MM/YY)"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardHolder">Владелец карты</Label>
        <Input
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          placeholder="Введите имя владельца карты"
        />
      </div>

      <div className="pt-4 flex space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отменить
        </Button>
        <Button type="submit">{initialData ? "Сохранить" : "Добавить"}</Button>
      </div>
    </form>
  );
};

export default PaymentMethods;
