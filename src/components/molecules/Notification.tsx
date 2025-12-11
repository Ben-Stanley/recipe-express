import { CircleX, Info, TriangleAlert } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Button from '../atoms/Button'

interface NotificationProps {
  variant?: 'information' | 'warning' | 'error'
  message?: string
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const notificationVariants = cva(
  'flex items-start gap-4 max-w-[750px] p-4 rounded',
  {
    variants: {
      variant: {
        information: 'bg-blue-50 border-blue-200 text-blue-800',
        warning: 'bg-yellow-50 border-yellow-200',
        error: 'bg-red-50 border border-red-200 text-red-700',
      },
    },
    defaultVariants: {
      variant: 'information',
    },
  }
)

function Icon({
  variant,
  className,
}: {
  variant: 'information' | 'warning' | 'error'
  className?: string
}) {
  if (variant === 'information') {
    return <Info className={cn('', className)} />
  } else if (variant === 'error') {
    return <CircleX className={cn('w-6 h-6 text-red-600', className)} />
  } else {
    return <TriangleAlert className={cn('', className)} />
  }
}

export default function Notification({
  variant = 'information',
  message,
  className,
  children,
  onClick,
}: NotificationProps & VariantProps<typeof notificationVariants>) {
  return (
    <div className={cn(notificationVariants({ variant, className }))}>
      <Icon variant={variant} className="shrink-0" />

      <div>
        {!children && <p className="">{message}</p>}

        {!children && variant === 'error' && (
          <Button variant="error" className="mt-4" onClick={onClick}>
            Try again
          </Button>
        )}

        {children && children}
      </div>
    </div>
  )
}
