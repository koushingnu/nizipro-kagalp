export const About = () => {
    return (
        <section className="relative w-full h-full bg-gray-200 overflow-x-hidden">
            <div>
                <h1 className= "font-mono text-blue-300 text-5xl lg:text-6xl font-black flex justify-center pt-4">ABOUT</h1>
            </div>

            <div className="pt-8"></div>

            <div className="flex justify-center w-full">
                <div className="max-w-3xl w-full px-4">
                    <p className="text-black text-lg lg:text-2xl text-center py-4 font-black">
                    次世代の王道メンズアイドル<br />
                    NiziIROぱれっと(にじいろぱれっと)<br /><br />

                    個性豊かに咲く花のように、<br />
                    あなたと架ける虹のように、<br />
                    みんなを笑顔にできますように。<br />
                    </p>                
                </div>
            </div>

            <div className= "pt-8 lg:pt-12 flex justify-center">
                <a href ="https://form.run/@nizipaleaudition2025"
                className="bg-gradient-to-r from-sky-300 to-green-300 shadow-2xl shadow-sky-500/50 text-white font-black text-2xl lg:text-3xl px-6 py-5 rounded-full text-center w-fit hover:scale-110 transform transition duration-200 hover:opacity-80 transition">
                    ENTRY NOW
                </a>
            </div>

            <div className="pb-10 lg:pb-20"></div>

        </section>
    )
}