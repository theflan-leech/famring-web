import Footer from "../_components/footer/Footer"
import Navbar from "../_components/nav-bar/Navbar"
import "./layout.scss"
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <div className="contents">
                {children}
            </div>
            <Footer />
        </>
    )
}

