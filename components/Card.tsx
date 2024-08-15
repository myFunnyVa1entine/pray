export default function Card() {
  return <section class='overflow-auto'>
    <div class='m-4 p-4'>
      <div class='flex gap-4 items-end'>
        <h2 class='text-[1.5rem]'>작가 이름{ } artist name</h2>
      </div>
      <div class='w-full h-[200px] flex justify-center items-center bg-purple-200 my-4'>
        작가 사진
      </div>
      <div class='text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, impedit recusandae eveniet expedita fugiat nisi! Similique enim officia porro illo maiores sed nobis quia reiciendis facere laborum, dicta suscipit ut.
      Unde non corporis atque labore, tempore recusandae et alias possimus laudantium ad, reiciendis minus nisi debitis numquam fugiat nam voluptatem voluptate porro aliquid at commodi veritatis assumenda error. Eligendi, tenetur?</div>
    </div>
  </section>
}