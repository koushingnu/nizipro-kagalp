import { FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa";

export const Last = () => {
    return (
        <section className="relative w-full bg-white">
            <div>
                <h1 className= "text-black text-5xl font-black flex justify-center pt-12">注意事項</h1>
            </div>

            <div className="flex w-full pt-12 justify-center">
                <div className="bg-white border-2 border-black p-10 rounded-lg text-lg font-xl leadind-loose font-medium text-left max-w-3xl mx-auto">
                    ・応募者の個人情報は事務局で厳密に管理の上、本オーディションに関わる者以外への開示は一切致しません。<br /><br />
                    ・本オーディションに伴う会場への移動などに伴う交通費・宿泊費などは負担致しかねますので、あらかじめご了承ください。<br /><br />
                    ・審査時の内容などをSNS等で外部に公表することを一切禁じます。<br /><br />
                        <p className="text-center">主催：（株）palette promotion</p>
                </div>
            </div>

            <div className="pt-8"></div>


            <div className="flex w-full space-x-6 justify-center pt-6 pb-14">  
                <a 
                    href="https://www.youtube.com/@niziiro7203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 text-4xl transition-transform transform hover:scale-110">
                    <FaYoutube />
                </a>

                <a 
                    href="https://x.com/Nizi_Pale_info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-600 hover:text-blck-800 text-4xl transition-transform transform hover:scale-110">
                    <FaTwitter />
                </a>

                <a 
                    href="https://www.instagram.com/nizi_pale_info/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-600 hover:text-blck-800 text-4xl transition-transform transform hover:scale-110">
                    <FaInstagram />
                </a>
            </div>
        </section>
    )
}