import "./Button.css";  // ✅ import CSS

const Button = ({ name }) => {
  return (
    <div>
      <button className="btn">
        {name}
      </button>
    </div>
  );
};

export default Button;
