import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiFillCaretRight } from 'react-icons/ai'

export const links = [
  {
    page: 'Kompetenzen',
    links: [
      {
        label: 'Digitaldruck',
        icon: <AiFillCaretRight />,
        url: '/kompetenzen/#digitaldruck',
      },
      {
        label: 'Werbeträger',
        icon: <AiFillCaretRight />,
        url: '/kompetenzen/#werbetraeger',
      },
      {
        label: 'Webdesign',
        icon: <AiFillCaretRight />,
        url: '/kompetenzen/#webdesign',
      },
    ],
  },
  {
    page: 'Leistungen',
    links: [
      {
        label: 'Banner',
        icon: <AiFillCaretRight />,
        url: '/leistungen/banner',
      },
      {
        label: 'Bauzaunbanner',
        icon: <AiFillCaretRight />,
        url: '/leistungen/bauzaunbanner',
      },
      {
        label: 'Flugzeugtrolleys',
        icon: <AiFillCaretRight />,
        url: '/leistungen/flugzeugtrolleys',
      },
      {
        label: 'LKW-Beschriftung',
        icon: <AiFillCaretRight />,
        url: '/leistungen/lkw-beschriftung',
      },
      {
        label: 'LKW-Folierung',
        icon: <AiFillCaretRight />,
        url: '/leistungen/lkw-folierung',
      },
      {
        label: 'Masken',
        icon: <AiFillCaretRight />,
        url: '/leistungen/masken',
      },
      {
        label: 'PKW-Beschriftung',
        icon: <AiFillCaretRight />,
        url: '/leistungen/pkw-beschriftung',
      },
      {
        label: 'PKW-Grafiken',
        icon: <AiFillCaretRight />,
        url: '/leistungen/pkw-grafiken',
      },
      {
        label: 'Schilder',
        icon: <AiFillCaretRight />,
        url: '/leistungen/schilder',
      },
      {
        label: 'T-Shirts',
        icon: <AiFillCaretRight />,
        url: '/leistungen/t-shirts',
      },
      {
        label: 'Sticker',
        icon: <AiFillCaretRight />,
        url: '/leistungen/sticker',
      },
      {
        label: 'Transporter Beschriftung',
        icon: <AiFillCaretRight />,
        url: '/leistungen/transporter-beschriftung',
      },
      {
        label: 'Transporter Grafiken',
        icon: <AiFillCaretRight />,
        url: '/leistungen/transporter-grafiken',
      },
      {
        label: 'Webdesign',
        icon: <AiFillCaretRight />,
        url: '/leistungen/webdesign',
      },
    ],
  },
  {
    page: 'Shop',
    links: [
      { label: 'Shop', icon: <AiFillCaretRight />, url: '/shop' },
      { label: 'Warenkorb', icon: <AiFillCaretRight />, url: '/cart' },
    ],
  },
  {
    page: 'Referenzen',
    links: [
      { label: 'Referenzen', icon: <AiFillCaretRight />, url: '/referenzen' },
    ],
  },
  // {
  //   page: 'Kontakt',
  //   links: [{ label: 'Kontakt', icon: <AiFillCaretRight />, url: '/kontakt' }],
  // },
]

export const socials = [
  {
    id: 1,
    url: 'https://instagram.com/hochwerben',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://facebook.com/Hochwerben-173648279878506/',
    icon: <FaFacebook />,
  },
]
