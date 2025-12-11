import { useRouter } from 'next/navigation'
import Button from '@/components/atoms/Button'

export default function Empty({ message }: { message: string }) {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center">
        <p className="mb-6 text-gray-500">{message}</p>

        <Button variant="outline" onClick={() => router.push('/')}>
          Back Home
        </Button>
      </div>
    </div>
  )
}
