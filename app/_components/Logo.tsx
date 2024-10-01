import { Italianno } from "next/font/google"

const italianno = Italianno({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

function Logo() {
    return (
        <p className={`${italianno.className} text-2xl font-bold  antialiased`}>
            Khaled Bachir Delassi
        </p>
    )
}

export default Logo
