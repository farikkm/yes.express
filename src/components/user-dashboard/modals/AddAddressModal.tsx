import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Address } from "@/types/index";
import { useState } from "react";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentAddress: Address | null;
  handleSaveAddress: (address: Address) => void;
}

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

const AddAddressModal = ({ currentAddress, handleSaveAddress, isModalOpen, setIsModalOpen }: Props) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent>
        <DialogTitle>
          {currentAddress ? "Редактировать адрес" : "Добавить новый адрес"}
        </DialogTitle>
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
  );
};

export default AddAddressModal;
