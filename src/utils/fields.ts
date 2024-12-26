export const fieldsGuest = [
  { name: 'email', type: 'text', placeholder: 'Email' },
  { name: 'password', type: 'password', placeholder: 'Password' },
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
