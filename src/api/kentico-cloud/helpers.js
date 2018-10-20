import { ImageUrlBuilder } from 'kentico-cloud-delivery'

export function convertCodenameToSlug (codename) {
  if (!codename) return null
  return codename.replace(/_/g, '-')
}

export function convertSlugToCodename (slug) {
  if (!slug) return null
  return slug.replace(/-/g, '_')
}

export function ensureArrayOfCodenames (value) {
  return Array.isArray(value)
    ? value.map(convertSlugToCodename)
    : [convertSlugToCodename(value)]
}

export function flattenTag (tag) {
  if (!tag) return null

  return {
    title: tag.name,
    slug: convertCodenameToSlug(tag.codename),

    children: tag.terms && tag.terms.length > 0
      ? flattenTag(tag.terms)
      : null
  }
}

export function getFeatureImage (item) {
  let featureImageUrl = getFirstAssetUrl(item.frontMatterFeatureImage.assets)
  if (featureImageUrl) {
    const imageUrlBuilder = new ImageUrlBuilder(featureImageUrl)
      .withWidth(1920)
    featureImageUrl = imageUrlBuilder.getUrl()
  }

  return featureImageUrl
}

export function getFirstAssetUrl (assets) {
  return assets && assets.length > 0 ? assets[0].url : ''
}
