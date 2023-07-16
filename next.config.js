
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/categories',
        destination: '/',
        permanent: true,
      },
      {
        source: '/flask-calendar',
        destination: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=Mm43Z2hvbDRlZDc2N2E4Y3IwYjFmM21rNjNfMjAyMzA3MTdUMDEwMDAwWiA2Y2YxdDhpams2Mjh1a2ppam1jamIyMGhkMEBn&tmsrc=6cf1t8ijk628ukjijmcjb20hd0%40group.calendar.google.com',
        permanent: true,
      },
      {
        source: '/git-calendar',
        destination: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MG0xcW8xYThtMjdza2Y0NnM1MnI0ampyODYgNmNmMXQ4aWprNjI4dWtqaWptY2piMjBoZDBAZw&tmsrc=6cf1t8ijk628ukjijmcjb20hd0%40group.calendar.google.com',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
