import Link from 'next/link'
import Image from 'next/image'
import {
    BsFillPlusCircleFill
} from "react-icons/bs";
import bannerImg from '../../public/assets/images/produk/banner/pinjaman-dana-multiguna.webp'
import { NextSeo, FAQPageJsonLd } from 'next-seo';
import { useRouter } from "next/router";
import FormPinjamanDana from '../../components/formPinjamanDana';

export default function PinjamanDanaGadaiBpkb() {
    const canonicalURL = process.env.APP_URL + useRouter().pathname;

	return (
		<>
            <NextSeo
                title="Pinjaman Dana dengan Jaminan BPKB: Solusi Cepat dan Mudah"
                description="Butuh dana cepat? Gadai bpkb mobil dan motor di adiradana.com untuk mendapatkan pinjaman dengan proses yang mudah dan aman."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Pinjaman Dana dengan Jaminan BPKB: Solusi Cepat dan Mudah',
                    description: 'Butuh dana cepat? Gadai bpkb mobil dan motor di adiradana.com untuk mendapatkan pinjaman dengan proses yang mudah dan aman.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/produk/pinjaman-dana-600x315.jpg`,
                            width: 600,
                            height: 315,
                            alt: 'Pinjaman Dana dengan Jaminan BPKB: Solusi Cepat dan Mudah',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'Apa yang dimaksud dengan Pinjaman Dana?',
                        acceptedAnswerText: `
                            <p>
                                Fasilitas Pinjaman Dana adalah kredit multiguna dengan 
                                jaminan BPKB kendaraan Motor / Mobil untuk memenuhi 
                                kebutuhan Konsumen yang bersifat konsumsi (non-produktif) 
                                seperti: biaya renovasi rumah, wisata/perjalanan, pendidikan, 
                                kesehatan, dan Kenduri (perayaan, sunatan,kelahiran,dll) 
                                dengan pencairan dana langsung ke konsumen.
                            </p>
                        `,
                    },
                    {
                        questionName: 'Tata Cara Pengajuan',
                        acceptedAnswerText: `
                            <p>
                                Klik tombol “Ajukan Kredit” diatas, kemudian isi 
                                Form Pengajuan Kredit sesuai dengan data diri Konsumen. 
                                Setelah selesai mengisi data diri, Anda akan segera 
                                dihubungi oleh Petugas ADIRA FINANCE
                            </p>
                            <p>Persyaratan:</p>
                            <ol>
                                <li>
                                    E-KTP asli, E-KTP Pasangan (jika sudah menikah), E-KTP Penjamin (jika ada)
                                </li>
                                <li>
                                    Kartu Keluarga (KK)
                                </li>
                                <li>
                                    Bukti Bekerja/Usaha & Penghasilan
                                </li>
                                <li>
                                    Bukti Tempat Tinggal
                                </li>
                                <li>
                                    NPWP (jaminan mobil wajib melampirkan, jaminan motor wajib melampirkan jika PH {'>'} 50 juta)
                                </li>
                                <li>
                                    STNK (yang masih berlaku)
                                </li>
                                <li>
                                    BPKB asli dan Faktur asli (untuk BPKB yang telah diterima Konsumen)
                                </li>
                            </ol>
                        `,
                    },
                ]}
            />
			
            <section className="pb-6 pb-1">
                <Image 
                    src={bannerImg}
                    alt="Pinjaman Dana Gadai BPKB"
                    className="img-fluid"
                    priority={true}
                />
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm position-relative">
                                <div className="section-scroll p-lg-10 p-5 pb-lg-0 pb-0" id="section-about">
                                    <h1 className="text-center">
                                        Dapatkan Pinjaman Dana Gadai BPKB Motor/Mobil dengan Proses yang Mudah dan Cepat
                                    </h1>
                                    <p>
                                        Butuh dana untuk biaya modal usaha, renovasi rumah, wisata, pendidikan, 
                                        kesehatan, atau kenduri (perayaan, sunatan,kelahiran,dan lain sebagainya)? 
                                        Adira Finance menawarkan Fasilitas Pinjaman Dana dan Kredit Multiguna/Jasa 
                                        dengan jaminan BPKB sepeda motor/mobil yang syaratnya mudah, proses pencairan 
                                        dana cepat, jaringan pembayaran angsuran yang luas, pilihan perlindungan 
                                        asuransi yang lengkap, sistem penyimpanan BPKB yang aman, serta layanan yang 
                                        bersahabat di ratusan kantor cabang/ perwakilan, call center dan media digital. 
                                    </p>
                                    <p>
                                        Ajukan pinjaman mulai dari 3 juta rupiah dengan BPKB Motor atau pinjaman dana 
                                        mulai dari 20 juta rupiah dengan BPKB Mobil.
                                    </p>
                                    <p>
                                        Yuk ajukan sekarang juga!
                                    </p>

                                    <hr />
                                    
                                    <Link href="#form-pengajuan" className="btn btn-primary text-dark" scroll={false}>
                                        Ajukan Pinjaman Dana
                                    </Link>
                                </div>
                                <div className="section-scroll" id="section-faq">
                                    <div className="p-lg-10 p-5">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="mb-5">
                                                    <h2>Frequently Ask Questions (FAQ)</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="accordion" id="faqExample">
                                                    <div className="card mb-2">
                                                        <div className="card-header rounded-3 border-bottom-0" id="faqOne">
                                                            <h3 className="mb-0 h4">
                                                                <Link
                                                                    href="#" 
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#faqcollapseOne" 
                                                                    aria-expanded="true"
                                                                    aria-controls="faqcollapseOne"
                                                                >
                                                                    <BsFillPlusCircleFill className="me-2" />
                                                                    Apa yang dimaksud dengan Pinjaman Dana?
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                        <div 
                                                            id="faqcollapseOne" 
                                                            className="collapse show"
                                                            aria-labelledby="faqOne" 
                                                            data-bs-parent="#faqExample"
                                                        >
                                                            <div className="card-body border-top text-dark">
                                                                Fasilitas Pinjaman Dana adalah kredit multiguna dengan 
                                                                jaminan BPKB kendaraan Motor / Mobil untuk memenuhi 
                                                                kebutuhan Konsumen yang bersifat konsumsi (non-produktif) 
                                                                seperti: biaya renovasi rumah, wisata/perjalanan, pendidikan, 
                                                                kesehatan, dan Kenduri (perayaan, sunatan,kelahiran,dll) 
                                                                dengan pencairan dana langsung ke konsumen.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card mb-2">
                                                        <div className="card-header rounded-3 border-bottom-0" id="faqTwo">
                                                            <h3 className="mb-0 h4">
                                                                <Link
                                                                    href="#" 
                                                                    className="collapsed" 
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#faqcollapseTwo" 
                                                                    aria-expanded="false"
                                                                    aria-controls="faqcollapseTwo"
                                                                >
                                                                    <BsFillPlusCircleFill className="me-2" />
                                                                    Tata Cara Pengajuan
                                                                </Link>
                                                            </h3>
                                                        </div>
                                                        <div 
                                                            id="faqcollapseTwo" 
                                                            className="collapse" 
                                                            aria-labelledby="faqTwo"
                                                            data-bs-parent="#faqExample"
                                                        >
                                                            <div className="card-body border-top text-dark">
                                                                <p>
                                                                    Klik tombol “Ajukan Kredit” diatas, kemudian isi 
                                                                    Form Pengajuan Kredit sesuai dengan data diri Konsumen. 
                                                                    Setelah selesai mengisi data diri, Anda akan segera 
                                                                    dihubungi oleh Petugas ADIRA FINANCE
                                                                </p>
                                                                Persyaratan:
                                                                <ol>
                                                                    <li>
                                                                        E-KTP asli, E-KTP Pasangan (jika sudah menikah), E-KTP Penjamin (jika ada)
                                                                    </li>
                                                                    <li>
                                                                        Kartu Keluarga (KK)
                                                                    </li>
                                                                    <li>
                                                                        Bukti Bekerja/Usaha & Penghasilan
                                                                    </li>
                                                                    <li>
                                                                        Bukti Tempat Tinggal
                                                                    </li>
                                                                    <li>
                                                                        NPWP (jaminan mobil wajib melampirkan, jaminan motor wajib melampirkan jika PH {'>'} 50 juta)
                                                                    </li>
                                                                    <li>
                                                                        STNK (yang masih berlaku)
                                                                    </li>
                                                                    <li>
                                                                        BPKB asli dan Faktur asli (untuk BPKB yang telah diterima Konsumen)
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-scroll" id="form-pengajuan">
                                    <div className="bg-light p-md-12 p-6">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="mb-8 text-center">
                                                    <h2>Form Pengajuan Pinjaman Dana Gadai BPKB</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <FormPinjamanDana />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</>
	)
}
