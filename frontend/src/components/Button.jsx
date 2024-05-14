function Button({
  onClick,
  children,
  bgcolor = "bg-white",
  textcolor = "text-black",
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgcolor} ${textcolor} lg:py-3 lg:px-8 py-2 px-6 text-sm lg:text-base rounded-2xl uppercase tracking-wide font-bold hover:shadow-xl hover:font-extrabold transition-all delay-[50ms]`}
    >
      {children}
    </button>
  );
}

export default Button;
