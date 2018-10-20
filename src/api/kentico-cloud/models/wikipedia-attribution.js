
import { ContentItem } from 'kentico-cloud-delivery'

export class WikipediaAttribution extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'source_title') {
          return 'sourceTitle'
        }
        if (fieldName === 'source_url') {
          return 'sourceUrl'
        }
        return fieldName
      }
    })
  }
}
