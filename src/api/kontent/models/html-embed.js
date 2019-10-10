
import { ContentItem } from '@kentico/kontent-delivery'

export class HtmlEmbed extends ContentItem {
  constructor () {
    super({
      richTextResolver: (htmlEmbed) => {
        return htmlEmbed.embedCode.value
      },
      propertyResolver: (fieldName) => {
        if (fieldName === 'embed_code') {
          return 'embedCode'
        }
        return fieldName
      }
    })
  }
}
