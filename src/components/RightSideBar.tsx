import {BsSearch} from 'react-icons/bs';


const RightSideBar = () => {
  return (
    <section className='sticky top-2 overflow-scroll scrollbar-hide mt-2 w-full flex flex-col items-stretch h-screen px-6 '>
          {/* search bar */}
          <div>
            <div className="relative w-full h-full">
              <label htmlFor="searchBox" className="absolute top-0 left-0 h-full flex items-center justify-center p-4">
              <BsSearch className='h-5 w-5 text-gray-400'/>
              </label>
              <input
                type="text"
                id='searchBox'
                placeholder="Search Twitter"
                className="
                 h-full w-full 
                 rounded-xl 
                 py-4 pl-10 pr-14 
                 outline-none 
                 bg-neutral-900/90 
                 focus:border
                 focus:border-primary
                "
              />
            </div>
          </div>
          {/* trending section */}
          <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-2 px-4">What's happening</h3>
            <div>
              {Array.from({length:5}).map((_, i) => ( 
                <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200">
                  <div className="font-bold text-lg">
                    #trending {i + 1}
                  </div>
                  <div className="text-xs text-neutral-400">35.8k</div>
                </div>
              ))}
            </div>
          </div>

           {/* user suggestions */}
           <div className="flex flex-col rounded-xl bg-neutral-900 my-4">
            <h3 className="font-bold text-xl my-2 px-4">Who to follow</h3>
            <div>
              {Array.from({length:4}).map((_, i) => ( 
                <div key={i} className="hover:bg-white/10 justify-between space-x-3 p-4 last:rounded-b-xl transition duration-200 flex items-center">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-neutral-600 rounded-full flex-none"></div>
                    <div className='flex flex-col'>
                      <div className="font-bold text-white">DanniloAlmeida</div>
                      <div className="text-gray-500 text-sm">@danniloalmeida</div>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </section>
  )
}

export default RightSideBar