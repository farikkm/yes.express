interface Props {
    label: string;
    isActive: boolean,
    switchTo: () => void;
}

const SwitchButton = ({isActive, switchTo, label}: Props) => {
  return (
    <button
      className={`w-1/2 authorization_text_color ${
        isActive ? "bg-gray-500" : "bg-transparent"
      } md:h-[50px] h-[40px] block transition-all duration-200 ease-in-out transform active:scale-95`}
      onClick={switchTo}
    >
      {label}
    </button>
  );
};

export default SwitchButton;
