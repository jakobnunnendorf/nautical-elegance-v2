import SatisfiedClientCard from "./SatisfiedClientCard"

const SatisfiedClientsSection = () => {
    return (
        <div>
            <div className="flex items-center justify-center flex-col gap-24 py-20 max-xl:px-5">
                <h3 className="font-lora font-medium text-black-light text-[55px]">What Our Clients Say</h3>
                <div className="flex gap-[50px] flex-wrap justify-center min-[1350px]:justify-normal min-[1350px]:flex-nowrap">
                    {
                        ClientSatisfictionData.map((data, i) => (
                            <SatisfiedClientCard key={i} {...data} />
                        ))
                    }
                </div>
            </div>
        </div>)
}

export default SatisfiedClientsSection


const ClientSatisfictionData = [
    {
        desc: "Nautical Elegance Interiors transformed our yacht into a true masterpiece. From the initial consultation to the final reveal, their team was professional, attentive, and incredibly creative. They listened to our vision and exceeded our expectations in every way. The quality of the materials and craftsmanship is unparalleled. We couldn't be happier with the results!",
        title: "Jonathan M.",
        image: "/images/client-1.png",
        position: "Ceo Company",
        rating: 5
    },
    {
        desc: "Working with Nautical Elegance Interiors was a dream come true. Their attention to detail and dedication to creating a luxurious yet functional space was evident throughout the entire process. Our yacht now feels like a five-star hotel on the water. The team’s ability to blend modern design with timeless elegance is truly impressive. Highly recommend!",
        title: "Emily R.",
        image: "/images/client-2.png",
        position: "Ceo Company",
        rating: 5
    },
    {
        desc: "We recently refitted our yacht with Nautical Elegance Interiors, and the experience was nothing short of exceptional. The designers were incredibly knowledgeable space and comfort. The final design is stunning, with every detail meticulously crafted. It’s clear that they are passionate about their work and committed to delivering the best for their clients.",
        title: "Michael S.",
        image: "/images/client-3.png",
        position: "Ceo Company",
        rating: 5
    }
]