export const Profile = () => {
    return (
        <section className="relative w-full bg-white">
            <div>
                <h1 className= "text-blue-300 text-6xl font-black flex justify-center pt-4">PROFIEL</h1>
            </div>

            <div className="pt-1"></div>

            <div className="relative w-full justify-center">
                <p className="text-black font-black flex justify-center text-3xl">グループ紹介</p>
            </div>


            <div className= "flex justify-center w-full pt-12">
                <img 
                  src= "/虹プロ画像/虹プロ画像/プロフィール/S__16629822.jpg"
                  className= "flex justify-center w-250 h-auto " />
            </div>

            <div className= "pt-12 flex justify-center">
                 <img 
                  src= "/虹プロ画像/虹プロ画像/プロフィール/スクリーンショット (50).png"
                  className= "flex justify-center w-100 h-auto " />
            </div>

            <div className="relative w-full flex justify-center">
                <p className="text-black text-lg text-left py-4 mx-auto font-extrabold leading-loose">
                    2022年8月品川インターシティホールにてステージデビュー<br />
                    2024年2月1st ワンマンLIVE@Spotify O-WESTにて実施<br />
                    2024年3月KANSAI COLLECTION 2024S/Sに出演<br />
                    2024年9月2nd ワンマンLIVE@代々木公園野外音楽堂にて実施<br />
                    2025年8月12日には都内最大級のLIVEハウス豊洲PITにて3rdワンマンLIVEを開催<span className="text-red-500">!!</span><br />
                    2025年10月ビクターエンタテインメントよりメジャーデビュー決定<span className="text-red-500">‼</span><br />
                    次世代王道メンズアイドルグループとしてアイドルシーンで活躍
                </p>
            </div>
            
            <div className="pt-10"></div>
        </section>
    )
}