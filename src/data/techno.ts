// Imports des images de projets
import solidityImage from '@/assets/img/project-solidity.png?url'
import defiImage from '@/assets/img/decentralized-funding.svg?url'
import shopifyImage from '@/assets/img/project-shopify.png?url'
import shoppingCartImage from '@/assets/img/project-shopping-1.jpg?url'
import BlockchainIcon from '@/assets/icons/svg/blockchain.svg?react'
import EthereumIcon from '@/assets/icons/svg/ethereum.svg?react'
import SolidityIcon from '@/assets/icons/svg/solidity.svg?react'
import SmartContractIcon from '@/assets/icons/svg/smart-contract.svg?react'
import Web3Icon from '@/assets/icons/svg/web3.svg?react'
import DAppIcon from '@/assets/icons/svg/dapp.svg?react'
import NFTIcon from '@/assets/icons/svg/nft.svg?react'
import DockerIcon from '@/assets/icons/svg/docker.svg?react'
import JavaScriptIcon from '@/assets/icons/svg/javascript.svg?react'
import TypeScriptIcon from '@/assets/icons/svg/typescript.svg?react'
import ReactIcon from '@/assets/icons/svg/react.svg?react'
import NextJSIcon from '@/assets/icons/svg/nextjs.svg?react'
import WebIcon from '@/assets/icons/svg/web.svg?react'
import NodeJSIcon from '@/assets/icons/svg/nodejs.svg?react'
import MongoDBIcon from '@/assets/icons/svg/mongodb.svg?react'
import PostgreSQLIcon from '@/assets/icons/svg/postgre.svg?react'
import APIIcon from '@/assets/icons/svg/api.svg?react'
import FullStackIcon from '@/assets/icons/svg/full-stack.svg?react'
const ecommerceImage = 'https://artdecorglass.co.uk/assets/hero-scene-DaxLSY1x.png'

const GITHUB_BASE_URL = 'https://github.com/Oshima-921/'

const gitUrlConstructor = (projectName: string): string => {
  return `${GITHUB_BASE_URL}${projectName}`
}

export const technos = [
  'Blockchain',
  'Ethereum',
  'Solidity',
  'Smart Contracts',
  'Web3.js',
  'DApp Development',
  'NFT Development',
  'Docker',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Web Development',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'API Integration',
  'Full Stack Development'
] as const

export const projects = [
  {
    name: 'Solidity Contract Storage',
    summary: 'A secure Ethereum smart contract built with Solidity and Web3.js for storing and retrieving data on-chain, showcasing blockchain architecture and contract interaction.',
    technos: ['Solidity', 'Smart Contracts', 'Blockchain', 'Ethereum', 'Web3.js'],
    url: {
      icon: solidityImage,
      github: gitUrlConstructor('Solidity-Contract-Storage'),
      server: null
    }
  },
  {
    name: 'Decentralized Funding',
    summary: 'A decentralized crowdfunding dApp using Ethereum smart contracts, enabling campaign creation, contributions, and transparent funding flows through Web3 integration.',
    technos: ['Solidity', 'Smart Contracts', 'Blockchain', 'Ethereum', 'Web3.js', 'React.js', 'API Integration'],
    url: {
      icon: defiImage,
      github: gitUrlConstructor('Decentralized-Funding'),
      server: null
    }
  },
  {
    name: 'Shopify Preservation',
    summary: 'A full-stack Shopify-oriented project combining React UI with Node.js backend APIs to preserve storefront data, improve product workflows, and support custom shop integrations.',
    technos: ['React.js', 'JavaScript', 'Node.js', 'API Integration', 'Full Stack Development'],
    url: {
      icon: shopifyImage,
      github: gitUrlConstructor('shopify-preservation'),
      server: null
    }
  },
  {
    name: 'Python Shopping Cart',
    summary: 'A Python-powered shopping cart system built with backend logic and API integration to manage products, cart state, and streamlined checkout flows.',
    technos: ['API Integration', 'Full Stack Development'],
    url: {
      icon: shoppingCartImage,
      github: gitUrlConstructor('python-shopping-cart'),
      server: null
    }
  },
  {
    name: 'Ecommerce Site',
    summary: 'A modern full-stack e-commerce experience using React, Node.js, and MongoDB, with API-driven product management, cart handling, and responsive store interfaces.',
    technos: ['React.js', 'JavaScript', 'Node.js', 'MongoDB', 'API Integration', 'Full Stack Development'],
    url: {
      icon: ecommerceImage,
      github: gitUrlConstructor('ecommerce-site'),
      server: null
    }
  }
]

export const stack = [
  {
    title: 'Blockchain',
    technos: [
      {
        name: 'Blockchain',
        IconComponent: BlockchainIcon
      },
      {
        name: 'Ethereum',
        IconComponent: EthereumIcon
      },
      {
        name: 'Solidity',
        IconComponent: SolidityIcon
      },
      {
        name: 'Smart Contracts',
        IconComponent: SmartContractIcon
      },
      {
        name: 'Web3.js',
        IconComponent: Web3Icon
      },
      {
        name: 'DApp Development',
        IconComponent: DAppIcon
      },
      {
        name: 'NFT Development',
        IconComponent: NFTIcon
      },
      {
        name: 'Docker',
        IconComponent: DockerIcon
      }
    ]
  },
  {
    title: 'Frontend',
    technos: [
      {
        name: 'JavaScript',
        IconComponent: JavaScriptIcon
      },
      {
        name: 'TypeScript',
        IconComponent: TypeScriptIcon
      },
      {
        name: 'React.js',
        IconComponent: ReactIcon
      },
      {
        name: 'Next.js',
        IconComponent: NextJSIcon
      },
      {
        name: 'Web Development',
        IconComponent: WebIcon
      }
    ]
  },
  {
    title: 'Backend',
    technos: [
      {
        name: 'Node.js',
        IconComponent: NodeJSIcon
      },
      {
        name: 'MongoDB',
        IconComponent: MongoDBIcon
      },
      {
        name: 'PostgreSQL',
        IconComponent: PostgreSQLIcon
      },
      {
        name: 'API Integration',
        IconComponent: APIIcon
      },
      {
        name: 'Full Stack Development',
        IconComponent: FullStackIcon
      }
    ]
  }
]
