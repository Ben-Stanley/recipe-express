import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, name, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      className={cn(
        'px-4 py-3.5 rounded-md bg-input focus:border-primary active:border-primary text-sm',
        className
      )}
      {...props}
    />
  )
}

export default Input
