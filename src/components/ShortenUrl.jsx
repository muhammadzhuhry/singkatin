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
  useToast,
} from '@chakra-ui/react'

import axios from 'axios';
import { CopyIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { BASIC_AUTH } from '../constant';
import services from '../config/services';

export default function ShortenUrl() {
  const toast = useToast();

  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const displayToast = (title, description, status) => {
    toast({
      position: "top-right",
      title,
      description,
      status,
      duration: 5000,
      isClosable: true, 
    });
  }

  const handleShortenSuccess = (res) => {
    setShortenedUrl(res.data.data.shortenedUrl);
    displayToast("Shortening URL Success", res.data.message, "success");
  }

  const handleShortenError = (error) => {
    if (error.response) {
      displayToast("Shortening URL Error", error.response.data.message, "error");
    } else {
      displayToast("Shortening URL Error", "An error occurred while shortening url. Please try again." ,"error");
    }
  }

  const handleShorten = async () => {
    const payload = {
      url: inputUrl
    }

    try {
      const res = await axios.post(`${services.BASE_URL}/v1/url/shorten`, payload, BASIC_AUTH.token);
      handleShortenSuccess(res);
    } catch (error) {
      handleShortenError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
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
              <Input 
                type='url' 
                placeholder='https://www.singkatin.online'
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                isLoading={isLoading}
                loadingText='Shortening...'
                colorScheme='teal'
                onClick={handleShorten}
              >
                Shorten
              </Button>
            </Stack>

            {shortenedUrl && (
              <FormControl id="shorten" isRequired>
                <InputGroup>
                  <Input variant={'filled'} textColor={'teal'} value={shortenedUrl} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={''}>
                      {<CopyIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}