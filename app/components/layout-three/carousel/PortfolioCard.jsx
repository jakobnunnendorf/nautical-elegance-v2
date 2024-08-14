import Link from "next/link"
import Button from "../../ui/Button"

const PortfolioCard = ({ imgOne, imgTwo, title, link = "/#" }) => {
    return (
        <div className="min-w-full lg:min-w-[789px] lg:max-w-[789px] h-[341px] object-cover flex relative group overflow-hidden cursor-pointer">
            <div className="h-full w-full -translate-y-96 group-hover:translate-y-0 absolute duration-500  group-hover:h-full bg-primary-one/80 border flex items-center justify-center flex-col gap-[30px] border-primary-one">
                <h4 className="font-lora text-2xl sm:text-4xl md:text-[40px] text-center font-normal text-white max-w-[546px] w-full">
                    {title}
                </h4>
                <Link href={link}><Button bgColor="bg-white" rounded={'rounded-full'} title={'View Project'} /></Link>
            </div>
            <img src={imgOne} alt="portfolio" className="w-1/2 h-auto" />
            <img src={imgTwo} alt="portfolio" className="w-1/2 h-auto" />
        </div>
    )
}

export default PortfolioCard