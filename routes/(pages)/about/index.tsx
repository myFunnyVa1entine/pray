import exhibitors from '../../../static/exhibitors.json' with { type: "json" }

export default function Home() {
  return <section class='layout h-auto dark:text-white dark:bg-black pl-6 pr-[22px] pt-16 pb-32'>
    {exhibitors.map(exhibitor => {
      return <article key={exhibitor.name.eng} class='pb-12'>
        <h1 class='text-lg'>{exhibitor.title}</h1>
        <h3 class='text-xl'>{exhibitor.name.kor}</h3>
        <img src={exhibitor.src} alt='poster image' class='w-52 py-10' />
        <p>{exhibitor.desc}</p>
        <a href={exhibitor.href} target='_blank'>
          <img src='/JH_artists/insta.png' alt='poster image' class='w-[28px] pt-4 hover:cursor-pointer' />
        </a>
      </article>
    })
  }
  </section>
}