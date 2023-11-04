//icons
import { FaRegComment } from 'react-icons/fa';
import {BsDot, BsThreeDots} from 'react-icons/bs';
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai';
import {IoStatsChart, IoShareOutline} from 'react-icons/io5';


const MainContent = () => {
  return (
    <main className="w-[50%] h-full max-w-[600px] min-h-screen flex  flex-col border-l-[0.5px] border-r-[0.5px]  border-gray-600">

          {/* header */}
          <h1 className='text-xl font-bold my-4 p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>
          <div className="flex items-stretch py-4 px-4 space-x-2 border-t-[0.5px] border-b-[0.5px] border-gray-600 relative">

            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>

            <div className="flex flex-col w-full">
         
              <input 
                className="h-full w-full bg-transparent border-gray-600 p-4 outline-none border-none placeholder:text-gray-600 text-2xl"
                type="text" 
                placeholder="what's happening"
              />
            

              <div className='w-full flex justify-between items-center'>
                <div>
                  {/* TODO:action buttons will go here */}
                </div>
                <div className=" w-full max-w-[100px]">
                  <button 
                   className="
                    rounded-full
                    bg-primary 
                    px-4
                    py-2
                    w-full
                    text-lg
                    font-bold 
                    text-center 
                    hover:bg-opacity-70
                    transition
                    duration-200
                   "
                  >Tweet
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* tweets */}
          <div className="flex flex-col">
            {Array.from({length:5}).map((_,i) => (
              <div
                className="border-b-[0.5px] border-gray-600 flex space-x-4 px-6 py-4"
                key={i}
              >
                <div>
                  <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
                </div>

                <div className="flex flex-col">
                  {/* tweet header */}
                  <div className="flex items-center justify-between w-full">
                   <div className="flex items-center space-x-1 w-full">
                      <div className="font-bold">KennedyNvsf</div>
                      <div className="text-gray-400">@kennedynvsf</div>
                      <div className="text-gray-400"><BsDot/></div>
                      <div className="text-gray-400">2 days ago</div>
                    </div>

                    <div>
                      <BsThreeDots/>
                    </div>
                  </div>
                  {/* tweet desc */}
                  <div className="text-white text-base">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ipsum tempora dicta magnam est. 
                    Eos eveniet reprehenderit perferendis? Fuga, quas libero. 
                  </div>
                  {/* tweet media content */}
                  <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2">
                  </div>
                  {/* tweet actions */}
                  <div className='flex items-center justify-start space-x-20 mt-2 w-full'>
                    <div className="rounded-full cursor-pointer p-2 hover:bg-white/20 transition duration-200">
                      <FaRegComment/>
                    </div>
                    <div className="rounded-full cursor-pointer p-2 hover:bg-white/20 transition duration-200">
                      <AiOutlineRetweet/>
                    </div>
                    <div className="rounded-full cursor-pointer p-2 hover:bg-white/20 transition duration-200">
                      <AiOutlineHeart/>
                    </div>
                    <div className="rounded-full cursor-pointer p-2 hover:bg-white/20 transition duration-200">
                      <IoStatsChart/>
                    </div>
                    <div className="rounded-full cursor-pointer p-2 hover:bg-white/20 transition duration-200">
                      <IoShareOutline/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

  )
}

export default MainContent