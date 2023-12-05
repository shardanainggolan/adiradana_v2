import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'
import styles from '../Artikel.module.css'
import useTagNavigationStore from "../../../store/tagNavigation";
import useSWR from 'swr';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Breadcrumbs from '../../../components/Breadcrumbs'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Tag() {
    const router = useRouter();
    const canonicalURL = process.env.APP_URL + router.asPath
    
    const tag = useTagNavigationStore((state) => state.tag);

    const { data: articles, error, isLoading } = useSWR(`${process.env.CMS_API_URL}/posts?_embed&tags=${tag.id}`, fetcher);

    if (error) return (
        <section className="py-md-10 py-3 px-md-10 bg-white">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <h3>Tidak ada data</h3>
                </div>
            </div>
        </section>
    );

    if (isLoading) {
        return (
            <section className="py-md-10 py-3 px-md-10 bg-white">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <ClimbingBoxLoader
                            color="#fcd733"
                            size={25}
                            data-testid="loader"
                            className="text-center"
                        />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            <NextSeo
                title="Adira Dana - Baca artikel terbaru hari ini di ADIRADANA.COM: Berita keuangan, pinjaman dana, gadai bpkb, kredit, dan artikel lainnya."
                description="Baca artikel terbaru hari ini di ADIRADANA.COM: Berita keuangan, pinjaman dana, gadai bpkb, kredit, dan artikel lainnya."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Adira Dana - Baca artikel terbaru hari ini di ADIRADANA.COM: Berita keuangan, pinjaman dana, gadai bpkb, kredit, dan artikel lainnya.',
                    description: 'Baca artikel terbaru hari ini di ADIRADANA.COM: Berita keuangan, pinjaman dana, gadai bpkb, kredit, dan artikel lainnya.',
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
                <Breadcrumbs
                    items={[
                        {
                            label: (
                                'Beranda'
                            ),
                            path: "/",
                        },
                        {
                            label: "Artikel",
                            path: "/artikel",
                        },
                        {
                            label: "Tag",
                            path: "/artikel/tag",
                        },
                        {
                            label: tag.name,
                            path: `/artikel/tag/${tag.slug}`,
                        }
                    ]}
                />

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
                        // console.log(data)
                        articles.map((v, i) => {
                            // console.log(v)
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
                                                    alt={v.title.rendered}
                                                />
                                            </div>
                                            <h1 className={styles.postCardTitle}>
                                                {v.title.rendered}
                                            </h1>
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