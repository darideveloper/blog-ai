import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import deno from '@astrojs/deno'
// import NetlifyCMS from 'astro-netlify-cms'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    // NetlifyCMS({
    //   config: {
    //     backend: {
    //       name: 'git-gateway',
    //       branch: 'master',
    //     },
    //     collections: [
    //       // Content collections
    //     ],
    //   },
    // })
  ],
  adapter: deno({
    port: 8081
  })
})