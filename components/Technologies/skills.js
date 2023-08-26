import { SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiTsnode, SiPostgresql, SiMongodb,SiExpress,SiEthereum } from "react-icons/si";
import { DiHtml5, DiReact, DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql, BiLogoPhp, BiLogoJavascript, BiLogoGithub, BiSolidMoon, BiLogoGraphql } from "react-icons/bi"
import { FaFacebookSquare, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { VscJson } from "react-icons/vsc"
import { TbBrandDocker } from "react-icons/tb"

export const Skills = [
    {
        slug: 'php',
        Component: BiLogoPhp,
        Description: 'Php, Laravel & Codeigniter frameworks',
        proficiency: '70%'
    },
    {
        slug: 'node',
        Component: FaNodeJs,
        Description: 'Dynamic APIs and server-side applications development.',
        proficiency: '70%'
    },
    {
        slug: 'express js',
        Component: SiExpress,
        Description: 'Skilled in building applications with Express.js framework.',
        proficiency: '50%'
    },
    {
        slug: 'type-script',
        Component: SiTsnode,
        Description: 'Strong typing for scalable app development.',
        proficiency: '50%'
    },
    {
        slug: 'react',
        Component: DiReact,
        Description: 'Building dynamic user interfaces and components.',
        proficiency: '80%'
    },
    {
        slug: 'js',
        Component: BiLogoJavascript,
        Description: 'Simplifying DOM manipulation and interactive web development.',
        proficiency: '90%'
    },
    {
        slug: 'html',
        Component: DiHtml5,
        Description: 'Static webpages and portfolio projects',
        proficiency: '90%'
    },
    {
        slug: 'css',
        Component: SiCss3,
        Description: 'Styling of my webpages',
        proficiency: '60%'
    },
    {
        slug: 'solidity',
        Component: SiEthereum,
        Description: 'Knowledgeable in developing smart contracts using Solidity.',
        proficiency: '40%'
    },
    {
        slug: 'mysql',
        Component: SiMysql,
        Description: 'Storing client and user data',
        proficiency: '60%'
    },
    {
        slug: 'postgres',
        Component: SiPostgresql,
        Description: 'Storing data with reliable relational database management.',
        proficiency: '60%'
    },
    {
        slug: 'mongo db',
        Component: SiMongodb,
        Description: 'NoSQL database for flexible and scalable data storage.',
        proficiency: '50%'
    },
    {
        slug: 'graph ql',
        Component: BiLogoGraphql,
        Description: 'Experienced in crafting effective, team-friendly GraphQL APIs.',
        proficiency: '50%'
    },
    {
        slug: 'rest api',
        Component: VscJson,
        Description: 'Experienced in designing and developing RESTful APIs.',
        proficiency: '90%'
    },
    {
        slug: 'git',
        Component: SiGit,
        Description: 'Version control and collaborative code management platform.',
        proficiency: '90%'
    },
    {
        slug: 'docker',
        Component: TbBrandDocker,
        Description: 'Familiar with containerization using Docker technology.',
        proficiency: '30%'
    },
    {
        slug: 'aws',
        Component: SiAmazonaws,
        Description: 'Utilizing S3 and EC2 for scalable infrastructure.',
        proficiency: '30%'
    }
]