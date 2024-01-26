import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '34126113dd694f888adca1175f22a70e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'test name',
  domain: 'felid.notion.site',
  author: 'Felid',

  // open graph metadata (optional)
  // description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'felid',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: null, // 0.5

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,
  // pageUrlOverrides: {
  //   '/notes': 'f90d0e53e0d347798058961ea915836d',
  //   '/projects': '7de8f32b86f742c8a92738e933ebcd8f',
  //   '/about': '0f0e7213faec4619ba1d7f1b6df62e80',
  //   '/zh': '3ec78f6765514d68b0e115723249d89f',
  //   '/notes_zh': '23110bdb5fe84a0f8654709691376aa0',
  //   '/projects_zh': '5234b1b67a8a4cc592b0d8891b6d865b',
  //   '/about_zh': '9db33719482e4719847f6ef5e17f7145',
  //   '/ja': 'd238166dba8d41ceb3a2a79c15df9903',
  //   '/notes_ja': '51e05ec9ca874110ac373b4d25486bd1',
  //   '/projects_ja': '20078b16add74f5ea367793ab667b03f',
  //   '/about_ja': '33c959b6dcdb431aa0f9a3b38b878b7e',
  // },
  includeNotionIdInUrls: true,
  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
