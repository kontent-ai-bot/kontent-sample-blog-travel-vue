
import { ContentItem } from '@kentico/kontent-delivery'

export class RichTextComponent extends ContentItem {
  constructor () {
    super({
      richTextResolver: (richText) => {
        return richText.content.getHtml()
      }
    })
  }
}
