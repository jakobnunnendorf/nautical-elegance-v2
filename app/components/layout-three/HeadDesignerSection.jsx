
const HeadDesignerSection = () => {
    return (
        <div className={`min-[1211px]:h-[786px] bg-navy-blue-dark max-xl:px-5 text-white flex items-center justify-center min-[1211px]:!mb-[200px]`}>
            <div className="layout-container flex items-center gap-[30px] max-[1210px]:flex-col">
                <img src="/images/head-designer-1.png" alt="background" className="w-full h-auto" />
                <div className="flex flex-col gap-[30px] py-9">
                    <div className="flex flex-col gap-2.5">
                        <h5 className="font-lora text-2xl font-normal ">The Head Designer</h5>
                        <h4 className="font-lora text-[40px] font-normal min-[1211px]:max-w-[546px] w-full">
                            Sophia Bennett - Founder & Chief Designer
                        </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-inter text-base leading-loose">Sophia Bennett is a celebrated yacht interior designer with over a decade of experience in crafting luxurious and functional yacht interiors. With a degree in Interior Design and a background working with top firms, Sophia founded Nautical Elegance Interiors, where she creates bespoke spaces that blend modern elegance with timeless style.
                        </p>
                        <div>
                            <p className="font-inter text-base leading-loose">
                                Her designs are known for their opulence, high-end materials, and meticulous attention to detail, ensuring both comfort and sophistication. Sophia's dedication to excellence and ability to capture her clients' visions have made her a sought-after name in the industry.</p>
                            <p className="font-inter text-base leading-loose">
                                Outside of work, Sophia enjoys sailing, traveling, and exploring new design trends, bringing her love for the sea into every project she undertakes.</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-lora text-[28px] font-normal  max-w-[710px] w-full">Quote</h5>
                        <p className="font-inter leading-loose font-bold text-lg">
                            A yacht should be more than just a vessel; it should be a floating masterpiece that exudes luxury and serenity." - <span className="font-semibold">Sophia Bennett</span>
                        </p>
                    </div>
                </div>
            </div>
        </div >)
}

export default HeadDesignerSection