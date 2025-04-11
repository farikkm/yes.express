import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PaymentMethod } from '@/types/index';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentPaymentMethod: PaymentMethod | null;
  handleSavePaymentMethod: (paymentMethod: PaymentMethod) => void;
}

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

const AddPaymentMethodModal = ({isModalOpen, setIsModalOpen, currentPaymentMethod, handleSavePaymentMethod}: Props) => {
  return (
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
  )
}

export default AddPaymentMethodModal