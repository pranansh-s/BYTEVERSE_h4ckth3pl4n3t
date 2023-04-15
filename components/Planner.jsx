import DayRow from "./DayRow";

const Planner = () => {
  let days = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]
  return (
    <div className="w-[69vw] h-screen bg-[#FFFDF9]">
      <div className="h-screen outline outline-red-500/70 outline-1 w-0 absolute ml-20"/>
      <div className="h-screen outline outline-red-500/70 outline-1 w-0 absolute ml-[5.5rem]"/>
      {days.map((day, index) => <DayRow key={index} day={day}/>)}
    </div>
  )
}

export default Planner;
