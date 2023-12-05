import Link from "next/link"
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import styles from '../Artikel.module.css'
import useTagNavigationStore from "../../../store/tagNavigation";
import Breadcrumbs from '../../../components/Breadcrumbs'
import { Adsense } from '@ctrl/react-adsense';

export default function Tag({ tags }) {
    const router = useRouter();
    const canonicalURL = process.env.APP_URL + router.asPath

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
                    ],
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
                        }
                    ]}
                />

                <div className={styles.contentHeader}>
                    <h1>Tag</h1> 
                </div>
                <div className={styles.contentContainer}>
                    <div className="d-flex flex-wrap align-items-center px-md-0 px-4" style={{ gap: 5, width: '100%' }}>
                        {
                            tags.map((v, i) => (
                                <Link 
                                    href={`/artikel/tag/${v.slug}`}
                                    onClick={() => useTagNavigationStore.setState({ 
                                        tag: { 
                                            id: v.id,
                                            name: v.name, 
                                            slug: v.slug 
                                        } 
                                    })} 
                                    key={i}
                                >
                                    <span className="badge rounded-pill text-bg-secondary">
                                        #{v.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-3">
                    <Adsense
                        client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
                        slot="2997851086"
                        style={{ display: 'block' }}
                        format="auto"
                        responsive="true"
                    />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const getTags = await fetch(`${process.env.CMS_API_URL}/tags`)
  	const tags = await getTags.json()

	return {
		props: {
			tags
		}
	}
}