import Image from 'next/image'
import Link from 'next/link'
import { FaChevronDown, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import adira from '../public/assets/images/brand/logo/adira-putih.png'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg py-3 navbar-default p-3">
            <div className="container px-0">
                <Link href="/" className="navbar-brand">
                    <Image 
                       src={adira} 
                       alt="adiradana.com"
                    />
                </Link>
                <button 
                    className="navbar-toggler collapsed" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-default" 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar top-bar mt-0"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <Link 
                                href="#" 
                                className="nav-link dropdown-toggle"
                                id="navbarProducts" 
                                data-bs-toggle="dropdown"
                                aria-haspopup="true" 
                                aria-expanded="false"
                            >
                                Produk
                                <FaChevronDown style={{ paddingLeft: 3 }} />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarProducts">
                                <li className="dropdown-submenu dropstart-lg">
                                    <Link href="/produk/pinjaman-dana-gadai-bpkb" className="dropdown-item">
                                        Pinjaman Dana Gadai BPKB
                                    </Link>
                                </li>
                                <li className="dropdown-submenu dropstart-lg">
                                    <Link href="/produk/kredit-motor" className="dropdown-item">
                                        Kredit Motor
                                    </Link>
                                </li>
                                <li className="dropdown-submenu dropstart-lg">
                                    <Link href="/produk/kredit-mobil" className="dropdown-item">
                                        Kredit Mobil
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/#persyaratan" className="nav-link" scroll={false}>
                                Persyaratan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#cara-pengajuan" className="nav-link" scroll={false}>
                                Cara Pengajuan
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cari-cabang" className="nav-link d-flex align-items-center" style={{ gap: 3 }}>
                                <FaMapMarkerAlt /> Cari Cabang
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/artikel" className="nav-link">
                                Artikel
                            </Link>
                        </li>
                    </ul>
                    <div className="ms-lg-3 mt-3 d-grid mt-lg-0">
                        <Link href="/#produk" className="btn btn-primary btn-sm text-black d-flex justify-content-center align-items-center" style={{ gap: 5 }} scroll={false}>
                            Ajukan Sekarang
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}