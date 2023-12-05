import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Adsense } from '@ctrl/react-adsense';
import styles from './Artikel.module.css'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
    TelegramIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share'
import ArticleTag from '../../components/ArticleTag';

function Article({ article, content, tags, otherArticles }) {
    // console.log(article)
    
    const router = useRouter();
    const canonicalURL = process.env.APP_URL + router.asPath;

    const date = parseISO(article.date);

	return (
		<>
			<NextSeo
                title={article.title.rendered + ' - Adira Dana'}
                description={article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: article.title.rendered + ' - Adira Dana',
                    description: article.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
                    type: 'article',
                    article: {
                        publishedTime: article.date,
                        modifiedTime: article.modified,
                        section: 'Artikel',
                        authors: [
                            'Adira Dana'
                        ],
                        tags: tags.map(v => v.name)
                    },
                    images: [
                        {
                            url: article._embedded['wp:featuredmedia']?.[0].source_url,
                            width: article._embedded['wp:featuredmedia']?.[0].media_details.width,
                            height: article._embedded['wp:featuredmedia']?.[0].media_details.height,
                            alt: article.title.rendered + '- Adira Dana',
                            type: article._embedded['wp:featuredmedia']?.[0].mime_type,
                        },
                        // {
                        //     url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.large.source_url,
                        //     width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.large.width,
                        //     height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.large.height,
                        //     alt: article.title.rendered + '- Adira Dana',
                        //     type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.large.mime_type,
                        // },
                        {
                            url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.source_url,
                            width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.width,
                            height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.height,
                            alt: article.title.rendered + '- Adira Dana',
                            type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.mime_type,
                        },
                        {
                            url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.source_url,
                            width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.width,
                            height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.height,
                            alt: article.title.rendered + '- Adira Dana',
                            type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.mime_type,
                        },
                        {
                            url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url,
                            width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.width,
                            height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.height,
                            alt: article.title.rendered + '- Adira Dana',
                            type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.mime_type,
                        },
                    ]
                }}
            />

            <ArticleJsonLd
                useAppDir={false}
                url={canonicalURL}
                title={article.title.rendered}
                images={[
                    article._embedded['wp:featuredmedia']?.[0].source_url,
                    // article._embedded['wp:featuredmedia']?.[0].media_details.sizes.large.source_url,
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.source_url,
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.source_url,
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url
                ]}
                datePublished={article.date}
                dateModified={article.modified}
                authorName={[
                    {
                        name: 'Adira Dana',
                        url: process.env.APP_URL
                    },
                ]}
                publisherName="Adira Dana"
                publisherLogo={process.env.APP_URL + '/assets/images/brand/logo/adira-putih.png'}
                description={article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
                isAccessibleForFree={true}
            />
			
			<section className="pt-md-5">
                <div className={styles.contentContainer}>
                    <div id={styles.singlePostContainer} className={styles.singlePostContainer}>
                        <div className={styles.singlePostHeader}>
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
                                        label: article.title.rendered,
                                        path: `/artikel/${article.slug}`,
                                    }
                                ]}
                            />

                            <h1 className={styles.postCardTitle}>
                                {article.title.rendered}
                            </h1>
                            <div className={styles.postCardTime}>
                                { format(date, 'd LLLL yyyy', { locale: id }) }
                            </div>
                        </div>
                        <div className={styles.singlePostContent}>
                            <div className={styles.singlePostDesc}>
                                <Image 
                                    src={article._embedded['wp:featuredmedia']?.[0].source_url}
                                    width={750}
                                    height={410}
                                    alt={article.title.rendered}
                                    className="img-fluid rounded-3 mx-auto"
                                    priority
                                />
                                <div className="mt-3" dangerouslySetInnerHTML={{ __html: content }}></div>

                                {/* <p>
                                    <strong>
                                        Kamu Mungkin Ingin Baca Juga:
                                    </strong>
                                </p>

                                <p>
                                    <a
                                        href="https://gojek.onelink.me/2351932542?pid=Instagram&c=TIX%20&af_channel=Social_Media&af_adset=TIX%20&af_ad=TIX%20&is_retargeting=true&af_click_lookback=7d&af_dp=gojek://gocore/web?url=https://go-tix.id/blogs/9-karakter-yang-pasti-muncul-di-black-panther-wakanda-forever&af_web_dp=https://go-tix.id/blogs/9-karakter-yang-pasti-muncul-di-black-panther-wakanda-forever&utm_source=Instagram&utm_medium=Social_Media&utm_campaign=TIX%20&utm_term=TIX%20&utm_content=TIX%20&af_force_deeplink=true"
                                        target="_blank" rel="nofollow external noopener noreferrer">9
                                        Karakter Yang Dipastikan Muncul di “Black Panther: Wakanda Forever”
                                    </a>
                                </p> */}

                                {/* <p className="text-black">
                                    Penulis: Adira Dana
                                </p> */}

                                {/* <div className="d-flex">
                                    <Link href="#">
                                        <span className="badge rounded-pill text-bg-secondary">
                                            gadai bpkb medan
                                        </span>
                                    </Link>
                                </div> */}
                                { tags ? <ArticleTag tags={tags} /> : '' }

                                
                                
                                <div className={styles.singlePostShare}>
                                    <div className={styles.singlePostShareBtn}>
                                        <p>
                                            Bagikan artikel ini
                                        </p>
                                        <div className="d-flex" style={{ gap: 5 }}>
                                            <FacebookShareButton
                                                url={canonicalURL}
                                                quote={article.excerpt.rendered}
                                                hashtag={'#adiradana'}
                                            >
                                                <FacebookIcon size={32} round />
                                            </FacebookShareButton>

                                            <WhatsappShareButton
                                                url={canonicalURL}
                                                title={article.title.rendered}
                                                separator=":: "
                                            >
                                                <WhatsappIcon size={32} round />
                                            </WhatsappShareButton>

                                            <TwitterShareButton
                                                url={canonicalURL}
                                                title={article.title.rendered}
                                            >
                                                <TwitterIcon size={32} round />
                                            </TwitterShareButton>

                                            <FacebookMessengerShareButton
                                                url={canonicalURL}
                                                appId={''}
                                            >
                                                <FacebookMessengerIcon size={32} round />
                                            </FacebookMessengerShareButton>

                                            <TelegramShareButton
                                                url={canonicalURL}
                                                title={article.title.rendered}
                                            >
                                                <TelegramIcon size={32} round />
                                            </TelegramShareButton>

                                            <EmailShareButton
                                                url={canonicalURL}
                                                subject={article.title.rendered}
                                                body={article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
                                            >
                                                <EmailIcon size={32} round />
                                            </EmailShareButton>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <Adsense
                                        client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
                                        slot="9078946220"
                                        style={{ display: 'block' }}
                                        format="autorelaxed"
                                    />
                                </div>
                            </div>
                            <div className={styles.singlePostSidebar}>
                                <aside>
                                    <section>
                                        <h2 className="mb-3">Artikel Populer</h2>
                                        <ul>
                                            {
                                                otherArticles.map((v, i) => {
                                                    const date = parseISO(v.date);

                                                    return (
                                                        <li key={i}>
                                                            <Link href={`/artikel/${v.slug}`} className="text-dark" >
                                                                
                                                                    <Image
                                                                        src={v._embedded['wp:featuredmedia']?.[0].source_url}
                                                                        width={1125}
                                                                        height={800}
                                                                        alt={v.title.rendered}
                                                                    />
                                                                    <div className={styles.sidebarDescWrapper}>
                                                                        <span className={styles.titlePostSidebar}>
                                                                            {v.title.rendered}
                                                                        </span>
                                                                        <span className={styles.timePostSidebar}>
                                                                            { format(date, 'd LLLL yyyy', { locale: id }) }
                                                                        </span>
                                                                    </div>
                                                                
                                                            </Link>
                                                        </li>
                                                    )
                                                }) 
                                            }
                                        </ul>
                                    </section>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</>
	)
}

