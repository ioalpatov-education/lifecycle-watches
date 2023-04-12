import WatchesForm from "./WatchesForm";
import WatchesList from "./WatchesList";
import { useState } from "react";
import { getStartDate } from "./utils";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const addTimezone = (newTimezone) => {
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

  return (
    <div className="watches-wrapper">
      <WatchesForm onAddTimezone={addTimezone} />
      <WatchesList />
    </div>
  );
};

export default Watches;
