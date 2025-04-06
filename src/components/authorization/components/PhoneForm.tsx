interface PhoneFormProps {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const validOperatorCodes = ["90", "91", "93", "94", "95", "97", "99", "88", "77", "33"]; // Список разрешённых кодов операторов

const PhoneForm: React.FC<PhoneFormProps> = ({ phoneNumber, setPhoneNumber, error, setError }) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith("+998")) {
      value = "+998 ";
    }

    const digits = value.replace(/\D/g, "").substring(3); // Убираем всё кроме цифр после "+998"

    // Форматируем номер
    let formatted = "+998 ";
    if (digits.length > 0) formatted += digits.substring(0, 2);
    if (digits.length > 2) formatted += " " + digits.substring(2, 5);
    if (digits.length > 5) formatted += " " + digits.substring(5, 7);
    if (digits.length > 7) formatted += " " + digits.substring(7, 9);

    setPhoneNumber(formatted);

    // Проверка на валидность номера
    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
    const operatorCode = digits.substring(0, 2);

    if (!phoneRegex.test(formatted)) {
      setError("Неправильный формат номера.");
    } else if (!validOperatorCodes.includes(operatorCode)) {
      setError("Некорректный код оператора.");
    } else {
      setError(null); // Если номер правильный, очищаем ошибку
    }
  };

  return (
    <div className="space-y-1">
      <label className="authorization_text_color flex flex-col space-y-2">
        <span className="label-span">Телефон</span>
        <input
          className="auth-input"
          type="text"
          name="phone"
          onChange={handlePhoneChange}
          placeholder="+998 XX XXX XX XX"
          maxLength={17}
          value={phoneNumber}
          required
        />
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default PhoneForm;
