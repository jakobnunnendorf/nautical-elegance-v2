import Image from "next/image"
import Button from "./Button"

const IntroductionOne = () => {
    return (
        <div className="layout-container flex items-center gap-[30px] max-xl:px-5 max-[1171px]:flex-col">
            <img src="/images/into-model.png" alt="into-model.png" />
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-5">
                    <h4 className="font-lora text-[40px] font-normal text-blue-light max-w-[710px] w-full">Brief Introduction to the <span className="text-primary-one">Luxury Yacht</span></h4>
                    <p className="font-inter text-lg text-gray-dim">The "Elysian Dream" embodies the pinnacle of opulence and elegance on the water. This exquisite yacht offers unparalleled comfort and sophistication, ensuring an unforgettable yachting experience. With state-of-the-art amenities, bespoke interiors, and a timeless design, the "Elysian Dream" is your sanctuary on the high seas.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h5 className="text-[28px] text-black">Key Features and Highlights</h5>
                    <div className="grid sm:grid-cols-2 gap-5">
                        <IconWithText text="Sleek Design" />
                        <IconWithText text="Entertainment and Leisure" />
                        <IconWithText text="Multiple Decks" />
                        <IconWithText text="Gourmet Dining" />
                        <IconWithText text="Luxurious Interiors" />
                        <IconWithText text="Water Toys and Tenders" />
                        <IconWithText text="Spacious Accommodations" />
                        <IconWithText text="Professional Crew" />
                        <IconWithText text="Advanced Technology" />
                    </div>
                </div>
                <Button title="Read More" />
            </div>
        </div>
    )
}

export default IntroductionOne


const IconWithText = ({ icon, text }) => {
    return (
        <div className="flex items-center gap-4 font-inter text-xl text-gray-light">
            <Image width="17" height="17" src="/images/tick.svg" alt='tick mark' />
            <p>{text}</p>
        </div>
    )
}
