import LeftSideBar from "@/components/LeftSideBar";
import MainContent from "@/components/MainContent";
import RightSideBar from "@/components/RightSideBar";



export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] h-full w-full flex relative ">
        <LeftSideBar/>
        <MainContent/>  
        <RightSideBar/>
      </div>
    </div>
  )
}
