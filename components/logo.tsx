import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={cn("h-8 w-8", className)}>
      <circle cx="50" cy="50" r="45" fill="#10b981" />
      <path d="M50 20 L70 60 L30 60 Z" fill="#3b82f6" transform="rotate(180 50 50)" />
      <text x="50" y="55" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        TN
      </text>
    </svg>
  )
}
