import Skeleton from 'react-loading-skeleton'
import Card from '@/components/atoms/Card/Card'

export default function SkeletonDetails() {
  return (
    <>
      <main>
        <div className="relative w-full max-h-96 overflow-hidden rounded-lg">
          <Skeleton height={370} className="object-cover w-full" />
        </div>

        <section className="py-6">
          <h1 className="font-semibold text-xl mb-4">
            <Skeleton height={30} width="60%" />
          </h1>

          <p className="mb-6">
            <Skeleton count={5} />
          </p>

          <Card className="w-full sm:px-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Skeleton height={40} width={40} className="rounded-full" />

              <div className="">
                <div className="text-sm text-fore-secondary">Prep Time</div>

                <div className="font-medium">
                  <Skeleton height={20} width={80} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton height={40} width={40} className="rounded-full" />

              <div className="">
                <div className="text-sm text-fore-secondary">Cook Time</div>

                <div className="font-medium">
                  <Skeleton height={20} width={80} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton height={40} width={40} className="rounded-full" />

              <div className="">
                <div className="text-sm text-fore-secondary">Servings</div>

                <div className="font-medium">
                  <Skeleton height={20} width={80} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton height={40} width={40} className="rounded-full" />

              <div className="">
                <div className="text-sm text-fore-secondary">Total Time</div>

                <div className="font-medium">
                  <Skeleton height={20} width={80} />
                </div>
              </div>
            </div>
          </Card>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-semibold text-lg mb-4">Ingredients</h2>

              <ul className="list-disc list-inside space-y-2">
                {Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <Skeleton height={15} width="80%" />
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-4">Instructions</h2>

              <ol className="list-decimal list-inside space-y-4">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index}>
                      <Skeleton height={15} width="90%" />
                    </li>
                  ))}
              </ol>
            </div>
          </section>
        </section>
      </main>

      <footer className="py-6 border-t border-border mt-4">
        <h3 className="mb-3 font-medium">Tags</h3>

        <div className="flex flex-wrap gap-2">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                height={30}
                width={80}
                className="rounded-full"
              />
            ))}
        </div>
      </footer>
    </>
  )
}
