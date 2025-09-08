'use client'

import { Highlighter } from '@/components/highlighter'
import LightRays from '@/components/light-rays'
import { ShinyButton } from '@/components/shiny-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useSession } from '@/hooks/use-session'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { getInitials } from '../utils'

export default function UserInfo() {
  const router = useRouter()
  const { session, clearSession, isLoading } = useSession()
  const { name, email, picture } = session || {}

  useEffect(() => {
    if (isLoading) return
    if (!session) router.push('/login')
  }, [session, router, isLoading])

  const handleLogout = () => {
    clearSession()
    router.push('/login')
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          saturation={1.2}
          distortion={0.05}
        />
      </div>
      {session && (
        <div className="flex w-full max-w-md flex-col gap-4 px-4">
          <h1 className="text-center text-3xl font-bold sm:text-4xl">
            Dashboard
          </h1>
          {isLoading && 'Loading...'}
          {!isLoading && (
            <>
              <p className="text-center text-base text-gray-600 sm:text-lg">
                Welcome to your dashboard{' '}
                <Highlighter action="underline" color="#FF9800">
                  {name}
                </Highlighter>
                !
              </p>
              <Card className="w-full max-w-md">
                <CardContent className="z-10 flex flex-row gap-4 bg-transparent px-4 backdrop-blur-2xl sm:px-6">
                  {picture && (
                    <Avatar className="size-12 flex-shrink-0 sm:size-16">
                      <AvatarImage src={picture} />
                      <AvatarFallback>{getInitials(name!)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <span className="truncate text-base font-medium sm:text-lg">
                      {name}
                    </span>
                    <a
                      className="text-muted-foreground hover:text-foreground overflow-hidden text-sm break-all transition-colors sm:text-base"
                      href={`mailto:${email}`}
                      title={email}
                    >
                      <span className="block truncate">{email}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
              <div className="z-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                <Link
                  href="https://t.me/m1lad001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton>Contact Developer</ShinyButton>
                </Link>
                <Button icon={LogOutIcon} onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
