"use client"
import {ReactElement} from "react";
import {Moon as LucideMoon} from "lucide-react";

interface Props {
    size?: number
}

export default function Moon({size = 20}: Props): ReactElement {
    return <LucideMoon size={size}/>;
}