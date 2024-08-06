import { useState } from "preact/hooks";

export default function Menus() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handle_click = () => setMenuOpen(currentMenu => !currentMenu);
  const list_name = [
    {id: 0, name:'paper ground', href: '/about'},
    {id: 1, name:'전시 소개', href: '/introduce'},
    {id: 2, name:'참여 작가', href: '/artists'},
    {id: 3, name:'오프닝 파티', href: '/party'},
    {id: 4, name:'shop', href: 'https://smartstore.naver.com/paperground'},
  ]
  return <nav class='relative flex justify-between items-center p-4 dark:bg-black dark:text-white'>
    <a href="/">
      <img src='/circle_logo.png' alt='logo image' class='w-10 h-10' />
    </a>
    <figure onClick={handle_click}
      class={`z-10 duration-500 hover:cursor-pointer border border-black rounded-full ${menuOpen ? 'rotate-45 duration-500': 'rotate-0'} dark:border-white`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class='size-8'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </figure>
    <ol className={`fixed top-0 left-0 right-0 bottom-0 bg-white duration-500 transition flex flex-col h-screen justify-center gap-12 text-lg dark:bg-black ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
      {list_name.map(list => <a
        key={list.id}
        href={list.href}
        {...(list.name === 'shop' && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <li className="flex flex-col items-center hover:cursor-pointer text-2xl uppercase hover:text-purple-200">{list.name}</li>
      </a>)}
    </ol>
  </nav>
}