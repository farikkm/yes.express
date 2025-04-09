import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2Icon, EditIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Address {
  id: number;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, street: "123 Main St", city: "Tashkent", postalCode: "100100", country: "Uzbekistan" },
    { id: 2, street: "456 Elm St", city: "Samarkand", postalCode: "140100", country: "Uzbekistan" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

  const handleAddAddress = () => {
    setIsModalOpen(true);
    setCurrentAddress(null); // Очистить форму для нового адреса
  };

  const handleEditAddress = (address: Address) => {
    setIsModalOpen(true);
    setCurrentAddress(address);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(prev => prev.filter(address => address.id !== id));
  };

  const handleSaveAddress = (address: Address) => {
    if (currentAddress) {
      setAddresses(prev => prev.map(a => (a.id === currentAddress.id ? address : a)));
    } else {
      setAddresses(prev => [...prev, { ...address, id: Date.now() }]); // Добавляем новый адрес с уникальным id
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🏠 Мои адреса</h2>

      <Button variant="outline" onClick={handleAddAddress}>
        Добавить адрес
      </Button>

      <div className="mt-6 space-y-4">
        {addresses.map(address => (
          <Card key={address.id}>
            <CardContent className="flex justify-between items-center">
              <div>
                <div>{address.street}</div>
                <div>{address.city}, {address.country}, {address.postalCode}</div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleEditAddress(address)}>
                  <EditIcon className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDeleteAddress(address.id)}>
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Модальное окно для добавления/редактирования адреса */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogTitle>{currentAddress ? "Редактировать адрес" : "Добавить новый адрес"}</DialogTitle>
          <DialogDescription>
            Пожалуйста, введите данные адреса.
          </DialogDescription>
          <AddressForm
            initialData={currentAddress}
            onSave={handleSaveAddress}
            onCancel={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Форма для добавления/редактирования адреса
const AddressForm = ({
  initialData,
  onSave,
  onCancel,
}: {
  initialData: Address | null;
  onSave: (address: Address) => void;
  onCancel: () => void;
}) => {
  const [street, setStreet] = useState(initialData?.street || "");
  const [city, setCity] = useState(initialData?.city || "");
  const [postalCode, setPostalCode] = useState(initialData?.postalCode || "");
  const [country, setCountry] = useState(initialData?.country || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: initialData ? initialData.id : Date.now(), street, city, postalCode, country });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="street">Улица</Label>
        <Input
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          placeholder="Введите улицу"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Город</Label>
        <Input
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Введите город"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="postalCode">Почтовый индекс</Label>
        <Input
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Введите почтовый индекс"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Страна</Label>
        <Input
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Введите страну"
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

export default Addresses;
