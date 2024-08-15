import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

interface Data {
  foo: number;
}

export const handler: Handlers<Data> = {
  async GET(_req: Request, ctx: FreshContext) {
    const resp = await ctx.render();
    resp.headers.set('X-Custom-Header', "Hello");
    console.log(resp.headers)
    return resp;
  }
}

export default function ArtistName(props: PageProps) {
  const href = props.url.href;
  return <section class='layout text-center h-screen-body dark:text-white dark:bg-black'>
    <p>this is name's page {href}</p>
  </section>
}