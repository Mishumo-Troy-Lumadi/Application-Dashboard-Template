import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Chip({title,className, onClick}){

    function execute(e) {
        onClick(e)
    }
    
    return (
        <button onClick={execute} className={`flex justify-center items-center text-sm text-white space-x-2 w-fit rounded-full px-4 py-2 bg-slate-300 hover:bg-slate-500 ${className} transition-all duration-200`}>
            <h1>{title}</h1>
            <FontAwesomeIcon icon={faTimes} />
        </button>
    )
}