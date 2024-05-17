'use client'
import { BanditContextProvider, CampaignList } from '@bandit-network/pro-kit'
import type { CampaignListRenderArgsType } from '@bandit-network/pro-kit'

export default function Home() {
    return (
        <main className="">
            <BanditContextProvider apiKey="REPLACE_WITH_API_KEY">
                <CampaignList
                    render={({
                        campaignQuery,
                        openApp,
                    }: CampaignListRenderArgsType) => {
                        const { data } = campaignQuery

                        /*
                       The campaignQuery is of type UseInfiniteQueryResult<InfiniteData<Campaign[], unknown>,Error>:
                            1) Data consist of available campaign list.
                        */
                        console.log(campaignQuery)

                        const campaignsData = data?.pages?.map((pg) => pg)
                        const campaigns = campaignsData?.flat()
                        return (
                            <div>
                                {(campaigns || []).map((campaign) => (
                                    <div
                                        key={campaign.id}
                                        onClick={() => openApp(campaign)}
                                    >
                                        {campaign?.profile?.name}
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                />
            </BanditContextProvider>
        </main>
    )
}
