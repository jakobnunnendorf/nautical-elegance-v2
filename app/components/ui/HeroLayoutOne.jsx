
const HeroLayoutOne = () => {
    return (
        <div className="h-[680px] bg-[url('/images/hero-one.png')] bg-center w-full bg-no-repeat bg-cover">
            <div className='flex items-center justify-center flex-col h-full text-center'>
                <h3 className="font-lora font-normal text-white text-[76px]">Lürssen <span className="text-hero-highlighed">Solandge</span></h3>
                <p className="font-inter text-[28px] font-normal text-white">Where luxury meets the horizon.</p>
            </div>
        </div>
    )
}

export default HeroLayoutOne