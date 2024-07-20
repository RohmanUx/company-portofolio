import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export default axiosInstance;

//jsx : javascript element
//tsx : typescript element
//jsx atau tsx : berisi fungsi utk membuat elemen / komponen react
//kalau tidak ada x nya(js, ts): hanya utk membuat fungsi biasa yang tidak menghasilkan elemen atau komponen
// raect kuery
  