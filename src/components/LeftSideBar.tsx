import React from 'react'
import Link from 'next/link';
import { BiUser, BiSolidHomeCircle } from 'react-icons/bi';
import { BsTwitter, BsEnvelope, BsThreeDots} from 'react-icons/bs';
import { FaHashtag, FaBookmark } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import {PiBookmarkSimple} from 'react-icons/pi';

const NAVIGATION_ITEMS = [
    {
      title: 'Twitter',
      icon: BsTwitter
    },
    {
      title: 'Home',
      icon: BiSolidHomeCircle
    },
    {
      title: 'Explore',
      icon: FaHashtag
    },
    {
      title: 'Notifications',
      icon: FiBell
    },
    {
      title: 'Messages',
      icon: BsEnvelope
    },
    {
      title: 'Bookmarks',
      icon: PiBookmarkSimple
    },
    {
      title: 'Profile',
      icon: BiUser
    },
    
  ];

const LeftSideBar = () => {
  return (
    <section className="sticky top-0 w-[23%] flex flex-col items-stretch h-screen">

      <div className='flex flex-col items-stretch h-full space-y-4 mt-4"'>
        {NAVIGATION_ITEMS.map((item) => (
          <Link 
            href={`/${item.title.toLocaleLowerCase()}`} 
            key={item.title}
            className='hover:bg-white/10 transition duration-200 rounded-3xl text-2xl py-2 px-6 flex justify-start w-fit items-center space-x-2'
          >
            <div>
              <item.icon/>
            </div>
            {item.title !== 'Twitter' && <div> {item.title} </div>}
          </Link>
        ))}

        <button 
          className='
            
            rounded-full
            bg-primary 
            p-4 
            m-4
            text-2xl 
            text-center 
            hover:bg-opacity-70
            transition
            duration-200
          '
        >
          Tweet
        </button>
      </div>

      <button 
        className='
          rounded-full
          flex
          items-center
          justify-between
          space-x-2
          bg-transparent
          p-4 
          text-center 
          hover:bg-white/10
          transition
          duration-200
        '
      >
        <div className='flex items-center space-x-2'>
          <div className='rounded-full bg-slate-400 w-10 h-10'></div>

          <div className='text-left text-sm'>
            <div className='font-semibold'>KennedyNvsf</div>
            <div className=''>@kennedynvsf</div>
          </div>
        </div>

        <div><BsThreeDots/></div>

      </button>

    </section>
  )
}

export default LeftSideBar