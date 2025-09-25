export const About = () => {
    return (
        <section className="relative w-full h-full bg-gray-200">
            <div>
                <h1 className= "text-blue-300 text-6xl font-black flex justify-center pt-4">ABOUT</h1>
            </div>

            <div className="pt-8"></div>

            <div className= "flex justify-center w-full ">
                <p className= "text-black text-lg text-left py-4 font-extrabold">
                    「NiziIROぱれっと」が新メンバー募集のために全国オーディションを開催‼<br/>
                    NiziIROぱれっと(通称：にじぱれ)は2022年8月12日ステージデビュー<br/>
                    2025年にビクターエンタテインメントよりメジャーデビューが決定し、2024年3月にはKANSAI COLLECTION 2024S/S、9月には代々木野外音楽堂でワンマンを完遂し、<br/>
                    2025年8月には都内最大級のLIVEハウス豊洲PITでのワンマンライブも開催！<br/><br/>
                    NiziIROぱれっとの新メンバーとして一緒に頑張ってくれる仲間を全国から募集します！<br/><br/>
                    ステージ経験は問わず、アイドル未経験の方や、もう一度アイドルとして輝きたい方も、この機会にぜひご応募お待ちしております！<br/>
                </p>
            </div>

            <div className= "pt-12 flex justify-center">
                <a href ="https://form.run/@nizipaleaudition2025"
                className="bg-gradient-to-r from-sky-300 to-green-300 text-white font-black text-3xl px-6 py-5 rounded-full text-center w-fit hover:scale-110 transform transition duration-200 hover:opacity-80 transition"
                style={{ animation: "breathe 1s ease-in-out infinite" }}>
                    ENTRY NOW
                </a>
            </div>

            <div className="pt-20"></div>

        </section>
    )
}