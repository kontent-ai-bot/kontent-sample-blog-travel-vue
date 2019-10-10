import { deliveryClient } from '../kontent/delivery-client'
import { flatten } from '../kontent/models/configuration'
import { cacheHelper } from '../cache-helper'

class ConfigurationService {
  async getItem () {
    const queryUrl = deliveryClient
      .items()
      .equalsFilter('system.codename', process.env.VUE_APP_KONTENT_BLOG_CONFIGURATION_CODENAME)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const configurationService = new ConfigurationService()
