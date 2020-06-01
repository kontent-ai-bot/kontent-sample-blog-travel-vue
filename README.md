# Kentico Kontent Sample: VueJS Travel Blog

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

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

# Kentico Kontent Setup

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

## Create content source

1. Go to [app.kontent.ai](https://app.kontent.ai) and [create empty project](https://docs.kontent.ai/tutorials/set-up-kontent/projects/manage-projects#a-creating-projects)
1. Go to "Project Settings", select API keys and copy
    * Project ID
    * Management API key **require Business tier or higher or Trial account**
1. Install [Kontent Backup Manager](https://github.com/Kentico/kontent-backup-manager-js) and import data to newly created project from [`kontent-backup.zip`](./kontent-backup.zip) file (place appropriate values for `apiKey` and `projectId` arguments):

    ```sh
    npm i -g @kentico/kontent-backup-manager

    kbm --action=restore --apiKey=<Management API key> --projectId=<Project ID> --zipFilename=kontent-backup
    ```

    > Alternatively, you can use the [Template Manager UI](https://kentico.github.io/kontent-template-manager/import-from-file) for importing the content.

1. Go to your Kontent project and [publish all the imported items](https://docs.kontent.ai/tutorials/write-and-collaborate/publish-your-work/publish-content-items).

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/kontent-sample-blog-travel-vue?pixel)
