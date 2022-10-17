import React, { useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineContacts
} from 'react-icons/ai'
import { BsCollectionFill } from 'react-icons/bs'
import './style.css'

const Nav = () => {
  const [ActiveLink, setActive] = useState('#')
  const LinkActive = value => {
    setActive(value)
  }
  return (
    <nav>
      <a href='#' className={` ${ActiveLink == '#' && 'active'}`}>
        <AiOutlineHome />
      </a>
      <a
        href='#About'
        onClick={() => LinkActive('#about')}
        className={` ${ActiveLink == '#about' && 'active'}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#portfolios'
        onClick={() => LinkActive('#service')}
        className={` ${ActiveLink == '#service' && 'active'}`}
      >
        <AiOutlineSetting />
      </a>
      <a
        href='#portfolio'
        onClick={() => LinkActive('#portfolio')}
        className={` ${ActiveLink == '#portfolio' && 'active'}`}
      >
        <BsCollectionFill />
      </a>
      <a
        href='#Contact'
        onClick={() => LinkActive('#Contact')}
        className={` ${ActiveLink == '#contact' && 'active'}`}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  )
}
export default Nav
