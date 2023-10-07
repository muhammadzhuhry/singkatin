'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { CopyIcon } from '@chakra-ui/icons'

export default function ShortenUrl() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      // bg={useColorModeValue('gray.50', 'gray.800')}
      marginTop={'-100px'}
    >
      <Stack w={'100%'} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Singkatin ✂️</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="url">
              <FormLabel>Paste URL to be shortened</FormLabel>
              <Input type='url' placeholder='https://www.singkatin.online' />
            </FormControl>
            <Stack spacing={10}>
              <Button
                colorScheme='teal'
              >
                Shorten
              </Button>
            </Stack>

            <FormControl id="password" isRequired>
              <InputGroup>
                <Input variant={'filled'} textColor={'teal'} value={'https://www.singkatin/89kdfapp'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={''}>
                    {<CopyIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}