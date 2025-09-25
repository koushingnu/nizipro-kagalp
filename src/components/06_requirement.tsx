export const Requirement = () => {
    return (
        <section className="relative w-full bg-gray-200">
            <div>
                <h1 className= "text-blue-300 text-6xl font-black flex justify-center pt-10">REQUIREMENT</h1>
            </div>

            <div className="pt-2"></div>

            <div className="w-full flex justify-center">
                <h2 className="text-black font-black flex justify-center text-3xl drop-shadow-lg">
                    応募資格
                </h2>
            </div>

            <div className= "flex justify-center w-full pt-8">
                <div className="bg-white border-2 border-black p-10 rounded-lg font-xl leading-loose max-w-3xl w-full mx-auto">

                    <p className="text-center font-extrabold text-xl">応募資格：13歳～27歳までの男性</p>

                    <p className="pt-6 leading-relaxed font-medium text-left">
                    ※未成年者の方は保護者の同意が必要となります。<br /><br />
                    ※プロダクションに所属していない方。<br />（事務所に所属している方でも事前に事務所の同意を得ている場合は可）<br /><br />
                    ※2025年6月頃から活動準備を行える方。<br /><br />
                    </p>

                </div>
                
            </div>
            
            <div className="w-full flex justify-center">
                <h2 className="text-blue-300 font-black text-6xl flex justify-center pt-10">
                    RECURUIT INFO
                </h2>
            </div>

             <div className="pt-2"></div>

            <div className="w-full flex justify-center">
                <h2 className="text-black font-black flex justify-center text-3xl">
                    採用情報
                </h2>
            </div>

            <div className="w-full justify-center pt-8 pb-12">
                <div className="bg-white border-2 border-black p-10 rounded-lg font-xl leadind-loose font-medium text-left max-w-3xl mx-auto">
                    応募期間：2025年4月4日〜2025年4月30日まで<br /><br />

                        １次審査：書類審査<br />
                                ⇩<br />
                        2次審査：歌唱/質疑応答<br />
            審査日程：5/10 名古屋、5/11 大阪、5/17,18,19 東京<br /><br />

                詳細は通過者の方のみにご連絡致します<br />

                                ⇩<br />
            最終審査：歌唱/ダンスを含めた実技審査/個別面談<br />
                審査日程：5/31,6/1 東京2日間にて実施<br /><br />

            詳細は通過者の方のみにご連絡致します<br /><br />
            ※最短でレッスンなど6月からの活動開始となる<br />
            場合がございます。<br /><br />
            ※グループ所属に際しての費用やレッスン費用などは
            一切必要ありません。<br /><br />
            ※デビューに関しては2025年8月12日豊洲PITを予定しております。<br />
                </div>
            </div>

            <div className= "pt-12 pb-10 flex justify-center">
                <a href ="https://form.run/@nizipaleaudition2025"
                className="bg-gradient-to-r from-sky-300 to-green-300 text-white font-black text-3xl px-6 py-5 rounded-full text-center w-fit hover:opacity-80 transition animate-pulse"
                style={{ animation: "breathe 1s ease-in-out infinite" }}>
                    ENTRY NOW
                </a>
            </div>

        </section>
    )
}