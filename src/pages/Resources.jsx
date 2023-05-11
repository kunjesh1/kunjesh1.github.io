import Link from 'next/link'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import carousel from "@/images/photos/carousel.png"
import annotate from "@/images/photos/annotate.png"
import podcast from "@/images/photos/podcast.png"
import segment from "@/images/photos/segment.png"



import { Card } from '@/components/Card'
import Vimeo from '@u-wave/react-vimeo'
import { Button } from '@/components/Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'



const resources = [
  {
    href: '/contacts',
    name: 'Contacts',
    description:
      'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/conversations',
    name: 'Conversations',
    description:
      'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/messages',
    name: 'Messages',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/groups',
    name: 'Groups',
    description:
      'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]


const projects = [
    {
      name: 'AnnoMate',
      description:
        'An freehand annotation tool in canvas inspired by Exalidraw',
      videoLink:"https://vimeo.com/814900563",
      image:annotate,
      link: { href: 'https://annomate.web.app/', label: 'AnnoMate' },
      github:"https://github.com/kunjesh1/AnnoMate",
      logo: logoPlanetaria,
      pattern: {
        y: 16,
        squares: [
          [0, 1],
          [1, 3],
        ],
      },
    },
   
    {
      name: 'Podcast player',
      description:
        'A podcast app made using Next.js can serve as a platform for hosting and streaming audio podcasts. ',
      link: { href: 'https://podcast-player-one.vercel.app/', label: 'Podcast player' },
      image:podcast,
      github:'https://github.com/kunjesh1/podcast-player',
      logo: logoHelioStream,
      pattern: {
        y: 32,
        squares: [
          [0, 2],
          [1, 4],
        ],
      },
    },
    {
      name: 'React carousel',
      description:
        'A minimal javascript carousel component',
        videoLink:"https://vimeo.com/814915173",
      link: { href: 'https://carousel-examples.web.app/', label: 'React carousel' },
      github:'https://github.com/kunjesh1/react-carousel-x',
      logo: logoAnimaginary,
      image:carousel,
      pattern: {
        y: -6,
        squares: [
          [-1, 2],
          [1, 3],
        ],
      },
    },
    {
      name: 'Segment anything',
      image:segment,
      github:'https://github.com/kunjesh1/segment-anything-POC/tree/main/demo',
      description:
        'Segment anything on image using hover.Loaded segment anything ONNX model on frontend ',
      link: { href: 'https://sammn-poc.web.app/', label: 'Segment anything' },
      logo: logoCosmos,
      pattern: {
        y: 22,
        squares: [[0, 1]],
      },
    },
  
  ]
  
  function LinkIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
          fill="currentColor"
        />
      </svg>
    )
  }
  

  

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="dark:bg-white/7.5 dark:ring-white/15 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="dark:fill-white/1 dark:stroke-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource,index }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  let { scrollY } = useScroll()

  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="dark:bg-white/2.5 group relative flex rounded-2xl  transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:hover:shadow-black/5"
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="ring-zinc-900/7.5 absolute inset-0 rounded-2xl ring-1 ring-inset group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-3xl pb-4">
      {/* { (index==0||index==1) && (
                //  <iframe src="https://drive.google.com/file/d/14UCAUsJ4lQwRvGExaNy1LhGBtnnDGXnw/view" allowfullscreen></iframe>
                   <Vimeo
                    video={resource?.videoLink}
                    controls={false}
                    autoplay
                    muted
                    loop
                    className='w-full h-full max-w'
                    autopause={false}
                  />
                 
                )} */}
                  <Image
                  src={resource.image}
                  className="rounded-t-2xl h-[50%]"
                  
                  alt=""
                  unoptimized
                />

                {/* <iframe
                  src="https://player.vimeo.com/video/814900563?h=6ead585b14"
                  width="640"
                  height="564"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe> */}
              {/* </div> */}
              {/* <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2> */}
              <div className='px-4'>
              <Card.Description>{resource.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm justify-between items-center w-full font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <div className='flex'>
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{resource.link.label}</span>
                </div>
                {/* <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                /> */}
              </p>
              <div className='flex justify-center w-full'>
              <Button target="_blank" href={resource.github} variant="primary" className="group mt-6 mr-2 w-full">Github </Button>
              <Button target="_blank" href={resource?.link?.href} variant="secondary" className="group mt-6 w-full">View <ArrowTopRightOnSquareIcon className='h-4 w-4 text-white'/></Button>
        
              </div>
              </div>
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((resource,index) => (
          <Resource key={resource.href} resource={resource} index={index}/>
        ))}
      </div>
    </div>
  )
}
