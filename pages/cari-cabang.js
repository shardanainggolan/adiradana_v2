import { useState } from 'react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Select from 'react-select';
import BranchList from '../components/BranchList';
import PropagateLoader from "react-spinners/PropagateLoader";
import { FaMapPin } from 'react-icons/fa'

export default function CariCabang({ branches, provinceOptions }) {
	const [ loading, setLoading ] = useState(false);
	const [ isShowButtonClearFilter, setIsShowButtonClearFilter ] = useState(false);
	const [ branchList, setBranchList ] = useState(branches)
	const [ selectedProvinceId, setSelectedProvinceId ] = useState(null)
	const [ selectedDistrictId, setSelectedDistrictId ] = useState(null)
	const [ districtOptions, setDistrictOptions ] = useState([]);

	const canonicalURL = process.env.APP_URL + useRouter().pathname;

	const MapComponent = dynamic(() => import('../components/MapComponent'), {
		ssr: false,
	});

	const handleProvince = async (province) => {
		setDistrictOptions([])
		setSelectedDistrictId(null)

		if(!province) {
			setIsShowButtonClearFilter(false)
			setSelectedProvinceId(null)
			setDistrictOptions([])
			setBranchList([])
			setLoading(true)

			setTimeout(() => {
				setLoading(false)
				setBranchList(branches)
			}, 1500)

			return false
		}

		const getBranches = await fetch(`${process.env.BACKEND_URL}/api/branch?provinceId=${province.value}`)
		const branchList = await getBranches.json()

		const getDistrictByProvinceId = await fetch(`${process.env.BACKEND_URL}/api/region/district?provinceId=${province.value}`)
		const districts = await getDistrictByProvinceId.json()

        const districtArr = districts.data.map(v => {
            return {
                value: v.districtId,
                label: v.district
            }
        })

		setSelectedProvinceId(province.value)
		setBranchList([])
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setDistrictOptions(districtArr)
			setBranchList(branchList.data)
			setIsShowButtonClearFilter(true)
		}, 1500)
	}

	const handleDistrict = async (district) => {
		if(!district) {
			const getBranches = await fetch(`${process.env.BACKEND_URL}/api/branch?provinceId=${selectedProvinceId}`)
  			const branchLists = await getBranches.json()

			setBranchList([])
			setSelectedDistrictId(null)
			setLoading(true)

			setTimeout(() => {
				setLoading(false)
				setBranchList(branchLists.data)
			}, 1500)

			return false
		}

		const getBranches = await fetch(`${process.env.BACKEND_URL}/api/branch?provinceId=${selectedProvinceId}&districtId=${district.value}`)
  		const branchLists = await getBranches.json()

		setSelectedDistrictId(district.value)
		setBranchList([])
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setBranchList(branchLists.data)
		}, 1500)
    }

	const handleClearFilter = () => {
		setIsShowButtonClearFilter(false)
		setLoading(true)
		setSelectedProvinceId(null)
		setSelectedDistrictId(null)
		setBranchList([])

		setTimeout(() => {
			setLoading(false)
			setBranchList(branches)
		}, 1500)
	}

	return (
		<>
			<NextSeo
                title="Adira Dana - Cari Lokasi Cabang Adira Finance"
                description="Temukan cabang Adira Finance terdekat dengan mudah dan cepat di adiradana.com."
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: 'Adira Dana - Cari Lokasi Cabang Adira',
                    description: 'Temukan cabang Adira Finance terdekat dengan mudah dan cepat di adiradana.com.',
                    images: [
                        {
                            url: `${process.env.APP_URL}/assets/images/logo-adira-kuning-600x315.jpeg`,
                            width: 600,
                            height: 315,
                            alt: 'Adira Dana - Cari Lokasi Cabang Adira',
                            type: 'image/jpeg',
                        },
                    ]
                }}
            />
			
            <section className="bg-white" style={{ height: 400, position: 'relative' }}>
				<MapComponent branches={branches} />
			</section>

			<section className="pt-5 pb-2 mb-3">
				<div className="container">
					<di className="row">
						<div className="col-12 text-center">
							<h1 className="mb-5">
								Temukan Kantor Cabang Adira Terdekat dengan Mudah!
							</h1>
							{/* <p className="mb-0">
								
							</p> */}
						</div>
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										<h2 className="h4 d-flex align-items-center" style={{ gap: 5 }}>
											<FaMapPin className="text-primary" />
											Cari Cabang
										</h2>
									</div>
									<div className="row g-3">
										<div className="col-md-6 col-12">
											<label className="form-label">
												Provinsi
											</label>
											<Select
												instanceId="provinceId"
												isClearable
												options={provinceOptions} 
												value={selectedProvinceId ? provinceOptions.find(c => c.value === selectedProvinceId) : ''}
												onChange={val => handleProvince(val)}
											/>
										</div>
										<div className="col-md-6  col-12">
											<label className="form-label">
												Kabupaten/Kota
											</label>
											<Select
												instanceId="districtId"
												isClearable
												options={districtOptions} 
												value={selectedDistrictId ? districtOptions.find(c => c.value === selectedDistrictId) : ''}
												onChange={val => handleDistrict(val)}
											/>
										</div>
										<div className={`col-12 ${isShowButtonClearFilter ? 'd-block' : 'd-none'}`}>
											<button className="btn btn-sm btn-primary text-dark" onClick={handleClearFilter}>
												Hapus Pencarian
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</di>
				</div>
			</section>

			<section className={`py-10 ${loading ? 'd-block' : 'd-none'}`}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<PropagateLoader
								color="#fcd733"
								loading={loading}
								size={15}
								aria-label="Loading Spinner"
								data-testid="loader"
								className="text-center"
							/>
						</div>
					</div>
				</div>
			</section>

			<BranchList branches={branchList} />
		</>
	)
}

export async function getStaticProps() {
	const getBranches = await fetch(`${process.env.BACKEND_URL}/api/branch`)
  	const branches = await getBranches.json()

	const getProvinces = await fetch(`${process.env.BACKEND_URL}/api/region/province`)
  	const provinces = await getProvinces.json()

	const provinceOptions = provinces.data.map(v => {
        return {
            value: v.provinceId,
            label: v.province
        }
    })

	return {
		props: {
			branches: branches.data,
			provinces: provinces.data,
			provinceOptions
		},
		revalidate: 10,
	}
}