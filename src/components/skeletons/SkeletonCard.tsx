import Skeleton from 'react-loading-skeleton'
import { Clock4, Users } from 'lucide-react'

export default function SkeletonCard({ cardItems }: { cardItems: number }) {
  const skeletonItems = Array(cardItems).fill(0)

  return skeletonItems.map((_, index) => (
    <div
      key={index}
      className="border border-border w-full max-w-sm mx-auto rounded-xl hover:shadow-lg transition-shadow overflow-hidden"
    >
      <Skeleton height={200} className="w-full -mt-[5px]" />

      <div className="p-6">
        <Skeleton height={20} width="80%" className="mb-2" />

        <div className="flex items-center gap-2 h-6 mt-5 mb-2">
          <Skeleton height={15} width={60} />
          <Skeleton height={15} width={60} />
        </div>

        <div className="flex items-center gap-4 text-sm text-fore-secondary">
          <div className="flex items-center gap-1">
            <Clock4 className="w-4 h-4" />
            <Skeleton height={15} width={60} />
          </div>

          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <Skeleton height={15} width={60} />
          </div>
        </div>
      </div>
    </div>
  ))
}
