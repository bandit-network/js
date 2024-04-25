'use client'
import {
    BanditContextProvider,
    Campaign,
    RenderArgsType,
} from '@bandit-network/react'
import { TaskRow } from '@/components/Task'
import { Segment } from '@/components/Segment'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
    return (
        <main>
            <ConnectButton />
            {/*REPLACE {1} WITH CAMPAIGN ID*/}
            <Campaign
                campaignId={1}
                render={(args: RenderArgsType) => {
                    const { isLoading, campaign, openApp } = args

                    if (isLoading) return <div>Loading...</div>
                    return (
                        <div className="mb-2">
                            {campaign &&
                                campaign?.segments.map(({ id, actions }) => (
                                    <Segment
                                        key={id}
                                        actions={actions}
                                        openApp={openApp}
                                    />
                                ))}
                        </div>
                    )
                }}
            />
        </main>
    )
}
