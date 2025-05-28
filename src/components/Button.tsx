import "./Button.css";
type buttonPros = {
  btnName: string;
  bgColor?: string;
  fun: () => void;
};
const Button = ({ btnName, bgColor, fun }: buttonPros) => {
  return (
    <div>
      <button
        className="btn"
        onClick={fun}
        style={{ backgroundColor: bgColor }}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
