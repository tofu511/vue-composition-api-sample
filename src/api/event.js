// dummpy api
export default class EventApi {
  getEventCount = (searchInput) => {
    return 10 - searchInput.length
  }
}
