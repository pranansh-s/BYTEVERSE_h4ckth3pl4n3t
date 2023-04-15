import Image from "next/image";
import { useState } from "react";
import uploadLogo from "../public/upload.svg";

const Settings = () => {
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
        <button className="button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 w-full flex justify-center space-x-3 items-center">
            <h4>Add Task</h4>
            <Image src={uploadLogo} width={20} height={20} />
        </button>
    </div>
  )
}

export default Settings;