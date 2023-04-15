import DayRow from "./DayRow";

const Planner = () => {
  let days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]
  return (
    <div className="w-[82vw] h-screen bg-gray-300">
      {days.map((day, index) => <DayRow key={index} day={day}/>)}
    </div>
  )
}

export default Planner;
