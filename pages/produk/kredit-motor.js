import Link from 'next/link'
import Image from 'next/image'
import { 
    BsCheck,
    BsFillPlusCircleFill
} from "react-icons/bs";
import bannerImg from '../../public/assets/images/produk/banner/kredit-motor.webp'
import { NextSeo, FAQPageJsonLd } from 'next-seo';
import { useRouter } from "next/router";
import FormKreditMotor from '../../components/formKreditMotor';

export default function KreditMotor() {
    const canonicalURL = process.env.APP_URL + useRouter().pathname;

	return (
		<>
            <NextSeo
                title="Adira Dana - Pilihan Terbaik untuk Kredit Motor Tanpa Ribet!"
                description="Dapatkan kredit motor bekas dengan proses yang mudah dan terpercaya bersama Adira, pilihan tepat untuk memenuhi impian Anda."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Adira Dana - Pilihan Terbaik untuk Kredit Motor Tanpa Ribet!',
                    description: 'Dapatkan kredit motor bekas dengan proses yang mudah dan terpercaya bersama Adira, pilihan tepat untuk memenuhi impian Anda.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/produk/kredit-motor-600x315.jpg`,
                            width: 600,
                            height: 315,
                            alt: 'Adira Dana: Pilihan Terbaik untuk Kredit Motor Tanpa Ribet!',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />

            <FAQPageJsonLd
                mainEntity={[
                    {
                        questionName: 'Apa yang dimaksud dengan Kredit/Pembiayaan Motor?',
                        acceptedAnswerText: `
                            <p>
                                Adalah jasa pembiayaan motor baru dan bekas 
                                yang diperlukan oleh konsumen, baik perorangan 
                                maupun maupun kelembagaan.
                            </p>
                        `,
                    }
                ]}
            />
			
            <section className="pb-6 pb-1">
                <Image 
                    src={bannerImg}
                    alt="Kredit Motor"
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
                                    <h1>
                                        Kredit Mobil: Solusi Cerdas untuk Memiliki Kendaraan Impian Anda
                                    </h1>
                                    <p>
                                        Adira Finance menawarkan kemudahan memiliki motor baru atau bekas 
                                        secara kredit untuk berbagai pilihan merek, termasuk motor premium. 
                                        Persyaratan dokumennya mudah, proses cepat, pilihan angsuran dan tenor 
                                        yang sesuai dengan kemampuan Konsumen, jaringan pembayaran angsuran 
                                        yang luas, dilengkapi perlindungan asuransi kendaraan dan kecelakaan diri, 
                                        sistem penyimpanan BPKB yang aman, serta layanan yang bersahabat di 
                                        ratusan kantor cabang/ perwakilan, dealer, contact center dan media digital.
                                    </p>
                                    <p>
                                        Yuk dapatkan motor idamanmu sekarang juga!
                                    </p>

                                    <hr />
                                    
                                    <Link href="#form-pengajuan" className="btn btn-primary text-dark" scroll={false}>
                                        Ajukan Kredit
                                    </Link>
                                </div>
                                <div className="section-scroll" id="section-faq">
                                    <div className="p-lg-10 p-5">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="mb-8">
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
                                                                    Apa yang dimaksud dengan Kredit/Pembiayaan Motor?
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
                                                                Adalah jasa pembiayaan motor baru dan bekas yang diperlukan oleh konsumen, 
                                                                baik perorangan maupun maupun kelembagaan.
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
                                                                    Klik tombol "Ajukan Kredit" diatas, kemudian isi Form Pengajuan Kredit sesuai 
                                                                    dengan data diri Konsumen. Setelah selesai mengisi data diri, 
                                                                    Anda akan dihubungi oleh Petugas ADIRA FINANCE
                                                                </p>
                                                                <div className="table-responsive">
                                                                    <table className="table table-sm table-bordered text-dark" style={{ width: '100%' }}>
                                                                        <thead className="align-middle">
                                                                            <tr>
                                                                                <th>Persyaratan</th>
                                                                                <th className="text-center">Karyawan</th>
                                                                                <th className="text-center">Wiraswasta</th>
                                                                                <th className="text-center">Profesional</th>
                                                                                <th className="text-center">Perusahaan</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody className="align-middle">
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi E-KTP Pemohon & Pasangan/Penjamin (Bila Ada)
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi E-KTP Pengurus/ Pengelola & PIC Management Perusahaan & Pemegang saham 25% 
                                                                                </td>
                                                                                <td className="text-center">

                                                                                </td>
                                                                                <td className="text-center">

                                                                                </td>
                                                                                <td className="text-center">

                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi Kartu Keluarga (KK) / Akte Nikah*
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi Bukti Tempat Tinggal (Rek. Listrik / Rek. PAM/Rek. 
                                                                                    Telepon / SHM / SHGB/ SHGU/ SPPT-PBB / AJB / Girik/ Perjanjian 
                                                                                    KPR atas nama calon konsumen/ Suami/ Istrinya)
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi Slip Gaji / Surat Keterangan Gaji (minimal 3 bulan terakhir)
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi Rekening Tabungan / Rekening Koran/Rekap Pendapatan Praktek/Rekap 
                                                                                    Pendapatan Usaha (3 bulan terakhir)
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi NPWP 
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi Tempat Usaha / Ijin Praktek
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    Fotokopi SIUP / TDP / TDR / SKDP / SITU / NIB / Asli surat keterangan usaha
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-wrap">
                                                                                    <ul>
                                                                                        <li>
                                                                                            Fotokopi Akte Pendirian Perusahaan
                                                                                        </li>
                                                                                        <li>
                                                                                            Fotokopi Dokumen Pengesahan Akte 
                                                                                            (SK yang diterbitkan oleh Kementerian Hukum dan HAM RI)
                                                                                        </li>
                                                                                        <li>
                                                                                            Fotokopi Akte Perubahan – Perubahan (bila ada)
                                                                                        </li>
                                                                                    </ul>
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    
                                                                                </td>
                                                                                <td className="text-center">
                                                                                    <BsCheck style={{ color: '#198754', fontSize: 24 }} />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <small className="fst-italic">
                                                                    * Akte Nikah jika Konsumen sudah menikah <br />
                                                                    **Karyawan/profesional/wiraswasta wajib melengkapi fotokopi NPWP jika total pinjaman {'>'} Rp. 50 juta
                                                                </small>
                                                                <p className="mt-2">
                                                                    khusus kredit motor bekas, Konsumen wajib membawa 
                                                                    STNK (yang masih berlaku), BPKB dan Faktur Asli 
                                                                    (untuk BPKB yang telah diterima Konsumen)
                                                                </p>
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
                                                    <h2>Form Pengajuan</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <FormKreditMotor />
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
