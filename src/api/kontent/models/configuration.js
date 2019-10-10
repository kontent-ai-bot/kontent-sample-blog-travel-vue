
import { ContentItem } from '@kentico/kontent-delivery'
import { getFeatureImage } from '../helpers'

export class Configuration extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'about_blurb') {
          return 'aboutBlurb'
        }

        if (fieldName === 'front_matter__title') {
          return 'frontMatterTitle'
        }

        if (fieldName === 'front_matter__feature_image') {
          return 'frontMatterFeatureImage'
        }

        return fieldName
      }
    })
  }
}

export function flatten (item) {
  if (!item) return null

  const featureImageUrl = getFeatureImage(item)

  return {
    id: item.system.id,
    codename: item.system.codename,
    title: item.frontMatterTitle.value,
    tagline: item.tagline.value,
    featureImageUrl
  }
}
