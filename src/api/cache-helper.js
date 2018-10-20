import { deliveryClient } from './kentico-cloud/delivery-client'

class CacheHelper {
  cache = {}
  debug = true

  async getItemsByUrl (QueryUrl) {
    if (this.cache[QueryUrl]) {
      this.debug && console.log(`cache hit: ${QueryUrl}`)
      return this.cache[QueryUrl]
    } else {
      const configuration = await deliveryClient
        .items()
        .withUrl(QueryUrl)
        .getPromise()

      this.cache[QueryUrl] = configuration

      return this.cache[QueryUrl]
    }
  }

  async getTaxonomyByUrl (QueryUrl) {
    if (this.cache[QueryUrl]) {
      this.debug && console.log(`cache hit: ${QueryUrl}`)
      return this.cache[QueryUrl]
    } else {
      const configuration = await deliveryClient
        .taxonomy('unused')
        .withUrl(QueryUrl)
        .getPromise()

      this.cache[QueryUrl] = configuration

      return this.cache[QueryUrl]
    }
  }
}

export const cacheHelper = new CacheHelper()
