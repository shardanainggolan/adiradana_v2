import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

import imgInternalServerError from '../public/assets/images/background/internal-server-error.png'

export default function Custom500() {
	return (
		<>
			<NextSeo
                title="Internal Server Error - Adira Dana"
                description="Internal Server Error - Adira Dana"
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
                                            src={imgInternalServerError}
                                            width={150}
                                            height={150}
                                            className="img-fluid"
                                            alt="Halaman Tidak Ditemukan" 
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h1 className="mb-2 fw-semi-bold">Internal Server Error</h1>
                                        <p className="mb-5">
                                            Kami sedang mencoba untuk memperbaiki masalah yang terjadi.  
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