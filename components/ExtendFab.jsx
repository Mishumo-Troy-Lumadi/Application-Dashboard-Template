import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function ExtendFab({onClick, className, icon,title}) {

    const [expanded,setExpanded] = useState(false)
    let style = "hidden"

    if(expanded){
        style = "block"
    }else{
        style = "hidden"
    }

    function execute(e) {
        onClick(e)
    }

    function hover(){
        setExpanded(!expanded)
    }

    return (
        <button onMouseEnter={hover} onMouseLeave={hover} onClick={execute} className={`flex items-center text-sm text-white text-center space-x-2 w-fit rounded-full shadow-lg p-4 transition-all duration-200 ${className}`}>
            <FontAwesomeIcon icon={icon} />
            <h1 className={style}>{title}</h1>
        </button>
    )
}