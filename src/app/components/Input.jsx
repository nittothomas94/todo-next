const Input = ({ type = 'text', className, placeholder }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default Input;
