import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function BranchList({ branches }) {
    if(branches == null) {
        return (
            <section className="py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center text-dark h4 fs-3">
                            Tidak ada data Cabang
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    { 
                        branches.map((v, i) => 
                            (
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mb-5" key={i}>
                                    <div className="card h-100 smooth-shadow-sm border-0">
                                        <div className="card-body">
                                            <h4 className="fw-semi-bold">{v.name}</h4>
                                            <p>{v.address}</p>
                                            <p className="small">
                                                { v.region.subDistrict.subDistrict }, { v.region.district.district }, { v.region.province.province }
                                            </p>
                                        </div>
                                        <div className="card-footer p-2">
                                            <Link href={`/cabang/${v.slug}`}>
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-sm text-dark d-flex justify-content-center align-items-center" style={{ gap: 5 }}>
                                                        Lihat Detail Cabang
                                                        <FaArrowRight />
                                                    </button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) 
                    }
                </div>
            </div>
        </section>
    )
}