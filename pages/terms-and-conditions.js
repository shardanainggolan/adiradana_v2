import { NextSeo } from 'next-seo';
import { useRouter } from "next/router";
import Breadcrumbs from '../components/Breadcrumbs'
import Link from 'next/link';

export default function TermsAndConditions() {
    const canonicalURL = process.env.APP_URL + useRouter().pathname;

	return (
		<>
			<NextSeo
                title="Syarat dan Ketentuan - Adiradana.com"
                description="Dapatkan informasi lengkap tentang syarat dan ketentuan penggunaan layanan adiradana.com"
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Syarat dan Ketentuan - Adiradana.com',
                    description: 'Dapatkan informasi lengkap tentang syarat dan ketentuan penggunaan layanan adiradana.com!',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/logo-adira-kuning-600x315.jpeg`,
                            width: 600,
                            height: 315,
                            alt: 'Syarat dan Ketentuan - Adiradana.com',
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
                                        label: "Syarat dan Ketentuan",
                                        path: "/terms-and-conditions",
                                    }
                                ]}
                            />
                            
                            <h1>Syarat dan Ketentuan</h1>

                            <p className="mt-5">
                                Selamat datang di 
                                <Link href="/" className="text-decoration-underline text-dark" style={{ marginLeft: 3 }}>
                                    adiradana.com
                                </Link>.
                            </p>

                            <p className="">
                                Disarankan sebelum mengakses Situs ini lebih jauh, Anda terlebih dahulu membaca dan memahami 
                                syarat dan ketentuan yang berlaku. Syarat dan ketentuan berikut adalah ketentuan dalam 
                                pengunjungan Situs, isi dan/atau konten, layanan, serta fitur lainnya yang ada di dalam Situs. 
                                Dengan mengakses atau menggunakan Situs atau aplikasi lainnya yang disediakan oleh atau 
                                dalam Situs, berarti Anda telah memahami dan menyetujui serta terikat dan tunduk dengan 
                                segala syarat dan ketentuan yang berlaku di Situs ini.
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
                                    <span className="fw-bold">LAYANAN DAN/ATAU JASA</span>
                                    <p>
                                        Kami memberikan informasi mengenai produk-produk finansial yang disediakan oleh Pihak Ketiga. 
                                        Layanan ini memungkinkan Anda untuk dapat melihat, menelaah, membaca, serta membandingkan informasi tersebut.
                                    </p>
                                    <ol style={{ listStyle: 'none' }}>
                                        <li className="mb-3">
                                            2.1. Informasi yang terdapat dalam Situs Kami ditampilkan sesuai keadaan kenyataan untuk tujuan informasi umum. 
                                            Kami berusaha untuk selalu menyediakan dan menampilkan informasi yang terbaru dan akurat, 
                                            namun Kami tidak menjamin bahwa segala informasi sesuai dengan ketepatan waktu atau relevansi 
                                            dengan kebutuhan Anda.
                                        </li>
                                        <li className="mb-3">
                                            2.2. Diharapkan Anda tidak menganggap atau berasumsi bahwa Situs ini dapat dijadikan sebagai saran 
                                            keuangan dan/atau finansial, atau rekomendasi atas produk serta layanan yang ditampilkan. 
                                            Informasi di Situs ini disediakan untuk membantu Anda dalam memilih produk atau layanan yang sesuai 
                                            dengan kebutuhan Anda. Anda sepenuhnya bertanggung jawab atas keputusan terkait pemilihan produk dan layanan, 
                                            atau dalam menandatangani kontrak berkaitan dengan sebuah produk atau layanan. 
                                            Dengan memberikan Kami rincian tentang diri pribadi Anda, dianggap Anda mengajukan diri untuk 
                                            mendapatkan suatu produk atau layanan tertentu.
                                        </li>
                                        <li className="mb-3">
                                            2.3. Layanan yang Kami berikan tidak bersifat memaksa atau mengikat, serta tidak mengharuskan Anda untuk 
                                            mengikuti informasi yang tersedia. Tidak ada situasi atau keadaan apapun yang dapat membuat Kami 
                                            dikenakan tanggung jawab atas kemungkinan kerugian yang Anda alami karena pengambilan keputusan yang 
                                            dilakukan oleh Anda sendiri terkait tindakan atas informasi produk yang kami sampaikan di Situs.
                                        </li>
                                        <li>
                                            2.4. Kami memiliki hak untuk kapan saja menampilkan, mengubah, menghapus, menghilangkan, 
                                            atau menambahkan segala konten yang ditampilkan dalam Situs ini.
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">PENGGUNAAN LAYANAN DAN JASA</span>
                                    <p>
                                        Dengan Anda melanjutkan penggunaan atau pengaksesan Situs ini, 
                                        berarti Anda telah menyatakan serta menjamin kepada Kami bahwa :
                                    </p>
                                    <ol style={{ listStyle: 'none' }}>
                                        <li className="mb-3">
                                            3.1. Anda hanya diperkenankan untuk mengakses dan/atau menggunakan Situs ini untuk keperluan 
                                            pribadi dan non-komersil, yang berarti bahwa Situs ini hanya boleh diakses dan digunakan secara 
                                            langsung oleh individu atau bisnis yang sedang mencari produk atau layanan untuk individu 
                                            atau bisnis tersebut. Akses dan penggunaan Situs diluar dari keperluan pribadi atau non-komersil 
                                            dilarang keras, dan melanggar Syarat dan Ketentuan ini.
                                        </li>
                                        <li className="mb-3">
                                            3.2. Anda tidak diperkenankan menggunakan Situs dalam hal sebagai berikut :
                                            <ul>
                                                <li className="mb-3">
                                                    Untuk menyakiti, menyiksa, mempermalukan, memfitnah, mencemarkan nama baik, mengancam, 
                                                    mengintimidasi atau mengganggu orang atau bisnis lain, atau apapun yang melanggar 
                                                    privasi atau yang Kami anggap cabul, menghina, penuh kebencian, tidak senonoh, 
                                                    tidak patut, tidak pantas, tidak dapat diterima, mendiskriminasikan atau merusak.
                                                </li>
                                                <li className="mb-3">
                                                    Dalam cara yang melawan hukum, tindakan penipuan atau tindakan komersil.
                                                </li>
                                                <li className="mb-3">
                                                    Melanggar atau menyalahi hak orang lain, termasuk tanpa kecuali : hak paten, merek dagang, 
                                                    hak cipta, rahasia dagang, publisitas, dan hak milik lainnya.
                                                </li>
                                                <li className="mb-3">
                                                    Untuk membuat, memeriksa, memperbarui, mengubah atau memperbaiki database, rekaman atau 
                                                    direktori Anda ataupun orang lain.
                                                </li>
                                                <li className="mb-3">
                                                    Mengubah atau mengatur ulang bagian apapun dalam Situs ini yang akan mengganggu atau 
                                                    menaruh beban berlebihan pada sistem komunikasi dan teknis kami.
                                                </li>
                                                <li className="mb-3">
                                                    Mengunakan kode komputer otomatis, proses, program, robot, net crawler, spider, 
                                                    pemrosesan data, trawling atau kode komputer, proses, program atau sistem 
                                                    screen scraping alternatif.
                                                </li>
                                                <li>
                                                    Melanggar Syarat dan Ketentuan, atau petunjuk lainnya yang ada pada Situs.
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="mb-3">
                                            3.3. Kami tidak bertanggung jawab atas kehilangan akibat kegagalan mengakses Situs, 
                                            dan metode penggunaan Situs yang diluar kendali Kami.
                                        </li>
                                        <li>
                                            3.4. Kami tidak bertanggung jawab atau dapat dipersalahkan atas kehilangan atau kerusakan 
                                            yang diluar perkiraan saat Anda mengakses atau menggunakan Situs ini. 
                                            Ini termasuk kehilangan penghematan yang diharapkan, kehilangan bisnis atau kesempatan bisnis, 
                                            kehilangan pemasukan atau keuntungan, atau kehilangan atau kerusakan apapun yang Anda 
                                            harus alami akibat penggunaan Situs ini.
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">HAK INTELEKTUAL PROPERTI</span>
                                    <p>
                                        Semua Hak Kekayaan Intelektual yang ada di dalam Situs ini adalah milik Kami. 
                                        Tiap atau keseluruhan informasi dan materi dan konten, termasuk namun tidak terbatas pada tulisan, 
                                        perangkat lunak, teks, data, grafik, gambar, audio, video, logo, ikon atau kode-kode html 
                                        dan kode-kode lain yang ada di Situs ini dilarang dipublikasikan, dimodifikasi, disalin, 
                                        digandakan atau diubah dengan cara apapun di luar area Situs ini tanpa izin dari Kami. 
                                        Pelanggaran terhadap hak-hak Situs ini dapat ditindak sesuai dengan peraturan yang berlaku.
                                    </p>
                                    <p>
                                        Anda dapat menggunakan informasi atau isi dalam Situs hanya untuk penggunaan pribadi non-komersil. 
                                        Kecuali ditentukan sebaliknya dan/atau diperbolehkan secara tegas oleh undang-undang hak cipta, 
                                        maka Pengguna dilarang untuk menyalin, membagikan ulang, mentransmisi ulang, meretas, mempublikasi 
                                        atau melakukan tindakan eksploitasi komersial dari pengunduhan yang dilakukan tanpa seizin 
                                        Kami sebagai pemilik Hak Intelektual Properti tersebut. Dalam hal Pengguna telah mendapatkan 
                                        izin yang diperlukan maka Pengguna dilarang melakukan perubahan atau penghapusan. 
                                        Pengguna dengan ini menyatakan menerima dan mengetahui bahwa dengan mengunduh materi 
                                        Hak Intelektual Properti bukan berarti mendapatkan hak kepemilikan atas pengunduhan materi 
                                        Hak Intelektual Properti tersebut.
                                    </p>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">KOMENTAR</span>
                                    <p>
                                        Jika Anda ingin memberikan komentar, masukan, ataupun sanggahan mengenai tiap atau keseluruhan 
                                        konten dan informasi dalam Situs, Kami juga menyediakan sarana chat/messaging, kontak email, 
                                        blog, ataupun media sosial milik Kami. Anda diperbolehkan untuk memberi komentar, dan setuju 
                                        bahwa jika diperlukan, akan Kami pergunakan untuk kepentingan informasi dan ditampilkan pada Situs Kami. 
                                        Dan harap diperhatikan bahwa komentar, masukan, atau sanggahan yang Anda berikan tidak boleh 
                                        bertentangan dengan Syarat dan Ketentuan ini, terutama seperti tercantum dalam poin 3.2.
                                    </p>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">PENGAJUAN</span>
                                    <ol style={{ listStyle: 'none', paddingLeft: 0 }}>
                                        <li className="mb-3">
                                            6.1. Anda bisa mengajukan diri untuk mendapatkan berbagai produk dan layanan seperti 
                                            yang ditampilkan di Situs ini. Produk dan layanan tersebut disediakan oleh Pihak Ketiga. 
                                            Anda sepenuhnya bertanggung jawab atas pilihan produk atau layanan, dan Kami tidak bertanggung 
                                            jawab atau dapat dipersalahkan atas kehilangan atau kerusakan yang mungkin Anda derita 
                                            akibat produk atau layanan yang Anda dapatkan saat menggunakan Situs ini, atau atas tindakan, 
                                            penghapusan atau kesalahan Pihak Ketiga yang disebut di produk atau layanan itu.
                                        </li>
                                        <li className="mb-3">
                                            6.2. Diingatkan kembali bahwa data dan deskripsi produk dan jasa pada Situs ini mungkin 
                                            tidak mewakili seluruh deskripsi dari semua pilihan dan persyaratan produk dan layanan tersebut. 
                                            Anda perlu berhati-hati dan cermat untuk melihat semua pilihan dan syarat dan kondisi dari 
                                            setiap produk atau jasa sebelum melakukan pengajuan.
                                        </li>
                                        <li className="mb-3">
                                            6.3. Jika Anda mengajukan permohonan dan mendapatkan produk atau layanan, Anda akan masuk ke 
                                            dalam kontak dengan Pihak Ketiga sebagai penyedia produk atau layanan, yang memiliki 
                                            syarat dan ketentuan sendiri. Anda bertanggung jawab untuk memastikan bahwa Anda setuju 
                                            dengan syarat dan kondisi sebelum memasuki kontrak untuk mendapatkan produk atau layanan dimaksud. 
                                            Kami tidak bertanggung jawab atau disalahkan atas segala kerugian atau kerusakan yang mungkin 
                                            Anda derita akibat syarat dan ketentuan yang berlaku di setiap kontrak antara Anda dengan Pihak Ketiga, 
                                            termasuk yang berhubungan tindakan, kelalaian atau kesalahan dari Pihak Ketiga.
                                        </li>
                                        <li className="mb-3">
                                            6.4. Anda memberikan izin pada Kami untuk memproses data-data Anda kepada Pihak Ketiga, 
                                            serta memberi kuasa kepada Pihak Ketiga untuk memeriksa semua informasi yang diberikan dengan 
                                            cara bagaimanapun, menghubungi Anda termasuk namun tidak terbatas pada komunikasi melalui 
                                            channel telepon, email, whatsapp, sms dan channel lainnya untuk pemasaran dari produk maupun 
                                            layanan yang disediakan oleh Pihak Ketiga pada Situs, termasuk namun tidak terbatas untuk 
                                            keperluan Sistem Layanan Informasi Keuangan (SLIK) OJK, biro kredit dan/atau sejenisnya.
                                        </li>
                                        <li className="mb-3">
                                            6.5. Anda memberikan izin pada Kami untuk memproses data Anda untuk meningkatkan layanan Kami 
                                            dalam bentuk apapun, termasuk tapi tidak terbatas untuk keperluan pemasaran dan peningkatan layanan Kami.
                                        </li>
                                    </ol>
                                </li>
                                <li className="mb-3">
                                    <span className="fw-bold">TAUTAN LAINNYA</span>
                                    <p>
                                        Situs Kami mungkin menyediakan beberapa tautan tertentu yang merujuk atau mengarahkan Anda ke 
                                        laman dari situs Pihak Ketiga, juga termasuk di dalamnya tautan yang tersedia pada halaman 
                                        hasil pencarian produk tertentu. Anda mengetahui, memahami, serta menyetujui bahwa Kami 
                                        tidak bertanggung jawab atas konten dan/atau materi lainnya yang terdapat dalam tautan milik 
                                        Pihak Ketiga tersebut. Anda bertanggung jawab atas resiko ketika mengakses dan menggunakan 
                                        tautan milik Pihak Ketiga tersebut. Dan disarankan Anda juga dapat membaca serta memahami isi 
                                        dari Syarat dan Ketentuan yang berlaku di tautan milik Pihak Ketiga tersebut.
                                    </p>
                                </li>
                                {/* <li className="mb-3">
                                    <span className="fw-bold">ATURAN KEANGGOTAAN</span>
                                    <p>
                                        Selain menampilkan informasi produk-produk finansial dan/atau keuangan, Kami juga menyediakan 
                                        keanggotaan bagi Anda selaku Pengguna. Anda dapat memeriksa riwayat keuangan Anda dan juga 
                                        menemukan produk yang sesuai dengan profil Anda, serta juga dapat berpartisipasi di Forum yang juga Kami sediakan.
                                    </p>
                                </li> */}
                                <li className="mb-3">
                                    <span className="fw-bold">UMUM</span>
                                    <ol style={{ listStyle: 'none', paddingLeft: 0 }}>
                                        <li className="mb-3">
                                            8.1. Penggunaan dan akses ke Situs ini diatur oleh Syarat dan Ketentuan serta Kebijakan Privasi Kami. 
                                            Dengan mengakses atau menggunakan Situs ini, informasi, atau aplikasi lainnya dalam bentuk aplikasi 
                                            mobile yang disediakan dalam Situs, berarti Anda telah memahami, menyetujui serta terikat dan 
                                            tunduk dengan segala syarat dan ketentuan yang berlaku di Situs ini.
                                        </li>
                                        <li className="mb-3">
                                            8.2. Kami berhak untuk menutup atau mengubah atau memperbaharui Syarat dan Ketentuan ini setiap 
                                            saat tanpa pemberitahuan, dan berhak untuk membuat keputusan akhir jika tidak ada ketidakcocokan. 
                                            Kami tidak bertanggung jawab atas kerugian dalam bentuk apa pun yang timbul akibat perubahan 
                                            pada Syarat dan Ketentuan.
                                        </li>
                                        <li className="mb-3">
                                            8.3. Jika Anda masih memerlukan jawaban atas pertanyaan yang tidak terdapat dalam Syarat dan Ketentuan ini, 
                                            Anda dapat menghubungi Kami di email cs@adiradana.com atau menghubungi Kami di nomor 081296642578.
                                        </li>
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