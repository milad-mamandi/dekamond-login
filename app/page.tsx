'use client'

import { useSession } from '@/hooks/use-session'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()
	const { session } = useSession()

	useEffect(() => {
		if (session) router.push('/dashboard')
		else router.push('/login')
	}, [session, router])

	return null
}