export async function getServerSideProps({ params }) {
    const getArticle = await fetch(`${process.env.CMS_API_URL}/posts?_embed&slug=${params.slug}`)
  	const article = await getArticle.json()

    let paraStr = article[0].content.rendered
    let paraArray = paraStr.split("</p>")
    let content = "";
    paraArray.forEach(myFunction);
    function myFunction(item, index) {
        if (index & 1){
            content += item + `
            <br> 
            <Adsense
                client="${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}"
                slot="6654913117"
                style={{ display: 'block', textAlign: 'center' }}
                layout="in-article"
                format="fluid"
            />
            <br>`; 
        } else {
            content += item; 
        }
    }

    const tags = []
    if(article[0].tags) {
        for(const tagId of article[0].tags) {
            const getTag = await fetch(`${process.env.CMS_API_URL}/tags/${tagId}`)
            const tag = await getTag.json()

            tags.push({
                id: tag.id,
                name: tag.name,
                slug: tag.slug
            })
        }
    }

    const getOtherArticles = await fetch(`${process.env.CMS_API_URL}/posts?categories=13&_embed&per_page=5&exclude=${article[0].id}`)
  	const otherArticles = await getOtherArticles.json()

	return {
		props: {
			article: article[0],
            content,
            tags: tags,
            otherArticles
		}
	}
}

export default Article