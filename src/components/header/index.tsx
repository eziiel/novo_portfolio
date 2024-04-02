'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  AvatarIcon,
  HomeIcon,
  PaperPlaneIcon,
  LayersIcon,
} from '@radix-ui/react-icons'

export default function Header() {
  const [flag, setFlag] = React.useState('Home')

  const pathname = usePathname()
  console.log(pathname)

  return (
    <header
      className="w-full fixed left-0 top-0 flex items-center 
    justify-center"
    >
      <nav
        className="w-full p-2 flex items-center justify-center 
       backdrop-blur-sm rounded-b-3xl"
      >
        <ul
          className="w-full flex justify-center items-center
            gap-x-4 rounded-xl "
        >
          <li
            title="Início"
            data-flag={flag === 'Home'}
            className="m-2
            flex justify-center items-center
            w-8 h-8 
            rounded-xl
            data-[flag=true]:bg-white"
          >
            <a onClick={() => setFlag('Home')} className="" href="#homePage">
              <HomeIcon width={15} height={15} />
            </a>
          </li>
          <li
            title="Sobre"
            data-flag={flag === 'about'}
            className="m-2 
            flex justify-center items-center
            w-8 h-8 
            rounded-xl
            data-[flag=true]:bg-white"
          >
            <a onClick={() => setFlag('about')} href="#about">
              <AvatarIcon />
            </a>
          </li>
          <li
            title="Projetos"
            data-flag={flag === 'projects'}
            className="m-2
            flex justify-center items-center
            w-8 h-8  
            rounded-xl
            data-[flag=true]:bg-white"
          >
            <a
              onClick={() => setFlag('projects')}
              className=""
              href="#projects"
            >
              <LayersIcon />
            </a>
          </li>
          <li
            title="Contato"
            data-flag={flag === 'contacts'}
            className="m-2
            flex justify-center items-center
            w-8 h-8 
            rounded-xl 
            data-[flag=true]:bg-white 
            "
          >
            <a
              onClick={() => setFlag('contacts')}
              className=""
              href="#contacts"
            >
              <PaperPlaneIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
