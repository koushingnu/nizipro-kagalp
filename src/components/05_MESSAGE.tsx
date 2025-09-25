"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';

export const Message = () => {
    return (
        <section className="relative w-full bg-white">
            <div>
                <h1 className= "text-blue-300 text-6xl font-black flex justify-center pt-10">MESSAGE</h1>
            </div>

            <div className="pt-1"></div>

            <div className="relative w-full justify-center">
                <p className="text-black font-black flex justify-center text-3xl">メンバーからのメッセージ</p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-11/12 mx-auto pt-10 px-35">
                <div className="flex flex-col text-loose items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629823.jpg" className="w-full h-auto rounded-xl " />
                    <p className="text-yellow-300 font-black text-4xl pt-6 drop-shadow-lg">
                        あきと
                    </p>
                        <p className="font-black text-lg pt-6 text-left">
                            イエロー担当のあきとです！<br />
                            僕たちと一緒に夢を追いかける仲間を募集しています！ 音楽で人を笑顔に！アイドルは人を幸せにできる素敵な職業です！ 僕たちと一緒に夢を叶えませんか？ palette promotionは一人一人に寄り添い、それぞれに合ったサポートをしています。入れ替わりが激しいこの業界で3年間も活動できているのは、メンバー含め、沢山の方々が、本気で向き合ってくれているお陰です。<br />
                            経験、未経験は問いません！アイドルという活動に夢を抱ける人を募集しています！一緒に夢を目標として叶えましょう！
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629824.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-green-300 font-black text-4xl pt-6 drop-shadow-lg">
                        けんご
                    </p>
                        <p className="font-black pt-6 text-left text-lg">
                            みどり担当のけんごです！<br />
                            NiziIROぱれっとに入って色々な夢や目標一緒に叶えよう！ アイドルになりたい理由は人それぞれ、どんな理由でもNiziIROぱれっとに入りたい気持ちがあれば僕らはこのグループで君のことを待っています！ 経験者の方はもちろん、未経験で自信がないなって人もいると思いますが、みんな最初は何事も0からのスタートです！<br /><br />

                            僕らと一緒に一歩一歩前に進んで、共に成長して、みんなの描く理想のアイドルに
                            一緒になりましょう！！
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629825.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-red-300 font-black text-4xl pt-6 drop-shadow-lg">
                        だいや
                    </p>
                        <p className="font-black pt-6 text-left text-lg">
                            赤色担当のだいやです！<br />
                            僕たちの所属しているpalette promotionでは僕たち一人一人のアイドルとしての生き方ややりたいことがみんなと一緒になって尊重して活動できるアイドル事務所です！ なので僕自身やりたいことはすぐ話すようにしていて、そのためには何が必要か何を1番大切にするべきかなどしっかりと深掘りして話し合って夢に向かって一緒に考えてくれます！ <br/>僕自身アイドルはこのグループが初めての初心者でスタートしましたが本気でこのグループこの事務所で1番を取れると思い活動してます！なので実力より気持ち！やる気ある人が最高の仲間になれると思っております！<br /> 一緒に夢掴みにいきましょう！
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629826.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-sky-300 font-black text-4xl pt-6 drop-shadow-lg">
                        なぎさ
                    </p>
                        <p className="font-black pt-6 text-left text-lg">
                            水色担当のなぎさです！<br />
                            僕にとってNiziIROぱれっとは、夢を叶えることができるグループだと思ってます。子供の時から今のSTARTO ENTERTAINMENTがすごく好きで憧れを持っていましたが、いろんなことを理由にして、歳を重ねるごとに夢を諦めていました。でもこのグループに出会ってから、まだ夢を見てもいいんだと、もしかしたら叶えられるかもしれないと思っています。TOKYO DOME CITY HALLや、NHKホール、横浜アリーナなどの大きいステージに立てるんじゃないかなって本気で思っています。そう思わせてくれるメンバー、運営の方、なによりファンの方達がついています。今後の人生を僕たちに賭けて、一緒に夢を叶えたいという方はぜひ応募お待ちしております。<br />
                            僕も同じ熱量、それ以上の気持ちで
                            応えたいと思います！
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629827.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-pink-300 font-black text-4xl pt-6 drop-shadow-lg">
                        ましろ
                    </p>
                        <p className="font-black pt-6 text-left text-lg">
                            ピンク担当のましろです！<br />
                            まずは数あるグループがある中から、このNiziIROぱれっとを見つけていただきありがとうございます！僕は20歳の時にアイドルを始めました。最初は歌もダンスも未経験でしたが、日頃のレッスンや、ダンスの先生からの指導、メンバーからの強いサポートのおかげで、上達することができました。どんなに自分に強みがなくても、うちの事務所は全面的なサポートをしてくれます。 何よりも1番大切なことですが、あとは自身の熱量次第で大きく飛躍できると思います。 アイドルやってみたいな、他のグループに所属してたけどもっと熱量あるところでやりたい！上を目指したい！って強い気持ちがある方の勇気あるご応募お待ちしてます。
                        </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src= "/虹プロ画像/虹プロ画像/メッセージ/S__16629828.jpg" className="w-full h-auto rounded-xl" />
                    <p className="text-orange-300 font-black text-4xl pt-6 drop-shadow-lg">
                        ゆいと
                    </p>
                        <p className="font-black pt-6 text-left text-lg">
                            オレンジ担当のゆいとです！<br />
                            僕はアイドルを始めたのがこの事務所が初めてで、オーディションに合格してアイドルを初めて1年が経過しました。palette promotionは「自分のなりたいアイドルになれる」ところです！！メンバーがいろんなこと教えてくれたり、スタッフの方々が必要なことを的確にアドバイスをくれたり、相談事は丁寧な返答をくれたりと手厚いサポートをしてくれます！そして日々成長でき、自分の理想に少しずつ近づけています！また今年の夏には豊洲PITというとても大きな会場でライブできたり、去年も今年もツアーで地元福岡でライブでき、大きな夢も叶う場所でもあります！！<br />
                            「アイドルになりたい」と思う方、一緒にアイドルしましょう！応募お待ちしてます！！
                        </p>
                </div>

            </div>

            <div className="max-w-5xl mx-auto pt-20">
                <Swiper
                    modules={[Navigation,Pagination,Autoplay]}
                    navigation
                    slidesPerView={3}
                    spaceBetween={0}
                    className="w-full"
                    loop={true}
                    pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    }}
                    autoplay={{
                    delay: 2500,     
                    disableOnInteraction: false, 
                    }}
>
                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629829.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629830.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">   
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629831.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629833.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                     <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629834.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full aspect-video">
                            <img 
                            src="/虹プロ画像/虹プロ画像/メッセージ下部/S__16629835.jpg"
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="swiper-pagination mt-4"></div>
                
            </div>
            
            <div className="pt-10"></div>
        </section>
    )
}