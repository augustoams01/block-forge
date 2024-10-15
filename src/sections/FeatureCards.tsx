import { FaLongArrowAltRight } from "react-icons/fa";

export const FeatureCards = () => {
    return (
        <section className="py-24">
            <div className="container"> 
                <h2 className="text-4xl font-heading font-black text-center">Discover the future of blockchain with BlockForge</h2>
                <div className="mt-36">
                    <div className="relative z-0 p-8 max-w-xs group">
                        <div className="absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                        <div className="absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-300 transition duration-300 top-1.5 right-1.5 -z-10"></div>
                        <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                        <div className="p-4 ">
                            <div className="flex justify-center -mt-20 relative">
                                <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]">
                                </div>
                                <img src="/assets/images/pill.png" alt="Pill Image" className="size-40 group-hover:-translate-y-6 transition duration-300"/>
                            </div>
                            <h3 className="text-3xl font-black font-heading mt-12">Revolutionary BlockChain API</h3>
                            <p className="text-lg text-zinc-400 mt-4">Effortlessly integrate and menage blockchain date with our cuttin-edge API, designed for seamless connectivity</p>
                            <div className="flex items-center justify-between mt-12">
                                <button className="text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500">Learn More</button>
                                <FaLongArrowAltRight className="size-5 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">

                                {[...new Array(4)].fill(0).map((_, i)=>(
                                    <div key={i} className="size-2.5 bg-zinc-500 rounded-full cursor-pointer">
                                        
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}