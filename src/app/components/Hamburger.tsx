// Hamburger.tsx
"use client";

import React, {ReactElement} from "react";
import {Menu, X} from "lucide-react";

interface Props {
    isOpen: boolean;
}

export default function Hamburger({isOpen}: Props): ReactElement {
    return isOpen ? <X size={24}/> : <Menu size={24}/>;
}
