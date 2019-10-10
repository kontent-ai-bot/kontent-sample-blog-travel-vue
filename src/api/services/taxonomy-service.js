import { deliveryClient } from '../kontent/delivery-client'
import { flatten } from '../kontent/models/taxonomy-details'
import { cacheHelper } from '../cache-helper'
import { ensureArrayOfCodenames, flattenTaxonomyTerm } from '../kontent/helpers'

const TAXONOMY_TYPE = 'taxonomy_details'

class TaxonomyService {
  async getItemDetails ({ slug }) {
    const queryUrl = deliveryClient
      .items()
      .type(TAXONOMY_TYPE)
      .limitParameter(1)
      .containsFilter('elements.activities', ensureArrayOfCodenames(slug))
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }

  async getTree (codename = 'activities') {
    const queryUrl = deliveryClient
      .taxonomy(codename)
      .getUrl()

    const response = await cacheHelper.getTaxonomyByUrl(queryUrl)

    return response.taxonomy.terms.map(flattenTaxonomyTerm)
  }
}

export const taxonomyService = new TaxonomyService()
