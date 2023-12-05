import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import imgPageNotFound from '../public/assets/images/background/page-not-found.png'

export default function Custom404() {
	return (
		<>
			<NextSeo
                title="Halaman tidak ditemukan - Adira Dana"
                description="Halaman tidak ditemukan - Adira Dana"
                noindex={true}
                nofollow={true}
                canonical={process.env.APP_URL}
            />
			
            <section className="container pt-5 pb-0">
                <div className="row">
                    <div className="col-md-12 py-5">
                        <div className="mt-n6 bg-white mb-10 rounded-3 shadow-sm p-10">
                            <div className="row">
                                <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="mb-8 text-center">
                                        <Image 
                                            src={imgPageNotFound}
                                            width={300}
                                            height={300}
                                            className="img-fluid"
                                            alt="Halaman Tidak Ditemukan" 
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-primary text-uppercase">Maaf</h2>
                                        <h1 className="mb-2 fw-semi-bold">Halaman Tidak Ditemukan</h1>
                                        <p className="mb-5">
                                            Halaman yang ingin Anda cari tidak dapat ditemukan di server, 
                                            atau Anda mengetik URL yang salah.    
                                        </p>
                                        <Link href="/" className="btn btn-primary text-black">Kembali ke halaman utama</Link>
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