'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import { isBorderPrimary } from '@/app/_lib/utils'
import { HomeIcon, FolderIcon, QuestionMarkCircleIcon, EnvelopeIcon } from '@/app/_lib/icons'

export default function NavLinks() {
  const pathname = usePathname()
  const links = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Recipes',
      href: '/recipes',
      icon: FolderIcon,
    },
    {
      name: 'About',
      href: '/about',
      icon: QuestionMarkCircleIcon,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: EnvelopeIcon,
    },
  ]

  return (
    <ul className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex justify-end gap-2 py-2 px-4 border-r-4 text-gray-700 hover:text-primary hover:border-primary hover:border-opacity-50',
            {
              'border-primary': isBorderPrimary(pathname, link.href),
              'border-white': !isBorderPrimary(pathname, link.href),
            },
          )}
        >
          {link.name} {link.icon}
        </Link>
      ))}
    </ul>
  )
}
