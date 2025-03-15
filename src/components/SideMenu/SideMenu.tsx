import { CiMemoPad } from "react-icons/ci";
import NavList from "./NavList/NavList";

const SideMenu = () => {
  return (
    <div className='w-1/6 bg-sky-800 text-white'>
      <div className='flex mt-5 ml-5 w-full'>
        <CiMemoPad size={30}/>
        <p className='text-2xl'>Output Form</p>
      </div>
      <NavList />
    </div>
  )
}

export default SideMenu