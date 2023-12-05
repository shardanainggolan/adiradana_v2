import Link from 'next/link'
import Image from 'next/image'

export default function OtherArticle({ articles }) {
	return (
        <div>
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2 className="mb-4">
                        Artikel Lainnya
                    </h2>
                </div>
            </div>
            <div className="border-bottom pb-6 mb-6">
                <div className="row">
                    {
                        articles.map((v, i) => 
                            (
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" key={i}>
                                    <div className="mb-4">
                                        <Link href={`/artikel/${v.slug}`}>
                                            <Image
                                                src={process.env.BACKEND_URL + '/uploads/articles/' + v.image}
                                                width={300}
                                                height={180}
                                                alt={v.title}
                                                className="img-fluid w-100 rounded-3"
                                            />
                                        </Link>
                                    </div>
                                    <div>
                                        <h4 className="mb-1">
                                            <Link href={`/artikel/${v.slug}`}>
                                                {v.title}
                                            </Link>
                                        </h4>
                                        {/* <span className="fs-5 fw-semi-bold">
                                            in <a href="#!"> “Home Loan” </a>
                                        </span> */}
                                    </div>
                                </div>
                            )
                        ) 
                    }
                </div>
            </div>
        </div>
	)
}