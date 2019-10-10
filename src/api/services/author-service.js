import { deliveryClient } from '../kontent/delivery-client'
import { flatten } from '../kontent/models/author'
import { cacheHelper } from '../cache-helper'
import { convertSlugToCodename } from '../kontent/helpers'

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

  async getItem (slug) {
    const queryUrl = deliveryClient
      .items()
      .type(AUTHOR_TYPE)
      .equalsFilter('system.codename', convertSlugToCodename(slug))
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const authorService = new AuthorService()
