import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Fab({ onClick,className, icon, title }) {
   
    function execute(e) {
        if(onClick != null){
            onClick(e)
        }
    }

    return (
        <button onClick={execute} className={`flex justify-center items-center text-sm text-white space-x-2 w-fit rounded-full p-3 shadow-lg transition-all duration-200 ${className}`}>
            <FontAwesomeIcon icon={icon} />
            <h1 className="hidden">{title}</h1>
        </button>
    )
}