const HealthMeter = (props) => {
  return (
    <>
      <div className="font-weight-bold"> {props.name} </div>
      <div> {props.health} </div>
    </>
  );
};

export default HealthMeter;
