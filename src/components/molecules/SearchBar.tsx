import { useState } from 'react'
import { Search } from 'lucide-react'
import Input from '@/components/atoms/Input'
import { cn } from '@/lib/utils'

type SearchBarProps = {
  className?: string
  placeholder?: string
  delay?: number
  onChange: (query: string) => void
}

export default function SearchBar({
  className,
  placeholder = 'Search for recipes...',
  onChange,
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearchQueryChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery(e.target.value)

    onChange(e.target.value)
  }

  return (
    <div className={cn('relative max-w-2xl mx-auto', className)}>
      <Search className="absolute left-3 top-1/2 w-5 h-5 transform -translate-y-1/2  text-gray-500" />

      <Input
        type="text"
        value={query}
        onChange={handleSearchQueryChange}
        name="search"
        placeholder={placeholder}
        className="w-full px-10"
      />
    </div>
  )
}
