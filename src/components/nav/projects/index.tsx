'use client'

import CardProject from '@/components/card-project'
import { useContextFormat } from '@/components/context/project-guide'
import React from 'react'

export default function Projects() {
  const { focused } = useContextFormat()

  return (
    <div
      id="projects"
      className="pt-16 h-screen flex flex-col 
      justify-center items-center
    "
    >
      <h1>Alguns de meus projetos</h1>
      <main
        className="w-2/4 h-4/5 flex flex-col
        justify-center items-center gap-32
        "
      >
        <div className="w-full h-68 relative pt-32 ">
          <CardProject
            id={focused[0]}
            className="hover:scale-110 bg-coffee-logo bg-center z-10 duration-300
            "
            text="coffee"
          />
          <CardProject
            id={focused[1]}
            className="hover:scale-110 bg-hallo-logo bg-center z-10 duration-300
            "
            text="halloween"
          />
          <CardProject
            id={focused[2]}
            className="hover:scale-110 bg-blog-logo bg-center z-10 duration-300
            "
            text="gitBlog "
          />
        </div>
      </main>
      {/* <SvgComponent />q */}
    </div>
  )
}
