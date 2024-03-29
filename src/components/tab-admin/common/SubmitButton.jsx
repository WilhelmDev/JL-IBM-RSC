const SubmitButton = ({ text, className = "" }) => (
  <button className={` ${className}`} type="submit">
    {text}
  </button>
);

export default SubmitButton;
