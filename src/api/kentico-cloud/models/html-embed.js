
import { ContentItem } from 'kentico-cloud-delivery'

export class HtmlEmbed extends ContentItem {
  constructor () {
    super({
      richTextResolver: (htmlEmbed) => {
        return htmlEmbed.embedCode.text
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
