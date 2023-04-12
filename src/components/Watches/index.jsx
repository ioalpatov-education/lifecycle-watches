import WatchesForm from "./WatchesForm";
import WatchesList from "./WatchesList";

const Watches = () => {
  const addTimeZone = (newTimeZone) => {};
  
  return (
    <div className="watches-wrapper">
      <WatchesForm onAddTimeZone={addTimeZone} />
      <WatchesList />
    </div>
  );
};

export default Watches;
