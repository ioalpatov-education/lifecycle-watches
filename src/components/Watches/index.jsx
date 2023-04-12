import WatchesForm from "./WatchesForm";
import WatchesList from "./WatchesList";
import { useState } from "react";
import { getStartDate } from "./utils";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const addWatch = (newTimezone) => {
    const { title, timezone, id } = newTimezone;

    setWatches([
      ...watches,
      {
        id,
        title,
        startDate: getStartDate(timezone),
      },
    ]);
  };

  const deleteWatch = (watchId) => {
    const newWatches = watches.filter((el) => el.id !== watchId);
    setWatches(newWatches);
  };

  return (
    <div className="watches-wrapper">
      <WatchesForm onAddWatch={addWatch} />
      <WatchesList watches={watches} onDeleteWatch={deleteWatch} />
    </div>
  );
};

export default Watches;
