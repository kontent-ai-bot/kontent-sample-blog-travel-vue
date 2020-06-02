import { DeliveryClient } from '@kentico/kontent-delivery'
import { ProjectTypeResolvers } from './type-resolvers'

export const deliveryClient = new DeliveryClient({
  projectId: process.env.VUE_APP_KONTENT_PROJECT_ID,
  typeResolvers: ProjectTypeResolvers,
  linkedItemResolver: {
    linkedItemWrapperTag: 'span'
  },
  httpInterceptors: {
    requestInterceptor: (config) => {
      console.log(`Sending request to: ${config.url}`)
      return config
    }
  }
})
