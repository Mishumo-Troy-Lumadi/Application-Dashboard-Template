import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ToolTip from "./ToolTip";

export default function FabToolTip({title, icon,className, onClick}){


    const [expanded, setExpanded] = useState(false)
    let style = "hidden"

    if (expanded) {
        style = "block"
    } else {
        style = "hidden"
    }

    function hover() {
        setExpanded(!expanded)
    }


    function execute(e) {
        onClick(e)
    }


    return (
        <div className="relative flex w-fit items-center">
            <button onMouseEnter={hover} onMouseLeave={hover} onClick={execute} className={`flex justify-center items-center text-sm text-white space-x-2 w-fit sh rounded-full p-3 transition-all duration-200 ${className}`}>
                <FontAwesomeIcon icon={icon} />
            </button>
            <ToolTip className={style} title={title}/>
        </div>
 
    )

}