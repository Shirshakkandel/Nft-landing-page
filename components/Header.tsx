import React, { useContext, useState, useEffect } from 'react';
import { Fixed, Flex, LaptopHidden, MobileHiddenUl } from '../util/styledComponents';
import { Spin as Hamburger } from 'hamburger-react';
import { SectionContext } from '../util/ContextProvider/CurrentSectionContextProvider';
import ConnectWalletTailwind from '../components/ConnectWalletTailwind';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { DeFiWeb3Connector } from 'deficonnect';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const ConnectWallet = () => {
  const injectedConnector = new InjectedConnector({ supportedChainIds: [25, 338] });
  const { chainId, account, activate, active, library, deactivate } = useWeb3React<Web3Provider>();

  const onClick = () => {
    activate(injectedConnector);
    // console.log('activated');
  };

  const activateDefiWallet = async () => {
    const connector = new DeFiWeb3Connector({
      supportedChainIds: [25],
      rpc: { 25: 'https://evm-cronos.crypto.org' },
      pollingInterval: 15000,
    });
    await connector.activate();
    activate(connector);
  };

  const activateWalletConnect = async () => {
    const walletconnect = new WalletConnectConnector({
      rpc: { 25: 'https://evm-cronos.crypto.org' },
      chainId: 25,
      supportedChainIds: [25],
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true,
    });
    activate(walletconnect);
  };

  //defi wallet connection code

  //wallet connect code

  const logout = () => {
    deactivate();
  };

  useEffect(() => {
    console.log(chainId, account, active);
  }, [chainId, account, active]);

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <>
          <div>✅ </div>
          {/* logout button */}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button type="button" onClick={onClick}>
            MetaConnect
          </button>
          <button onClick={activateDefiWallet}>Defi Wallet</button>
          <button onClick={activateWalletConnect}> Wallet Connect</button>
        </>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { currentSection, setCurrentSection } = useContext(SectionContext);

  return (
    <Fixed className="fixed top-0 z-50 w-full h-20 bg-primary">
      <Flex className="flex items-center justify-between h-full section-wrapper">
        {/* logo left */}
        <div className="relative z-50 px-5 py-2 bg-secondary">
          <p className="font-extrabold font-raleway font-[12px] leading-[20px] tracking-[1.275px] text-white">SAYURI</p>
        </div>

        {/* Menu Right */}
        <MobileHiddenUl className="justify-end flex-1 hidden space-x-10 text-white lg:flex">
          <ListsComponents setOpen={setOpen} currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </MobileHiddenUl>

        <LaptopHidden className="text-white lg:hidden">
          <div className={` z-50 relative`} onClick={() => setOpen(!isOpen)}>
            <Hamburger toggled={isOpen} />
          </div>

          {isOpen && (
            <div className="absolute top-0 left-0 z-40 grid w-full bg-primary place-items-center  h-[80vh] animate-slideIn">
              <ul className="space-y-10 text-center">
                <ListsComponents setOpen={setOpen} currentSection={currentSection} setCurrentSection={setCurrentSection} />
              </ul>
            </div>
          )}
        </LaptopHidden>
      </Flex>
    </Fixed>
  );
};

const ListsComponents: React.FC<{ setOpen: React.Dispatch<React.SetStateAction<boolean>>; currentSection: string; setCurrentSection: any }> = ({
  setOpen,
  currentSection,
  setCurrentSection,
}) => {
  return (
    <>
      <li
        onClick={() => {
          setCurrentSection('home');
          setOpen(false);
        }}
      >
        <a href="#home" className={`link ${currentSection === 'home' ? 'text-secondary' : ''} uppercase`}>
          Home
        </a>
      </li>

      <li
        onClick={() => {
          setCurrentSection('mint');
          setOpen(false);
        }}
      >
        <a href="#mint" className={`link ${currentSection === 'mint' ? 'text-secondary' : ''} uppercase`}>
          Mint
        </a>
      </li>

      <li
        onClick={() => {
          setCurrentSection('roadmap');
          setOpen(false);
        }}
      >
        <a href="#roadmap" className={`link ${currentSection === 'roadmap' ? 'text-secondary' : ''} uppercase`}>
          RoadMap
        </a>
      </li>

      <li
        onClick={() => {
          setCurrentSection('faq');
          setOpen(false);
        }}
      >
        <a href="#faq" className={`link ${currentSection === 'faq' ? 'text-secondary' : ''}`}>
          FAQ
        </a>
      </li>

      <li
        onClick={() => {
          setCurrentSection('');
          setOpen(false);
        }}
      >
        <a href="https://redsaint.io/" target="_blank" className={`link `}>
          RedSaint
        </a>
      </li>
    </>
  );
};

export default Header;
