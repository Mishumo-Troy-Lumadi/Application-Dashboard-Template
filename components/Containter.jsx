export default function Container({ children, className }) {
    return (
        <div className={`flex flex-col h-screen ${className}`}>
            {children}
        </div>
    )
}