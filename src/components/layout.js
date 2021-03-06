import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <article>
                {children}
            </article>
            <Footer/>
        </div>
    )
}