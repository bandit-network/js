import { BanditContextProvider } from '@bandit-network/pro-kit'
import { ReactNode } from 'react'

export const BanditProvider = ({ children }: { children: ReactNode }) => {
    return (
        <BanditContextProvider apiKey="a1f02d832d8b4d6d82ea450367bbe1f3">
            {children}
        </BanditContextProvider>
    )
}
