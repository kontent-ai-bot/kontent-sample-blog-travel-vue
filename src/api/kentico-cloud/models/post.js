import { ContentItem, ImageUrlBuilder } from 'kentico-cloud-delivery'
import { flatten as flattenAuthor } from './author'
import { getFirstAssetUrl, flattenTag } from '../helpers'

export class Post extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'front_matter__title') {
          return 'frontMatterTitle'
        }
        if (fieldName === 'front_matter__feature_image') {
          return 'frontMatterFeatureImage'
        }
        if (fieldName === 'metadata__page_title') {
          return 'metadataPageTitle'
        }
        if (fieldName === 'metadata__page_description') {
          return 'metadataPageDescription'
        }
        return fieldName
      }
    })
  }
}

export function flatten (item) {
  if (!item) return null
  let featureImageUrl = getFirstAssetUrl(item.frontMatterFeatureImage.assets)
  if (featureImageUrl) {
    const imageUrlBuilder = new ImageUrlBuilder(featureImageUrl)
      .withWidth(1920)
    featureImageUrl = imageUrlBuilder.getUrl()
  }

  return {
    id: item.system.id,
    codename: item.system.codename,
    title: item.frontMatterTitle.value,
    featureImageUrl,
    slug: item.slug.value,
    excerpt: item.excerpt.text,
    published: item.published.datetime,
    authors: item.authors.map(flattenAuthor),
    activities: item.tags.taxonomyTerms.map(flattenTag),
    body: item.body.resolveHtml()
  }
}
