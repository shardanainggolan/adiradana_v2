import Link from 'next/link'
import Image from 'next/image'

export default function Article({...props}) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card mb-4 mb-lg-0">
                <div>
                    <Link href={'/artikel/' + props.slug}>
                        <Image 
                            src={props.featuredImage}
                            width={358}
                            height={250}
                            alt={props.title}
                            className="img-fluid rounded-top-md"
                        />
                    </Link>
                </div>
                <div className="card-body p-5">
                    <h3 className="mb-2">
                        <Link href={'/artikel/' + props.slug} className="text-inherit">
                            {props.title}
                        </Link>
                    </h3>
                    <p className="fs-6 text-uppercase fw-bold">
                        <span>{props.date}</span>
                    </p>
                    <p>{props.title}</p>
                    <Link href={'/artikel/' + props.slug} className="btn-link border-bottom border-primary border-2 fw-bold fs-5">
                        Lanjut Baca
                    </Link>
                </div>
            </div>
        </div>
    )
}