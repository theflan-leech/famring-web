import "./layout.scss"
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="contents">
            {children}
        </div>
    )
}

