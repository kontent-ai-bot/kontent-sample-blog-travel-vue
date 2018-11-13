import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/post'
import { cacheHelper } from '../cache-helper'
import { ensureArrayOfCodenames } from '../kentico-cloud/helpers'

import { SortOrder } from 'kentico-cloud-delivery'

const POST_TYPE = 'post'

class PostService {
  async getItems (filter = { type: undefined, value: undefined }) {
    var query = deliveryClient
      .items()
      .type(POST_TYPE)
      .orderParameter('elements.published', SortOrder.desc)

    if (filter.type && filter.value) {
      switch (filter.type) {
        case 'author':
          query.containsFilter('elements.authors', ensureArrayOfCodenames(filter.value))
          break
        case 'activity':
          query.containsFilter('elements.activities', ensureArrayOfCodenames(filter.value))
          break
      }
    }

    const queryUrl = query.getUrl()

    const items = await cacheHelper.getItemsByUrl(queryUrl)

    return items.items.map(flatten)
  }

  async getItem ({ year, month, date, slug }) {
    const next = new Date()
    next.setUTCFullYear(year, month, date)
    next.setTime(next.getTime() + 86400000)

    const nextYear = next.getUTCFullYear()
    const nextMonth = next.getUTCMonth()
    const nextDate = next.getUTCDate()

    const startPadded = `${year}-${('00' + month).slice(-2)}-${('00' + date).slice(-2)}`
    const endPadded = `${nextYear}-${('00' + nextMonth).slice(-2)}-${('00' + nextDate).slice(-2)}`

    const queryUrl = deliveryClient
      .items()
      .type(POST_TYPE)
      .limitParameter(1)
      .equalsFilter('elements.slug', slug)
      .rangeFilter('elements.published', startPadded, endPadded)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const postService = new PostService()
