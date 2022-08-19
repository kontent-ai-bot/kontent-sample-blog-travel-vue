# Kentico Kontent Sample: VueJS Travel Blog

[![No Maintenance Intended](https://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

## :warning: Deprecation Notice
> This repository has been archived and is no longer maintained. Check out [kontent-sample-app-vue](https://github.com/Kentico/kontent-sample-app-vue) instead.

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f3e9e33-79bf-43b8-b327-f54bcf897ff0/deploy-status)](https://app.netlify.com/sites/kontent-sample-app-blog-travel-vue/deploys)

![template preview](/template.jpg)

## Get started

1. install dependencies

   ```sh
   npm install
   ```

1. run the development environment

   ```sh
   npm run serve
   ```

   > This set up will use sample project configured by the environment variable in [`.env`](./.env) file, follow next sections to be able to use your own project.

### Create your Kontent project as data source

1. Go to [app.kontent.ai](https://app.kontent.ai) and [create empty project](https://kontent.ai/learn/tutorials/manage-kontent/projects/manage-projects#a-create-projects)
1. Go to "Project Settings", select API keys and copy
   - Project ID
   - Management API key **require Business tier or higher or Trial account**
1. Install [Kontent Backup Manager](https://github.com/Kentico/kontent-backup-manager-js) and import data to newly created project from [`kontent-backup-vue-blog.zip`](./kontent-backup-vue-blog.zip) file (place appropriate values for `apiKey` and `projectId` arguments):

   ```sh
   npm i -g @kentico/kontent-backup-manager

   kbm --action=restore --apiKey=<Management API key> --projectId=<Project ID> --zipFilename=kontent-backup-vue-blog
   ```

   > Alternatively, you can use the [Template Manager UI](https://kentico.github.io/kontent-template-manager/import-from-file) for importing the content and you could also skip next step, if you select to publish all items after import.

1. Go to your Kontent project and [publish all the imported items](https://kontent.ai/learn/tutorials/write-and-collaborate/publish-your-work/publish-content-items).

### Join codebase and content data

Copy [`.env`](`./.env.template`) and name it `.env.local` then set the `VUE_APP_KONTENT_PROJECT_ID` environment variable to value from Kontent -> "Project Settings" -> API keys -> Project ID. Now your [local environment will use this file](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables) as a source of environment variables.

### Lints and fixes files

```sh
npm run lint
```

### Compiles and minifies for production

compile

```sh
npm run build
```

## Deploy with Netlify

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Kentico/kontent-sample-blog-travel-vue)

> After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

> Netlify is using [file-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/). That meant it presets your configuration based on the [.netlify.toml](./.netlify.toml). That includes environment variables. If you want to use your custom project, set the `VUE_APP_KONTENT_PROJECT_ID` to you projects ([Join codebase and content data](#Join-codebase-and-content-data)).

## More information about Kontent project data structure

### Content Types Snippets

There are two content type snippets. They are defined as follows:

- Front Matter
  - Title - Generates URL slug, Required
  - Feature Image - Limited to at most 1 asset, Type limited to adjustable images
- Metadata (currently used by several content types, but not in the application)
  - Page Title - No limitations
  - Page Description - No limitations

### Content Types

There are eight content types defined for this project. The `types.json` in the `sample-data` folder contains the types and their elements. As the JSON does not include the specified element limitations, we've outlined the limitations of any elements that have them below along with a few other notes. If not specified below the element found in the JSON has no limitations.

- Author
  - Name - Required
  - Avatar - Required, Limited to exactly 1 asset, Type limited to adjustable images
  - Required, Limited to 30 words
- Configuration
  - Elements prefixed with `front__matter__` come from the front matter content type snippet
  - About Blurb - Required, Limited to exactly 1 item, Limited to Rich Text Component type
- HTML Embed (used only as a component, no element limitations)
- Page
  - Elements prefixed with `front__matter__` come from the front matter content type snippet
  - Slug - Required, Auto-generated based on Title
  - Elements prefixed with `metadata__` come from the front matter content type snippet
- Post
  - Elements prefixed with `front__matter__` come from the front matter content type snippet
  - Published - Required (used for URLs and sorting)
  - Slug - Required, Auto-generated based on Title
  - Authors - Required, Limited to at least 1 item, Limited to Author type
  - Geography - Required, Not used in application currently
  - Activities - Required
- Rich Text Component (used only as a component)
- Taxonomy Details
  - Elements prefixed with `front__matter__` come from the front matter content type snippet
- Wikipedia Attribution (used only as a component)
  - Source Title - Required
  - Source URL - Required

### Content Items

There is a couple of posts from three authors, categorized via taxonomy.

