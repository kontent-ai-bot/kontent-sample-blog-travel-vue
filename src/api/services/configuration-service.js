import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/configuration'
import { cacheHelper } from '../cache-helper'

class ConfigurationService {
  async getItem () {
    const queryUrl = deliveryClient
      .items()
      .equalsFilter('system.codename', process.env.VUE_APP_KENTICO_CLOUD_BLOG_CONFIGURATION_CODENAME)
      .getUrl()

    const response = await cacheHelper.getItemsByUrl(queryUrl)

    return flatten(response.firstItem)
  }
}

export const configurationService = new ConfigurationService()
