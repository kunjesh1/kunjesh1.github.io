import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import profile from '@/images/photos/profile.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kunjesh Kumar</title>
        <meta
          name="description"
          content="I’m Kunjesh Kumar. I live in Bengaluru"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={profile}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Kunjesh Kumar. I live in Bengaluru
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>I’ve loved making things for as long as I can remember</p>
              <p>
                I possess in-depth knowledge of modern web technologies such as
                React and have extensive experience working with HTML, CSS, and
                JavaScript. I am passionate about staying up-to-date with the
                latest frontend development trends and best practices, and have
                a strong commitment to producing clean, maintainable, and
                well-documented code.
              </p>
              <p>
                Throughout my career, I have successfully collaborated with
                cross-functional teams, including designers, product managers,
                and backend developers, to deliver projects on time and within
                budget. I possess excellent communication skills and am
                comfortable presenting complex technical information to
                non-technical stakeholders.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/KunjeshKumar_12"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>

              <SocialLink
                href="https://github.com/kunjesh1"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/kunjesh-kumar-2b7059b4/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:kumarkunjesh2019@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                kumarkunjesh2019@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
