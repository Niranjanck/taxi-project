interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  id:string
  name:string
}
const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  className = "",
  id,
  name
}) => {
  return (
    <label className="tp-relative">
      <p className="tp-ml-3 tp-absolute tp-bg-white tp-uppercase tp-text-primary -tp-top-[34px]">
        {label}
      </p>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={` tp-border-[#E5E5E5] peer tp-border focus:tp-border-primary tp-px-4 tp-py-[18px] tp-rounded-xl ${className}`}
      />
    </label>
  );
};
export default InputField;
