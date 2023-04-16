import Image from "next/image";
import homeLogo from "../public/home.svg";
import dropDownLogo from "../public/dropDown.svg";
import arrowRightLogo from "../public/arrow-right.svg";
import qrLogo from "../public/qr-code.svg";
import pfp from "../public/pfp.jpeg";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showGroups, setShowGroups] = useState(false);
  const [showClassrooms, setShowClassrooms] = useState(false);
  const [navClose, setNavClose] = useState(false);

  const userData = useSelector((state) => state.user.userData)[0];

  useEffect(() => {
    if(navClose) {
        setShowClassrooms(false);
        setShowGroups(false);
    }
  }, [navClose]);
  return (
    <div className={`${navClose ? 'w-[5.5vw]' : 'w-[15vw]'} flex h-screen bg-primary px-5 py-4 flex-col relative transition-all duration-500`}>
        <div className="flex mb-16 space-x-3">
            <Image src={pfp} width={60} height={60} alt="pfp" className="rounded-full"/>
            <div className={`flex flex-col justify-center ${navClose ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                <h3 className="font-monteserrat font-semibold text-[#21118e] whitespace-nowrap text-ellipsis w-24 overflow-hidden">{userData ? userData.name : "User"}</h3>
                <Link href="/profile" className="font-hindRegular text-xs text-[#8271ee]">Edit Profile</Link>
            </div>
        </div>
        <Link href="/" className={`button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 flex justify-center ${!navClose && 'space-x-3'} items-center`}>
            <h4 className={`${navClose ? 'w-0' : 'w-max'} overflow-hidden`}>Home</h4>
            <Image src={homeLogo} width={20} height={20} alt="" />
        </Link>
        {!navClose && <button onClick={() => setShowGroups(!showGroups)} className="button bg-[#9587f2] my-2 [box-shadow:0_5px_0_0_#8371f0,0_10px_0_0_#3319d122] border-[#9587f2]/80 flex justify-center space-x-3 items-center origin-left transition-all duration-300">
            <h4>Groups</h4>
            <Image src={dropDownLogo} width={15} height={15} alt="" className={`${showGroups ? 'rotate-180' : 'rotate-0'}  transition-all duration-300`}/>
        </button>}
        {!navClose && <button onClick={() => setShowClassrooms(!showClassrooms)} className="button bg-[#9587f2] my-2 [box-shadow:0_5px_0_0_#8371f0,0_10px_0_0_#3319d122] border-[#9587f2]/80 flex justify-center space-x-3 items-center origin-left transition-all duration-300">
            <h4>Classrooms</h4>
            <Image src={dropDownLogo} width={15} height={15} alt="" className={`${showClassrooms ? 'rotate-180' : 'rotate-0'}  transition-all duration-300`}/>
        </button>}
        <Link href="pay-with-qr" className={`button bg-[#8371f0] my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 flex justify-center ${!navClose && 'space-x-3'} items-center`}>
            <h4 className={`${navClose ? 'w-0' : 'w-max'} overflow-hidden`}>Pay</h4>
            <Image src={qrLogo} width={20} height={20} alt="" />
        </Link>
        <div className={`h-0 w-full outline outline-[#dad5fa] absolute left-0 ${navClose ? 'bottom-36' : 'bottom-20'}`}/>
        <button onClick={() => setNavClose(!navClose)} className={`flex items-center h-12 justify-center border-2 ${navClose ? 'rounded-full' : 'rounded-lg'} w-full mt-auto border-white`}>
            <Image src={arrowRightLogo} width={25} height={25} className={`${!navClose ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} alt=""/>
        </button>
    </div>
  )
}

export default Navbar;