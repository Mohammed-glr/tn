import type { SVGProps } from "react"

export function TnLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="45" fill="#4CAF50" />
      <path d="M50 15 L70 60 L30 60 Z" fill="#2196F3" transform="rotate(0 50 50)" />
      <text x="50" y="55" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        TN
      </text>
    </svg>
  )
}
