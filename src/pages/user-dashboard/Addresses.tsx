import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2Icon, EditIcon } from "lucide-react";
import AddAddressModal from "@/components/user-dashboard/modals/AddAddressModal";
import { Address } from "@/types/index";

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      street: "123 Main St",
      city: "Tashkent",
      postalCode: "100100",
      country: "Uzbekistan",
    },
    {
      id: 2,
      street: "456 Elm St",
      city: "Samarkand",
      postalCode: "140100",
      country: "Uzbekistan",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

  const handleAddAddress = () => {
    setIsModalOpen(true);
    setCurrentAddress(null);
  };

  const handleEditAddress = (address: Address) => {
    setIsModalOpen(true);
    setCurrentAddress(address);
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id));
  };

  const handleSaveAddress = (address: Address) => {
    if (currentAddress) {
      setAddresses((prev) =>
        prev.map((a) => (a.id === currentAddress.id ? address : a))
      );
    } else {
      setAddresses((prev) => [...prev, { ...address, id: Date.now() }]);
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
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardContent className="flex justify-between items-center">
              <div>
                <div>{address.street}</div>
                <div>
                  {address.city}, {address.country}, {address.postalCode}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditAddress(address)}
                >
                  <EditIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteAddress(address.id)}
                >
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Модальное окно для добавления/редактирования адреса */}
      <AddAddressModal
        currentAddress={currentAddress}
        handleSaveAddress={handleSaveAddress}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Addresses;
