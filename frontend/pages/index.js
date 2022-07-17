import { Box, Center, Text, Heading, Link } from '@chakra-ui/react'

import Layout from '../components/Layout'

export default function Index({ message }) {
  return (
    <Layout>
      <Heading as="h1" fontSize="3xl">
        {message}
      </Heading>
      <Box h="10px" />
      <Text>
        Visit <Link href="/about">about</Link> page.
      </Text>
    </Layout>
  )
}
