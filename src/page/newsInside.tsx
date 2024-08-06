import instagram from '../assets/instagram-color.svg'
import facebok from '../assets/facebook-color.svg'
import twitter from '../assets/twitter-color.svg'
import group1 from '../assets/group-1.svg'
import leftImg from '../assets/left-icon.svg'
import rightImg from '../assets/right-icon.svg'



function NewsInsidePage() {
  return (
    <div>
      <section>
        <p className="text-left text-lg">Главная / Новости /<span className="text-lg font-extrabold">  Эфирные масла для улучшения сна  </span></p>
        <div className='flex items-start justify-between max-sm:block'>
          <h3 className="text-[50px] text-black text-left max-sm:text-3xl">Эфирные масла для <br />улучшения сна</h3>
          <div className='w-[248px] h-[25px] flex items-center justify-end mt-[100px] max-sm:mt-[20px]'>
            <p>Поделиться</p>
            <img className='ml-[52px] mr-[20px]' src={instagram} alt="" />
            <img src={facebok} alt="" />
            <img className='ml-[20px]' src={twitter} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className='relative w-[1216px] h-[180px] max-sm:w-[550px] my-5'>
            <img className='w-full' src={group1} alt="" />
            <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
          </div>
          <div className='mt-[240px] mb-[51px] text-left max-sm:mt-[15px]'>
            <p className='text-base font-medium my-[25px] text-left text-[#031412]'>Проблемы со сном и засыпанием многим знакомы не понаслышке. У каждого есть свой способ борьбы с этой проблемой, но большинство уже оценили <br />успокаивающие свойства эфирных масел.</p>
            <p className='text-base font-medium my-[25px] text-left text-[#031412]'>Экстракты некоторых растений благотворно влияют на большинство систем организма, снимают стресс и избавляют от негативных эмоций. Правильное <br />
            использование эфира поможет расслабиться и сделать ночной отдых полноценным. Самым лучшим и приятным лекарством от усталости и бессонницы <br />
            являются эфирные масла лаванды, ладана и мелиссы.</p>
          </div>
        </div>
      </section>
      <section>
        <div className='text-left'>
          <h3 className='text-2xl font-extrabold uppercase'>Лавандовое масло</h3>
          <p className='text-[#031412] text-base font-normal my-5'>Лаванда – самое распространенное растение, для создания эфира. И это не удивительно, она обладает действительно <br />
          волшебными свойствами:</p>
          <ul className='list-disc ml-[20px]'>
            <li>способна избавить от агрессии, раздражительности;</li>
            <li>снимает стресс;</li>
            <li>помогает избавиться от негативных мыслей и эмоций;</li>
            <li>помогает успокоиться;</li>
            <li>помогает достичь гармонии.</li>
          </ul>
          <p className='text-base font-normal text-[#031412] mt-5 mb-10'>Лавандовое эфирное масло нормализует работу нервной икровеносной систем, стимулирует выработку серотонина и <br />
          стабилизирует гормональный фон. Этим и объясняются ее чудодейственные свойства. Кстати, эффективность именно <br />
          этого эфира в борьбе с бессонницей доказана в ходе практических исследований.</p>
        </div>

        <div className='text-left'>
          <h3 className='text-2xl font-extrabold uppercase'>Эфирное масло ладана </h3>
          <p className='text-[#031412] text-base font-normal my-5'>Запах ладана обладает антидепрессивным эффектом, но это не все, на что способен этот эфир:</p>
          <ul className='list-disc ml-[20px]'>
            <li>масло ладана успокаивает тело, помогает ему расслабиться</li>
            <li>снимает напряжение</li>
            <li>помогает избавиться от стресса</li>
          </ul>
          <p className='text-base font-normal text-[#031412] mt-5 mb-10'>Этот компонент просто незаменим при борьбе с бессонницей и ночными страхами.</p>
        </div>

        <div className='text-left'>
          <h3 className='text-2xl font-extrabold uppercase'>Масло мелиссы</h3>
          <p className='text-[#031412] text-base font-normal my-5'>Эфирное масло мелиссы прекрасно подойдет для тех, кому трудно полностью <br />
          расслабиться. Оно влияет на многие системы в организме:</p>
          <ul className='list-disc ml-[20px]'>
            <li>нормализует сердечный ритм</li>
            <li>стабилизирует функции нервной и сердечно-сосудистой систем</li>
            <li>благоприятно влияет на работу мозга</li>
            <li>снимает физическое и эмоциональное напряжение.</li>
          </ul>
          <p className='text-base font-normal text-[#031412] mt-5 mb-10'>Этот компонент просто незаменим при борьбе с бессонницей и ночными страхами.</p>
        </div>

        <div className='text-left'>
          <h3 className='text-2xl font-extrabold uppercase'>Как использовать</h3>
          <p className='text-[#031412] text-base font-normal my-5'>Самый популярный метод применения эфирных масел – ароматерапия. Достаточно несколько капель, чтобы достичь желаемого эффекта. <br />
          Приобрести эфир можно в любом специализированном магазине либо же сделать самостоятельно – с помощью дистиллятора. <br />
          Домашний эфир ничем не уступает покупному, его также можно использовать для аромаламп, расслабляющих ванн, массажей и т.д. Главное, <br />
          найти эфир подходящий именно вам, и тогда вы будете не только получать удовольствие от ароматерапии, но и оздоровите свой организм. Вы <br />
          можете не сомневаться в качестве эфирного масла, которое сделаете самостоятельно. Процесс создания очень простой и вы гарантированно получите нужный эффект.</p>
        </div>

        <hr />

        <div className='my-[50px] h-[60px] w-full grid grid-cols-3 items-center justify-between border max-sm:grid-cols-1 max-sm:h-[120px]'>
          <div className='w-[295px] h-8 flex items-center justify-between max-sm:ml-[120px]'>
            <img src={leftImg} alt="" />
            <p className='text-base font-medium text-[#031412]'>Эфирные масла для улучшения сна</p>
          </div>
          <div className='w-[248px] h-[25px] flex items-center justify-end max-sm:ml-[150px]'>
            <p className='text-base text-[#031412] font-bold'>Поделиться</p>
            <img className='ml-[52px] mr-[20px]' src={instagram} alt="" />
            <img src={facebok} alt="" />
            <img className='ml-[20px]' src={twitter} alt="" />
          </div>
          <div className='w-[295px] h-8 flex items-center justify-between max-sm:ml-[125px]'>
            <p className='text-base font-medium text-[#031412]'>Эфирные масла для улучшения сна</p>
            <img src={rightImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsInsidePage
