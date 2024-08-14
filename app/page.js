import PortfolioSection from "./components/layout-three/carousel/PortfolioSection"
import ContactUsSection from "./components/layout-three/ContactUsSection"
import HeadDesignerSection from "./components/layout-three/HeadDesignerSection"
import HeroThree from "./components/layout-three/HeroThree"
import ImageWithText from "./components/layout-three/ImageWithText"
import SatisfiedClientsSection from "./components/layout-three/SatisfiedClientsSection"

const page = () => {
    return (
        <>
            <HeroThree />
            <main className="*:margin-y">
                <ImageWithText />
                <PortfolioSection />
                <HeadDesignerSection />
                <SatisfiedClientsSection />
                <ContactUsSection />
            </main>
        </>
    )
}

export default page