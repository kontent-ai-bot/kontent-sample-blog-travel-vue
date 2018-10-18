export function getFirstAssetUrl (assets) {
  return assets && assets.length > 0 ? assets[0].url : ''
}

export function flattenTag (tag) {
  return {
    title: tag.name,
    slug: slugifyCodename(tag.codename)
  }
}

export function slugifyCodename (codename) {
  return codename.replace(/_/g, '-')
}
