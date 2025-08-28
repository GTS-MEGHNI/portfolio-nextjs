import {ReactElement} from "react";
import {Navbar} from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";

export default function Home(): ReactElement {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}