import Image from "next/image";
import { useState } from "react";
import uploadLogo from "../public/upload.svg";
import xLogo from "../public/x.svg";

const Settings = () => {
  const [addTask, setAddTask] = useState(false);
  const [legendKey, setLegendKey] = useState([
    { fieldName: "BIG RED", color: "#ff0000" },
    { fieldName: "BLUE'S CLUES", color: "#0000ff" },
  ]);

  const updateKeyPair = (e, index) => {
    let newLegendKey = legendKey;
    newLegendKey[index].fieldName = e.target.value;
    setLegendKey([...newLegendKey]);
  }

  return (
    <>
        {addTask && 
            <div className="w-screen h-screen bg-white/60 backdrop-blur-md absolute left-0 top-0 z-50 flex items-center justify-center">
                <div className="w-1/4 h-1/2 rounded-md bg-[#f3f2fd] p-10 flex flex-col items-center justify-between relative">
                    <Image width={40} height={40} src={xLogo} onClick={() => setAddTask(false)} className="absolute right-6 top-6 cursor-pointer p-2"/>
                    <div className="flex space-x-3 mt-10">
                        <input className="w-full p-1 rounded-md focus:outline-none" placeholder="Start Time"/>
                        <input className="w-full p-1 rounded-md focus:outline-none" placeholder="End Time"/>
                    </div>                    
                    <textarea placeholder="Note" id="" rows="3" className="resize-none w-full p-1 rounded-md focus:outline-none"/>
                    <select name="" id="" className="w-full p-1 rounded-md focus:outline-none">

                        <option value="">RED</option>
                        <option value="">BLUE</option>
                        <option value="">GREEN</option>
                    </select>
                    <select name="" id="" className="w-full p-1 rounded-md focus:outline-none">
                        <option value="">CWRS G1</option>
                        <option value="">CWRS G2</option>
                        <option value="">CWRS G3</option>
                    </select>
                    <button onClick={() => setAddTask(true)} className="button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 w-full flex justify-center space-x-3 items-center">Add +</button>
                </div>
            </div>}
        <div className="w-[25vw] h-screen bg-primary p-3">
            <div className="h-[90vh] bg-white rounded-md">
                <ul className="p-6 space-y-3">
                    {legendKey.map((keyPair, index) => 
                        <li key={index} className="flex items-center space-x-3 font-hindRegular">
                            <div className="w-6 h-6 rounded-full" style={{backgroundColor: keyPair.color}}/>
                            <input defaultValue={keyPair.fieldName} onChange={(e) => updateKeyPair(e, index)} />
                        </li>)}
                </ul>
            </div>
            <button onClick={() => setAddTask(true)} className="button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 w-full flex justify-center space-x-3 items-center">
                <h4>Add Task</h4>
                <Image src={uploadLogo} width={20} height={20} />
            </button>
        </div>
    </>
  )
}

export default Settings;