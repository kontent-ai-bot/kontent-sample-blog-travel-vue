
import { ContentItem, ImageUrlBuilder } from 'kentico-cloud-delivery'
import { getFirstAssetUrl, convertCodenameToSlug } from '../helpers'

export class Author extends ContentItem {
  constructor () {
    super({
      propertyResolver: (fieldName) => {
        if (fieldName === 'facebook_username') {
          return 'facebookUsername'
        }
        if (fieldName === 'twitter_handle') {
          return 'twitterHandle'
        }
        return fieldName
      }
    })
  }
}

export function flatten (item) {
  if (!item) return null

  let avatarUrl = getFirstAssetUrl(item.avatar.assets)
  if (avatarUrl) {
    const imageUrlBuilder = new ImageUrlBuilder(avatarUrl)
      .withWidth(100)
      .withHeight(100)
    avatarUrl = imageUrlBuilder.getUrl()
  }

  return {
    id: item.system.id,
    name: item.name.value,
    codename: item.system.codename,
    slug: convertCodenameToSlug(item.system.codename),
    avatarUrl,
    bio: item.byline.value,
    location: item.location.value,
    website: item.website.value,
    twitter: item.twitterHandle.value,
    facebook: item.facebookUsername.value
  }
}
