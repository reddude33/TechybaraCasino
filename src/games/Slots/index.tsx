import React from 'react'
import image from './image.png'

export default {
  name: 'Slots',
  short_name: 'slots',
  description: '',
  creator: 'Hsz3QMdcKpXYfaNW6k2CidbGrLtCLFkawmPsr4Wq5UBF',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
