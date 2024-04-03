import CardProject from '@/components/card-project'
import React from 'react'

export default function Projects() {
  return (
    <div
      id="projects"
      className=" pt-16 h-screen flex flex-col
      justify-center items-center   
    "
    >
      <main
        className="w-2/4 h-4/5 flex flex-col 
        justify-center items-center gap-32
      "
      >
        <h1>Alguns de meus projetos</h1>
        <div className="flex gap-4">
          <CardProject
            className="hover:scale-110 bg-gitblog bg-center"
            text="coffee"
          />
          <CardProject
            className="hover:scale-110 bg-gitblog bg-center"
            text="halloween"
          />
          <CardProject
            className="hover:scale-110 bg-gitblog bg-center"
            text="gitBlog "
          />
        </div>
      </main>
    </div>
  )
}
