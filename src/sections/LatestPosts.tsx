import { Card } from "../components/Card"

export const LatestPosts = () => {
    return (

        <section className="py-60">
            <div className="container">
                <h2 className="font-heading font-black text-4xl text-center">Your portal to everything blockchain.</h2>
                <p className="text-xl text-center text-zinc-400 mt-8">Keep up with te newest trends, updates, and insights in the blockchain world, update weekly</p>
                <div className="mt-16">
                    <div className="mt-16 flex flex-col gap-8">
                        {[...new Array(4)].fill(0).map((item, itemIndex) => (
                            <Card>
                                <div>
                                    <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">Technology</div>
                                    <h3 className="font-heading font-black text-3xl mt-4">Regulatory Challenges Facing Blockchain</h3>
                                    <p className="text-lg text-zinc-400 mt-6">Understanding the regulatory landscape surrounding blokchain and what ir menas for the future of this technology</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}