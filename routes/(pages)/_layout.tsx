import { PageProps } from "$fresh/server.ts";
import Menus from "../../islands/Menus.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <section class='text-white bg-black font-gosha'>
      <Menus />
      <Component />
    </section>
  );
}
