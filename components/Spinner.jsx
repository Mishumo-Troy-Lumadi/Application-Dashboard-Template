export default function Spinner({color}) {

    color = color || "bg-purple-800"

    return (
        <div className="flex space-x-4 animate-spin">
            <div className={`${color} p-2 rounded-full`}></div>
            <div className={`${color} p-2 rounded-full animate-ping`}></div>
            <div className={`${color} p-2 rounded-full`}></div>
        </div>
    )
}