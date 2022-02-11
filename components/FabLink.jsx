import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import ToolTip from "./ToolTip";

export default function FabLink({ title, icon, className, destination }) {


    const [expanded, setExpanded] = useState(false)
    let style = "hidden"

    if (expanded) {
        style = "block"
    } else {
        style = "hidden"
    }

    function show() {
        setExpanded(true)
    }

    function hide() {
        setExpanded(false)
    }

    return (
        <Link href={destination} passHref>
            <div className="relative flex items-center">
                <button onMouseEnter={show} onMouseLeave={hide}  className={`flex justify-center items-center text-sm text-white space-x-2 w-fit shadow-lg rounded-full p-3 transition-all duration-200 ${className}`}>
                    <FontAwesomeIcon  icon={icon} />
                </button>
                <ToolTip className={style} title={title} />
            </div>
        </Link>

    )

}