import Image from "next/image";
import locationLogo from "../public/location.svg";
import homeLogo from "../public/home.svg";
import dropDownLogo from "../public/dropDown.svg";
import arrowRightLogo from "../public/arrow-right.svg";
import pfp from "../public/pfp.jpeg";
import logo from "../public/logo.svg";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showGroups, setShowGroups] = useState(false);
  const [showClassrooms, setShowClassrooms] = useState(false);
  const [navClose, setNavClose] = useState(false);
  const [username, setUserName] = useState("Username");
  return (
    <div className={`${navClose ? 'w-[5.5vw]' : 'w-[15vw]'} flex h-screen bg-primary px-5 py-4 flex-col relative transition-all duration-500`}>
        <div className="flex mb-16 space-x-3">
            <Image src={pfp} width={60} height={60} alt="pfp" className="rounded-full"/>
            <div className={`flex flex-col justify-center ${navClose ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                <h3 className="font-monteserrat font-semibold text-[#21118e]">{username}</h3>
                <Link href="/profile" className="font-hindRegular text-xs text-[#8271ee]">Edit Profile</Link>
            </div>
        </div>
        <button className={`button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 flex justify-center ${!navClose && 'space-x-3'} items-center`}>
            <h4 className={`${navClose ? 'w-0' : 'w-max'} overflow-hidden`}>Home</h4>
            <Image src={homeLogo} width={20} height={20} />
        </button>
        <button onClick={() => setShowGroups(!showGroups)} className={`button bg-[#9587f2] my-2 [box-shadow:0_5px_0_0_#8371f0,0_10px_0_0_#3319d122] border-[#9587f2]/80 flex justify-center space-x-3 ${navClose ? 'opacity-0' : 'opacity-100'} items-center origin-left transition-all duration-300`}>
            <h4>Groups</h4>
            <Image src={dropDownLogo} width={15} height={15} className={`${showGroups ? 'rotate-180' : 'rotate-0'}  transition-all duration-300`}/>
        </button>
        <button onClick={() => setShowClassrooms(!showClassrooms)} className={`button bg-[#9587f2] my-2 [box-shadow:0_5px_0_0_#8371f0,0_10px_0_0_#3319d122] border-[#9587f2]/80 flex justify-center space-x-3 items-center ${navClose ? 'opacity-0' : 'opacity-100'} origin-left transition-all duration-300`} >
            <h4>Classrooms</h4>
            <Image src={dropDownLogo} width={15} height={15} className={`${showClassrooms ? 'rotate-180' : 'rotate-0'}  transition-all duration-300`}/>
        </button>
        <div className={`h-0 w-full outline outline-[#dad5fa] absolute left-0 ${navClose ? 'bottom-36' : 'bottom-20'}`}/>
        <div className={`${navClose ? 'flex-col space-y-3' : 'flex-row space-y-0'} flex mt-auto justify-between`}>
            <button className={`button bg-[#8371f0] [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 ${navClose ? 'w-full rounded-full' : ' w-[47%]'} flex justify-center`}>
                <Image src={locationLogo} width={20} height={20}/>
            </button>
            <button onClick={() => setNavClose(!navClose)} className={`flex items-center h-12 justify-center border-2 ${navClose ? 'w-full rounded-full' : ' w-[47%] rounded-lg'} border-white`}>
                <Image src={arrowRightLogo} width={25} height={25} className={`${!navClose ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar;