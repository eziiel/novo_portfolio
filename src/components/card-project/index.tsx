'use client'

import React from 'react'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { twMerge } from 'tailwind-merge'
import { useContextFormat } from '../context/project-guide'

interface PropsCardProjects extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  id: string
}

export default function CardProject({
  className,
  text,
  id,
}: PropsCardProjects) {
  const { handleType } = useContextFormat()

  return (
    <div
      //
      onClick={() => handleType(id)}
      data-first-card={id === '1'}
      data-focus-card={id === '2'}
      data-last-card={id === '3'}
      className={twMerge(
        'absolute bottom-0 w-[200px] h-[250px] rounded-lg border-2 border-withe z-10 data-[focus-card=true]:scale-125 data-[focus-card=true]:hover:scale-150 data-[focus-card=true]:z-40 data-[focus-card=true]:left-1/3 data-[first-card=true]:left-0 data-[last-card=true]:left-2/3',
        className,
      )}
    >
      <footer className="p-2 absolute bottom-0 left-0 flex items-center justify-between flex-1 w-full">
        <div
          className="w-full flex justify-between bg-white 
        rounded-md p-2"
        >
          <span className="text-sm">{text}</span>
          <button className="flex items-center gap-2">
            <span className="text-sm">ver mais</span>
            <DoubleArrowRightIcon color="red" />
          </button>
        </div>
      </footer>
    </div>
  )
}
