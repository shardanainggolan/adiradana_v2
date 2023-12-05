import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import Breadcrumbs from '../components/Breadcrumbs'
import Link from 'next/link';

export default function PrivayPolicy() {
    const canonicalURL = process.env.APP_URL + useRouter().pathname;

	return (
		<>
			<NextSeo
                title="Kebijakan Privasi: Perlindungan Data Pribadi di Adiradana.com"
                description="Adiradana.com menjamin kebijakan privasi yang terbaik untuk menjaga privasi Anda tetap aman dan terlindungi."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Kebijakan Privasi: Perlindungan Data Pribadi di Adiradana.com',
                    description: 'Adiradana.com menjamin kebijakan privasi yang terbaik untuk menjaga privasi Anda tetap aman dan terlindungi.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/logo-adira-kuning-600x315.jpeg`,
                            width: 600,
                            height: 315,
                            alt: 'Kebijakan Privasi: Perlindungan Data Pribadi di Adiradana.com',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />
			
            <section className="py-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <Breadcrumbs
                                items={[
                                    {
                                        label: (
                                            'Beranda'
                                        ),
                                        path: "/",
                                    },
                                    {
                                        label: "Kebijakan Privasi",
                                        path: "/privacy-policy",
                                    }
                                ]}
                            />
                            
                            <h1>Kebijakan Privasi</h1>

                            <p className="mt-5">
                                Selamat datang di 
                                <Link href="/" className="text-decoration-underline text-dark" style={{ marginLeft: 3 }}>
                                    adiradana.com
                                </Link>.
                            </p>

                            <p className="">
                                Disarankan sebelum mengakses Situs ini lebih jauh, Anda terlebih dahulu membaca 
                                dan memahami syarat dan ketentuan yang berlaku, serta Kebijakan Privasi terkait 
                                dengan data dan informasi pribadi milik Anda. Kebijakan Privasi ini memberikan 
                                informasi mengenai perlindungan data pribadi Anda, serta menjelaskan bagaimana 
                                cara Kami mengumpulkan, menggunakan, membagikan, serta tindakan yang Kami ambil 
                                untuk menjaga keamanan dan kerahasiaan data Anda.
                            </p>

                            <ol>
                                <li className="mb-3">
                                    <span className="fw-bold">DEFINISI</span>
                                    <p>
                                        Setiap kata atau istilah berikut yang digunakan di dalam Kebijakan Privasi 
                                        ini memiliki arti seperti berikut di bawah, kecuali jika kata atau istilah 
                                        yang bersangkutan di dalam pemakaiannya dengan tegas menentukan lain.
                                    </p>
                                    <ol style={{ listStyle: 'none' }}>
                                        <li className="mb-3">
                                            1.1 <span className="fw-bold">"Kami"</span>, selaku pemilik dan pengelola 
                                            Situs adiradana.com dan/atau mobile application yang bernama Adira Dana.
                                        </li>
                                        <li className="mb-3">
                                            1.2 <span className="fw-bold">"Anda"</span>, berarti tiap orang yang mengakses 
                                            dan menggunakan layanan dan jasa yang disediakan oleh Kami.
                                        </li>
                                        <li className="mb-3">
                                            1.3 <span className="fw-bold">"Layanan"</span>, berarti tiap dan keseluruhan jasa 
                                            serta informasi yang ada pada Situs adiradana.com, dan tidak terbatas pada 
                                            informasi yang disediakan, layanan aplikasi dan fitur, dukungan data, serta 
                                            aplikasi mobile yang Kami sediakan.
                                        </li>
                                        <li className="mb-3">
                                            1.4 <span className="fw-bold">"Pengguna"</span>, berarti tiap orang yang mengakses 
                                            dan menggunakan layanan dan jasa yang disediakan oleh Kami, termasuk diantaranya 
                                            Pengguna Belum Terdaftar dan Pengguna Terdaftar.
                                        </li>
                                        <li className="mb-3">
                                            1.5 <span className="fw-bold">"Pengguna Belum Terdaftar"</span>, berarti tiap orang 
                                            yang mengakses Situs Kami dan belum melakukan registrasi.
                                        </li>
                                        <li className="mb-3">
                                            1.6 <span className="fw-bold">"Pengguna Terdaftar"</span>, berarti tiap orang yang 
                                            mengakses dan menggunakan layanan dan jasa yang disediakan oleh Kami, serta telah 
                                            melakukan registrasi dan memiliki akun pada Situs Kami.
                                        </li>
                                        <li className="mb-3">
                                            1.7 <span className="fw-bold">"Pihak Ketiga"</span>, berarti pihak lainnya, termasuk 
                                            namun tidak terbatas pihak bank, multifinance, peer to peer lending, broker dan 
                                            penyedia layanan asuransi, agen penjual efek reksa dana, transfer dana, telekomunikasi 
                                            yang menyediakan layanannya dalam Situs.
                                        </li>
                                        <li className="mb-3">
                                            1.8 <span className="fw-bold">"Informasi Pribadi"</span>, berarti tiap dan seluruh data 
                                            pribadi yang diberikan oleh Pengguna di Situs Kami, termasuk namun tidak terbatas pada 
                                            nama lengkap, tempat dan tanggal lahir, jenis kelamin, alamat, nomor identitas, informasi debitur, 
                                            kartu keluarga, akta kelahiran, surat nikah, akta, bukti kepemilikan, KTP, NPWP, surat izin usaha, 
                                            surat penjaminan, data penghasilan, lokasi pengguna, kontak pengguna, data transaksi, data lainnya 
                                            yang terekam dalam Situs Kami yang merujuk kepada Anda serta dokumen dan data pendukung lainnya 
                                            sebagaimana diminta pada ringkasan pendaftaran akun serta pada ringkasan aplikasi pengajuan.
                                        </li>
                                        <li className="mb-3">
                                            1.9 <span className="fw-bold">"Konten"</span>, berarti teks, data, informasi, angka, gambar, grafik, 
                                            foto, audio, video, nama pengguna, informasi, aplikasi, tautan, komentar, peringkat, desain, 
                                            atau materi lainnya yang ditampilkan pada Situs.
                                        </li>
                                        <li>
                                            1.10 <span className="fw-bold">"Situs"</span>, berarti adiradana.com
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">PENGUMPULAN INFORMASI PRIBADI</span>
                                    <p>
                                        Kami mengumpulkan Informasi Pribadi mengenai Anda sebagai Pengguna saat mengakses atau menggunakan 
                                        Situs mengacu sesuai dengan ketentuan POJK No. 6/POJK.07/2022 tentang Perlindungan Konsumen Sektor Jasa Keuangan.
                                    </p>
                                    <p>
                                        Kami juga mengumpulkan informasi tidak langsung yang tidak dapat diidentifikasi secara pribadi yang mungkin 
                                        terkait dengan Anda selaku Pengguna, termasuk nama keanggotaan, alamat IP dan informasi login, akses ke 
                                        kamera yang digunakan untuk mengidentifikasi Pengguna, akses ke GPS untuk dapat memberikan info posisi Pengguna, 
                                        serta hal-hal lain termasuk preferensi pencapaian dan demografi. Informasi pribadi Anda hanya digunakan untuk 
                                        kepentingan yang terkait yang telah disetujui oleh Pengguna.
                                    </p>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">PENGGUNAAN DAN PEMBAGIAN INFORMASI PRIBADI</span>
                                    <p>
                                        Dalam penggunaan Anda baik sebagai Pengguna Belum Terdaftar ataupun sebagai Pengguna Terdaftar, Kami akan mengumpulkan 
                                        beberapa Informasi Pribadi sebagai identifikasi Anda. Informasi pribadi tersebut juga mungkin akan Kami sampaikan 
                                        kepada Pihak Ketiga dalam hal pemrosesan kegiatan yang berhubungan dengan pengajuan Anda terhadap suatu produk atau 
                                        layanan tertentu. Dengan Anda telah memberikan Informasi Pribadi, berarti Anda memahami dan menyetujui bahwa Anda 
                                        melakukan pengajuan atas diri pribadi dan tanpa ada paksaan ataupun tekanan dari pihak manapun, dan hanya digunakan 
                                        untuk kepentingan tersebut di atas.
                                    </p>
                                    <p>
                                        Selain hal tersebut diatas, Kami juga menggunakan Informasi Pribadi dalam kapasitas Kami sebagai pemberi layanan 
                                        kepada Anda untuk hal sebagai berikut :
                                    </p>
                                    <ol style={{ listStyle: 'none' }}>
                                        <li className="mb-3">
                                            3.1 Memberikan akses kepada Anda untuk dapat mendaftar keanggotaan dan berpartisipasi dalam Forum.
                                        </li>
                                        <li className="mb-3">
                                            3.2 Memungkinkan Anda untuk dapat mengakses dan mendapatkan informasi perbandingan produk finansial 
                                            dan/atau keuangan secara gratis.
                                        </li>
                                        <li className="mb-3">
                                            3.3 Meningkatkan mutu layanan dan informasi yang Kami sampaikan di Situs, dengan menggunakan 
                                            Informasi Pribadi sebagai data tren, analisa, sampel penelitian, riset pasar, dan data demografi.
                                        </li>
                                        <li className="mb-3">
                                            3.4 Memungkinkan Kami untuk dapat menyampaikan informasi mengenai rilis produk terbaru, 
                                            atau layanan mendatang yang akan Kami sampaikan di Situs.
                                        </li>
                                        <li className="mb-3">
                                            3.5 Memungkinkan Pihak Ketiga untuk menghubungi dan membantu Anda pada saat Anda tertarik 
                                            terhadap suatu produk dan menyatakan minat dengan mengirimkan Informasi Pribadi kepada Kami.
                                        </li>
                                        <li>
                                            3.6 Memproses transaksi antara Anda dan Pihak Ketiga dengan dasar Pihak Ketiga membutuhkan 
                                            Informasi Pribadi sebagai verifikasi dan data pendukung keputusan.
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">KEAMANAN INFORMASI PRIBADI</span>
                                    <p>
                                        Kami akan menyimpan Informasi Pribadi Anda secara rahasia dan tidak membuka atau memberikan 
                                        informasi tersebut kepada atau memungkinkan akses oleh pihak lain, selain pihak berikut:
                                    </p>
                                    <ol style={{ listStyle: 'none' }}>
                                        <li className="mb-3">
                                            4.1. Perusahaan terkait
                                        </li>
                                        <li className="mb-3">
                                            4.2. Pihak Ketiga, dimana produk atau layanannya ditampilkan pada Situs Kami dan menyediakan 
                                            kutipan web untuk produk dan/atau layanan yang diminta oleh Anda. Pihak Ketiga ini bertindak 
                                            sebagai pengendali informasi data Anda sehingga Anda harus membaca Kebijakan Privasi mereka 
                                            atau menghubungi mereka secara langsung untuk informasi tambahan.
                                        </li>
                                        <li className="mb-3">
                                            4.3. Lembaga Pemerintahan terkait, dalam rangka untuk mencegah penipuan dan pencucian uang, 
                                            dalam kasus bahwa data palsu atau tidak tepat dan/atau diduga kasus penipuan, yang diatur 
                                            sesuai dengan ketentuan peraturan perundang-undangan.
                                        </li>
                                    </ol>

                                    <p>
                                        Dalam keadaan tertentu dan luar biasa, Kami mungkin diperlukan untuk mengungkapkan Informasi Pribadi. 
                                        Kami berkomitmen untuk mematuhi sesuai dengan hukum atau perintah pengadilan, atau dalam menanggapi 
                                        permintaan yang sah oleh Pemerintah atau Penegak Hukum, atau dalam hal Kami percaya dengan itikad baik 
                                        bahwa pengungkapan diperlukan, termasuk namun tidak terbatas pada perlindungan hak atau properti Kami, 
                                        atau untuk mengidentifikasi, mengontak dan melaksanakan tindakan hukum terhadap setiap pihak yang 
                                        mungkin bisa menyebabkan kerusakan atau gangguan hak-hak Kami atau properti (baik sengaja atau tidak), 
                                        atau ketika orang lain dapat dirugikan oleh kegiatan tersebut.
                                    </p>

                                    <p>
                                        Data Pribadi Anda akan Kami simpan paling tidak sampai dengan 5 tahun sejak Anda berakhir menjadi 
                                        pengguna Situs Kami atau sesuai dengan persyaratan dalam peraturan perundang-undangan, yang Kami simpan 
                                        pada pusat data Kami serta pusat pemulihan bencana Kami yang berlokasi di Indonesia. Apabila Anda ingin 
                                        agar Data Pribadi Anda dihapus sebelum itu, maka Anda dapat mengirimkan permohonan kepada team cs@adiradana.com.
                                    </p>

                                    <p>
                                        Kami juga berusaha untuk menyediakan layanan terbaik untuk Anda. Untuk melakukan hal ini, Kami merekam data cookies. 
                                        Ketika Pengguna mengunjungi Situs, server Kami akan mengingat informasi yang dikirimkan oleh browser, 
                                        termasuk diantaranya: alamat IP, jenis browser, website atau laman dikunjungi sebelumnya pengguna datang ke Situs Kami, 
                                        preferensi Pengguna, serta waktu yang dihabiskan dalam mengakses dan menggunakan Situs Kami.
                                    </p>

                                    <p>
                                        Cookies ini dapat digunakan untuk kepentingan sebagai berikut :
                                    </p>

                                    <ol>
                                        <li className="mb-3">
                                            Memberikan Anda pengalaman yang lebih personal di Situs Kami. Hal ini memungkinkan Kami untuk mengingat Anda selaku Pengguna, 
                                            ketika Anda mengunjungi Situs ini. Anda juga dapat mengakses kutipan Anda yang telah disimpan sebelumnya.
                                        </li>
                                        <li className="mb-3">
                                            Mempelajari kebiasaan atau tren penggunaan akses di Situs ini. Semakin Kami mengerti produk apa yang dibutuhkan oleh Pengguna, 
                                            diharapkan akan semakin baik kemampuan Kami untuk menawarkan solusi dan layanan yang ditampilkan di Situs.
                                        </li>
                                        <li>
                                            Memperoleh informasi mengenai jumlah pengunjung ke Situs ini dan laman mana yang paling sering diakses atau dikunjungi Pengguna.
                                        </li>
                                    </ol>

                                    <p>
                                        Adira Dana dapat mengizinkan perusahaan lain menggunakan cookie pada layanan kami. Informasi ini dapat digunakan untuk, antara lain, 
                                        menentukan popularitas konten tertentu, pengembangan situs dan konten Cermati, mencegah penipuan atau aktivitas ilegal atau tak 
                                        berwenang lainnya serta untuk mengukur dan mengoptimalkan kinerja iklan dan menyajikan iklan yang lebih relevan atas nama kami 
                                        atau perusahaan lain, termasuk di aplikasi dan situs web pihak ketiga.
                                    </p>

                                    <p>
                                        Pada umumnya, cookies akan dihapus saat Anda menutup browser Anda; ini disebut sebagai session cookies. Namun, cookies akan tetap 
                                        berada pada perangkat browsing Anda baik sampai pada saat Anda menghapusnya atau aktivitas browsing berakhir. 
                                        Dengan menggunakan Layanan ini, Anda setuju untuk Kami menggunakan data cookies. Data ini tidak mengungkapkan 
                                        Informasi Pribadi apapun, dan dengan demikian Kami tidak mengumpulkan, memproses atau menggunakan Informasi Pribadi Anda.
                                    </p>

                                    <p>
                                        Anda dapat mengubah pengaturan browser komputer Anda untuk memblokir atau menghapus cookies. 
                                        Jika Anda memilih untuk memblokir atau menghapus cookies Kami, Anda mungkin tidak dapat mengakses 
                                        layanan Kami dan ini bisa berpengaruh pada kinerja Situs Kami di sistem Anda selaku Pengguna.
                                    </p>
                                </li>
                                <li>
                                    <span className="fw-bold">UMUM</span>
                                    <ol style={{ listStyle: 'none', paddingLeft: 0 }}>
                                        <li className="mb-3">
                                            5.1. Penggunaan dan akses ke Situs ini diatur oleh Syarat dan Ketentuan serta Kebijakan Privasi Kami. 
                                            Dengan mengakses atau menggunakan Situs ini, informasi, atau aplikasi lainnya dalam bentuk aplikasi 
                                            mobile yang disediakan oleh atau dalam Situs, berarti Anda telah memahami dan menyetujui serta terikat 
                                            dan tunduk dengan segala Syarat dan ketentuan yang berlaku di Situs ini.
                                        </li>
                                        <li className="mb-3">
                                            5.2. Kami berhak untuk menutup atau mengubah atau memperbaharui Kebijakan Privasi ini setiap saat tanpa 
                                            pemberitahuan, dan berhak untuk membuat keputusan akhir jika tidak ada ketidakcocokan. 
                                            Kami tidak bertanggung jawab atas kerugian dalam bentuk apapun yang timbul akibat perubahan 
                                            pada Kebijakan Privasi. Pengguna dengan ini membebaskan Kami dari tanggungjawab atas tidak 
                                            tersampaikannya data/ informasi yang disampaikan kepada Pengguna melalui berbagai jenis saluran 
                                            komunikasi karena faktor kesalahan teknis yang tidak diduga-duga sebelumnya.
                                        </li>
                                        <li className="mb-3">
                                            5.3. Jika Anda masih memerlukan jawaban atas pertanyaan yang tidak terdapat dalam Kebijakan Privasi ini, 
                                            Anda dapat menghubungi Kami di email cs@adiradana.com atau menghubungi Kami di nomor 081296642577
                                        </li>
                                        {/* <li className="mb-3">
                                            5.4. Selain itu Anda juga dapat membaca Frequently Asked Question (FAQ) yang telah kami siapkan untuk menjawab seputar pertanyaan-pertanyaan umum.
                                        </li> */}
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
			</section>
		</>
	)
}