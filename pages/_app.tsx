import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import SectionContextProvider from '../util/ContextProvider/CurrentSectionContextProvider';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SectionContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SectionContextProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
