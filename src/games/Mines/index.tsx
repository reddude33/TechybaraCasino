import React from 'react'

import image from './image.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description: '',
  creator: 'Hsz3QMdcKpXYfaNW6k2CidbGrLtCLFkawmPsr4Wq5UBF',
  theme_color: '#ff6a6a',
  image,
  app: React.lazy(() => import('./App')),
}
