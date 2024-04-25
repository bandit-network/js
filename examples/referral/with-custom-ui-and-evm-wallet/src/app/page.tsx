'use client'
import { Referral, ReferralRenderArgsType } from '@bandit-network/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
    return (
        <main>
            {/* Display a button to connect to a wallet */}
            <ConnectButton />

            {/*
                Display a referral component.
                Replace {REPLACE_WITH_ACTION_ID} with the action ID.
            */}
            <Referral
                id={'REPLACE_WITH_ACTION_ID'}
                render={(args: ReferralRenderArgsType) => {
                    const {
                        referralCodeQuery,
                        referralStatsQuery,
                        openUseReferral,
                        openCreateReferral,
                    } = args

                    /*
                        The referralCodeQuery is of type UseQueryResult<UserInviteCodes, Error>:
                        1) Data consist of available referral codes.
                    */
                    console.log(referralCodeQuery)

                    /*
                        The referralStatsQuery is of type UseQueryResult<ReferralStats, Error>:
                        1) Referral stats consist of analytics of user.
                    */
                    console.log(referralStatsQuery)

                    /*
                        The openUseReferral is function to open a modal where user can enter friend's referral code
                    */
                    console.log(openUseReferral)

                    /*
                        The openCreateReferral is function to open a modal where user can generate referral code
                    */
                    console.log(openCreateReferral)

                    return null
                }}
            />
        </main>
    )
}
