import { PageProps } from "$fresh/server.ts";
import Menus from "../../islands/Menus.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class='text-white bg-black'>
      <Menus />
      <Component />
    </div>
  );
}
