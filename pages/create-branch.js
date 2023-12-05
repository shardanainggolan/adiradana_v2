import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Select from 'react-select';

export default function CreateBranch({ provinces, provinceOptions }) {
    const [districtOptions, setDistrictsOptions] = useState([]);
    const [subDistrictOptions, setDubDistrictsOptions] = useState([]);

    // const [selectedProvince, setDubDistrictsOptions] = useState([]);

    const { register, handleSubmit, control, reset, formState, setValue, formState: { errors, isSubmitSuccessful } } = useForm();
    
    const handleProvince = async (provinceId) => {
        // console.log(province.value)
        setValue('provinceId', provinceId)

        const getDistrictByProvinceId = await fetch(`${process.env.BACKEND_URL}/api/region/district?provinceId=${provinceId}`)
  	    const districts = await getDistrictByProvinceId.json()

        // console.log(districts.data)
        const districtArr = districts.data.map(v => {
            return {
                value: v.districtId,
                label: v.district
            }
        })

        setDistrictsOptions(districtArr)
    }

    const handleDistrict = async (districtId) => {
        // console.log(province.value)
        setValue('districtId', districtId)

        const getSubDistrictByDistrictId = await fetch(`${process.env.BACKEND_URL}/api/region/sub-district?districtId=${districtId}`)
  	    const subDistricts = await getSubDistrictByDistrictId.json()

        // console.log(districts.data)
        const subDistrictArr = subDistricts.data.map(v => {
            return {
                value: v.subDistrictId,
                label: v.subDistrict
            }
        })

        setDubDistrictsOptions(subDistrictArr)
    }

    const onSubmit = data => {
        // return console.log(data)
        const MySwal = withReactContent(Swal)

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', data.image[0])
        formData.append('description', data.description)
        formData.append('address', data.address)
        formData.append('provinceId', data.provinceId)
        formData.append('districtId', data.districtId)
        formData.append('subDistrictId', data.subDistrictId)
        formData.append('postalCode', data.postalCode)
        formData.append('telp1', data.telp1)
        formData.append('telp2', data.telp2)
        formData.append('telp3', data.telp3)
        formData.append('fax1', data.fax1)
        formData.append('fax2', data.fax2)
        formData.append('fax3', data.fax3)
        formData.append('latitude', data.latitude)
        formData.append('longitude', data.longitude)
        formData.append('gmapsLink', data.gmapsLink)

        axios.post(`${process.env.BACKEND_URL}/api/branch`, formData)
        .then(res => {
            MySwal.fire({
                title: <strong>Berhasil membuat cabang</strong>,
                icon: 'success',
                timer: 8000
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);

	return (
		<>
			<NextSeo
                title="Adira Dana - Create Branch"
                description="Create Branch"
                noindex={true}
                nofollow={true}
                canonical={process.env.APP_URL}
            />
			
			<section className="py-lg-16 py-10">
				<div className="container">
					<div className="row">
						<div className="col-12">
                        <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">
                                    Nama Cabang
                                    <span className="text-danger">*</span>
                                </label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    placeholder="Nama Cabang" 
                                    className="form-control"
                                    aria-describedby="validationName"
                                    {...register('name', { required: true })} 
                                />
                                {
                                    errors.name && 
                                    <div id="validationName" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Nama
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Deskripsi
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea 
                                    className="form-control" 
                                    rows="5" 
                                    id="description" 
                                    name="description" 
                                    placeholder="Deskripsi"
                                    aria-describedby="validationDesc"
                                    {...register('description', { required: true })} 
                                ></textarea>
                                {
                                    errors.description && 
                                    <div id="validationDesc" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Deskripsi
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Alamat
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea 
                                    className="form-control" 
                                    rows="3" 
                                    id="address" 
                                    name="address" 
                                    placeholder="Alamat"
                                    aria-describedby="validationAddress"
                                    {...register('address', { required: true })} 
                                ></textarea>
                                {
                                    errors.address && 
                                    <div id="validationAddress" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Alamat
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="provinceId" className="form-label">
                                    Provinsi
                                    <span className="text-danger">*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="provinceId"
                                    render={({ onChange, value, name, ref }) => (
                                        <Select
                                            instanceId="provinceId"
                                            inputRef={ref}
                                            options={provinceOptions} 
                                            value={provinceOptions.find(c => c.value === value)}
                                            onChange={val => handleProvince(val.value)}
                                        />
                                    )}
                                />

                                {
                                    errors.provinceId && 
                                    <div id="validationProvinceId" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Provinsi
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="districtId" className="form-label">
                                    Kabupaten Kota
                                    <span className="text-danger">*</span>
                                </label>
                                <Controller
                                    control={control}
                                    name="districtId"
                                    render={({ onChange, value, name, ref }) => (
                                        <Select
                                            instanceId="districtId"
                                            inputRef={ref}
                                            options={districtOptions} 
                                            value={districtOptions.find(c => c.value === value)}
                                            onChange={val => handleDistrict(val.value)}
                                        />
                                    )}
                                />
                                {
                                    errors.districtId && 
                                    <div id="validationDistrictId" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Kabupaten Kota
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subDistrictId" className="form-label">
                                    Kecamatan
                                    <span className="text-danger">*</span>
                                </label>
                                <Controller
                                    name="subDistrictId"
                                    control={control}
                                    aria-describedby="validationSubDistrictId"
                                    // rules={{ required: true }}
                                    render={({ onChange, value, name, ref }) => (
                                        <Select 
                                            instanceId="subDistrictId"
                                            options={subDistrictOptions} 
                                            value={subDistrictOptions.find(c => c.value === value)}
                                            onChange={val => setValue('subDistrictId', val.value)}
                                        />
                                    )}
                                />
                                {
                                    errors.subDistrictId && 
                                    <div id="validationSubDistrictId" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Kecamatan
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postalCode" className="form-label">
                                    Kode Pos
                                    <span className="text-danger">*</span>
                                </label>
                                <input 
                                    id="postalCode" 
                                    name="postalCode" 
                                    type="text" 
                                    placeholder="Kode Pos" 
                                    className="form-control"
                                    aria-describedby="validationPostalCode"
                                    {...register('postalCode', { required: true })} 
                                />
                                {
                                    errors.postalCode && 
                                    <div id="validationPostalCode" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Kode Pos
                                    </div>
                                }
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="telp1" className="form-label">
                                        Telp1
                                    </label>
                                    <input 
                                        id="telp1" 
                                        name="telp1" 
                                        type="number" 
                                        placeholder="Telpon 1" 
                                        className="form-control"
                                        {...register('telp1')} 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="telp2" className="form-label">
                                        Telp2
                                    </label>
                                    <input 
                                        id="telp2" 
                                        name="telp2" 
                                        type="number" 
                                        placeholder="Telpon 2" 
                                        className="form-control"
                                        {...register('telp2')} 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="telp3" className="form-label">
                                        Telp3
                                    </label>
                                    <input 
                                        id="telp3" 
                                        name="telp3" 
                                        type="number" 
                                        placeholder="Telpon 3" 
                                        className="form-control"
                                        {...register('telp3')} 
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="fax1" className="form-label">
                                        Fax1
                                    </label>
                                    <input 
                                        id="fax1" 
                                        name="fax1" 
                                        type="number" 
                                        placeholder="Fax 1" 
                                        className="form-control"
                                        {...register('fax1')} 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="fax2" className="form-label">
                                        Fax2
                                    </label>
                                    <input 
                                        id="fax2" 
                                        name="fax2" 
                                        type="number" 
                                        placeholder="Fax 2" 
                                        className="form-control"
                                        {...register('fax2')} 
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="fax3" className="form-label">
                                        Fax3
                                    </label>
                                    <input 
                                        id="fax3" 
                                        name="fax3" 
                                        type="number" 
                                        placeholder="Fax 3" 
                                        className="form-control"
                                        {...register('fax3')} 
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="latitude" className="form-label">
                                        Latitude
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="latitude" 
                                        name="latitude" 
                                        type="text" 
                                        placeholder="Latitude" 
                                        className="form-control"
                                        aria-describedby="validationLatitude"
                                        {...register('latitude', { required: true })} 
                                    />
                                    {
                                    errors.latitude && 
                                    <div id="validationLatitude" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Latitude
                                    </div>
                                }
                                </div>
                                <div className="col">
                                    <label htmlFor="longitude" className="form-label">
                                        Longitude
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input 
                                        id="longitude" 
                                        name="longitude" 
                                        type="text" 
                                        placeholder="Longitude" 
                                        className="form-control"
                                        aria-describedby="validationLongitude"
                                        {...register('longitude', { required: true })} 
                                    />
                                    {
                                    errors.longitude && 
                                    <div id="validationLongitude" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Longitude
                                    </div>
                                }
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">
                                    Gmaps Link
                                    <span className="text-danger">*</span>
                                </label>
                                <input 
                                    id="gmapsLink" 
                                    name="gmapsLink" 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Gmaps Link"
                                    aria-describedby="validationGmapsLink"
                                    {...register('gmapsLink', { required: true })} 
                                />
                                {
                                    errors.gmapsLink && 
                                    <div id="validationGmapsLink" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan isi Gmaps Link
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">
                                    Gambar
                                    <span className="text-danger">*</span>
                                </label>
                                <input 
                                    id="image" 
                                    name="image" 
                                    type="file" 
                                    className="form-control"
                                    aria-describedby="validationImage"
                                    {...register('image', { required: true })} 
                                />
                                {
                                    errors.title && 
                                    <div id="validationImage" className="invalid-feedback" style={{ display: 'block' }}>
                                        Silahkan upload gambar
                                    </div>
                                }
                            </div>
                            <div className="mb-3">
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary text-dark">
                                        Kirim
                                    </button>
                                </div>
                            </div>
                        </form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export async function getServerSideProps() {
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
            provinces: provinces.data,
            provinceOptions
        },
    };
}