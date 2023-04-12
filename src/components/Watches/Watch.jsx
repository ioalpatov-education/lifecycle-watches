import { Close } from "@mui/icons-material";
const Watch = () => {
  return (
    <div className="watch-wrapper">
      <p>Moscow</p>
      <div className="watch">
        <div className="watch__hand second-hand"></div>
        <div className="watch__hand minute-hand arrow"></div>
        <div className="watch__hand hour-hand arrow"></div>
      </div>
      <button className="watch__delete-btn">
        <Close className="delete-btn__icon" />
      </button>
    </div>
  );
};

export default Watch;
