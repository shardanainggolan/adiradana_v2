import Link from 'next/link'
import Image from 'next/image'
import { NextSeo, HowToJsonLd } from 'next-seo';
import { 
	BsClock,
	BsBuildingCheck,
	BsCreditCard2Front, 
	BsEnvelopeCheck,
	BsReceipt,
	BsHandThumbsUp,
	BsArrowRightSquare
} from "react-icons/bs";

import {
	FaHandHolding,
	FaArrowRight,
	FaSearchLocation
} from "react-icons/fa"

import headerImg from '../public/assets/images/background/header.webp'
import dots from '../public/assets/images/background/dots.webp'
import dots2 from '../public/assets/images/background/dots-2.webp'
import brosurPinjamanAdira from '../public/assets/images/background/table-referenstatif.webp'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
	return (
		<>
			<NextSeo
                title="Adira Dana - Tempat Gadai BPKB Mobil/Motor Aman dan Terpercaya"
                description="Tempat gadai BPKB mobil atau motor, pinjaman uang atau dana, kredit mobil atau motor yang aman dan terpercaya dengan proses cepat dan resmi."
                canonical={process.env.APP_URL}
                openGraph={{
                    url: process.env.APP_URL,
                    title: 'Adira Dana - Tempat Gadai BPKB Mobil/Motor Aman dan Terpercaya',
                    description: 'Tempat gadai BPKB mobil atau motor, pinjaman uang atau dana, kredit mobil atau motor yang aman dan terpercaya dengan proses cepat dan resmi.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/logo-adira-kuning-600x315.jpeg`,
                            width: 600,
                            height: 315,
                            alt: 'Adira Dana - Tempat Gadai BPKB Mobil/Motor Aman dan Terpercaya',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />
			
			<section className="py-lg-16 py-10 bg-white">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-12 col-lg-5 col-12">
							<div className="mb-8 mb-lg-0">
								<div className="mb-5">
									<h1 className="mb-4 display-3 fw-bold">
										Selamat Datang di
										Adira Dana
									</h1>
									<p className="mb-0">
										Tempat Gadai BPKB Mobil & Motor yang Aman dan Terpercaya dengan 
										Proses CEPAT, RESMI, Bunga Ringan serta terdaftar di 
										OJK Otoritas Jasa Keuangan.
									</p>
								</div>
								<div className="mb-4">
									<Link href="#produk" className="btn btn-primary text-dark rounded-3 me-2" scroll={false}>
										Ajukan Sekarang
									</Link>
									<Link href="#persyaratan" className="btn btn-primary text-dark rounded-3 me-2" scroll={false}>
										Lihat Persyaratan
									</Link>
									{/* <Link href="#persyaratan" className="btn btn-outline-primary text-dark rounded-3" scroll={false}>
										Lihat Persyaratan
									</Link> */}
								</div>
								<div className="d-flex align-items-center">
									<span>
										{/* <BsShieldCheck style={{ fontSize: 16, fill: 'var(--bs-success)' }} /> */}
										<Image 
											src="/assets/images/icons/ojk.webp" 
											width="20" 
											height="16" 
											alt="Diawasi oleh OTORITAS JASA KEUANGAN" 
										/>
									</span>
									<small className="fs-6 ms-1">
										Adira Finance Berizin dan Diawasi oleh OTORITAS JASA KEUANGAN
									</small>
								</div>
							</div>
						</div>
						<div className="col-lg-6 offset-lg-1 col-md-12 col-12 d-flex justify-content-center">
							<div className="position-relative">
								<Image 
									src={dots2} 
									alt="Adira Dana"
									className="position-absolute top-0 start-0 m-n6"
								/>

								<Image 
									src={headerImg} 
									alt="Adira Dana"
									className="rounded-4 position-relative z-1 img-fluid"
									priority
								/>

								<Image 
									src={dots} 
									alt="Adira Dana"
									className="position-absolute bottom-0 end-0 me-8 mb-n6"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="py-lg-16 py-10">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-4 col-12">
							<div>
								<h2 className="mb-8 h1">
									Mengapa Memilih Kami ?
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black rounded-circle mb-4 border shadow">
										<BsClock style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">
											Proses Cepat sekitar 1-2 hari kerja
										</h3>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-primary rounded-circle mb-4 ">
										<BsBank style={{ fontSize: 24 }} />
									</div>
									<div>
										<h4>Tanpa BI Checking</h4>
									</div>
								</div>
							</div>
						</div> */}
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<BsHandThumbsUp style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">Bunga & Angsuran Ringan</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<BsCreditCard2Front style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">Jumlah pinjaman 2,5 juta – 2 milyar</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<BsEnvelopeCheck style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">BPKB anda dijamin aman</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<BsReceipt style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">Transfer langsung ke rekening pribadi</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<BsBuildingCheck style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">Terdaftar di OJK</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="card bg-transparent border-0 text-center mb-4 mb-lg-0">
								<div className="card-body">
									<div className="icon-shape icon-xxl bg-primary bg-opacity-10 text-black border shadow rounded-circle mb-4 ">
										<FaHandHolding style={{ fontSize: 24 }} />
									</div>
									<div>
										<h3 className="fw-bold h4">
											Bisa melayani Take Over dari leasing/bank lain
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="py-lg-16 py-10 bg-white" id="persyaratan">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 col-md-12 col-12">
							<div className="text-center mb-9">
								{/* <div className="text-primary mb-4 text-uppercase fw-semibold fs-4 ls-md">
									Persyaratan
								</div> */}
								<h2 className="h1">
									Dokumen Persyaratan Standar
								</h2>
								<p>
									Persyaratan yang dibutuhkan untuk gadai bpkb atau kredit motor dan mobil 
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center">
								<Image 
									src="/assets/images/icons/ktp.webp"
									width="200"
									height="140"
									alt="KTP" 
									className="mb-2"
									style={{ objectFit: 'cover' }}
								/>
								<h3>KTP</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center">
								<Image 
									src="/assets/images/icons/kartu-keluarga.webp"
									width="200"
									height="140"
									alt="Kartu Keluarga" 
									className="mb-2"
									style={{ objectFit: 'cover' }}
								/>
								<h3>Kartu Keluarga</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center">
								<Image 
									src="/assets/images/icons/bukti-penghasilan.webp"
									width="200"
									height="140"
									alt="Bukti Penghasilan" 
									className="mb-2"
								/>
								<h3>Bukti Penghasilan</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center ">
								<Image 
									src="/assets/images/icons/bpkb.webp"
									width="200"
									height="140"
									alt="BPKB" 
									className="mb-2"
								/>
								<h3>
									BPKB
									(Gadai BPKB Motor atau Mobil)
								</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center ">
								<Image 
									src="/assets/images/icons/stnk.webp"
									width="200"
									height="140"
									alt="STNK" 
									className="mb-2"
								/>
								<h3>
									STNK
									(Gadai BPKB Motor atau Mobil)
								</h3>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb-2">
							<div className="text-center ">
								<Image 
									src="/assets/images/icons/npwp.webp"
									width="200"
									height="140"
									alt="NPWP" 
									className="mb-2"
								/>
								<h3>
									NPWP
									(Diatas 50 Juta)
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-lg-16 py-10 bg-white border-bottom border-top" id="cara-pengajuan">
				<div className="container">
					<div className="row">
						<div className="offset-xl-2 col-xl-8 col-md-12 col-12">
							<div className="mb-10 text-center ">
							<h2 className="h1">Proses Cepat dan Mudah</h2>
							<p>
								Proses Gadai BPKB Motor atau mobil, Kredit Motor atau Mobil sangat mudah melalui adiradana.com
								ikuti langkah-langkah di bawah ini
							</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
							<div
								className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
								<span className="fs-3 fw-bold">1</span>
							</div>
							<div className="card-body text-center p-6">
								<h3 className="mb-2">Pilih Jenis Produk</h3>
								<p className="mb-0">
									Pilih jenis produk yang ingin diajukan
								</p>
								{/* <Image 
									src="/assets/images/step/langkah-1.webp"
									width="250"
									height="80"
								/> */}
								<p className="small">
									<Link href="#produk" className="d-flex align-items-center" scroll={false}>
										<BsArrowRightSquare className="me-2" /> Klik disini untuk melihat jenis produk
									</Link>
								</p>
							</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
							<div
								className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
								<span className="fs-3 fw-bold">2</span>
							</div>
							<div className="card-body p-6">
								<h3 className=" mb-2">Isi Form Pengajuan</h3>
								<p className="mb-0">
									Isi data diri Anda di form pengajuan dan tunggu balasan atau respon dari kami
								</p>
							</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="card text-center mb-6 mt-4">
							<div
								className="icon-shape icon-lg bg-white border border-primary border-2 rounded-circle mx-auto mt-n4 text-primary">
								<span className="fs-3 fw-bold">3</span>
							</div>

							<div className="card-body p-6">

								<h3 className=" mb-2">Pencarian Dana</h3>
								<p className="mb-0">
									Dana yang Anda ajukan akan dicairkan apabila disetujui
								</p>
							</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="py-lg-16 py-10" id="produk">
				<div className="container">
					<div className="row">
						<div className="offset-xl-2 col-xl-8 col-md-12 col-12">
							<div className="mb-5 text-center">
								<h2 className="mb-2 h1">Produk</h2>
								<p className="mb-0">
									Ajukan Produk Adira Finance yang Anda inginkan sekarang juga
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
									<h3>Pinjaman Dana Gadai BPKB</h3>
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
									<h3>Kredit Motor Baru/Bekas</h3>
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
									<h3>Kredit Mobil Baru/Bekas</h3>
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

					<div className="row mt-7">
						<div className="col-12 text-center">
							<h2 className="mb-3">Tabel Simulasi Pinjaman</h2>
							<div className="d-flex justify-content-center align-items-center flex-wrap" style={{ gap: 10 }}>
								<div className="flex-shrink-1">
									<Image 
										src={brosurPinjamanAdira}
										className="img-fluid"
										alt="Tabel Simulasi Pinjaman"
										style={{ borderRadius: 8, width: '100%' }}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col-12 text-center">
							<h2 className="mb-3">Penawaran Kami</h2>
							<div className="row">
								<div className="col-md-6 col-12">
									<h3>Gadai BPKB Mobil Adira</h3>
									<div className="table-responsive">
										<table className="table table-sm table-bordered">
											<tbody>
												<tr>
													<th>Bunga Flat /bulan</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>0,8%*</th>
												</tr>
												<tr>
													<th>Suku Bunga/Tahun</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>9.6%</th>
												</tr>
												<tr>
													<th>Minimum Pinjaman</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>20 Juta</th>
												</tr>
												<tr>
													<th>Tenor</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>12-60 Bulan</th>
												</tr>
												<tr>
													<th>Proses Kerja</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>2 Hari*</th>
												</tr>
												<tr>
													<th>Status BPKB</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>Atas Nama Sendiri / Pasangan</th>
												</tr>
												<tr>
													<th>Domisili</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>Seluruh Indonesia</th>
												</tr>
												<tr>
													<th>Asuransi</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>TLO, All Risk</th>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="col-md-6 col-12">
									<h3>Gadai BPKB Motor Adira</h3>
									<div className="table-responsive">
										<table className="table table-sm table-bordered">
											<tbody>
												<tr>
													<th>Bunga Flat /bulan</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>2,25%*</th>
												</tr>
												<tr>
													<th>Suku Bunga/Tahun</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>27%</th>
												</tr>
												<tr>
													<th>Minimum Pinjaman</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>3 Juta</th>
												</tr>
												<tr>
													<th>Tenor</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>6-36 Bulan</th>
												</tr>
												<tr>
													<th>Proses Kerja</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>1 Hari*</th>
												</tr>
												<tr>
													<th>Status BPKB</th>
													<th className="d-flex justify-content-end" style={{ fontSize: 14 }}>Atas Nama Sendiri / Pasangan</th>
												</tr>
												<tr>
													<th>Domisili</th>
													<th className="d-flex justify-content-end"style={{ fontSize: 14 }}>Seluruh Indonesia</th>
												</tr>
												<tr>
													<th>Asuransi</th>
													<th className="d-flex justify-content-end"style={{ fontSize: 14 }}>Tidak Cover</th>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="py-lg-16 py-10 bg-white">
				<div className="container">
					<div className="row">
						<div className="offset-xl-2 col-xl-8 col-md-12 col-12">
							<div className="mb-10 text-center ">
								<h2 className="mb-1 h1">Artikel Terbaru</h2>
							</div>
						</div>
					</div>
				
					{/* <ArticleList articles={articles.data} /> */}
					<ArticleList articles={articles} />

					{/* <div className="row">
						{ articleLists }
					</div> */}

					<div className="d-flex justify-content-end align-items-center mt-md-5">
						<Link href="/artikel" className="btn-link d-flex justify-content-center align-items-center border-bottom border-primary border-2 fw-bold fs-5" style={{ gap: 5 }}>
							Lihat Semua Artikel
							<FaArrowRight />
						</Link>
					</div>
				</div>
			</section>
			
			<section className="bg-primary py-10 py-lg-12">
				<div className="container">
					<div className="row">
						<div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
							<div className="text-center">
								<h2 className="h1 text-dark">Cabang Adira</h2>
								<p className="text-dark lead mb-5">
									Klik link dibawah untuk menemukan cabang Adira terdekat di wilayah Anda
								</p>
								<div className="d-flex justify-content-center">
									<Link href="/cari-cabang">
										<button type="button" className="btn btn-white d-flex justify-content-center align-items-center" style={{ gap: 5 }}>
											<FaSearchLocation style={{ fontSize: 16 }} />
											Cari Cabang
										</button>
									</Link>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export async function getServerSideProps() {
	// const getArticles = await fetch(`${process.env.BACKEND_URL}/api/article?limit=3`)
  	// const articles = await getArticles.json()

	const getArticles = await fetch(`${process.env.CMS_API_URL}/posts?categories=13&_embed&per_page=3`)
  	const articles = await getArticles.json()

	// for(const article of articles) {
	// 	if(article._links['wp:featuredmedia']?.[0]) {
	// 		const getFeaturedImage = await axios.get(article._links['wp:featuredmedia'][0].href)

	// 		article.featuredImage = getFeaturedImage.data.guid.rendered
	// 	}
	// }

	return {
		props: {
			articles
		}
	}
}