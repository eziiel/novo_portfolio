import React from 'react'

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="pt-16 h-screen flex
      flex-col justify-center items-center
    "
    >
      <main
        className="w-2/4 h-4/5  flex flex-col 
          justify-center items-center gap-32"
      >
        <div className="flex flex-col gap-2">
          <p>e-mail para contato:</p>
          <p className="text-2xl">eziielp10@hotmail.com</p>
        </div>
        <footer className="">Portfólio feito por Eziel Pereira!</footer>
      </main>
    </div>
  )
}
