import { useState } from "react";
import Card from "./Card";

const DayRow = ({day}) => {
  const [rowCards, setRowCards] = useState([
    { title: "Computer Class", time: "4:30PM - 5:30PM", note: "lorem ipsum wowie im a barbie girl in a barbie world", location: "https://google.com", color: "#ff0000" },
    { title: "Computer Class", time: "4:30PM - 5:30PM", note: null, location: "https://google.com", color: "#ff0000" },
    { title: "Computer Class", time: "4:30PM - 5:30PM", note: "lorem ipsum wowie im a barbie girl in a barbie world", location: null, color: "#ff0000" }
  ]);
  return (
    <div className="flex items-center m-[1.1vh] relative">
      <h2 className="w-20 font-bold text-center">{day}</h2>
      <ul className="flex space-x-2">
        {rowCards.map((cardData, index) => <Card data={cardData}/>)}
      </ul>
      <div className="outline outline-1 outline-black w-full absolute -top-[0.15rem]"/>
    </div>
  )
}

export default DayRow;