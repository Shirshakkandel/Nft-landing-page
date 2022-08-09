//1)import
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import React, { useCallback, useEffect, useState } from 'react';

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
import { connector, MetaMaskconnector, walletconnect } from '../config/provider';
import styled from 'styled-components';
import { image } from '../data/data';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { AiOutlineUser } from 'react-icons/ai';
import { ModalConnect, ModalDisconnect } from './Modal/ModalConnect';

//2)Layout
const FlexCol = styled.div``;
const FlexYcenter = styled.div``;

//3)Function Start
const ConnectWalletTailwind = () => {
  const { active, activate, error, deactivate, account } = useWeb3React();
  const isUnsupportedChain = error instanceof UnsupportedChainIdError;
  const { isOpen: isOpenConnect, onOpen: onOpenConnect, onClose: onCloseConnect } = useDisclosure();
  const { isOpen: isOpenDisconnect, onOpen: onOpenDisconnect, onClose: onCloseDisconnet } = useDisclosure();
  const [loadConnectWallet, setLoadConnectWallet] = useState(false);
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
    setTimeout(() => {
      if (!loadConnectWallet && !active) {
        // alert('hello from modal call');
        onOpenConnect();
        <ModalConnect isOpenConnect={isOpenConnect} onCloseConnect={onCloseConnect} />;
        setLoadConnectWallet(true);
      }
    }, 5000);
  }, [active]);

  useEffect(() => {
    onCloseConnect();
  }, [active]);

  //3.2)return start
  return (
    <>
      {!active ? (
        <>
          <button
            onClick={() => {
              setLoadConnectWallet(true);
              onOpenConnect();
            }}
            className="p-2 text-white rounded-md bg-prime hover:opacity-75 font-poppins"
          >
            {isUnsupportedChain ? 'Switch to Cronos Chain' : 'Connect Wallet'}
          </button>
          {/* Connect wallet Modal */}

          <ModalConnect isOpenConnect={isOpenConnect} onCloseConnect={onCloseConnect} />
        </>
      ) : (
        <>
          <button onClick={onOpenDisconnect} className="p-2 text-white rounded-md bg-prime hover:opacity-75 font-poppins">
            Connected
          </button>

          <ModalDisconnect isOpenDisconnect={isOpenDisconnect} onCloseDisconnet={onCloseDisconnet} />
        </>
      )}
    </>
  );
};

export default ConnectWalletTailwind;
