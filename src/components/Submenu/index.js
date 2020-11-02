import React, { useState, useEffect, useRef } from 'react'
import { useGlobalContext } from '~/context/AppContext'

import { SubmenuContainer, SubmenuContent, SubmenuLink } from './styles'

export default function Submenu() {
  const {
    closeSubmenu,
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    setColumns(3)
    const submenu = container.current
    const { center, bottom } = location

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    // if (links.length === 3) setColumns(3)
    // if (links.length > 3) setColumns(4)
  }, [location, links])

  return (
    <SubmenuContainer
      isSubmenuOpen={isSubmenuOpen}
      ref={container}
      onMouseLeave={closeSubmenu}
    >
      <section>
        <h4>{page}</h4>
        <SubmenuContent columns={columns}>
          {links.map(({ label, icon, url }, index) => {
            return (
              <SubmenuLink to={url} onClick={closeSubmenu} key={index}>
                {icon}
                {label}
              </SubmenuLink>
            )
          })}
        </SubmenuContent>
      </section>
    </SubmenuContainer>
  )
}
