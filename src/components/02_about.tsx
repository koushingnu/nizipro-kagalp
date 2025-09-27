export const About = () => {
    return (
        <section className="relative w-full h-full bg-gray-200">
            <div>
                <h1 className= "text-blue-300 text-6xl font-black flex justify-center pt-4">ABOUT</h1>
            </div>

            <div className="pt-8"></div>

            <div className="flex justify-center w-full">
                <div className="max-w-3xl w-full px-4">
                    <p className="text-black text-lg text-left py-4 font-extrabold">
                    今を翔けるpalette promotionとビクターエンタテインメントの全国共同オーディションを開催!!
                    </p>

                    <h2 className="text-left text-xl text-black leading-tight py-3 font-extrabold">
                    {"[palette promotion]"}
                    </h2>

                    <p className="text-black text-lg text-left py-4 font-extrabold">
                    メジャーデビューシングルオリコン1位獲得！<br />
                    KANSAI COLLECTION出演や豊洲PITでのワンマンライブを完遂など今もっとも勢いのあるメンズアイドルグループNiziIROぱれっとが所属する。
                    </p>

                    <h2 className="text-left text-xl text-black leading-tight py-3 font-extrabold">
                    {"[ビクターエンタテインメント]"}
                    </h2>

                    <p className="text-black text-lg text-left py-4 font-extrabold">
                    再来年100周年を迎える国内、国外のアーティストが抱える日本を代表するメジャーレコードレーベルの一つ。<br /><br />
                    <span className="text-black text-2xl font-black underline block mb-4">palette promotionの仲間として新しい時代を共に駆け抜けるスターを全国から募集します！</span><br />
                    ステージ経験は問わず、アイドル未経験の方もう一度アイドルとして輝きたい方も、この機会にぜひご応募お待ちしております！<br /><br />
                    • 名称：NEXT IDOL PROJECT 2025<br />
                    • 主催：palette promotion × ビクターエンタテインメント
                    </p>
                </div>
            </div>

            <div className= "pt-12 flex justify-center">
                <a href ="https://form.run/@nizipaleaudition2025"
                className="bg-gradient-to-r from-sky-300 to-green-300 shadow-2xl shadow-sky-500/50 text-white font-black text-3xl px-6 py-5 rounded-full text-center w-fit hover:scale-110 transform transition duration-200 hover:opacity-80 transition">
                    ENTRY NOW
                </a>
            </div>

            <div className="pt-20"></div>

        </section>
    )
}