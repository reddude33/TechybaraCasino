import React from 'react'
import image from './image.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: '',
  creator: 'Hsz3QMdcKpXYfaNW6k2CidbGrLtCLFkawmPsr4Wq5UBF',
  image,
  theme_color: '#59ff5f',
  app: React.lazy(() => import('./App')),
}
