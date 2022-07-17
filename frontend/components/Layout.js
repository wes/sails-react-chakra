import { Box } from '@chakra-ui/react'
export default function Layout({ children }) {
  return (
    <Box
      textAlign="center"
      height="100vh"
      width="100vw"
      verticalAlign="middle"
      display="table-cell"
    >
      {children}
    </Box>
  )
}
