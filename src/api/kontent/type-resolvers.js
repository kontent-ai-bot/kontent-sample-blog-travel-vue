import { TypeResolver } from '@kentico/kontent-delivery'
import { Author } from './models/author'
import { Configuration } from './models/configuration'
import { HtmlEmbed } from './models/html-embed'
import { Page } from './models/page'
import { Post } from './models/post'
import { RichTextComponent } from './models/rich-text-component'
import { TaxonomyDetails } from './models/taxonomy-details'
import { WikipediaAttribution } from './models/wikipedia-attribution'

export const ProjectTypeResolvers = [
  new TypeResolver('author', () => new Author()),
  new TypeResolver('configuration', () => new Configuration()),
  new TypeResolver('html_embed', () => new HtmlEmbed()),
  new TypeResolver('page', () => new Page()),
  new TypeResolver('post', () => new Post()),
  new TypeResolver('rich_text_component', () => new RichTextComponent()),
  new TypeResolver('taxonomy_details', () => new TaxonomyDetails()),
  new TypeResolver('wikipedia_attribution', () => new WikipediaAttribution())
]
