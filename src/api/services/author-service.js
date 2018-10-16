import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/author'
import { cacheHelper } from '../cache-helper'

const AUTHOR_TYPE = 'author'

class AuthorService {
  async getItems () {
    const queryUrl = deliveryClient
      .items()
      .type(AUTHOR_TYPE)
      .getUrl()

    const items = await cacheHelper.getItemsByUrl(queryUrl)

    return items.items.map(flatten)
  }

  async getItem () {
    const queryUrl = deliveryClient
      .items()
      .type(AUTHOR_TYPE)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const authorService = new AuthorService()
