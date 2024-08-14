import Image from "next/image"

const DesignIntroCard = ({ image, title, desc }) => {
    return (
        <div className="primary-onecursor-pointer flex flex-col gap-5 w-full border border-black/20 hover:border-none hover:bg-hero-highlighed group pt-4 px-[26px] pb-6">
            <div className="bg-[#0A1928]/25 group-hover:bg-[#0A1928]/20 flex items-center justify-center size-16">
                <Image src={image} width={42} height={42} alt="Design Intro Card" />
            </div>
            <div className="flex flex-col gap-2.5">
                <h4 className="font-lora font-medium text-2xl text-black group-hover:text-black-light">{title}</h4>
                <p className="font-inter text-base text-gray-dim leading-loose group-hover:text-gray-light">{desc}</p>
            </div>
        </div>
    )
}

export default DesignIntroCard