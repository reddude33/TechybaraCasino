import React from 'react'
import image from './image.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: '',
  creator: 'Hsz3QMdcKpXYfaNW6k2CidbGrLtCLFkawmPsr4Wq5UBF',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
