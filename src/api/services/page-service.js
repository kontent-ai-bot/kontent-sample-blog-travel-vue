import { deliveryClient } from '../kontent/delivery-client'
import { flatten } from '../kontent/models/page'
import { cacheHelper } from '../cache-helper'

const PAGE_TYPE = 'page'

class PageService {
  async getItem ({ slug }) {
    const queryUrl = deliveryClient
      .items()
      .type(PAGE_TYPE)
      .depthParameter(6)
      .limitParameter(1)
      .equalsFilter('elements.slug', slug)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const pageService = new PageService()
