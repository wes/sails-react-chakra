import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'

import theme from './theme'

InertiaProgress.init()

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <ChakraProvider theme={theme}>
        <App {...props} />
      </ChakraProvider>
    )
  },
})
