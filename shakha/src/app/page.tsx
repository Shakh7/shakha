import Image from "next/image";
import Link from "next/link";
import Particles from "../components/particles";

export default function Home() {

    const navigation = [
        {name: "Home", href: "/"},
    ];

    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />

            <h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display md:text-9xl whitespace-nowrap bg-clip-text ">
                sharipov
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-center animate-fade-in px-4">
                <h2 className="text-lg lg:text-xl text-zinc-500 ">
                    I'm building{" "}
                    <Link
                        target="_blank"
                        href="https://unkey.dev"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        shakha.uz
                    </Link> to let people know more about myself.
                </h2>
            </div>
        </div>
    );
}
