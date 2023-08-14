import { SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiTsnode, SiPostgresql, SiMongodb } from "react-icons/si";
import { DiHtml5, DiReact, DiJqueryLogo } from "react-icons/di";
import { BiLogoPostgresql, BiLogoPhp, BiLogoJavascript, BiLogoGithub, BiSolidMoon } from "react-icons/bi"
import { FaFacebookSquare, FaLinkedin, FaNodeJs } from "react-icons/fa";

export const Skills = [
    {
        slug: 'php',
        Component: BiLogoPhp,
        Description: 'Php, Laravel & Codeigniter frameworks'
    },
    {
        slug: 'node',
        Component: FaNodeJs,
        Description: 'Dynamic APIs and server-side applications development.'
    },
    {
        slug: 'type-script',
        Component: SiTsnode,
        Description: 'Strong typing for scalable app development.'
    },
    {
        slug: 'react',
        Component: DiReact,
        Description: 'Building dynamic user interfaces and components.'
    },
    {
        slug: 'js',
        Component: BiLogoJavascript,
        Description: 'Simplifying DOM manipulation and interactive web development.'
    },
    {
        slug: 'aws',
        Component: SiAmazonaws,
        Description: 'Utilizing S3 and EC2 for scalable infrastructure.'
    },
    {
        slug: 'git',
        Component: SiGit,
        Description: 'Version control and collaborative code management platform.'
    },
    {
        slug: 'html',
        Component: DiHtml5,
        Description: 'Static webpages and portfolio projects'
    },
    {
        slug: 'css',
        Component: SiCss3,
        Description: 'Styling of my webpages'
    },
    {
        slug: 'mysql',
        Component: SiMysql,
        Description: 'Storing client and user data'
    },
    {
        slug: 'postgres',
        Component: SiPostgresql,
        Description: 'Storing data with reliable relational database management.'
    },
    {
        slug: 'mongo db',
        Component: SiMongodb,
        Description: 'NoSQL database for flexible and scalable data storage.'
    },
]