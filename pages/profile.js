import Image from "next/image";
import pfp from "../public/pfp.jpeg";

import user from "../public/profile/user.svg";
import password from "../public/profile/password.svg";
import phone from "../public/profile/phone.svg";
import college from "../public/profile/college.svg";
import mail from "../public/profile/mail.svg";

const profile = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="h-[20vh] w-screen bg-blue-500 flex items-center justify-center relative">
            <Image src={pfp} width={200} height={200} className="rounded-full absolute top-1/2 outline-[2rem] outline outline-white"/>
        </div>
        <div className="flex flex-col mt-48 w-max items-center space-y-3">
            <div className="flex">
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={college} width={30} height={30}/>
                </div>
                <div>
                    <input />
                </div>
            </div>
            <div>
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={mail} width={30} height={30}/>
                </div>
            </div>
            <div>
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={user} width={30} height={30}/>
                </div>
                
            </div>
            <div>
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={password} width={30} height={30}/>
                </div>
            </div>
            <div>
                <div className="bg-white shadow-md p-3 rounded-full">
                    <Image src={phone} width={30} height={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default profile;