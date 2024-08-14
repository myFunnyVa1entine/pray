import { PageProps } from "$fresh/server.ts";
import Menus from "../islands/Menus.tsx";
import Mode from '../islands/Mode.tsx';


export default function Layout({ Component }: PageProps) {
  return (
    <div class='dark:text-white dark:bg-black'>
      <Menus />
      <Component />
      <Mode />
    </div>
  );
}
