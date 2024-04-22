// import SvgAboutTop from '@/components/svg-about/top'
import PoweredBySVGLeft from '@/utils/svg/left'
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

        <div className="flex items-top justify-center w-full">
          <div className="rotate-180">
            <PoweredBySVGLeft />
          </div>
          {/* <SvgAboutTop /> */}
          <h1 className="min-w-[150px] mt-4 p-8 font-bold bg-white">
            Sobre mim
          </h1>
          {/* <SvgAboutBottom /> */}
          <div className="rotate-360">
            <PoweredBySVGLeft />
          </div>
        </div>

        <p className="text-center">
          Como comecei agora realizar projetos com programação na empresa que
          trabalho, mas por algum tempo me dediquei em sites como
          FrontEnd-Mentor, dribbble para aprimorar meus conhecimeos com UX/UI.
          algorítimos e lógica de programação prático em sites como HackerRank,
          FreeCodeCamp, CodeWars.
        </p>
      </main>
    </div>
  )
}
