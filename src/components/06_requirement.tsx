export const Requirement = () => {
    return (
        <section className="relative w-full bg-gray-200 overflow-x-hidden">
            <div>
                <h1 className= "font-mono text-blue-300 text-5xl lg:text-6xl font-black flex justify-center pt-10">REQUIREMENT</h1>
            </div>

            <div className="pt-2"></div>

            <div className="w-full flex justify-center">
                <h2 className="font-noto text-black font-black flex justify-center text-3xl drop-shadow-lg">
                    応募資格
                </h2>
            </div>

            <div className= "flex justify-center w-full pt-8">
                <div className="bg-white border-2 border-black rounded-lg p-9 leading-loose max-w-[90%] lg:max-w-3xl w-full mx-auto">

                    <p className="text-center font-extrabold text-lg lg:text-2xl">応募資格：13歳～29歳までの男性</p>

                    <p className="pt-6 leading-relaxed font-medium text-left text-lg">
                    ※未成年者の方は保護者の同意が必要となります。<br /><br />
                    ※プロダクションに所属していない方。<br />（事務所に所属している方でも事前に事務所の同意を得ている場合は可）<br /><br />
                    ※2026年1月頃から活動準備を行える方。<br /><br />
                    </p>
                    
                    <p className="text-left font-medium text-lg">■審査内容</p>

                    <ul className="pt-6 leading-relaxed font-medium text-left text-lg space-y-3">
                        <li>一次審査：書類選考</li>
                        <li>二次審査：歌唱審査・グループ面談</li>
                        <li>最終審査：グループパフォーマンス審査・個人面談</li>
                    </ul>


                </div>
                
            </div>
            
            <div className="w-full flex justify-center">
                <h2 className="font-mono text-blue-300 font-black text-5xl lg:text-6xl flex justify-center pt-10">
                    SCHEDULE
                </h2>
            </div>

             <div className="pt-2"></div>

            <div className="w-full flex justify-center">
                <h2 className="text-black font-black flex justify-center text-2xl">
                    応募方法/スケジュール
                </h2>
            </div>

            <div className="w-full justify-center pt-8 pb-12">
                <div className="bg-white border-2 border-black p-10 rounded-lg font-xl leading-loose font-medium text-left text-base lg:text-lg max-w-[90%] lg:max-w-3xl mx-auto">
                    ■応募方法<br/>
                    WEBエントリー<br/><br/>

                    ■応募期間<br/>
                    2025年10月15日～2025年11月15日まで<br/>
                    <a
                    href="http://palette-promotion.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline inline-block w-auto"
                    >
                    http://palette-promotion.com/
                    </a><br/><br/>
                    １次審査：書類審査<br/>
                    ⇩<br/>
                    2次審査：歌唱/質疑応答<br/>
                    審査日程：2025年11月28日,29日,30日＠東京/ 12月6日＠大阪<br/>
                    詳細は通過者の方のみにご連絡致します。<br/>
                    ⇩<br/>
                    最終審査：歌唱/ダンスを含めた実技審査/個別面談<br/>
                    審査日程：2025年12月20日,21日@東京 2日間にて実施<br/>
                    詳細は通過者の方のみにご連絡致します。<br/><br/>
                    ※最短でレッスンなど1月からの活動開始となる場合がございます。<br/>
                    ※グループ所属に際しての費用やレッスン費用などは一切必要ありません。<br/>
                    ※デビューに関して2026年春にステージデビューを予定しております。<br/>
                    ※ビクターの選考基準を満たす応募者がいない場合、リリースを延期・中止する場合があります
                </div>
            </div>

            <div className= "pt-12 pb-10 flex justify-center">
                <a href ="https://form.run/@nizipaleaudition2025"
                className="bg-gradient-to-r from-sky-300 to-green-300 shadow-2xl shadow-sky-500/50 text-white font-black text-3xl px-6 py-5 rounded-full text-center w-fit hover:scale-110 transform transition duration-200 hover:opacity-80 transition">
                    ENTRY NOW
                </a>
            </div>

        </section>
    )
}