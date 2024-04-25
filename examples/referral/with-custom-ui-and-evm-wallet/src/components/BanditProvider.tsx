import {
    ActionType,
    BanditContextProvider,
    Campaign,
    RenderArgsType,
    SupportedChains,
} from '@bandit-network/react'
import { ReactNode } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { config } from '@/app/Provider'

export const BanditProvider = ({ children }: { children: ReactNode }) => {
    const { openConnectModal } = useConnectModal()
    return (
        <BanditContextProvider
            apiKey="REPLACE_WITH_API_KEY"
            cluster="devnet"
            walletSettings={{
                evm: {
                    //@ts-ignore
                    config: config,
                    openConnectModal: () =>
                        openConnectModal && openConnectModal(),
                },
                enabledChains: [SupportedChains.Evm],
            }}
        >
            {children}
        </BanditContextProvider>
    )
}
