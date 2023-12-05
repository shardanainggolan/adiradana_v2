import { useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function FormKreditMobil() {
    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();
    
    const onSubmit = data => {
        // console.log(data)
        const MySwal = withReactContent(Swal)

        axios.post(`${process.env.BACKEND_URL}/api/kredit-mobil`, data)
        .then(res => {
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
                    aria-describedby="validationServer03Feedback"
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
                <textarea className="form-control" rows="4" id="alamat" {...register('alamat', { required: true })} placeholder="Alamat"></textarea>
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
                <label htmlFor="kabupatenKota" className="form-label text-dark">
                    Kota/Kabupaten
                    <span className="text-danger">*</span>
                </label>
                <input 
                    id="kabupatenKota" 
                    name="kabupatenKota" 
                    type="text" 
                    placeholder="Kota/Kabupaten" 
                    className="form-control" 
                    {...register("kabupatenKota", { required: true })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="jenisProduk" className="form-label text-dark">
                    Jenis Produk
                    <span className="text-danger">*</span>
                </label>
                <select 
                    className="form-control" 
                    id="jenisProduk"
                    {...register("jenisProduk", { required: true })} 
                >
                    <option value="">Pilih Jenis Produk</option>
                    <option value="Mobil Baru">Mobil Baru</option>
                    <option value="Mobil Bekas">Mobil Bekas</option>
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
                <label htmlFor="ketersediaan" className="form-label text-dark">
                    Ketersediaan Mobil
                    <span className="text-danger">*</span>
                </label>
                <select 
                    className="form-control" 
                    id="ketersediaan"
                    {...register("ketersediaan", { required: true })} 
                >
                    <option value="">Pilih Ketersediaan Mobil</option>
                    <option value="Belum Tersedia">Mobil Belum Tersedia</option>
                    <option value="Sudah Tersedia">Mobil Sudah Tersedia</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="asal" className="form-label text-dark">
                    Asal Mobil Dari
                    <span className="text-danger">*</span>
                </label>
                <select 
                    className="form-control" 
                    id="asal"
                    {...register("asal", { required: true })}
                >
                    <option value="">Pilih Asal Mobil</option>
                    <option value="Dealer Mobil">Dealer Mobil</option>
                    <option value="Marketplace">Marketplace</option>
                    <option value="Sosial Media">Sosial Media</option>
                    <option value="Kerabat Keluarga">Kerabat Keluarga</option>
                    <option value="Teman">Teman</option>
                    <option value="Lain-lain">Lain-lain</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="downPayment" className="form-label text-dark">
                    DP(Down Payment) yang siap
                    <span className="text-danger">*</span>
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="downPayment" 
                    placeholder="Down Payment" 
                    {...register("downPayment", { required: true })}
                />
                {/* <NumericFormat 
                    type="text" 
                    id="downPayment" 
                    className="form-control" 
                    placeholder="Rp"
                    prefix={'Rp'} 
                    thousandSeparator="." 
                    decimalSeparator="," 
                    onKeyDown = {(e) => {
                        const {key, target} = e;
                        const {selectionStart, value} = target;

                        if (key === '.') {
                            e.preventDefault();
                            target.value = `${value.substr(0, selectionStart)},${value.substr(selectionStart, value.length)}`; 
                        }
                    }}
                    onValueChange={(e) => {
                        // setFormValue("amount", values.value);
                    }}
                    customInput={(props) => {
                        console.log(props)
                        return (
                            <input
                                name="downPayment"
                                formatProps={props}
                            />
                        );
                    }}
                /> */}
            </div>

            <div className="mb-3">
                <label htmlFor="catatan" className="form-label text-dark">
                    Catatan
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="catatan" 
                    placeholder="Catatan"
                    {...register("catatan")}
                />
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