import Watch from "./Watch";
import PropTypes from "prop-types";

const WatchesList = ({ watches, onDeleteWatch }) => {
  const list = watches.map((watch) => {
    return <Watch key={watch.id} watch={watch} onDeleteWatch={onDeleteWatch} />;
  });

  return <div className="watches-list">{list}</div>;
};

WatchesList.propTypes = {
  watches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      startDate: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  onDeleteWatch: PropTypes.func.isRequired,
};

export default WatchesList;
