export default function Row({ children, className }) {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}