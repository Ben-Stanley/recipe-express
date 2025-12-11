import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn('card p-4 rounded-xl bg-card', className)}>
      {props.children}
    </div>
  )
}

export default Card
