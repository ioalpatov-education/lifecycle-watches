import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Watch = ({ watch, onDeleteWatch }) => {
  const { id, title, startDate } = watch;

  useEffect(() => {
    let newDate = startDate;
    const intervalId = setInterval(() => {
      newDate.setSeconds(newDate.getSeconds() + 1);
      console.log(new Date(newDate));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const deleteWatch = () => {
    onDeleteWatch(id);
  };

  return (
    <div className="watch-wrapper">
      <p>{title}</p>
      <div className="watch">
        <div className="watch__hand second-hand"></div>
        <div className="watch__hand minute-hand arrow"></div>
        <div className="watch__hand hour-hand arrow"></div>
      </div>
      <button className="watch__delete-btn" onClick={deleteWatch}>
        <Close className="delete-btn__icon" />
      </button>
    </div>
  );
};

Watch.propTypes = {
  watch: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onDeleteWatch: PropTypes.func.isRequired,
};

export default Watch;
