const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={`switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="switch-label"
        htmlFor={`switch-new`}
      >
        <span className="switch-f-temp switch-temp">F</span>
        <span className="switch-c-temp switch-temp">C</span>
        <span className={`switch-button`}/>
      </label>
    </>
  );
};

export default Switch;