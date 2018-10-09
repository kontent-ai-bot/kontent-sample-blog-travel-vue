
import { ContentItem, ImageUrlBuilder } from 'kentico-cloud-delivery'

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
  let featureImageUrl = ''
  if (item.feature.assets && item.feature.assets.length > 0) {
    const imageUrlBuilder = new ImageUrlBuilder(item.feature.assets[0].url)
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
