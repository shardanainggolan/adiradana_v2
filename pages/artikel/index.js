import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'
import axios from "axios";
import styles from './Artikel.module.css'

export default function Article({ articles }) {
    const router = useRouter();
    const canonicalURL = process.env.APP_URL + router.asPath;

    return (
        <>
            <NextSeo
                title="Berita Keuangan, Gadai BPKB, dan Artikel Lainnya di adiradana.com"
                description="Temukan berita terbaru tentang keuangan, pinjaman dana, gadai bpkb, kredit, dan topik menarik lainnya hanya di ADIRADANA.COM."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Berita Keuangan, Gadai BPKB, dan Artikel Lainnya di adiradana.com',
                    description: 'Temukan berita terbaru tentang keuangan, pinjaman dana, gadai bpkb, kredit, dan topik menarik lainnya hanya di ADIRADANA.COM.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/logo-adira-kuning-600x315.jpeg`,
                            width: 600,
                            height: 315,
                            alt: 'Adira Dana',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />
        
            <section className="py-md-10 py-3 px-md-10 bg-white">
                <div className={styles.contentHeader}>
                    <h1>ARTIKEL</h1> 

                    {/* <div className="search-header">  
                        <form autoComplete="off" action="/action_page.php">
                            <div className="autocomplete">
                                <img src="wp-content/themes/tixweb/css/images/Icon_Outline_Search.svg" alt="search-outline-icon" />
                                <input id="myInput" type="text" name="myCountry" placeholder="Search Blog..." />
                            </div>
                        </form>
                    </div> */}
                </div>
                <div className={styles.contentContainer}>
                    {
                        articles.map((v, i) => {
                            const date = parseISO(v.date);

                            return (
                                <article key={i}>
                                    <div className="post-card">
                                        <Link href={`/artikel/${v.slug}`}>
                                            <div className={styles.postCardBanner}>
                                                <Image 
                                                    width={1125}
                                                    height={800}
                                                    src= {v._embedded['wp:featuredmedia']?.[0].source_url}
                                                    // src="/assets/images/background/header.png"
                                                    alt={v.title.rendered}
                                                    // style={{ objectFit: 'cover !importa' }}
                                                    // srcSet="https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2023/04/01164044/GOTIX_GPLPROMO_050123_BLOG-01.jpg 1125w,https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2023/04/01164044/GOTIX_GPLPROMO_050123_BLOG-01-300x213.jpg 300w,https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2023/04/01164044/GOTIX_GPLPROMO_050123_BLOG-01-1024x728.jpg 1024w,https://s3-ap-southeast-1.amazonaws.com/loket-gotix/blog/2023/04/01164044/GOTIX_GPLPROMO_050123_BLOG-01-768x546.jpg 768w"
                                                    // sizes="(max-width: 1125px) 100vw, 1125px"
                                                />
                                            </div>
                                            <h2 className={`${styles.postCardTitle} h4 fw-bold mt-2`}>
                                                {v.title.rendered}
                                            </h2>
                                            <div className={styles.postCardTime}>
                                                { format(date, 'd LLLL yyyy', { locale: id }) }
                                            </div>
                                        </Link>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
	// const getArticles = await fetch(`${process.env.BACKEND_URL}/api/article`)
  	// const articles = await getArticles.json()

    const getArticles = await fetch(`${process.env.CMS_API_URL}/posts?categories=13&_embed`)
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