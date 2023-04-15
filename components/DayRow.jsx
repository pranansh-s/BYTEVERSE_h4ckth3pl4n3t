import Card from "./Card";

const DayRow = ({day}) => {
  return (
    <div className="flex items-center m-[0.5vh]">
      <h2 className="w-20 font-bold text-center">{day}</h2>
      <ul className="flex space-x-1">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ul>
    </div>
  )
}

export default DayRow;