import { ChefHat } from 'lucide-react'

type LogoProps = {
  onClick?: () => void
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={onClick}
      data-testid="logo"
    >
      <div className="bg-primary rounded-lg p-2">
        <ChefHat className="w-6 h-6 text-white" />
      </div>

      <div className="space-x-1 font-medium">
        <span>Recipe</span>
        <span className="text-primary">Express</span>
      </div>
    </div>
  )
}
