import Mode from "../islands/Mode.tsx";

export default function Home() {
  return <main class='dark:bg-black  w-screen h-screen antialiased duration-300'>
    <a href='/programs' class='flex justify-center items-center h-screen'>
      <image
        class='h-2/3'
        src='https://file.miricanvas.com/template_thumb/2024/07/02/18/40/k2udxw55w6620kcq/thumb.webp?size=800' alt='main poster' />
    </a>
    <Mode />
  </main>
}