'use client'
import { Leaderboard, LeaderboardRenderArgsType } from '@bandit-network/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
    return (
        <main>
            {/* Display a button to connect to a wallet */}
            <ConnectButton />

            {/*
                Display a leaderboard component.
                Replace {REPLACE_WITH_CAMPAIGN_ID} with the action ID.
            */}
            <Leaderboard
                id={'REPLACE_WITH_CAMPAIGN_ID'}
                render={(args: LeaderboardRenderArgsType) => {
                    const { leaderboardQuery, userQuery } = args

                    /*
                        The leaderboardQuery is of type UseInfiniteQueryResult:
                        1) Each page consists of CampaignLeaderboardResponse type.
                        2) CampaignLeaderboardResponse includes total number of users and points.
                    */
                    console.log(leaderboardQuery)

                    /*
                        The userQuery is of type useQueryResults:
                        1) Once the wallet is connected, this data will be available.
                        2) Data includes user's points (XP) and rank.
                    */
                    console.log(userQuery)

                    return null
                }}
            />
        </main>
    )
}
