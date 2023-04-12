import Watch from "./Watch";
import PropTypes from "prop-types";

const WatchesList = ({ watches }) => {
  const list = watches.map((watch) => {
    return <Watch key={watch.id} watch={watch} />;
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
};

export default WatchesList;
