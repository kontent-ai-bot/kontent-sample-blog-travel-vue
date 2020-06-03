import { deliveryClient } from '../kontent/delivery-client'
import { flatten } from '../kontent/models/configuration'
import { cacheHelper } from '../cache-helper'

const CONFIGURATION_TYPE = 'blog_configuration'

class ConfigurationService {
  async getItem () {
    const queryUrl = deliveryClient
      .items()
      .equalsFilter('system.codename', CONFIGURATION_TYPE)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const configurationService = new ConfigurationService()
