import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type Props = {
  variant?: 'default' | 'primary' | 'outline'
  className?: string
  children?: React.ReactNode
}

const tagVariants = cva(
  'inline-block w-fit px-2 py-0.5 rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-input text-foreground',
        primary: 'bg-primary text-white',
        outline: 'border border-border text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export default function Tag({
  variant,
  className,
  children,
}: Props & VariantProps<typeof tagVariants>) {
  return (
    <div className={cn(tagVariants({ variant }), className)}>{children}</div>
  )
}
