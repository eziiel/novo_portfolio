import React from 'react'

const PoweredBySVGLeft = () => {
  return (
    <svg
      fill="none"
      height="150"
      role="img"
      viewBox="0 0 891 264"
      width="200"
      className="w-full h-auto z-0"
      data-lines="true"
      aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
    >
      {/* Definição de gradientes de cor */}
      <defs>
        <linearGradient id="orange-pulse-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1EA19" stopOpacity="0" />
          <stop offset="1%" stopColor="#D60808" />
          <stop offset="70%" stopColor="#F1EA19" stopOpacity="0" />
          <stop offset="80%" stopColor="#D3CC00" stopOpacity="0" />
          <stop offset="90%" stopColor="#D3CC00" stopOpacity="0" />
          <stop offset="100%" stopColor="#D3CC00" stopOpacity="0" />
          <animate
            attributeName="y1"
            values="0; 1; 0"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="1; 0; 1"
            dur="3s"
            repeatCount="indefinite"
          />
        </linearGradient>

        {/* Defina outros gradientes aqui se necessário */}
      </defs>

      {/* Exemplo de caminho com gradiente de cor */}
      <path
        className="z-0"
        d="M47 20L822 20C824.29 20 826 21.791 826 24L826 1064"
        stroke="url(#orange-pulse-1)"
        strokeWidth="5"
      />
    </svg>
  )
}

export default PoweredBySVGLeft
