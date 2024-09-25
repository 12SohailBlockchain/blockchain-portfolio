/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "./../../images/react-logo.png";
import HTML from "./../../images/html5-logo.png";
import CSS from "./../../images/css-logo.png";
import JS from "./../../images/js-logo.png";
import TS from "./../../images/ts-logo.png";
import Solidity from "./../../images/solidity-logo.png";
import Hardhat from "./../../images/hardhat-logo.png"; 
import Truffle from "./../../images/truffle-logo.png"; 
import Ganache from "./../../images/ganache-logo.png"; 
import Chainlink from "./../../images/chainlink-logo.png"; 
import NPM from "./../../images/npm-logo.png";
import YARN from "./../../images/yarn-logo.png";
import Git from "./../../images/git-logo.png";
import Moralis from "./../../images/moralis-logo.png";
import Alchemy  from "./../../images/alchemy blockchain.png";
import Web3 from "./../../images/web3js.png";
import Ethers from "./../../images/ethers-logo.png";
import Waffle from "./../../images/waffle.png";
import Next from "./../../images/nextjs-logo.png";
import IPFS from "./../../images/ipfs-logo.png";
import Graph from "./../../images/thegraph-logo.png";
import Arweave from "./../../images/arweave.png";
import Socket from "./../../images/socket.svg";
import NodeJS from "./../../images/nodej-js.png";
import Solana from "./../../images/solana.png";
import Firebase from "./../../images/firebase.png";

export type Skill = {
  name: string;
  img: any;
  url: string;
}

export type SkillsType = {
  type: string;
  description: string;
  skills: Skill[];
}

export const getSkill = (names: string[]) => {
  const toReturn: Skill[] = [];
  names.map((name: string) => {
    [...allSkills, ...additionalSkills].map((skill: Skill) => {
      if(skill.name.toLowerCase() === name.toLowerCase()) {
        toReturn.push(skill);
      }
    });
  });
  return toReturn;
};

export const additionalSkills: Skill[] = [
  {
    name: "Open-Source Contribution",
    url: "",
    img: ""
  },
  {
    name: "Waffle",
    url: "https://getwaffle.io/",
    img: Waffle
  },
  {
    name: "Moralis",
    url: "https://moralis.io/",
    img: Moralis
  },
  
];

export const allSkills: Skill[] = [
  {
    name: "Solidity",
    url: "https://soliditylang.org/",
    img: Solidity
  },
  {
    name: "Hardhat",
    url: "https://hardhat.org/",
    img: Hardhat
  },
  {
    name: "Truffle",
    url: "https://trufflesuite.com/",
    img: Truffle
  },
  {
    name: "Ganache",
    url: "https://trufflesuite.com/ganache/",
    img: Ganache
  },
  {
    name: "Chainlink",
    url: "https://chain.link/",
    img: Chainlink
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: JS
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    img: TS
  },
  {
    name: "Solana",
    url: "https://solana.com/",
    img: Solana
  },
  {
    name: "NodeJS",
    url: "https://nodejs.org/en/",
    img: NodeJS
  },
  {
    name: "Socket.io",
    url: "https://socket.io/",
    img: Socket
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    img: React
  },
  {
    name: "NEXT.js",
    url: "https://nextjs.org/",
    img: Next
  },
  {
    name: "EthersJS",
    url: "https://docs.ethers.io/v5/",
    img: Ethers
  },
  {
    name: "web3js",
    url: "https://web3js.readthedocs.io/en/v1.7.4/",
    img: Web3
  },
  {
    name: "The Graph",
    url: "https://thegraph.com/en/",
    img: Graph
  },
  {
    name: "Arweave",
    url: "https://www.arweave.org/",
    img: Arweave
  },
  {
    name: "IPFS",
    url: "https://ipfs.io/",
    img: IPFS
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com/",
    img: Firebase
  },
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: HTML
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: CSS
  },
  {
    name: "Alchemy",
    url: "https://www.alchemy.com/",
    img: Alchemy
  },
  {
    name: "NPM",
    url: "https://www.npmjs.com/",
    img: NPM
  },
  {
    name: "YARN",
    url: "https://yarnpkg.com/",
    img: YARN
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    img: Git
  },
];

export const skillsEn: SkillsType[] = [
  {
    type: "Languages",
    description: "Programing languages I use:",
    skills: getSkill(["Solidity", "Solana","TypeScript", "JavaScript", "HTML", "CSS",]),
  },
  {
    type: "Frameworks",
    description: "Frameworks with which I build my projects:",
    skills: getSkill(["Chainlink", "alchemy","React", "Next.js",  "NodeJS", "Firebase",]),
  },
  {
    type: "Tools",
    description: "Tools I use during my development:",
    skills: getSkill(["Truffle", "Ganache", "Hardhat", "NPM", "YARN", "Git"]),
  },
  /*{
    type: "Libraries",
    description: "Libraries I have frequently used for my projects:",
    skills: getSkill(["Socket.io", "EthersJS", "web3js"]),
  },*/
  {
    type: "Data",
    description: "Projects I use for data in my applications",
    skills: getSkill(["The Graph", "Arweave", "IPFS"]),
  },
];

export const skillsSl: SkillsType[] = [
  {
    type: "Jeziki",
    description: "Programski jeziki, ki jih uporabljam:",
    skills: getSkill(["Solidity", "TypeScript", "JavaScript", "HTML", "CSS", "Python"]),
  },
  {
    type: "Frameworki",
    description: "Frameworki s katerimi razvijam projekte:",
    skills: getSkill(["React", "Next.js", "React Native", "NodeJS", "Firebase", "Chainlink"]),
  },
  {
    type: "Pripomočki",
    description: "Pripomočki, katere uporabljam med razvijanjem:",
    skills: getSkill(["Truffle", "Ganache", "Hardhat", "NPM", "YARN", "Git"]),
  },
  /*{
    type: "Knjižnjice",
    description: "Knjižnjice, ki jih pogosto uporabljam v projektih:",
    skills: getSkill(["Socket.io", "EthersJS", "web3js"]),
  },*/
  {
    type: "Podatki",
    description: "Projekti, katere uporabljam za podatke v svojih projektih:",
    skills: getSkill(["The Graph", "Arweave", "IPFS"]),
  },
];