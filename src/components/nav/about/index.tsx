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
        items-center gap-28
      "
      >
        <p className="text-center">
          Comecei estudando prgramação de forma autodidata, depois com um curso
          introdutório de JavaScript, aprofundei mais com os cursos da Origamid,
          desde então venho estudando por meio de documentações, livros e
          pesquisa. Atualmente curso Análise e desenvolvimento de sistemas e
          também estudando pela Rocketseat.
        </p>

        <h1>Sobre mim</h1>

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
