import React, { ComponentProps } from 'react'
import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { twMerge } from 'tailwind-merge'

export type Footerprops = ComponentProps<'footer'> & {
  text: string
}

export default function CardProject({ className, text }: Footerprops) {
  return (
    <div
      className={twMerge(
        'w-[200px] h-[250px] bg-blue-600 relative rounded-lg',
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
