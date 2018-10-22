
import { ContentItem } from 'kentico-cloud-delivery'

export class RichTextComponent extends ContentItem {
  constructor () {
    super({
      richTextResolver: (richText) => {
        return richText.content.getHtml()
      }
    })
  }
}
