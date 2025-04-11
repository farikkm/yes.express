import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CameraIcon, LockIcon } from "lucide-react";
import ChangePasswordModal from "@/components/user-dashboard/modals/ChangePasswordModal";
import { ProfileData } from "@/types/index";

const Profile = () => {
  const [formData, setFormData] = useState<ProfileData>({
    name: "Fariz",
    email: "fariz@example.com",
    phone: "+998901234567",
    avatar: "",
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Сохранено:", formData);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-2xl mx-auto grow">
        <h2 className="text-2xl font-semibold mb-4">👤 Профиль пользователя</h2>

        <Card className="">
          <CardContent className="p-6 space-y-6">
            {/* Avatar Upload */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={
                    formData.avatar ||
                    "https://ui-avatars.com/api/?name=F&background=0D8ABC&color=fff"
                  }
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover border"
                />
                <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer shadow-md">
                  <CameraIcon className="w-4 h-4 text-gray-600" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>

              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setIsPasswordModalOpen(true)}
              >
                <LockIcon className="w-4 h-4" />
                Изменить пароль
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите имя"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  name="phone"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998..."
                  autoComplete="tel"
                />
              </div>

              <div className="pt-4">
                <Button type="submit">Сохранить</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Модал для смены пароля */}
        <ChangePasswordModal
          isOpen={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Profile;
