export default function Card({children ,className}){
    return (
        <div className={`flex flex-col space-y-4 justify-end items-start p-4 ${className}`}>
            {children}
        </div>
    )
}