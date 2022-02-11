export default function Layout({children, className}) {
    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    )
}