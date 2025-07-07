'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ethers } from 'ethers';

const Web3Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsLoading(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please install MetaMask to use this feature!');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setWalletConnected(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const web3Features = [
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contract development for various blockchain platforms including Ethereum, Polygon, and Solana.',
      icon: '📝'
    },
    {
      title: 'dApp Integration',
      description: 'Seamless integration of decentralized applications with modern frontend frameworks for optimal user experience.',
      icon: '🔄'
    },
    {
      title: 'NFT Solutions',
      description: 'End-to-end NFT marketplace development including minting, trading, and royalty management systems.',
      icon: '🖼️'
    },
    {
      title: 'DeFi Protocols',
      description: 'Implementation of DeFi protocols including lending platforms, liquidity pools, and yield optimization strategies.',
      icon: '💰'
    }
  ];

  return (
    <section id="web3" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold gradient-text inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web3 Expertise
          </motion.h2>
          <motion.p 
            className="text-dark/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Exploring the decentralized frontier with blockchain technologies and Web3 development.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {web3Features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="tech-card"
                >
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{feature.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                      <p className="text-dark/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 border border-accent-600/30 rounded-xl bg-light/80 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-4 text-accent-400">Connect Your Wallet</h3>
              <p className="text-dark/70 mb-6">Experience Web3 interaction by connecting your Ethereum wallet.</p>
              
              {walletConnected ? (
                <div>
                  <div className="p-4 bg-accent-900/30 rounded-lg mb-4">
                    <p className="text-sm text-dark/80 mb-1">Connected Address:</p>
                    <p className="font-mono text-sm text-accent-400 break-all">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                  <button
                    onClick={disconnectWallet}
                    className="w-full py-3 px-4 rounded-full bg-light border border-accent-600 text-dark hover:bg-accent-900/20 transition-colors duration-200"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-full bg-primary-600 text-light hover:bg-primary-500 transition-all duration-200 flex items-center justify-center"
                >
                  {isLoading ? (
                    <span className="animate-pulse">Connecting...</span>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Connect MetaMask
                    </>
                  )}
                </button>
              )}
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3 text-dark">Web3 Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['Ethereum', 'Solidity', 'IPFS', 'Polygon', 'The Graph', 'Hardhat'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-accent-900/30 rounded-full text-xs text-dark/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section; 