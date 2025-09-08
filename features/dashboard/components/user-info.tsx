'use client'

import LightRays from '@/components/light-rays'
import { Highlighter } from '@/components/highlighter'
import { ShinyButton } from '@/components/shiny-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { useSession } from '@/hooks/use-session'
import { getInitials } from '../utils'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'

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
		<div className='relative flex flex-col items-center justify-center w-full min-h-screen'>
			<div className='absolute inset-0'>
				<LightRays
					raysOrigin='top-center'
					raysColor='#ffffff'
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
				<div className='flex flex-col gap-4 w-full max-w-md px-4'>
					<h1 className='text-3xl sm:text-4xl font-bold text-center'>
						Dashboard
					</h1>
					{isLoading && 'Loading...'}
					{!isLoading && (
						<>
							<p className='text-base sm:text-lg text-gray-600 text-center'>
								Welcome to your
								dashboard{' '}
								<Highlighter
									action='underline'
									color='#FF9800'>
									{name}
								</Highlighter>
								!
							</p>
							<Card className='w-full max-w-md'>
								<CardContent className='flex flex-row gap-4  z-10 bg-transparent backdrop-blur-2xl px-4 sm:px-6'>
									{picture && (
										<Avatar className='size-12 sm:size-16 flex-shrink-0'>
											<AvatarImage
												src={
													picture
												}
											/>
											<AvatarFallback>
												{getInitials(
													name!
												)}
											</AvatarFallback>
										</Avatar>
									)}
									<div className='flex flex-col justify-between min-w-0 flex-1'>
										<span className='text-base sm:text-lg font-medium truncate'>
											{
												name
											}
										</span>
										<a
											className='text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors break-all overflow-hidden'
											href={`mailto:${email}`}
											title={
												email
											}>
											<span className='block truncate'>
												{
													email
												}
											</span>
										</a>
									</div>
								</CardContent>
							</Card>
							<div className='flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-between z-10 w-full'>
								<Link
									href='https://t.me/m1lad001'
									target='_blank'
									rel='noopener noreferrer'>
									<ShinyButton>
										Contact
										Developer
									</ShinyButton>
								</Link>
								<Button
									icon={
										LogOutIcon
									}
									onClick={
										handleLogout
									}>
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
