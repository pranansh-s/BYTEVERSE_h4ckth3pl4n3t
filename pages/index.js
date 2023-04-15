import Planner from "@/components/Planner";
import Settings from "@/components/Settings";
import Navbar from "@/components/Navbar";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div className='flex items-center justify-end h-screen'>
        <Navbar/>
        <Planner/>
        <Settings/>
      </div>
    </Provider>
  )
}