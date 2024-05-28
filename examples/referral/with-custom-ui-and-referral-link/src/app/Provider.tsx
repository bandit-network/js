'use client'

import { BanditContextProvider } from '@bandit-network/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <BanditContextProvider
            apiKey={'a1f02d832d8b4d6d82ea450367bbe1f3'}
            cluster="devnet"
        >
            {children}
        </BanditContextProvider>
    )
}
