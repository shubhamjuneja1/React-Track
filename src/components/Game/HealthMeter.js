const HealthMeter = ({name, health}) => (
  <>
    <div className="font-weight-bold"> {name} </div>
    <div> {health} </div>
  </>
);

export default HealthMeter;
