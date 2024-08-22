import artists from '../../../static/artists.json' with { type: "json" }

interface IInfo {
  kor_name: string
  eng_name: string
  w?: number,
  desc?: string
}

function Card({ info }: { info: IInfo }) {
  return <article class='flex flex-col gap-3 pb-12'>
    <h2 class='text-[1.5rem]'>{info.kor_name} {info.eng_name}</h2>
    <img src={`/JH_artists/${info.eng_name.split(' ').join('').toLowerCase()}.jpeg`} alt={info.eng_name} class={`rounded ${info.w !== undefined ? 'w-1/2 h-[220px]' : 'h-[320px] w-full'}`} />
    {info.desc && <em>{info.desc}</em>}
</article>
}

export default function ArtistPage() {
  return <section class='layout text-white bg-black px-6 pt-16 pb-32'>
    {artists.map((artist: IInfo) => <Card info={artist} /> )}
  </section>
}