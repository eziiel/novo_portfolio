// import SvgAboutTop from '@/components/svg-about/top'
import PoweredBySVGLeft from '@/utils/svg/left'
import PoweredBySVGRight from '@/utils/svg/right'
import React from 'react'

export default function About() {
  return (
    <div
      id="about"
      className="pt-16 h-screen flex items-center
      justify-center 
    "
    >
      <main
        className="w-2/4 h-full flex flex-col justify-center
        items-center gap-16
      "
      >
        <p className="text-center">
          Comecei estudando prgramação de forma autodidata, depois com um curso
          introdutório de JavaScript, aprofundei mais com os cursos da Origamid,
          desde então venho estudando por meio de documentações, livros e
          pesquisa. Atualmente curso Análise e desenvolvimento de sistemas e
          também estudando pela Rocketseat.
        </p>

        <div className="flex items-center justify-center w-full">
          <PoweredBySVGLeft />
          {/* <SvgAboutTop /> */}
          <h1 className="z-40 p-8 font-bold bg-white">Sobre mim</h1>
          {/* <SvgAboutBottom /> */}
          <PoweredBySVGRight />
        </div>

        <p className="text-center">
          Como comecei agora realizar projetos com programação na empresa que
          trabalho, mas por algum tempo me em sites como FrontEnd-Mentor,
          dribbble para melhorar algorítimos e lógica de programação prático em
          sites como HackerRank, FreeCodeCamp, CodeWars.
        </p>
      </main>
    </div>
  )
}
