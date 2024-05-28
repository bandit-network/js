'use client'
import Link from 'next/link'
import { Referral } from '@bandit-network/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
    const [showReferral, setShowReferral] = useState(false)
    const searchParams = useSearchParams()

    const referralCode = searchParams.get('referral_code')

    useEffect(() => {
        if (referralCode) {
            setShowReferral(true)
        }
    }, [referralCode])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex">
                <Link href="/referral">
                    Click here to go to referral page , copy link and paste it
                    in URL
                </Link>

                {showReferral && (
                    <Referral
                        id={103}
                        displayMode="modal"
                        isOpen={true}
                        onClose={() => setShowReferral(false)}
                        displayStats={false}
                        displayCodeGeneration={false}
                    />
                )}
            </div>
        </main>
    )
}
