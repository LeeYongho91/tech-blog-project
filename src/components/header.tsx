'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Search, Youtube, Instagram, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Header = () => {
  const [isMenu, setIsMenu] = useState(true)
  const router = useRouter()

  const onToggleMenu = () => {
    setIsMenu(!isMenu)
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <header className="bg-white sticky top-0">
      <nav className="flex items-center justify-between w-[90%] mx-auto">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={handleGoHome}
        >
          <Image
            width={64}
            height={20}
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="img"
          />
          <div className="text-xl">
            <span className="mr-1 font-bold">소프트베리</span>기술블로그
          </div>
        </div>
        <div
          className={`duration-500 flex md:items-center gap-2 md:static absolute left-0 flex-col md:flex-row
          ${isMenu ? 'top-[-60vh]' : 'top-[100%]'} md:bg-white w-full md:min-h-fit min-h-[60vh] md:w-auto bg-white px-6`}
        >
          <ul className="flex-col gap-4 mb-5 flex md:hidden">
            <li>-</li>
            <li>App</li>
            <li>Web</li>
            <li>Server</li>
            <li>QA</li>
          </ul>
          <ul className="flex gap-4 md:flex-row flex-col">
            <li>
              <a href="">소베 스터디</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.wanted.co.kr/search?query=%EC%86%8C%ED%94%84%ED%8A%B8%EB%B2%A0%EB%A6%AC&tab=overview"
              >
                개발자 채용
              </a>
            </li>
          </ul>
          <span className="w-[1px] h-3 bg-gray-300 hidden md:block"></span>
          <ul className="flex items-center gap-3 mt-5 md:mt-0">
            <li className="md:block hidden">
              <a href="">
                <Search />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@evinfra" target="_blank">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ev_infra/" target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <Search className="text-3xl cursor-pointer" />
          {isMenu ? (
            <Menu className="text-3xl cursor-pointer" onClick={onToggleMenu} />
          ) : (
            <X className="text-3xl cursor-pointer" onClick={onToggleMenu} />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
