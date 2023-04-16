import Image from "next/image";
import pfp from "../public/pfp.jpeg";

import user from "../public/profile/user.svg";
import password from "../public/profile/password.svg";
import phone from "../public/profile/phone.svg";
import college from "../public/profile/college.svg";
import mail from "../public/profile/mail.svg";

import Link from "next/link";

const profile = () => {
  return (
    <div className="flex flex-col items-center font-hindRegular">
        <div className="h-[20vh] w-screen bg-[#5248B5] flex items-center justify-center relative">
            <Image src={pfp} width={200} height={200} className="rounded-full absolute top-1/2 outline-[2rem] outline outline-white"/>
        </div>
        <div className="flex flex-col mt-48 w-[25rem] items-center space-y-8">
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={college} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">College</label>
                    <input className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={mail} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Email</label>
                    <input disabled={true} value="prananshs.dd22.ph@nitp.ac.in" className="h-full border-b-2 border-black text-gray-600 focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={user} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Username</label>
                    <input className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={password} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Password</label>
                    <input className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <div className="flex space-x-5 w-full">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={phone} width={30} height={30}/>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-sm text-[#8775f1] font-hindLight">Phone number</label>
                    <input type="tel" className="h-full border-b-2 border-black focus:border-[#8775f1] focus:outline-none transition-all duration-300" />
                </div>
            </div>
            <button className="button bg-[#8371f0] w-full my-2 [box-shadow:0_5px_0_0_#3319d1,0_10px_0_0_#3319d122] border-[#8371f0]/80 flex justify-center items-center">Save</button>
        </div>
    </div>
  )
}

export default profile;