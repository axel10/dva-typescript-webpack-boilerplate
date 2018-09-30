import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

export default {
  get (url: string, data: object = {}, params: AxiosRequestConfig = {}) {
    url = Object.keys(data).length ? url + `?${qs.stringify(data)}` : url
    return (
      axios
        .get(url, { ...params })
        .then((o: AxiosResponse) => o.data)
    )
  },
  post (url: string, data: object = {}, config: AxiosRequestConfig = {}) {
    return (
      axios
        .post(url, qs.stringify({ ...data }), config)
        .then((o: AxiosResponse) => o.data)
    )
  },
  formData (
    url: string,
    data: FormData = new FormData(),
    config: AxiosRequestConfig = {}
  ) {
    return (
      axios
        .post(url, data, config)
        .then((o: AxiosResponse) => o.data)
    )
  }
}
