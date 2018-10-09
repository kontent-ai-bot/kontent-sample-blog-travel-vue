import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/author'

class AuthorService {
  async getItems () {
    const items = await deliveryClient
      .items()
      .type('author')
      .getPromise()
    return items.items.map(flatten)
  }
}

export const authorService = new AuthorService()
