import { Box, Center, Text, Heading, Link } from '@chakra-ui/react'

import Layout from '../components/Layout'

export default function Index({ title, message }) {
  return (
    <Layout>
      <Heading as="h1" fontSize="3xl">
        {title}
      </Heading>
      <Box h="10px" />
      <Text>{message}</Text>
      <Text p="30px 0 0 0">
        <Link href="/">Go Back Home</Link>
      </Text>
    </Layout>
  )
}
