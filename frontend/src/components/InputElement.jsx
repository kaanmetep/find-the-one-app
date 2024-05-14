function InputElement({
  type = "text",
  py = 1,
  placeholder = "",
  disabled = false,
  value = "",
  onChange,
  name = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`shadow-lg border-2 border-red-200 px-2 rounded-md py-${py} placeholder:text-xs w-36 focus:w-40 sm:w-56 sm:focus:w-60
      transition-all duration-300 focus:outline-none
      focus:ring
      focus:ring-red-400
      focus:ring-opacity-50`}
      disabled={disabled}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default InputElement;
