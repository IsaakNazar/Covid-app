import http from './http-client'

class ApiService {

  getAll() {
    return http.get('summary').catch(err => console.error(err))
  }

  getAllStatuses(country) {
    return http.get(`live/country/${country}/status/confirmed`).catch(err => console.error(err))
  }

  // I've tried to pass iso date to @date but it didnt work
  getByCountryAfterDate(country, date) {
    return http.get(`live/country/${country}/status/confirmed/date/${date}`).catch(err => console.error(err))
  }

  showByLocalCountry(localCountry) {
    return http.get(`total/dayone/country/${localCountry}`).catch(err => console.error(err))
  }

}

export default new ApiService()
