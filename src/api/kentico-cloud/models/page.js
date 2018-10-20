
import { ContentItem } from 'kentico-cloud-delivery'

export class Page extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'metadata__page_description') {
          return 'metadataPageDescription'
        }
        if (fieldName === 'metadata__page_title') {
          return 'metadataPageTitle'
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
