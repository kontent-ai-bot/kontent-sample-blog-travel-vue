
import { ContentItem } from 'kentico-cloud-delivery'

export class HtmlEmbed extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'embed_code') {
          return 'embedCode'
        }
        return fieldName
      }
    })
  }
}
