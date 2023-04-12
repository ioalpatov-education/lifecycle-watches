import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Watch = ({ watch, onDeleteWatch }) => {
  const { id, title, startDate } = watch;

  const [time, setTime] = useState(null);

  let hourStyles;
  let minutesStyles;
  let secondsStyles;
  useEffect(() => {
    let currentDate = startDate;
    const intervalId = setInterval(() => {
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      setTime({
        hour,
        minutes,
        seconds,
      });

      currentDate.setSeconds(currentDate.getSeconds() + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  if (!!time) {
    hourStyles = {
      transform: `rotate(${time.hour * 30}deg)`,
    };

    minutesStyles = {
      transform: `rotate(${time.minutes * 6}deg)`,
    };

    secondsStyles = {
      transform: `rotate(${time.seconds * 6}deg)`,
    };
  }

  const deleteWatch = () => {
    onDeleteWatch(id);
  };

  const watchMarkup = !!time ? (
    <div className="watch-wrapper">
      <p>{title}</p>
      <div className="watch">
        <div className="watch__hand second-hand" style={secondsStyles}></div>
        <div
          className="watch__hand minute-hand arrow"
          style={minutesStyles}
        ></div>
        <div className="watch__hand hour-hand arrow" style={hourStyles}></div>
      </div>
      <button className="watch__delete-btn" onClick={deleteWatch}>
        <Close className="delete-btn__icon" />
      </button>
    </div>
  ) : null;

  return <>{watchMarkup}</>;
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
