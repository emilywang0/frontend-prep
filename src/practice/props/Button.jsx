import "./styles.css";

function Button(props) {
  const { isActive } = props;
  return (
    <div>
      <button style={{ fontWeight: isActive ? "bold" : "normal" }}>
        {" "}
        Test{" "}
      </button>
      <button className={`btn ${isActive ? "btn-active" : ""}`}>
        {" "}
        Click me!{" "}
      </button>
    </div>
  );
}

export default Button;
