import { GridPattern } from '@/components/grid-pattern'
import { cn } from '@/lib/utils'

import LoginForm from '../../features/login/components/login-form'

export default function LoginPage() {
  return (
    <div className="bg-muted relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 md:p-10">
      <GridPattern
        width={60}
        height={60}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent)]',
          'inset-x-0 inset-y-[-50%] h-[200%] skew-y-12',
        )}
      />
      <div className="z-10 w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}
