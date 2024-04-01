import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import { wikiLinkPlugin } from '@stereobooster/remark-wiki-link';
import { bdb } from './src/lib/braindb.mjs';
await bdb.ready();

// https://astro.build/config
export default defineConfig({
  site: 'https://michalkukla.pl',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents', '@node-rs/xxhash-wasm32-wasi', '@napi-rs/simple-git-darwin-x64', '@napi-rs/simple-git-darwin-arm64']
    }
  },
  markdown: {
    remarkPlugins: [
      [
        wikiLinkPlugin,
        {
          aliasDivider: '|',
          linkTemplate: ({ slug, alias }) => {
            let [slugWithoutAnchor, anchor] = slug.split('#');

            const prefix = 'astrotest/content/blog/';
            if (slugWithoutAnchor.startsWith(prefix)) {
              slugWithoutAnchor = slugWithoutAnchor.slice(prefix.length);
            }

            const doc = bdb.documentsSync({ slug: slugWithoutAnchor })[0];
            if (doc) {
              return {
                hName: 'a',
                hProperties: {
                  href: anchor ? `${doc.url()}#${anchor}` : doc.url()
                },
                hChildren: [
                  {
                    type: 'text',
                    value: alias == null ? doc.frontmatter().title : alias
                  }
                ]
              };
            } else {
              return {
                hName: 'span',
                hProperties: {
                  class: 'broken-link',
                  title: `Can't resolve link to ${slug}`
                },
                hChildren: [{ type: 'text', value: alias || slug }]
              };
            }
          }
        }
      ]
    ]
  }
});
