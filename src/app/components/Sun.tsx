"use client"
import {ReactElement} from "react";
import {Sun as LucideSun} from "lucide-react";

interface Props {
    size?: number
}
export default function Sun({size = 20}: Props): ReactElement {
    return <LucideSun size={size}/>
}