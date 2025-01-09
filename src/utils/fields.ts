export const fieldsGuest = [
  { name: 'email', type: 'text', placeholder: 'Email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
]
export const fieldsChangePassword = [
  { name: 'password', type: 'password', placeholder: 'Password' },
  { name: 'newPassword', type: 'password', placeholder: 'New Password' },
]

export const fieldsProfile = [
  {
    name: 'name',
    label: 'Nama',
    value: 'name',
    type: 'personal',
    inputType: 'text',
  },
  {
    name: 'birth_date',
    label: 'Tanggal Lahir',
    value: 'birth_date',
    type: 'personal',
    inputType: 'date',
  },
  {
    name: 'gender',
    label: 'Jenis Kelamin',
    value: 'gender',
    type: 'personal',
    inputType: 'radio',
  },
  {
    name: 'email',
    label: 'Email',
    value: 'email',
    type: 'contact',
    inputType: 'email',
  },
  {
    name: 'phone_number',
    label: 'Nomor Hp.',
    value: 'phone_number',
    type: 'contact',
    inputType: 'text',
  },
]

export const genderOptions = [
  { label: 'Pria', value: 'pria' },
  { label: 'Wanita', value: 'wanita' },
]

export const fieldAddress = [
  { name: 'recipient_name', type: 'text', placeholder: 'Nama Penerima' },
  { name: 'phone_number', type: 'text', placeholder: 'No.Hp' },
  { name: 'label', type: 'text', placeholder: 'Label' },
  { name: 'street_name', type: 'text', placeholder: 'Nama Jalan' },
  { name: 'postal_code', type: 'text', placeholder: 'Kode Pos' },
  {
    name: 'selected',
    type: 'checkbox',
    placeholder: 'Jadikan alamat utama',
  },
  {
    name: 'province',
    type: 'select',
    placeholder: 'Provinsi',
  },
  {
    name: 'regencies',
    type: 'select',
    placeholder: 'Kab./Kota',
  },
  {
    name: 'district',
    type: 'select',
    placeholder: 'Kecamatan',
  },
  {
    name: 'villages',
    type: 'select',
    placeholder: 'Kel./Desa',
  },
]

export const fieldRegisRegionSeller = [
  {
    name: 'province',
    type: 'select',
    placeholder: 'Provinsi',
  },
  {
    name: 'regencies',
    type: 'select',
    placeholder: 'Kab./Kota',
  },
  {
    name: 'district',
    type: 'select',
    placeholder: 'Kecamatan',
  },
  {
    name: 'villages',
    type: 'select',
    placeholder: 'Kel./Desa',
  },
  {
    name: 'street_name',
    type: 'text',
    placeholder: 'Nama Jalan',
    value: 'street_name',
    maxLength: 100,
  },
  {
    name: 'postal_code',
    type: 'text',
    placeholder: 'Kode Pos',
    value: 'postal_code',
    maxLength: 10,
  },
]

export const fieldsPhoneNumber = [
  {
    name: 'phone_number',
    placeholder: 'Nomor Handphone',
    type: 'text',
    value: 'phone_number',
  },
]

export const fieldsCredentialShop = [
  {
    name: 'shop_name',
    placeholder: 'Nama Toko',
    value: 'shop_name',
    type: 'text',
  },
  {
    name: 'shop_domain',
    placeholder: 'Nama Domain',
    value: 'domain',
    type: 'text',
  },
]

export const fieldsDescSeller = [
  {
    name: 'slogan',
    placeholder: 'Slogan',
    value: 'slogan',
    type: 'text',
  },
  {
    name: 'desc',
    placeholder: 'Deskripsi',
    value: 'desc',
    type: 'textarea',
  },
]

export const fieldsProduct = [
  {
    name: 'name',
    required: true,
    descFirst:
      ' Nama produk min. 25 karakter dengan memasukkan merek, jenis produk, warna, bahan, atau tipe.',
    descLast:
      'Disarankan untuk tidak menggunakan huruf kapital berlebih, memasukkan lebih dari 1 merek, dan kata-kata promosi.',
    label: 'Nama Produk',
    type: 'text',
  },
  {
    name: 'condition',
    required: true,
    descFirst: '',
    descLast: '',
    label: 'Kondisi',
    type: 'radio',
  },
  {
    name: 'description',
    required: true,
    descFirst:
      'Pastikan deskripsi produk memuat penjelasan detail terkait produkmu agar pembeli mudah mengerti dan menemukan produkmu.',
    descLast:
      'Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb. ke dalam deskripsi produk untuk melindungi data pribadimu.',
    label: 'Deskripsi Produk',
    type: 'radio',
  },
  {
    name: 'price',
    required: true,
    descFirst: '',
    descLast: '',
    label: 'Harga Satuan',
    type: 'number',
  },
  {
    name: 'stock',
    required: true,
    descFirst: '',
    descLast: '',
    label: 'Stok Produk',
    type: 'number',
  },
  {
    name: 'sku',
    required: false,
    descFirst: 'Gunakan kode unik SKU jika kamu ingin menandai produkmu.',
    descLast: '',
    label: 'SKU (Stock Keeping Unit)',
    type: 'text',
  },
  {
    name: 'product_weight',
    required: true,
    descFirst:
      'Masukkan berat dengan menimbang produk setelah dikemas. Pastikan berat sesuai agar tidak terjadi selisih ongkir dengan kurir.',
    descLast: '',
    label: 'Berat Produk',
    type: 'number',
  },
  {
    name: 'shipping_insurance',
    required: true,
    descFirst:
      'Menanggung pengembalian dana produk & ongkir untuk penjual maupun pembeli jika terjadi kerusakan / kehilangan saat pengiriman.',
    descLast: '',
    label: 'Asuransi Pengiriman',
    type: 'radio',
  },
]

export const statusOptions = [
  { label: 'Aktif', value: true },
  { label: 'Non Aktif', value: false },
]

export const conditionOptions = [
  { label: 'Baru', value: 'baru' },
  { label: 'Bekas', value: 'bekas' },
]

export const shippingInsuranceOptions = [
  {
    label: 'Wajib',
    value: 'wajib',
    desc: 'Kamu mewajibkan pembeli untuk mengaktifkan asuransi pengiriman',
  },
  {
    label: 'Opsional',
    value: 'opsional',
    desc: 'Kamu memberikan opsi kepada pembeli untuk mengaktifkan asuransi pengiriman',
  },
]
