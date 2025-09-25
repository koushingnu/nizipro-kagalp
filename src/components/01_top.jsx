export const Top = () => {
    return (
        <section className="relative w-full h-full bg-white">
            <div className="w-88 h-auto pt-5 px-5">
                <img 
                  src="/虹プロ画像/虹プロ画像/ヘッダー.jpg"/>
            </div>

            <div className="pt-8"></div>

                <div className="flex w-full justify-center pt-10 pb-10">
                    <div className="w-full justify-center px-12 max-w-[1200px] aspect-video">
                        <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/t42R7ooPWQc?autoplay=1&mute=1&loop=1&playlist=t42R7ooPWQc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
        </section>
    )
}