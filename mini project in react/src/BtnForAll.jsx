const BtnForAll = ({ setDisplay, setType }) => {
  const handleClick = (buttonType) => {
    setDisplay(true);
    setType(buttonType);
  };

  return (
    <>
      <div>
        <button className="btn-edit" onClick={() => handleClick("EDIT")}>
          EDIT
        </button>
        <button className="btn-delete" onClick={() => handleClick("DELETE")}>
          DELETE
        </button>
      </div>
    </>
  );
};

export default BtnForAll;
