import Input from "../shared/Input"
import MarqueeSection from "../shared/MarqueeSection"
import Button from "../ui/Button"

const ContactUsSection = () => {
    return (
        <div className="!mb-0">
            <MarqueeSection />
            <div className="flex items-center justify-center bg-[#F2F2F2] gap-[30px] max-xl:px-5 max-[1150px]:flex-col py-[70px]">
                <div className="layout-container flex flex-col items-center gap-8 w-full">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-lora font-bold text-[40px] text-center">Let us know what you think!</h3>
                        <p className="font-inter font-normal text-lg text-gray-dim max-w-[590px] text-center">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div className="grid w-full max-w-[908px] min-[624px]:grid-cols-2 gap-6">
                        <Input title="First name" type="text" placeholder="First name" />
                        <Input title="Email" type="text" placeholder="you@company.com" />
                        <Input title="Phone" type="text" placeholder="+1 (555) 000-0000" />
                        <Input title="Company" type="text" placeholder="Nautical Elegance" />
                        <Input isInput={false} customStyle={'min-[624px]:col-span-2'} title="Message" type="text" placeholder="Message..." />
                    </div>
                    <Button rounded={'rounded-full'} title="Submit" />
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection