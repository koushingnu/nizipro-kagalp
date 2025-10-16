export const Top = () => {
    return (
        <section className="relative w-full h-full bg-white">
            <div className="w-40 lg:w-88 h-auto lg:pt-5 lg:px-3">
                <img 
                  src="/虹プロ画像/虹プロ画像/ヘッダー/mocfizoki0320.jpg"/>
            </div>

            <div className="lg:pt-4"></div>

                <div className="flex w-full justify-center lg:pb-8 lg:pt-10 lg:pb-10">
                    <div className="w-full justify-center lg:px-4 lg:px-12 lg:max-w-[1200px] aspect-video">
                        <iframe className="w-full h-full lg:rounded-xl" 
                                src="https://www.youtube.com/embed/PDm5pu436p0?autoplay=1&mute=1&loop=1&playlist=PDm5pu436p0&si=XmVCeoWmCCCTewZn"
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen></iframe>
                    </div>
                </div>
        </section>
    )
}