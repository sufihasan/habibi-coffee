// "use client";
import React from 'react'

const year = new Date().getFullYear();

export default function Footer() {
    return (

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {year} - All right reserved by HabibiCoffee Ltd</p>
            </aside>
        </footer>

    )
}
