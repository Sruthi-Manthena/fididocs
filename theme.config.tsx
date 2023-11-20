import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="logo.png" width="100" height="50"/>,
  project: {
    link: 'https://github.com/fidi-tech',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/fidi-tech',
  footer: {
    text: 'FiDi Docs',
  },
}

export default config
