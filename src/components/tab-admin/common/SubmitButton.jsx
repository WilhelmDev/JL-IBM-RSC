const SubmitButton = ({ text, className = "", disabled = false }) => (
  <button className={` ${className}`} type="submit" disabled={disabled}>
    {text}
  </button>
);

export default SubmitButton;
