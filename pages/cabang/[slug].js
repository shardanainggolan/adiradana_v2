import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
import Breadcrumbs from '../../components/Breadcrumbs'
import { Adsense } from '@ctrl/react-adsense';
import { 
    BsArrowLeft,
    BsPinMapFill,
    BsTelephoneFill 
} from 'react-icons/bs'
import { FaFax } from 'react-icons/fa'

export default function Cabang({ branch }) {
    const router = useRouter();
    const canonicalURL = process.env.APP_URL + router.asPath;

	return (
		<>
			<NextSeo
                title={branch.name + ' | Adira Dana'}
                description={branch.description}
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: branch.name + ' | Adira Dana',
                    description: branch.description,
                    images: [
                        {
                            url: `${process.env.BACKEND_URL}/uploads/branches/${branch.image}`,
                            width: 600,
                            height: 315,
                            alt: branch.name + ' | Adira Dana',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />

            <LocalBusinessJsonLd
                type="Konsultan Keuangan"
                id={canonicalURL}
                name={branch.name}
                description={branch.description}
                url={canonicalURL}
                telephone={branch.telp1}
                address={{
                    streetAddress: branch.address,
                    addressLocality: branch.region.district.district,
                    addressRegion: branch.region.province.province,
                    postalCode: branch.postalCode,
                    addressCountry: 'ID',
                }}
                geo={{
                    latitude: branch.latitude,
                    longitude: branch.longitude,
                }}
                images={[
                    `${process.env.BACKEND_URL}/uploads/branches/${branch.image}`
                ]}
            />
			
			<section className="pt-10">
                <div className="container">
                    <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm p-5">
                        <div className="row">
                            <div className="col-xl-12 mb-8 mb-lg-0">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div>
                                            <div className="border-bottom pb-6 mb-6">
                                                <div>
                                                    <Breadcrumbs
                                                        items={[
                                                            {
                                                                label: (
                                                                    'Beranda'
                                                                ),
                                                                path: "/",
                                                            },
                                                            {
                                                                label: "Cabang",
                                                                path: "/cari-cabang",
                                                            },
                                                            {
                                                                label: branch.name,
                                                                path: `/cabang/${branch.slug}`,
                                                            }
                                                        ]}
                                                    />

                                                    <h1 className="mb-3">{ branch.name }</h1>

                                                    <iframe 
                                                        src={branch.gmapsLink} 
                                                        width="100%" 
                                                        height="300" 
                                                        style={{ border: 0 }} 
                                                        allowFullScreen="" 
                                                        loading="lazy" 
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                        title={branch.name}>
                                                    </iframe>

                                                    <div className="row mt-4">
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                                                            <div className="card shadow-sm text-center h-100">
                                                                <div className="card-body">
                                                                    <div className="my-5">
                                                                        <BsPinMapFill className="text-primary" style={{ fontSize: 32 }} />
                                                                    </div>
                                                                    <h2 className="text-uppercase mb-2 fw-bold h4">Alamat</h2>
                                                                    <p>
                                                                        { branch.address } <br />
                                                                        {`
                                                                            ${branch.region.subDistrict.subDistrict}, 
                                                                            ${branch.region.district.district},
                                                                            ${branch.region.province.province}
                                                                        `}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                                                            <div className="card shadow-sm text-center h-100">
                                                                <div className="card-body">
                                                                    <div className="my-5">
                                                                        <BsTelephoneFill className="text-primary" style={{ fontSize: 32 }} />
                                                                    </div>
                                                                    <h2 className="text-uppercase text-dark fw-semi-bold mb-2 h4">
                                                                        Telepon
                                                                    </h2>
                                                                    <p>
                                                                        { branch.telp1 } <br />
                                                                        { branch.telp2 } <br />
                                                                        { branch.telp3 }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3">
                                                            <div className="card shadow-sm text-center h-100">
                                                                <div className="card-body">
                                                                    <div className="my-5">
                                                                        <FaFax className="text-primary" style={{ fontSize: 32 }} />
                                                                    </div>
                                                                    <h2 className="text-uppercase text-dark fw-semi-bold h4">Fax</h2>
                                                                    <p>
                                                                        { branch.fax1 } <br />
                                                                        { branch.fax2 } <br />
                                                                        { branch.fax3 }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 col-md-12 col-12">
                                <div className="mb-10 text-center">
                                    <h2 className="mb-2 h1">
                                        Ajukan Produk di {branch.name}
                                    </h2>
                                    <p>
                                        Ajukan Produk yang Anda inginkan sekarang juga
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="card text-center rounded-0">
                                    <div className="card-body p-6">
                                        <div className="mb-4">
                                            <Image 
                                                src="/assets/images/produk/icons/pinjaman-dana-multiguna.png" 
                                                width="80"
                                                height="50"
                                                alt="Mobil" 
                                            />
                                        </div>
                                        <h2 className="h3">Pinjaman Dana Gadai BPKB</h2>
                                        <p className="mb-4 small">
                                            Ajukan pinjaman mulai dari 3 juta rupiah dengan BPKB Motor atau pinjaman 
                                            dana mulai dari 20 juta rupiah dengan BPKB Mobil.
                                        </p>
                                        <Link href="/produk/pinjaman-dana-gadai-bpkb" className="btn btn-primary btn-sm text-dark rounded-pill">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="card text-center rounded-0">
                                    <div className="card-body p-6">
                                        <div className="mb-4">
                                            <Image 
                                                src="/assets/images/produk/icons/motor.png" 
                                                width="80"
                                                height="50"
                                                alt="Mobil" 
                                            />
                                        </div>
                                        <h2 className="h3">Kredit Motor Baru/Bekas</h2>
                                        <p className="mb-4 small">
                                            Adira Finance menawarkan kemudahan memiliki motor baru dan bekas secara kredit 
                                            untuk berbagai pilihan merek
                                        </p>
                                        <Link href="/produk/kredit-motor" className="btn btn-primary btn-sm text-dark rounded-pill">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="card text-center rounded-0">
                                    <div className="card-body p-6">
                                        <div className="mb-4">
                                            <Image 
                                                src="/assets/images/produk/icons/mobil.png" 
                                                width="80"
                                                height="50"
                                                alt="Mobil" 
                                            />
                                        </div>
                                        <h2 className="h3">Kredit Mobil Baru/Bekas</h2>
                                        <p className="mb-4 small">
                                            Adira Finance menawarkan kemudahan memiliki mobil baru dan bekas secara kredit 
                                            untuk berbagai pilihan merek
                                        </p>
                                        <Link href="/produk/kredit-mobil" className="btn btn-primary btn-sm text-dark rounded-pill">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <Link href="/cari-cabang">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary text-dark d-flex justify-content-center align-items-center" style={{ gap: 5 }}>
                                            <BsArrowLeft style={{ fontSize: 18 }} />
                                            Kembali
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <Adsense
                                client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
                                slot="2997851086"
                                style={{ display: 'block' }}
                                format="auto"
                                responsive="true"
                            />
                        </div>
                    </div>
                </div>
            </section>
		</>
	)
}

export async function getServerSideProps({ params }) {
    const getBranch = await fetch(`${process.env.BACKEND_URL}/api/branch/slug/${params.slug}`)
  	const branch = await getBranch.json()

	return {
		props: {
			branch: branch.data
		}
	}
}