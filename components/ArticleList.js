import Link from 'next/link'
import Image from 'next/image'
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'

export default function ArticleList({ articles }) {
    // return console.log(articles)
    if(articles == null) {
        return (
            <div className="row">
                <div className="col-12 text-center">
                    {/* Tidak ada data Cabang */}
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            {
                articles.map((v, i) => {
                    const date = parseISO(v.date);

                    return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                            <div className="card mb-4 mb-lg-0">
                                <div>
                                    <Link href={'/artikel/' + v.slug}>
                                        <Image 
                                            src={v._embedded['wp:featuredmedia']?.[0].source_url}
                                            width={358}
                                            height={250}
                                            alt={v.title.rendered}
                                            className="img-fluid rounded-top-md"
                                        />
                                    </Link>
                                </div>
                                <div className="card-body p-5">
                                    <h3 className="mb-2">
                                        <Link href={'/artikel/' + v.slug} className="text-inherit">
                                            {v.title.rendered}
                                        </Link>
                                    </h3>
                                    <p className="fs-6 text-uppercase fw-bold">
                                        <span>
                                            { format(date, 'd LLLL yyyy', { locale: id }) }
                                        </span>
                                    </p>
                                    <div dangerouslySetInnerHTML={{ __html: v.excerpt.rendered }}></div>
                                    <Link href={'/artikel/' + v.slug} className="btn-link border-bottom border-primary border-2 fw-bold fs-5">
                                        Lanjut Baca
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }) 
            }
        </div>
    )
}