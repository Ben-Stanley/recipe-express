'use client'

import { useRouter } from 'next/navigation'
import { Heart } from 'lucide-react'
import Logo from '../../molecules/Logo/Logo'
import Button from '../../atoms/Button/Button'
import { useFavouritesStore } from '@/stores/favourites'

type Props = {
  showHomeButton?: boolean
}

export default function AppHeader({ showHomeButton = false }: Props) {
  const router = useRouter()

  const favourites = useFavouritesStore((state) => state.favourites)

  const handleLogoClick = () => {
    router.push('/')
  }
  return (
    <header className="flex items-center justify-between border-b border-border px-4 sm:px-12 md:px-24 py-6">
      <Logo onClick={handleLogoClick} data-testid="logo" />

      {!showHomeButton ? (
        <Button
          variant="outline"
          size="default"
          onClick={() => router.push('/favourites')}
        >
          <Heart className="w-4 h-4 mr-2 sm:mr-3" />
          Favourites
          {favourites.length > 0 && ` (${favourites.length})`}
        </Button>
      ) : (
        <Button variant="primary" onClick={() => router.push('/')}>
          Back Home
        </Button>
      )}
    </header>
  )
}
