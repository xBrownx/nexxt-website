import { TagCloudOptions } from 'TagCloud';import TagCloud from '@/routes/home/components/rotating-cloud/x-rotating-cloud';import adobe from '../../assets/Adobe.png';import aws from '../../assets/AWS.png';import figma from '../../assets/Figma.png';import firebase from '../../assets/Firebase.png';import java from '../../assets/Java.png';import javascript from '../../assets/Javascript.png';import jetbrains from '../../assets/Jetbrains.png';import kotlin from '../../assets/Kotlin.png';import node from '../../assets/Node.png';import python from '../../assets/Python.png';import react from '../../assets/React.png';import swift from '../../assets/Swift.png';import typescript from '../../assets/Typescript.png';type Item = {    src: any;    alt: string;};const ITEMS_CONFIG = [    {        src: adobe,        alt: 'adobe',    },    {        src: aws,        alt: 'aws',    },    {        src: figma,        alt: 'figma',    },    {        src: firebase,        alt: 'firebase',    },    {        src: java,        alt: 'java',    },    {        src: javascript,        alt: 'javascript',    },    {        src: jetbrains,        alt: 'jetbrains',    },    {        src: kotlin,        alt: 'kotlin',    },    {        src: node,        alt: 'node',    },    {        src: python,        alt: 'python',    },    {        src: react,        alt: 'react',    },    {        src: swift,        alt: 'swift',    },    {        src: typescript,        alt: 'typescript',    },];export const RotatingCloud = () => {    return (        <div className={'relative flex size-full items-center justify-center'}>            <TagCloud                options={(w: Window & typeof globalThis): TagCloudOptions => ({                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,                    maxSpeed: 'fast',                })}            >                {ITEMS_CONFIG}            </TagCloud>        </div>    );};