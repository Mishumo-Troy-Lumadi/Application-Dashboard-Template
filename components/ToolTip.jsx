export default function ToolTip({ className, title}){

    return(
        <div className={`absolute z-50 w-24 -right-28 p-2 text-center text-white font-thin bg-purple-800 rounded-r-full ${className}`}>
            {title}
        </div>
    )
}