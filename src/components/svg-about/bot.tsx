import React from 'react'

const SvgAboutBottom = () => {
  return (
    <div className="w-[100px] h-[100px]">
      <svg
        className="animate-waving-hand-up z-20"
        width="100"
        height="30"
        viewBox="50 50 20 10"
      >
        <defs>
          {/* Definindo o gradiente */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <line
          x1="60.4"
          y1="0"
          x2="60.5"
          y2="100"
          stroke="url(#grad)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}

export default SvgAboutBottom
