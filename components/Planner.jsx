import DayRow from "./DayRow";

const Planner = () => {
  let days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]
  return (
    <div className="w-[80vw] h-screen bg-gray-100">
      {days.map((day, index) => <DayRow key={index} day={day}/>)}
    </div>
  )
}

export default Planner;
