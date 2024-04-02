import React from 'react'

export default function HomePage() {
  return (
    <div
      id="homePage"
      className="pt-16 h-screen 
        flex flex-col justify-center items-center
      "
    >
      <main
        className="w-2/4 h-4/5 flex flex-col items-center 
        justify-center gap-24"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Eu sou o Eziel,</h1>
          <p>
            e atualmente venho me dedicando na área de programação,
            expecificamente em frontEnd - as vezes arrisco no backEnd XD.
          </p>
        </div>
        <p>
          Aqui nesse portfólio você irá conhecer um pouco mais sobre mim, fique
          à vontade. 🚀🚀
        </p>
      </main>
    </div>
  )
}
