import { DeliveryClient } from 'kentico-cloud-delivery'
import TypeResolvers from './type-resolvers'

export const deliveryClient = new DeliveryClient({
  projectId: process.env.VUE_APP_KENTICO_CLOUD_PROJECT_ID,
  typeResolvers: TypeResolvers
})
