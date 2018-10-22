
import { ContentItem } from 'kentico-cloud-delivery'
import { convertCodenameToSlug, getFeatureImage, flattenTag } from '../helpers'

export class TaxonomyDetails extends ContentItem {
  constructor () {
    super({
      linkResolver: (link, context) => {
        return {
          asHtml: `<router-link :to="{ name: 'activity-detail', params: { slug: '${convertCodenameToSlug(link.codename)}' } }">${context.linkText}</router-link>`
        }
      },
      propertyResolver: (fieldName) => {
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
  const tag = flattenTag(item.tags.value[0])

  return {
    id: item.system.id,
    codename: item.system.codename,
    title: item.frontMatterTitle.text,
    slug: tag ? tag.slug : '',
    description: item.description.text,
    featureImageUrl
  }
}
