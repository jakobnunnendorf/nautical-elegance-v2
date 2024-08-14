
const ImageWithText = () => {
    return (
        <div className={`layout-container flex items-center gap-12 flex-col max-xl:px-5`}>
            <img src='/images/l3-intro.png' alt="background" className="w-full h-auto" />
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-5">
                    <h4 className="font-lora text-[40px] font-normal text-blue-light">
                        Award Winning Yacht Interior Design
                    </h4>
                    <p className="font-inter text-base text-gray-dim leading-loose">At Nautical Elegance Interiors, we transform luxury yachts into floating masterpieces that blend functionality with opulence. Our expert designers create bespoke interiors reflecting each client's unique tastes, from sleek modern designs to classic styles. Committed to perfection and quality craftsmanship, we offer comprehensive services from concept development to custom furnishings, ensuring your yacht is a sophisticated and luxurious sanctuary on the water. Every yacht has a story, and she deserves to be heard. A stunning storyboard with a booking calendar at no additional cost is the least we can do for you.</p>
                </div>
            </div>
        </div>
    )
}

export default ImageWithText