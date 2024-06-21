import { Aggregator, BanditContextProvider } from '@bandit-network/pro-kit'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <BanditContextProvider apiKey="REPLACE_WITH_API_KEY">
                <Aggregator />
            </BanditContextProvider>
        </main>
    )
}
