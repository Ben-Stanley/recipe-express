import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export interface ButtonProps {
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

const buttonVariants = cva(
  'flex items-center justify-center text-sm font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary/80 focus:ring-primary/50',
        secondary:
          'border border-gray-500 bg-secondary text-white hover:bg-secondary-lighter focus:ring-secondary/50',
        outline:
          'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 focus:ring-primary/50',
        ghost:
          'bg-transparent text-foreground hover:text-primary hover:bg-primary/5 focus:ring-primary/50',
        error: 'border border-red-600 text-red-600 bg-white focus:ring-red-600',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1',
        lg: 'px-6 py-4',
      },
      focus: {
        true: 'bg-primary text-white hover:bg-primary/80 hover:text-white focus:ring-primary/50',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

function Button({
  className,
  variant,
  size,
  focus,
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, focus, className }))}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
