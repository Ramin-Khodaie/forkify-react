import "./ShowMessage.scss";

const ShowMessage = ({ message, iconType }) => {
  return (
    <div class="message">
      {message && <div>{iconType}</div>}
      <p>{message}</p>
    </div>
  );
};

export default ShowMessage;
