import artists from '../../../static/artists.json' with { type: "json" }

interface IInfo {
  kor_name: string
  eng_name: string
  w?: number,
  desc?: string,
  home?: string,
  instagram?: string
}

function Card({ info }: { info: IInfo }) {
  return <article class='flex flex-col gap-3 pb-12'>
    <h2 class='text-[1.5rem]'>{info.kor_name} {info.eng_name}</h2>
    <img src={`/JH_artists/${info.eng_name.split(' ').join('').toLowerCase()}.jpeg`} alt={info.eng_name} class={`rounded ${info.w !== undefined ? 'w-1/2' : 'w-[70%]'}`} />
    {info.desc && <em>{info.desc}</em>}
    
    <div class='flex gap-2 items-center'>
      {
        info.home && <a href={`https://${info.home}`} target='_blank'>
          <img src="/JH_artists/home.png" alt={`${info.home}'s homepage`} class='w-[26px] h-[26px]' />
        </a>
      }
      {
        info.instagram && <a href={`https://www.instagram.com/${info.instagram}`} target='_blank'>
          <img src="/JH_artists/instagram.png" alt={`${info.instagram}'s instagram`} class='w-7 h-7' />
        </a>
      }
    </div>
</article>
}

export default function ArtistPage() {
  return <section class='layout text-white bg-black px-6 pt-16 pb-32'>
    {artists.map((artist: IInfo) => <Card info={artist} /> )}
  </section>
}