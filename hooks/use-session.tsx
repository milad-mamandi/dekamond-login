import { useState, useEffect } from 'react'

export interface Session {
	name: string
	email: string
	picture: string
}

export function useSession() {
	const [session, setSession] = useState<Session | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getSession = () => {
			if (typeof window !== 'undefined') {
				const session = localStorage.getItem('user')
				return session ? JSON.parse(session) : null
			}
			return null
		}

		setSession(getSession())
		setIsLoading(false)
	}, [])

	const saveSession = (user: {
		name: string
		email: string
		picture: string
	}) => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('user', JSON.stringify(user))
		}
		setSession(user)
	}

	const clearSession = () => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('user')
		}
		setSession(null)
	}

	return { session, saveSession, clearSession, isLoading }
}
