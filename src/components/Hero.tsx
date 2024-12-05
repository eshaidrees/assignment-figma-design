import Icon from "./../../public/images/Icon.png"
import Image from 'next/image'


const Hero = () => {
    return (
    <div className="flex items-center justify-center min-h-screen bg-[#043873] px-6 md:px-16 lg:px-32 md:py-20 2xl:px-32 2xl:py-32"
    style={{
        backgroundImage: "url('images/bg-1.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
    }}
>
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1920px] gap-10 md:gap-0">
        {/* Text Section */}
        <div className="flex flex-col gap-4 justify-center text-center md:text-left max-w-[520px] min-h-[344px]">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white">
                Get More Done with whitespace
            </h2>
            <p className="font-normal text-sm md:text-base lg:text-[18px] leading-relaxed text-white">
                Project management software that enables your teams to collaborate,
                plan, analyze, and manage everyday tasks.
            </p>
            <button className="flex items-center justify-center gap-2 w-full md:w-[219px] h-[50px] md:h-[63px] mt-6 md:mt-14 text-base md:text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
                Try Whitespace Free
                <Image src={Icon} alt="Icon" width="15" height="15" />
            </button>
        </div>

        <div className="w-full h-auto max-w-[551px] min-h-[191px] md:w-[824px] md:h-[420px] gap-[4px] bg-[#C4DEFD]">
        </div>
    </div>
</div>

  )
}

export default Hero