import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
  Menu,
  MenuButton,
  Avatar,
  Button,
  MenuList,
} from '@chakra-ui/react';
import { image } from '../../data/data';
import useWindowSize from '../../hooks/useWindowSize';
import { connector, MetaMaskconnector, walletconnect } from '../../config/provider';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';

//2)Layout
const FlexCol = styled.div``;
const FlexYcenter = styled.div``;

export const ModalConnect = ({ isOpenConnect, onCloseConnect }) => {
  const { active, activate, error, deactivate, account } = useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;
  const width = useWindowSize();
  const toast = useToast();
  const navigate = useNavigate();

  //all useEffect

  useEffect(() => {
    if (active) {
      localStorage.setItem('shouldEagerConnect', true);
    }
  }, [active]);

  useEffect(() => {
    onCloseConnect();
  }, [active]);

  // Function Start

  const handleConnectMetaMask = useCallback(() => {
    activate(MetaMaskconnector);
    localStorage.setItem('shouldEagerConnect', true);
  }, [activate]);

  const handleConnectDefiWallet = async () => {
    await connector.activate();
    activate(connector);
    localStorage.setItem('shouldEagerConnect', true);
  };

  const handleConnectWallet = async () => {
    try {
      await activate(walletconnect);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal isOpen={isOpenConnect} onClose={onCloseConnect} size={`${width < 400 ? 'md' : width < 700 ? 'md' : 'lg'}`}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="text-2xl font-bold text-center font-poppins md:text-3xl">Connect Wallet</ModalHeader>

        <ModalBody className="bg-prime">
          <FlexCol className="flex flex-col w-full gap-4 py-8 mx-auto text-white shadow-md cursor-pointer">
            <FlexYcenter className="flex items-center gap-3 px-5 md:gap-4 lg:gap-5" onClick={handleConnectMetaMask}>
              <img src={image.metamask} alt="Metamask" className="w-24 h-auto md:w-28 hover:scale-150" />
              <p className="text-xl transition paragraph hover:text-gray-400">MetaMask</p>
            </FlexYcenter>

            <FlexYcenter className="flex items-center gap-3 px-5 cursor-pointer md:gap-4 lg:gap-5" onClick={handleConnectDefiWallet}>
              <img src={image.defiWallet} alt="Crypto.com Defi Wallet" className="w-24 h-auto md:w-28" />
              <p className="paragraph hover:text-gray-400">Crypto.com Defi Wallet</p>
            </FlexYcenter>

            <FlexYcenter className="flex items-center gap-3 px-5 cursor-pointer md:gap-4 lg:gap-5" onClick={handleConnectWallet}>
              <img src={image.walletConnect} alt="Wallect Connect" className="w-24 h-auto md:w-28" />
              <p className="paragraph hover:text-gray-400">WalletConnect</p>
            </FlexYcenter>
          </FlexCol>
        </ModalBody>

        <ModalFooter>
          <p className="px-5 text-gray-800 font-poppins paragraph mt-element" style={{ textAlign: 'left' }}>
            By Connecting,I Accept Juneli
            <span className="ml-1 font-bold cursor-pointer hover:text-blue-500" onClick={() => navigate('/terms-and-condition')}>
              TOS
            </span>{' '}
          </p>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const ModalDisconnect = ({ isOpenDisconnect, onCloseDisconnet }) => {
  const { deactivate, account } = useWeb3React();
  const width = useWindowSize();
  const navigate = useNavigate();
  const handleDisconnect = () => {
    deactivate();
    localStorage.removeItem('shouldEagerConnect');
    onCloseDisconnet();
    navigate('/');
  };
  return (
    <Modal isOpen={isOpenDisconnect} onClose={onCloseDisconnet} size={`${width < 400 ? 'md' : width < 700 ? 'md' : 'lg'}`}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className="text-2xl font-bold font-poppins md:text-3xl">Wallet Address</ModalHeader>
        <ModalCloseButton className="mt-2" />

        <ModalBody>
          <p className="text-base text-center font-poppins ">{account}</p>
        </ModalBody>

        <ModalFooter>
          <button className="mx-auto button" onClick={handleDisconnect}>
            Disconnect
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
