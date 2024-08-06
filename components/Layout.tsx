import Menus from "../islands/Menus.tsx";
import Mode from '../islands/Mode.tsx';
import { ComponentChildren } from "preact";

type LayoutProps = {
  children: ComponentChildren;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div class='dark:text-white dark:bg-black'>
      <Menus />
      <main class='text-center h-screen-body dark:text-white dark:bg-black'>
        {children}
      </main>
      <Mode />
    </div>
  );
}
