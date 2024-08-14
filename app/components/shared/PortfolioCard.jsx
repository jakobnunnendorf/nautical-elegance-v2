import Link from "next/link"
import Button from "../ui/Button"

const PortfolioCard = ({ imgOne, imgTwo, title, link = "/#" }) => {
    return (
        <div className="flex relative group w-full md:h-[329px] rounded-2xl sm:rounded-3xl md:rounded-[40px] overflow-hidden cursor-pointer max-md:flex-col">
            <div className="h-full w-full -translate-y-[100%] group-hover:translate-y-0 absolute duration-500 text-center group-hover:h-full bg-primary-one/80 border flex items-center justify-center flex-col gap-[30px] border-primary-one  rounded-2xl sm:rounded-3xl md:rounded-[40px]">
                <h4 className="font-lora text-2xl sm:text-3xl md:text-[40px] font-normal text-white w-fit">
                    {title}
                </h4>
                <Link href={link}><Button bgColor="bg-white" rounded={'rounded-full'} title={'View Project'} /></Link>
            </div>
            <img src={imgOne} alt="portfolio" className="md:w-1/2 h-auto" />
            <img src={imgTwo} alt="portfolio" className="md:w-1/2 h-auto" />
        </div>
    )
}

export default PortfolioCard