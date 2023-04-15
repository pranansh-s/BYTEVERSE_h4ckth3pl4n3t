import { useState } from "react";
import Card from "./Card";

const DayRow = ({day}) => {
  const [rowCards, setRowCards] = useState([
    { title: "Computer Class", time: "4:30pm - 5:30pm", note: "lorem ipsum wowie im a barbie girl in a barbie world", location: "https://google.com", color: "#d70707" },
    { title: "Computer Class", time: "4:30pm - 5:30pm", note: null, location: "https://google.com", color: "#0718a6" },
    { title: "Computer Class", time: "4:30pm - 5:30pm", note: "lorem ipsum wowie im a barbie girl in a barbie world", location: null, color: "#41a607" }
  ]);
  return (
    <div className="flex items-center m-[1.1vh] relative">
      <h2 className="w-20 font-bold text-center font-montserrat">{day}</h2>
      <ul className="flex space-x-2">
        {rowCards.map((cardData, index) => <Card key={index} data={cardData}/>)}
      </ul>
      <div className="flex w-full -top-[0.75rem] absolute items-center">
        <div className="absolute -ml-3">
          <div className="h-4 w-4 border-l border-t border-r border-b-transparent border-4 border-black absolute top-2 -rotate-45 rounded-full"/>
          <div className="h-4 w-4 border-l border-t border-r border-b-transparent border-4 border-black -rotate-45 rounded-full"/>
        </div>
        <div className="w-5 h-5 bg-black rounded-full"/>
        <div className="outline outline-1 h-0 outline-red-500/50 w-full"/>
      </div>
    </div>
  )
}

export default DayRow;