import qoshtirnoq from '../assets/qosh-tirnoq-1.svg'
import imzo from '../assets/ivan-imzo.svg'
import aboutImg from '../assets/aboutImg-1.svg'
import onikki from '../assets/onikki.svg'
import geografiya from '../assets/geografiya.svg'
import im3About from '../assets/copper-about.svg'
import operativnost from '../assets/operativnost.svg'
import olmos from '../assets/olmos.svg'
import peopleHand from '../assets/people-hand.svg'
import star from '../assets/im-1.svg'
import bottomImg from '../assets/bottom-img.png'
import im2 from '../assets/im2.svg'
import im2davomi from '../assets/im2-davomi.svg'
import im3 from '../assets/im-3-toliq.svg'
import im4 from '../assets/im-4.svg'
import im5 from '../assets/im-5.svg'
import im6 from '../assets/im-6.svg'
import im7 from '../assets/im-7.svg'
import im8 from '../assets/im-8.svg'

function AboutPage() {
  return (
    <div>
      <section className='bg-gray-100'>
        <div className='flex items-start justify-between max-sm:block'>
            <div className='max-sm:ml-[90px]'>
                <p className="text-left text-lg">Главная / <span className="text-lg font-extrabold">O нас</span></p>
                <h3 className="text-[100px] font-normal text-black text-left max-sm:text-[30px] max-sm:font-normal">O нас</h3>
                <hr className='w-[620px] my-[35px] h-[2px] max-sm:w-[155px]' />
                <div className='w-[590px] flex items-start mb-[40px] max-sm:w-[350px]'>
                    <img src={qoshtirnoq} alt="" />
                    <p className='text-[#E4A16F] text-[50px] font-semibold mx-[20px] mt-[10px] max-sm:text-[20px] max-sm:font-medium max-sm:mt-[30px] max-sm:mx-[10px]'>Мы любим все, что <br />сделано из меди</p>
                    <img className='mt-[150px] max-sm:mt-[80px]' src={qoshtirnoq} alt="" />
                </div>
                <div className='flex'>
                    <p className='text-[30px] font-bold text-left text-[#E4A16F] mr-[10px]'>Иван <br />Иванов</p>
                    <img src={imzo} alt="" />
                </div>
            </div>
            <div className='mt-[50px] max-sm:ml-[50px] max-sm:mt-[20px]'>
                <img src={aboutImg} alt="" />
            </div>
        </div>
      </section>
      <section>
        <div className='flex items-start justify-between mt-[100px] mb-[120px] max-sm:block'>
            <div>
                <h3 className='text-[30px] font-normal text-left mb-[20px] max-sm:text-center'>Наши <br />клиенты</h3>
                <p className='text-xl font-normal text-left max-sm:text-center'>Мы требовательны к себе, чтобы каждый день <br />
                становится лучше для наших клиентов и находить <br />
                лучшие решения для каждого из них</p>
            </div>
            <div className='text-left max-sm:mt-[20px]'>
                <h3 className='text-[50px] text-[#E4A16F] font-extrabold max-sm:text-center'>Счетчик клиентов</h3>
                <img src={onikki} alt="" />
            </div>
        </div>
      </section>
      <section className='bg-black text-white'>
        <h3 className='text-[50px] font-normal'>Наша история</h3>
        <div className='flex items-start justify-evenly mt-[30px] pb-[80px] max-sm:block max-sm:ml-14'>
            <div className='max-sm:mb-[30px]'>
                <div className='text-left'><p>Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. <br />Chartreuse Disrupt посадил птицу на лебеду jianbing. Хэштег<br /> для позднего завтрака с питьевым уксусом, <br />скейтборд с тильдой холодного отжима.</p> 
                <p className='my-[20px]'>Крафтовый пивной шалфей занимает кардиган из <br />ретро-фарма и стол, а также фланель из кейтара для <br />гастропабов.</p> 
                <p>Unicorn jean шорты quinoa подлинный cronut tilde twee <br />YOLO, потроха эстетичный yuccie iPhone truffaut seitan.</p> 
                <p className='my-[20px]'>Создавайте пивные путники, лесорубы, суккуленты <br />своими руками, Helvetica Vexillologist, следующий <br />уровень разбудили толстовку с капюшоном keffiyeh <br />tumblr schlitz chambray пишущую машинку.</p> 
                <p>Плитка метро шестиугольника keffiyeh.</p></div>
            </div>
            <div>
                <div className='text-left'>
                    <p>Синтетический этический биодизельный путин. Горькая <br />борода шалфей лоу-фай. Пало Санто буквально пледы <br />лампочки Эдисона, вилы пить уксус аутентичный пабст <br />уличное искусство метро плитка крафтовое пиво одно <br />происхождение кофе шаман ловец снов.</p>
                    <p className='my-[20px]'>Williamsburg sriracha portland, ассиметричная свиная <br />грудинка для микродозирования la croix 3 wolf moon <br />umami.</p>
                    <p>Четырехдолларовые тосты, модный топор трюффо, <br />ломо-клетчатый мех PBR & B Scester Остин Палео <br />Thundercats семейная реликвия Knausgaard от фермы до <br />стола.</p>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className='my-[70px] flex items-center justify-around max-sm:block'>
            <div className='text-left w-[370px] max-sm:text-center max-sm:ml-[80px]'>
                <h3 className='text-[50px] text-black'>Наша <br />география</h3>
                <p className='text-[20px] text-gray-400 mt-[30px] max-sm:mt-[10px] max-sm:mb-[20px]'>Наше производство находится в <br />Украине, но клиенты из более чем 50 <br />стран радуются товарам, <br />приобретенным в нашем магазине.</p>
            </div>
            <div className='w-[750px] max-sm:w-[500px] max-sm:mt-[20px]'>
                <img src={geografiya} alt="" />
            </div>
        </div>
      </section>
      <section>
        <div className='flex items-start justify-around max-sm:block'>
            <div className='max-sm:w-[500px] max-sm:ml-[25px]'>
                <img src={im3About} alt="" />
            </div>
            <div className='text-left max-sm:text-center'>
                <h3 className='text-[50px] text-black'>Наши <br />ценности</h3>
                <p className='text-[20px] text-gray-500 my-[40px]'>Наше производство находится в Украине, но <br />клиенты из более чем 50 стран радуются товарам, <br />приобретенным в нашем магазине.</p>
                <div className='flex items-center justify-around w-[280px] max-sm:ml-[135px]'>
                    <img src={operativnost} alt="" />
                    <p className='text-2xl font-semibold'>Оперативность</p>
                </div>
                <div className='flex items-center justify-around w-[280px] my-[40px] max-sm:ml-[135px]'>
                    <img src={olmos} alt="" />
                    <p className='text-2xl font-semibold'>Качественный <br />товар и сервис</p>
                </div>
                <div className='flex items-center w-[280px] max-sm:ml-[135px] mb-[100px]'>
                    <img className='ml-[15px] mr-[25px]' src={peopleHand} alt="" />
                    <p className='text-2xl font-semibold'>Гибкость</p>
                </div>
            </div>
        </div>
      </section>
      <section>
        <h3 className='text-4xl text-black font-medium mt-[100px] mb-[40px]'>Почему выбирают нас</h3>
        <div className='grid grid-cols-4 gap-[30px] max-sm:grid-cols-2 max-sm:gap-[20px] max-sm:ml-16'>
          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px] mb-[35px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={star} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Аутентичность</p>
            <p className='text-sm'>Медное перегонное оборудование <br />
            используется для получения эфирных масел <br />
            c незапамятных времен.</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px] mb-[35px] relative'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'>
              <div>
                <img className='absolute top-[29px] left-[20px]' src={im2davomi} alt="" />
                <img className='absolute top-[17px] left-[25px]' src={im2} alt="" />
              </div>
            </button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Изысканность</p>
            <p className='text-sm'>Наши изделия из меди являются очень <br />
            практичными. в то же время они наполнят <br />
            особой магией ваш дом или рабочее....</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px] mb-[35px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im3} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Честная оплата</p>
            <p className='text-sm'>Мы стремимся предоставить лучший товар по <br />
            лучшей цене с сервисом высокого уровня. Но<br />
            все начинается c....</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px] mb-[35px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im4} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Большой ассортимент</p>
            <p className='text-sm'>У нас есть все от миниатюрных настольных <br />
            паровых дистилляторов эфирных масел до <br />
            крупногабаритного оборудования...</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im5} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Доставка по всему миру</p>
            <p className='text-sm'>Вы можете получить нашу продукцию в <br />
            кратчайшие сроки в любую точку земного<br /> 
            шара.</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im6} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Гарантия качества</p>
            <p className='text-sm'>Наше оборудование прозводится вручную. Мы <br />
            постоянно производим контроль качества<br />
            произведенной продукции. </p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>

          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im7} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Удобство в использовании</p>
            <p className='text-sm'>Наши изделия из меди имеют уникальный <br />
            дизайн, который разрабатывался нами с целью<br />
            получения максимальной...</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>
          
          <div className='w-[308px] h-auto text-left max-sm:h-auto max-sm:w-[135px]'>
            <button className='w-[76px] h-[76px] bg-gradient-to-t from-[#0B3F37] to-[#CB8D62] flex items-center justify-center'><img src={im8} alt="" /></button>
            <p className='text-xl text-black font-semibold  mt-[24px] mb-[15px]'>Забота об окружающей среде</p>
            <p className='text-sm'>От 2 до 5% от стоимости каждого <br />
            приобретенного товара в нашем магазине мы<br />
            направляем на защиту....</p>
            <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img src={bottomImg} alt="" /></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
