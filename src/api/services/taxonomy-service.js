import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/taxonomy-details'
import { cacheHelper } from '../cache-helper'
import { ensureArrayOfCodenames } from '../kentico-cloud/helpers'

const TAXONOMY_TYPE = 'taxonomy_details'

class TaxonomyService {
  async getItemDetails ({ slug }) {
    const queryUrl = deliveryClient
      .items()
      .type(TAXONOMY_TYPE)
      .limitParameter(1)
      .containsFilter('elements.tags', ensureArrayOfCodenames(slug))
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const taxonomyService = new TaxonomyService()
