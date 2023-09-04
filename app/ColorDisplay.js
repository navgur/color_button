const ColorDisplay = ({ currentcolor }) => {
  return (
    <div>
      <div className="color-button-app">
        <div className="box" style={{ backgroundColor: currentcolor }}></div>
      </div>
    </div>
  );
};

export default ColorDisplay;

