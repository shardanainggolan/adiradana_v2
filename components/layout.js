import Navbar from './navbar'
import Footer from './footer'
import CustomScript from './customScript'
import Script from 'next/script'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Layout({ children }) {
    return (
        <>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-3T4PSS3BT7"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'G-3T4PSS3BT7');
                `}
            </Script>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />

            <FloatingWhatsApp 
                phoneNumber="62895424249065" 
                accountName="Adira Dana"
                avatar="/assets/images/icons/technical-support.webp"
                statusMessage="Online"
                chatMessage="Halo, mau mengajukan BPKB Mobil atau Motor? Silahkan tinggalkan pesan :)"
                placeholder="Tulis pesan..."
                allowEsc={true}
                allowClickAway={true}
                darkMode={true}
            />

            <CustomScript />
        </>
    )
}