'use client'

import {
  Text,
  Flex,
  Box,
  Stack,
  Heading,
  Center,
  Spinner,
} from '@chakra-ui/react'

import axios from 'axios';
import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import basicAuth from '../constant/basicAuth';
import services from '../config/services';

export default function RedirectPage() {
  const { shortenedUrl } = useParams();
  const [url, setUrl] = useState(null);
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(5);
  let handlingTag = '';

  useEffect(() => {
    axios.get(`${services.BASE_URL}/v1/url/redirect?url=${shortenedUrl}`, basicAuth.token)
      .then((response) => {
        setUrl(response.data.data.longUrl);
      })
      .catch(() => {
        setIsError(true);
      })
  }, [shortenedUrl])

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []); 


  if (isError) {
    handlingTag =  (
      <div>
        <Center py={3}>
          <SearchIcon fontSize={'4xl'} color={'teal'} />
        </Center>
        <Center fontSize={'4xl'} color={'gray'}>
          404
        </Center>
        <Text fontSize={'md'} color={'gray'}>url not found</Text>
      </div>
    )
  } else if (countdown === 0) {
    window.location.href = url;
  } else {
    handlingTag = (
      <div>
        <Center py={3}>
          <Spinner
            size={'lg'}
            color='teal' 
            thickness='5px'
            speed='0.65s'
            emptyColor='gray.200'
          />
          <br/>
        </Center>
        <Text fontSize={'md'} color={'gray'}>Warp in {countdown} seconds...</Text>
      </div>
    )
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
          <Heading fontSize={'4xl'} color={'gray.600'}>Singkatin ✂️</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} align={'center'}>
            <Text color={'gray.500'}>Redirecting to url: {url ? url : shortenedUrl} 🚀</Text>
            {handlingTag}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
