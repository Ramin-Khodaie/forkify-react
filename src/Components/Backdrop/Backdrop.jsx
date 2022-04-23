import "./Backdrop.scss";

const Backdrop = (props) => {
  if (props.showDrop) {
    return <div className="backdrop" onClick={props.closebackdrop}></div>;
  } else {
    return null;
  }
};

export default Backdrop;
