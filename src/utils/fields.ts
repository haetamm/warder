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

export const fieldRegionPost = [
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
