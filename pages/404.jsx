import { useState, useEffect } from "react"
import RootLayout from "@/layouts/root-layout"

export default function page404() {

  const kaomojis = [
    "ಠ_ಠ",
    "⋋_⋌",
    "ノಠ_ಠノ",
    "(｀Д´)",
    "(`A´)",
    "(¬_¬)",
    "（￣s￣；",
    "(ｰ ｰ;)",
    "(´･_･｀)",
    "(●´^｀●)",
    "ㅇㅅㅇ",
    "(=ＴェＴ=)",
    "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
    "(＃＞＜)",
    "(；￣Д￣)",
    "(〃＞＿＜;〃)",
    "(눈_눈)",
    "ㄟ( ･ө･ )ㄏ",
    "༼☯﹏☯༽",
    "(⋟﹏⋞)",
    "(╯︵╰,)",
    "(ಥ﹏ಥ)",
    "（πーπ）",
    "(ಥ﹏ಥ)",
    "(/・・)ノ",
  ]


  const [kaomoji, setKaomoji] = useState("")

  useEffect(() => {
    // Set random kaomoji when component is mounted
    const randomKaomoji = kaomojis[Math.floor(Math.random() * kaomojis.length)]
    setKaomoji(randomKaomoji)
  }, [])

  return (
    <RootLayout
      extraTitle="404 not found"
      showFooter={false}
    >
      <div className={`
        kaomoji
        w-full h-screen
        flex items-center justify-center
        `}>
        <p>
          <span
            className={`
            text-white-light
            text-6xl
          `}
          >
            {kaomoji}
          </span>
          <span className={`
            block 
            w-full 
            text-center 
            mt-5
          `}>
            página no encontrada
          </span>
        </p>
      </div>
    </RootLayout>
  )
}