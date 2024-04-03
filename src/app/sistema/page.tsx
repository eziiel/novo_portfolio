'use client'

/* eslint-disable react/no-unknown-property */
// Componente React em Next.js
export default function Home() {
  return (
    <div className="circuit-board">
      <svg viewBox="0 0 200 200">
        {/* Aqui você desenharia as linhas do circuito com elementos <path> */}
        <path
          // d="M10 45 L85 45, M10 60, L35 85"
          d="M50 80 L50 45 L88 45"
          stroke="red"
          strokeWidth="0.1"
          color="red"
          className="bg-red-600"
        />
        {/* ...outras linhas */}
      </svg>
      <div className="chip">Powered By</div>
      <style jsx>{`
        .circuit-board {
          position: relative;
          background: black;
          width: 100%;
          height: 400px; // Ajuste conforme necessário
        }
        .chip {
          position: absolute;
          top: 50%; // Centralizar no container
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          // Aqui você poderia adicionar estilos para o seu chip
        }
        // Adicione suas animações e outros estilos aqui
      `}</style>
    </div>
  )
}
