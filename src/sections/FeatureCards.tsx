import { FaLongArrowAltRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { TextButton } from "../components/TextButton";
import { Card } from "../components/Card";

const cardData = [
    {
        image: '/assets/images/pill.png',
        title: 'Revolutionary BlockChain API',
        description: 'Effortlessly integrate and menage blockchain date with our cuttin-edge API, designed for seamless connectivity',
        color: 'fuchsia'
    },
    {
        image: '/assets/images/cuboid.png',
        title: 'Decentralized Data Solutions',
        description: 'Empower your applications with decentralized data solutions, ensuring security and transparency at every step',
        color: 'lime'
    },
    {
        image: '/assets/images/cone.png',
        title: 'Next-Gen Smart Contracts',
        description: 'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for blockchain needs.',
        color: 'cyan'
    },
    {
        image: '/assets/images/icosahedron.png',
        title: 'Seamless Blockchain Integration',
        description: 'Integrate blockchain techgnology seamlessly into your projects, with minimal effort and maximum efficiency',
        color: 'violet'
    },
]

export const FeatureCards = () => {
    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="container"> 
                <h2 className="text-4xl md:text-5xl font-heading font-black lg:text-6xl text-center">Discover the future of blockchain with BlockForge</h2>
                <div className="mt-36 lg:mt-48 flex">
                    <div className="flex flex-none gap-8">

                        {cardData.map(({image, title, description, color}) => (
                            <Card key={title} className="max-w-xs md:max-w-md ">
                            <div className="p-4 ">
                                <div className="flex justify-center -mt-20 relative">
                                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]">
                                    </div>
                                    <img src={image} alt="Pill Image" className="size-40 group-hover:-translate-y-6 transition duration-300"/>
                                </div>                        
                                
                                <h3 className="text-3xl font-black font-heading mt-12">{title}</h3>
                                <p className="text-lg text-zinc-400 mt-4">{description}</p>
                                
                            </div>    
                         </Card>
                        ))}

                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full mt-10">

                                {cardData.map(({title , color})=>(
                                    <div key={title} className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"></div>
                                ))}

                    </div>
                </div>

            </div>
        </section>
    )
}