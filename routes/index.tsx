import Mode from "../islands/Mode.tsx";

export default function Home() {
  return <main class='dark:bg-black  w-screen h-screen antialiased duration-300'>
    <a href='/introduce' class='flex justify-center items-center h-screen'>
      <image
        class='w-2/3 h-auto'
        src='/brochure.gif' alt='main poster' />
    </a>
    <Mode />
  </main>
}