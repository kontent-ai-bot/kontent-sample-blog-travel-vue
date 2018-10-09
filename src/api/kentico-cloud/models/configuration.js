
import { ContentItem, ImageUrlBuilder } from 'kentico-cloud-delivery'
import { getFirstAssetUrl } from '../helpers'

export class Configuration extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'about_blurb') {
          return 'aboutBlurb'
        }
        return fieldName
      }
    })
  }
}

export function flatten (item) {
  let featureImageUrl = getFirstAssetUrl(item.feature.assets)

  if (featureImageUrl) {
    const imageUrlBuilder = new ImageUrlBuilder(featureImageUrl)
      .withWidth(1920)
    featureImageUrl = imageUrlBuilder.getUrl()
  }

  return {
    id: item.system.id,
    codename: item.system.codename,
    title: item.title.value,
    tagline: item.tagline.value,
    featureImageUrl
  }
}
