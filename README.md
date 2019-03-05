# Kentico Cloud Sample: VueJS Travel Blog

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)

## VueJS Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Kentico Cloud Setup

## Content Modeling

### Content Types Snippets

There are two content type snippets. They are defined as follows:

* Front Matter
  * Title - Generates URL slug, Required
  * Feature Image - Limited to at most 1 asset, Type limited to adjustable images
* Metadata (currently used by several content types, but not in the application)
  * Page Title - No limitations
  * Page Description - No limitations

### Content Types

There are eight content types defined for this project. The `types.json` in the `sample-data` folder contains the types and their elements. As the JSON does not include the specified element limitations, we've outlined the limitations of any elements that have them below along with a few other notes. If not specified below the element found in the JSON has no limitations.

* Author
  * Name - Required
  * Avatar - Required, Limited to exactly 1 asset, Type limited to adjustable images
  * Required, Limited to 30 words
* Configuration
  * Elements prefixed with `front__matter__` come from the front matter content type snippet
  * About Blurb - Required, Limited to exactly 1 item, Limited to Rich Text Component type
* HTML Embed (used only as a component, no element limitations)
* Page
  * Elements prefixed with `front__matter__` come from the front matter content type snippet
  * Slug - Required, Auto-generated based on Title
  * Elements prefixed with `metadata__` come from the front matter content type snippet
* Post
  * Elements prefixed with `front__matter__` come from the front matter content type snippet
  * Published - Required (used for URLs and sorting)
  * Slug - Required, Auto-generated based on Title
  * Authors - Required, Limited to at least 1 item, Limited to Author type
  * Geography - Required, Not used in application currently
  * Activities - Required
* Rich Text Component (used only as a component)
* Taxonomy Details
  * Elements prefixed with `front__matter__` come from the front matter content type snippet
* Wikipedia Attribution (used only as a component)
  * Source Title - Required
  * Source URL - Required

## Sample Content

An export from Kentico Cloud of sample content using the   content types defined above can be found in the `sample-data` folder in the `items.json` file. Similarly, you can find an export of the taxonomies in the `taxonomies.json` file.
