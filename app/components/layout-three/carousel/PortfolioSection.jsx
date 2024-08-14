import PortfolioCard from "../../shared/PortfolioCard"
import { Carousel } from "./Carousel"

const PortfolioSection = () => {
    return (
        <div className="flex flex-col gap-14 !mb-[200px] max-md:px-5">
            <h3 className="font-lora text-[40px] font-normal text-center text-blue-light">Portfolio</h3>
            <Carousel carouselData={PortfolioData} />
            {/* for mobile */}
            <div className="flex flex-col gap-5 md:hidden">
                {
                    PortfolioData.map((data, index) => (
                        <PortfolioCard key={index} {...data} />
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioSection

const PortfolioData = [
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_4.png',
        imgTwo: '/images/portfolio_1.png',
        link: '/#'
    },
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_5.png',
        imgTwo: '/images/portfolio_2.png',
        link: '/#'
    },
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_6.png',
        imgTwo: '/images/portfolio_3.png',
        link: '/#'

    }
]