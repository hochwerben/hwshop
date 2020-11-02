import React from 'react'
import { FaTimes } from 'react-icons/fa'

import { links } from '~/constants/links'
import { useGlobalContext } from '~/context/AppContext'

import {
  SidebarWrapper,
  SidebarContainer,
  CloseButton,
  SidebarLinks,
  SidebarSublinks,
  Sublink,
} from './styles'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <SidebarContainer>
        <CloseButton onClick={closeSidebar}>
          <FaTimes />
        </CloseButton>
        <SidebarLinks>
          {links.map(({ page, links }, index) => (
            <article key={index}>
              <h4>{page}</h4>
              <SidebarSublinks>
                {links.map(({ label, icon, url }, index) => (
                  <Sublink to={url} key={index} onClick={closeSidebar}>
                    {icon}
                    {label}
                  </Sublink>
                ))}
              </SidebarSublinks>
            </article>
          ))}
        </SidebarLinks>
      </SidebarContainer>
    </SidebarWrapper>
  )
}

export default Sidebar
