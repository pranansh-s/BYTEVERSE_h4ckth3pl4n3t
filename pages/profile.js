import Image from "next/image";
import pfp from "../public/pfp.jpeg";

import user from "../public/profile/user.svg";
import phone from "../public/profile/phone.svg";
import college from "../public/profile/college.svg";
import mail from "../public/profile/mail.svg";
import arrowLogo from "../public/arrow-right.svg";
import { signOutHandle } from "./login";
import { useSelector } from "react-redux";
import useAuth from "@/utils/useAuth";

const Profile = () => {
  const userData = useSelector((state) => state.user.userData)[0];

  return (
    <div className="flex flex-col items-center font-hindRegular">
        <Image src={arrowLogo} width={50} height={50} className="absolute left-10 top-10 z-10 rotate-180 cursor-pointer p-1" onClick={() => window.location.href = '/'}/>
        <div className="h-[20vh] w-screen bg-[#5248B5] flex items-center justify-center relative">
            <Image alt="" src={pfp} width={200} height={200} className="rounded-full absolute top-1/2 outline-[2rem] outline outline-white"/>
        </div>
        <div className="flex flex-col mt-48 w-[25rem] items-center space-y-8">
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image alt="" src={college} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">College</label>
                    <input defaultValue={userData ? userData.college : ""} className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image alt="" src={mail} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Email</label>
                    <input disabled={true} defaultValue={userData ? userData.email : ""} className="h-full border-b-2 border-black text-gray-500 focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image alt="" src={user} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Username</label>
                    <input defaultValue={userData ? userData.name : ""} className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image alt="" src={phone} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Phone number</label>
                    <input defaultValue={userData ? userData.number : ""} type="tel" className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-2 w-full">
                <button className="button bg-[#8371f0] w-full my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 flex justify-center items-center">Save</button>
                <button onClick={signOutHandle} className="button bg-[#ff3838] w-full my-2 [box-shadow:0_5px_0_0_#a12424,0_10px_0_0_#a1242422] border-[#ff3838]/80 flex justify-center items-center">Sign Out</button>
            </div>
        </div>
    </div>
  )
}

export default Profile;