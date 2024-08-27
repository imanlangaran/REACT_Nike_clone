const Button = ({ label, iconURL, altText, style, fullWidth }) => {
  if (style === "" || style === undefined)
    style = "bg-coral-red text-white border-coral-red";
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full ${style} ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={altText}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
