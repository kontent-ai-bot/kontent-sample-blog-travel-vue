import { deliveryClient } from '../kentico-cloud/delivery-client'
import { flatten } from '../kentico-cloud/models/configuration'

class ConfigurationService {
  async getItem () {
    const configuration = await deliveryClient
      .item(process.env.VUE_APP_KC_BLOG_CONFIGURATION_CODENAME)
      .getPromise()
    return flatten(configuration.item)
  }
}

export const configurationService = new ConfigurationService()
