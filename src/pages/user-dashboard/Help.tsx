import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeHelp } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "Как изменить мой номер телефона?", answer: "Перейдите в настройки профиля и отредактируйте номер телефона." },
  { question: "Как восстановить пароль?", answer: "Используйте функцию восстановления пароля на странице входа." },
  { question: "Как удалить мой аккаунт?", answer: "Обратитесь в нашу поддержку, и мы поможем вам удалить аккаунт." },
];

const  Help = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Сообщение отправлено: \nEmail: ${email}\nСообщение: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><BadgeHelp color="red" /> Помощь</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent>
                <h4 className="font-semibold">{faq.question}</h4>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Свяжитесь с нами</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Ваш Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Опишите вашу проблему или вопрос"
            />
          </div>

          <Button type="submit">Отправить сообщение</Button>
        </form>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Инструкции по использованию</h3>
        <p>
          В этом разделе вы найдете подробные инструкции по использованию приложения. Вы можете изучить, как настроить
          свой профиль, управлять заказами, просматривать истории покупок и использовать другие функции нашего приложения.
        </p>
        <p className="mt-3 text-blue-500 underline cursor-pointer">Скачать полное руководство</p>
      </section>
    </div>
  );
};

export default Help;
