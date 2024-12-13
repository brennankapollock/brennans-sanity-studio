import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'ck4wnbas',
    dataset: 'production',
  },
  autoUpdates: true,
  studioHost: 'brennans-portfolio',
})
