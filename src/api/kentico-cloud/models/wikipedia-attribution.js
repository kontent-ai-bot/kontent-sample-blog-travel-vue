
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
      },
      richTextResolver: (wikipediaAttribution) => {
        return `<div class="wikipedia-citation">&quot;<a href="${wikipediaAttribution.sourceUrl.text}">${wikipediaAttribution.sourceTitle.text}</a>&quot;, used under <a href="https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">CC BY-SA 3.0</a>. / Shortened or lightly edited from original</div>`
      }
    })
  }
}
