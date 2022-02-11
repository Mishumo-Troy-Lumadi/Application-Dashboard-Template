import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Button({ children, className,icon, onClick }) {

    function execute(e) {
        onClick(e)
    }

    let icon_el = undefined

    if(icon !=null){
       icon_el = <FontAwesomeIcon className="mr-2" icon={icon} />
    }

    return <button
        onClick={execute}
        className={`flex justify-center items-center text-white px-7 py-2 w-fit rounded-md shadow-lg transition-all duration-200 ${className}`} >
        {icon_el}
        {children}
    </button>
}