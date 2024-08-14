
const Background = ({ isColorfulTitleTop, titleTop, descTop, titleBottom, descBottom, image, direction }) => {
    return (
        <div className={`layout-container flex items-center gap-5 max-xl:px-5 ${direction}`}>
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-5">
                    <h4 className="font-lora text-[40px] font-normal text-blue-light max-w-[710px] w-full">
                        <span className="text-primary-one">{isColorfulTitleTop}</span>
                        {titleTop}
                    </h4>
                    <p className="font-inter text-base text-gray-dim leading-loose">{descTop}</p>
                </div>
                <div className="flex flex-col gap-2.5">
                    <h4 className="font-lora text-[28px] font-normal text-primary-one max-w-[710px] w-full">{titleBottom}</h4>
                    {/* add dangerously inner html */}
                    <p dangerouslySetInnerHTML={{ __html: descBottom }} className="font-inter text-base text-gray-dim leading-loose" />
                </div>
            </div>
            <img src={image} alt="background" className="w-full h-full" />
        </div>
    )
}

export default Background