'use client'
import { ReferralRenderArgsType, Referral } from '@bandit-network/react'
import { useSearchParams } from 'next/navigation'

export default function CustomReferralPage() {
    const copyCode = async (text: string) => {
        await navigator.clipboard.writeText(
            `${window.origin}?referral_code=${text}`
        )
        alert('Copied!')
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/*
                Display a referral component.
                Replace {REPLACE_WITH_CAMPAIGN_ID} with the campaign ID.
            */}
            <Referral
                id={103}
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

                    return (
                        <div className="flex flex-col">
                            {!!referralCodeQuery?.data?.length && (
                                <div className="mb-2">
                                    {`${window.origin}?referral=${referralCodeQuery?.data[0]?.referralCode}`}{' '}
                                    <button
                                        onClick={() =>
                                            copyCode(
                                                referralCodeQuery?.data[0]
                                                    ?.referralCode
                                            )
                                        }
                                    >
                                        Copy
                                    </button>
                                </div>
                            )}
                            <button
                                className="p-2 rounded border cursor-pointer"
                                onClick={openCreateReferral}
                            >
                                Generate Referral code
                            </button>
                            <input
                                className="mt-2 p-2 rounded border "
                                placeholder="Enter friends code"
                                onClick={openUseReferral}
                            />
                        </div>
                    )
                }}
            />
        </main>
    )
}
