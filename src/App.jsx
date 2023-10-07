import './styles.css';
import ShortenUrl from './components/ShortenUrl';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
        <ShortenUrl />
    </ChakraProvider>
  );
}

export default App;
