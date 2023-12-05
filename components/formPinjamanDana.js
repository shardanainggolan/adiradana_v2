import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { format } from 'date-fns'

export default function FormPinjamanDana() {
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        const MySwal = withReactContent(Swal)

        axios.post(`${process.env.BACKEND_URL}/api/pengajuan-pinjaman-dana`, data, {

        })
        .then(res => {
            // const inputDate = format(new Date(), 'dd-MM-yyyy')
            // const inputTime = format(new Date(), 'HH:mm')

            // const message = `-External%20sales%201%20code%20job%20%3A%20SPG%0AExternal%20sales%20%3ATasya%0A%0AHari%2F%20Tgl%20%3A%20${encodeURIComponent(inputDate)}%0AJam%20%3A%20${encodeURIComponent(inputTime)}%0A%0ASaya%20AXI%0ANama%20%3A%20${encodeURIComponent(process.env.AXI_SALES_NAME)}%0AID%20%3A%20${encodeURIComponent(process.env.AXI_SALES_ID)}%0AHP%20%3A%20${encodeURIComponent(process.env.AXI_SALES_HP)}%0A%0AAda%20pengajuan%20aplikasi%20pembiayaan%20%3A%20multi%20guna%0ANama%20%3A%20${encodeURIComponent(data.nama)}%0AAlamat%20%3A%20${encodeURIComponent(data.alamat)}%0ANo%20HP%2F%20Wa%20%3A%20${data.whatsapp}%0APengajuan%20%3A%20${encodeURIComponent(data.jenisBpkb)}%0AMerk%20%3A%20${encodeURIComponent(data.merk)}%0ATahun%20%3A%20${data.tahun}%0APencairan%20%3A%20Maksimal%0A%0AMohon%20diproses%20dan%20masuk%20ID%20AXI%20saya%20ini`

            // window.open(`https://wa.me/${process.env.AXI_SALES_HP_INTL}?text=${message}`)

            MySwal.fire({
                title: <strong>Berhasil mengirim pengajuan</strong>,
                html: <i>Data Anda akan kami proses secepatnya, Terima Kasih :)</i>,
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

    const year = (new Date()).getFullYear()
    const years = Array.from(new Array(14),(val, index) => year - index )

	return (
		<form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-3 position-relative">
                <label htmlFor="nama" className="form-label text-dark">
                    Nama Lengkap
                    <span className="text-danger">*</span>
                </label>
                <input 
                    id="nama" 
                    name="nama" 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="form-control"
                    aria-describedby="validationName"
                    {...register('nama', { required: true })} 
                />
                {
                    errors.nama && 
                    <div id="validationName" className="invalid-feedback" style={{ display: 'block' }}>
                        Silahkan isi Nama
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="whatsapp" className="form-label text-dark">
                    No Whatsapp
                    <span className="text-danger">*</span>
                </label>
                <input 
                    id="whatsapp" 
                    name="whatsapp" 
                    type="number" 
                    placeholder="No Whatsapp" 
                    className="form-control" 
                    aria-describedby="validationWhatsapp"
                    {...register("whatsapp", { required: true })}
                />
                {
                    errors.whatsapp && 
                    <div id="validationWhatsapp" className="invalid-feedback" style={{ display: 'block' }}>
                        Silahkan isi No Whatsapp
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="alamat" className="form-label text-dark">
                    Alamat
                    <span className="text-danger">*</span>
                </label>
                <textarea 
                    className="form-control" 
                    rows="4" 
                    id="alamat" 
                    aria-describedby="validationAlamat"
                    {...register('alamat', { required: true })} 
                    placeholder="Alamat"></textarea>
                {
                    errors.alamat && 
                    <div id="validationAlamat" className="invalid-feedback" style={{ display: 'block' }}>
                        Silahkan isi Alamat
                    </div>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="kecamatan" className="form-label text-dark">
                    Kecamatan
                    <span className="text-danger">*</span>
                </label>
                <input 
                    id="kecamatan" 
                    name="kecamatan" 
                    type="text" 
                    placeholder="Kecamatan" 
                    className="form-control" 
                    {...register("kecamatan", { required: true })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="KabupatenKota" className="form-label text-dark">
                    Kota/Kabupaten
                    <span className="text-danger">*</span>
                </label>
                <input 
                    id="KabupatenKota" 
                    name="KabupatenKota" 
                    type="text" 
                    placeholder="Kota/Kabupaten" 
                    className="form-control" 
                    {...register("KabupatenKota", { required: true })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="jenisBpkb" className="form-label text-dark">
                    Jenis BPKB Dijaminkan
                    <span className="text-danger">*</span>
                </label>
                <select 
                    className="form-control" 
                    id="jenisBpkb" 
                    {...register("jenisBpkb", { required: true })}
                >
                    <option value="">Pilih Jenis BPKB</option>
                    <option value="BPKB Motor">BPKB Motor</option>
                    <option value="BPKB Mobil">BPKB Mobil</option>
                </select>
            </div>
            <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <label htmlFor="merk" className="form-label text-dark">
                        Merk
                        <span className="text-danger">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="merk" 
                        placeholder="Merk"
                        {...register("merk", { required: true })} 
                    />
                    <div id="merkHelp" className="form-text text-dark fst-italic">Contoh: Toyota</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="model" className="form-label text-dark">
                        Model
                        <span className="text-danger">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="model" 
                        placeholder="Model"
                        {...register("model", { required: true })} 
                    />
                    <div id="modelHelp" className="form-text text-dark fst-italic">Contoh: Avanza G</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="tipe" className="form-label text-dark">
                        Tipe
                        <span className="text-danger">*</span>
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="tipe" 
                        placeholder="Tipe" 
                        {...register("tipe", { required: true })}
                    />
                    <div id="tipeHelp" className="form-text text-dark fst-italic">Contoh: M</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="tahun" className="form-label text-dark">
                        Tahun
                        <span className="text-danger">*</span>
                    </label>
                    <select 
                        className="form-control" 
                        id="tahun" 
                        {...register("tahun", { required: true })}
                    >
                        <option value="">Pilih Tahun</option>
                        {
                            years.map((year, index) => {
                                return <option key={`year${index}`} value={year}>{year}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary text-dark">
                        Kirim
                    </button>
                </div>
            </div>
        </form>
	)
}