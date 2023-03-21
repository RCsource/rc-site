import React from 'react'

import LogoFull from "../assets/logo_full.png"
import DiscordLogo from "../assets/discord-mark-blue.svg"
import TelegramLogo from "../assets/Telegram_logo.svg"

const MainScreen = () => {
  return (
    <>
      <img className="mx-auto md:w-[400px]" src={LogoFull} alt="RubyCats Logo" />
      <hr className="border-gray-700 hidden" />
      <div>
        <p className="text-sm text-center pb-5">Cтудия для разработки всего</p>
        <div>
          <h1 className="text-center font-bold text-lg">Что мы делаем?</h1>
          <p className="text-sm">Мы делаем все! Начиная от утилит на Ruby и Python и заканчивая созданием собственного дистрибутива Linux!</p>
        </div>
        <div>
          <h1 className="text-center font-bold text-lg">Наша цель?</h1>
          <p className="text-sm">Наша цель - создавать крутые утилиты, программы и так далее с открытым исходным кодом. Надеемся, что кто-то вдохновится нашими проектами и создаст что-то лучшее!</p>
        </div>
        <div>
          <h1 className="text-center font-bold text-lg">Соц. сети:</h1>
          <div className="flex justify-center gap-2">
            <a href="https://t.me/rubycoding"><img className="w-28" src={TelegramLogo} alt="Telegram" /></a>
            <a href=""><img className="w-28 pt-4" src={DiscordLogo} alt="Discord" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainScreen