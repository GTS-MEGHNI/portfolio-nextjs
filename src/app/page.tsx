import {ReactElement} from "react";
import {Navbar} from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

export default function Home(): ReactElement {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}