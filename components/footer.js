import Image from 'next/image'
import Link from 'next/link'
import { BsChevronRight } from "react-icons/bs";
import { 
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from '../public/assets/images/brand/logo/adira-putih.png'

export default function Footer() {
    return(
        <div className="footer bg-white pt-8 ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
                        <div className="mb-4 mb-lg-0">
                            <Image 
                                src={footerLogo} 
                                alt="Adira Dana"
                            />
                        </div>
                    </div>
                </div>

                <hr className="my-6 opacity-25" />

                <div className="row mb-8">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="text-dark-50 mb-3">
                            <p className="small">
                                Kantor Pusat Adira Finance <br />
                                Gedung Millenium Centennial Center Lt. 53-61 <br />
                                Jl. Jend. Sudirman Kav. 25 <br />
                                Karet Setiabudi <br />
                                Jakarta Selatan <br />
                                DKI Jakarta 12920
                            </p>
                            <p className="small">
                                Call Center : 1500511 <br />
                                Email : customercare@adira.co.id
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-3">
                            <p className="text-dark h4">Produk</p>
                            <ul className="list-unstyled text-dark">
                                <li className="d-flex">
                                    <Link href="/produk/pinjaman-dana" className="text-inherit fs-5">
                                        <BsChevronRight className="fs-6 me-2" /> Pinjaman Dana
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link href="/produk/kredit-motor" className="text-inherit fs-5">
                                        <BsChevronRight className="fs-6 me-2" /> Kredit Motor
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link href="/produk/kredit-mobil" className="text-inherit fs-5">
                                        <BsChevronRight className="fs-6 me-2" /> Kredit Mobil
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-3">
                            <p className="text-dark h4">Lainnya</p>
                            <ul className="list-unstyled text-dark">
                                <li className="d-flex">
                                    <Link href="/terms-and-conditions" className="text-inherit fs-5">
                                        <BsChevronRight className="fs-6 me-2" /> Syarat & Ketentuan
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link href="/privacy-policy" className="text-inherit fs-5">
                                        <BsChevronRight className="fs-6 me-2" /> Kebijakan Privasi
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6">
                        <div className="mb-3">
                            <p className="text-dark h4">Sosial Media</p>
                            <ul className="list-unstyled text-dark">
                                <li className="d-flex">
                                    <Link 
                                        href="https://www.facebook.com/adirafinanceid" 
                                        className="text-inherit"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaFacebookF className="me-2 fs-5" /> Facebook
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link 
                                        href="https://twitter.com/AdiraFinanceID" 
                                        className="text-inherit"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaXTwitter className="me-2 fs-5" /> Twitter
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link 
                                        href="https://www.instagram.com/adirafinanceid" 
                                        className="text-inherit"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaInstagram className="me-2 fs-5" /> Instagram
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link 
                                        href="https://www.youtube.com/@AdiraFinanceID" 
                                        className="text-inherit"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaYoutube className="me-2 fs-5" /> Youtube
                                    </Link>
                                </li>
                                <li className="d-flex">
                                    <Link 
                                        href="https://www.linkedin.com/company/adira" 
                                        className="text-inherit"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <FaLinkedin className="me-2 fs-5" /> LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <p className="fs-6 text-dark">
                            © Copyright {new Date().getFullYear()} | Adira Finance Berizin dan Diawasi oleh OTORITAS JASA KEUANGAN
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}