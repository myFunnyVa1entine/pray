import my_artists from '../static/my_artists.json' with { type: "json" };
interface IArtists {
  src: string
  name: {
    kor: string
    eng: string
  },
  desc?: string
}

const artists: IArtists[] = my_artists;

export default function Card() {
  return <section class='overflow-auto'>
    {artists.map((artist:IArtists) => {
      return <div class='m-4 p-4' key={artist.src}>
        <div class='flex gap-4 items-end'>
          <h2 class='text-[1.5rem]'>{artist.name.kor}{' '}{artist.name.eng}</h2>
        </div>
        <div class='w-full h-auto flex justify-center items-center my-4'>
          <img src={`/JH_artists/${artist.src}.jpeg`} class='w-full object-contain rounded' alt={artist.name.eng} />
        </div>
        <div class='text-start mb-10'>{artist.desc ? <em>{artist.desc}</em> : ''}</div>
    </div>
    })}
  </section>
}