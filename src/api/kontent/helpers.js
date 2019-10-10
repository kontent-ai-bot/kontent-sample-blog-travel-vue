import { ImageUrlBuilder } from '@kentico/kontent-delivery'

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

export function flattenTaxonomyTerm (term) {
  if (!term) return null

  return {
    title: term.name,
    slug: convertCodenameToSlug(term.codename),

    children: term.terms && term.terms.length > 0
      ? flattenTaxonomyTerm(term.terms)
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
