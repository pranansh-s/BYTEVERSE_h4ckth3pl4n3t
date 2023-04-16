import Planner from "@/components/Planner";
import Settings from "@/components/Settings";
import Navbar from "@/components/Navbar";

import { useDispatch } from "react-redux";
import useAuth from "@/utils/useAuth";
import { useEffect } from "react";

import getSpecificDoc from "../utils/getDocument";
import { userSet } from "@/redux/features/userSlice";
import { useRouter } from "next/router";

export default function Home() {
  const userData = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if(userData.user) {
        let firedata = await getSpecificDoc(userData.user);
        dispatch(userSet(firedata));
      }
    })();
  }, [userData]);
  return (
      <div className='flex items-center justify-end h-screen'>
        <Navbar/>
        <Planner/>
        <Settings/>
      </div>
  )
}