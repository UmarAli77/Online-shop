import copper from '../assets/copper.svg'
import img1 from '../assets/img-1.svg'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.svg'
import img4 from '../assets/img-4.svg'
import img5 from '../assets/img-5.svg'
import img6 from '../assets/img-6.svg'
import ivan from '../assets/ivan.svg'
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


function Home() {
  return (
    <div>
      <section className="bg-emerald-600 grid grid-cols-2 items-start">
        <div className="text-white p-5 w-[500px] ml-[100px] max-sm:ml-0">
          <h1 className="text-left text-6xl max-sm:text-4xl">Хит продаж</h1>
          <hr className="w-[423px] my-[60px] max-sm:w-[300px] max-sm:my-[20px]" />
          <p className="text-left text-4xl max-sm:text-3xl">Дистиллятор для <br />эфирных масел</p>
          <p className="text-left text-3xl font-semibold my-[45px] max-sm:my-[15px] max-sm:text-2xl">Цена <span className="text-3xl font-extrabold ml-[100px] max-sm:ml-[20px] max-sm:text-2xl">4 906 грн</span></p>
          <button className="text-xl font-medium text-white w-[327px] h-[50px] bg-yellow-800 flex items-center justify-center max-sm:w-[150px]">Купить</button>
        </div>
        <div className='w-[800px] p-5 max-sm:w-[400px] max-sm:absolute max-sm:left-[170px]'>
          <img className='pr-[170px] max-sm:pr-0' src={copper} alt="" />
        </div>
      </section>
      <section>
        <p className='mt-[60px] mb-[30px] text-4xl font-normal'>Наша продукция</p>
        <div className='grid grid-cols-3 items-center max-sm:grid-cols-2'>
          <div className='w-[400px] h-auto bg-gradient-to-t from-[#fff] to-[#CB8D62] relative max-sm:w-[170px] max-sm:ml-[60px] mr-[80px]'>
            <img className='w-full' src={img1} alt="" />
            <p className='absolute top-[330px] left-[30px] max-sm:top-[130px] max-sm:left-[20px] max-sm:text-base text-white text-3xl font-medium'>Для эфирных масел</p>
          </div>

          <div className='w-[400px] h-auto bg-gradient-to-t from-[#fff] to-[#CB8D62] relative mr-[5px] max-sm:w-[170px]'>
            <img className='w-full' src={img2} alt="" />
            <p className='absolute top-[330px] left-[65px] max-sm:top-[130px] max-sm:left-[20px] max-sm:text-base text-white text-3xl font-medium'>Для гидролатов</p>
          </div>

          <div className='w-[400px] h-auto bg-gradient-to-t from-[#fff] to-[#CB8D62] relative my-10 max-sm:w-[170px] max-sm:ml-[60px]'>
            <img className='w-full' src={img3} alt="" />
            <p className='absolute top-[330px] left-[65px] max-sm:top-[150px] max-sm:left-[20px] max-sm:text-base text-white text-3xl font-medium'>Медная посуда</p>
          </div>

          <div className='w-[400px] h-auto bg-gradient-to-t from-[#CB8D62] to-[#CB8D62] relative max-sm:w-[170px]'>
            <img className='w-full' src={img4} alt="" />
            <p className='absolute top-[350px] left-[20px] max-sm:top-[130px] max-sm:left-[20px] max-sm:text-base text-white text-3xl font-medium'>Аксессуары ?из меди</p>
          </div>

          <div className='w-[400px] h-auto bg-gradient-to-t from-[#fff] to-[#CB8D62] relative mr-[30px]  max-sm:ml-[60px] max-sm:w-[170px]'>
            <img className='w-full' src={img5} alt="" />
            <p className='absolute top-[350px] left-[30px] max-sm:top-[130px] max-sm:left-[10px] max-sm:text-base text-white text-3xl font-medium'>Индивидуальный заказ</p>
          </div>

          <div className='w-[400px] h-auto bg-gradient-to-t from-[#fff] to-[#CB8D62] relative max-sm:w-[170px]'>
            <img className='w-full' src={img6} alt="" />
            <p className='absolute top-[350px] left-[30px] max-sm:top-[130px] max-sm:left-[10px] max-sm:text-base text-white text-3xl font-medium'>Скидки и предложения</p>
          </div>
        </div>
      </section>
      <section className='bg-gray-100'>
        <p className='text-4xl my-[80px]'>Лучшие продажи</p>
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
          <div className='w-[390px] max-sm:ml-[80px]'>
            <img className='w-[390px]' src={img1} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>

          <div className='w-[390px] max-sm:hidden'>
            <img className='w-[390px]' src={img2} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>

          <div className='w-[390px] max-sm:hidden'>
            <img className='w-[390px]' src={img3} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c фарфоровой<br /> ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>
        </div>
        <button className='w-[15px] h-[15px] bg-[#5E3928] my-[50px]'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px] mx-5'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px]'></button><br />
        <button className='w-[327px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl'>Перейти в каталог</button>
      </section>
      <section>
        <p className='text-4xl my-[80px]'>новинки</p>
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
          <div className='w-[390px] max-sm:ml-[80px] relative'>
            <img className='w-[390px]' src={img1} alt="" />
            <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <div>
                <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
              </div>
            </div>
          </div>

          <div className='w-[390px] max-sm:ml-[80px] max-sm:hidden'>
            <img className='w-[390px]' src={img2} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>

          <div className='w-[390px] max-sm:hidden'>
            <img className='w-[390px]' src={img3} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c фарфоровой<br /> ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>
        </div>
        <button className='w-[15px] h-[15px] bg-[#5E3928] my-[50px]'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px] mx-5'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px]'></button><br />
        <button className='w-[327px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl'>Перейти в каталог</button>
      </section>
      <section className='bg-emerald-700 mt-5'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1'>
          <div className='text-white'>
            <h2 className='text-[120px] text-white font-normal max-sm:text-[60px]'>1 + 1 = 3</h2>
            <p className='text-3xl font-medium mb-10 mt-5 max-sm:mb-5 max-sm:mt-3'>Закажите два товара и<br /> получите третий бесплатно</p>
            <button className='w-[327px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] mb-3'>Перейти в каталог</button>
          </div>
          <div className='w-[600px] max-sm:w-[542px] border'>
            <img className='w-full' src={copper} alt="" />
          </div>
        </div>
      </section>
      <section>
        <p className='text-4xl my-[80px]'>мы рекомендуем</p>
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
          <div className='w-[390px] max-sm:ml-[80px]'>
            <img className='w-[390px]' src={img1} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
            <button className='w-[290px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl max-sm:block hidden mt-5 ml-5'>Перейти в каталог</button>
          </div>

          <div className='w-[390px] max-sm:ml-[80px]'>
            <img className='w-[390px]' src={img2} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
            <button className='w-[290px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl max-sm:block hidden mt-5 ml-5'>Перейти в каталог</button>
          </div>

          <div className='w-[390px] max-sm:hidden'>
            <img className='w-[390px]' src={img3} alt="" />
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c фарфоровой<br /> ручкой</p>
              <p className='text-2xl font-semibold'>1 953 грн</p>
            </div>
          </div>
        </div>
        <button className='w-[15px] h-[15px] bg-[#5E3928] my-[50px]'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px] mx-5'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px]'></button><br />
        <button className='w-[327px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl'>Перейти в каталог</button>
      </section>
      <section>
        <p className='text-4xl my-[80px]'>Скидки</p>
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
          <div className='w-[390px] max-sm:ml-[80px] relative'>
            <img className='w-[390px]' src={img1} alt="" />
            <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <div>
                <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
              </div>
            </div>
          </div>

          <div className='w-[390px] max-sm:ml-[80px] relative max-sm:hidden'>
            <img className='w-[390px]' src={img2} alt="" />
            <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
              <div>
                <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
              </div>
            </div>
          </div>

          <div className='w-[390px] max-sm:ml-[80px] relative max-sm:hidden'>
            <img className='w-[390px]' src={img3} alt="" />
            <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
            <div className='flex items-center justify-between my-2'>
              <p className='text-left text-xl'>Медный чайник c фарфоровой ручкой<br /></p>
              <div>
                <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
              </div>
            </div>
          </div>

        </div>
        <button className='w-[15px] h-[15px] bg-[#5E3928] my-[50px]'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px] mx-5'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] my-[50px]'></button><br />
        <button className='w-[327px] h-[50px] bg-gradient-to-br from-[#5E3928] to-[#E4A16F] text-white text-xl'>Перейти в каталог</button>
      </section>
      <section>
        <h3 className='text-4xl font-normal text-black mt-16'>Что думают o нас</h3>
        <div className='flex items-center justify-between my-12'>
          <div className='w-[456px] h-auto shadow-xl text-left pl-5 max-sm:w-[350px] max-sm:ml-[120px]'>
            <img src={ivan} alt="surat" />
            <h3 className='text-2xl font-medium text-black my-[20px]'>Иван Иванов</h3>
            <i className='text-left'>Наше оборудование прозводится вручную. Мы <br />
            постоянно производим контроль качества <br />
            произведенной продукции. в то же время, если в ходе <br />
            транспортировки или эксплуатации в течении первых <br />
            2 лет происходят поломки, мы всегда находим c <br />
            клиентом наиболее удобный вариант решения вопроса. </i>
            <p className='text-left mt-[30px]'>20.10.21</p>
          </div>

          <div className='w-[456px] h-auto shadow-xl pl-5 text-left max-sm:hidden'>
            <img src={ivan} alt="surat" />
            <h3 className='text-2xl font-medium text-black my-[20px]'>Иван Иванов</h3>
            <i className='text-left'>Наше оборудование прозводится вручную. Мы <br />
            постоянно производим контроль качества <br />
            произведенной продукции. в то же время, если в ходе <br />
            транспортировки или эксплуатации в течении первых <br />
            2 лет происходят поломки, мы всегда находим c <br />
            клиентом наиболее удобный вариант решения вопроса. </i>
            <p className='text-left mt-[30px]'>20.10.21</p>
          </div>

          <div className='w-[456px] h-auto shadow-xl pl-5 text-left max-sm:hidden'>
            <img src={ivan} alt="surat" />
            <h3 className='text-2xl font-medium text-black my-[20px]'>Иван Иванов</h3>
            <i className='text-left'>Наше оборудование прозводится вручную. Мы <br />
            постоянно производим контроль качества <br />
            произведенной продукции. в то же время, если в ходе <br />
            транспортировки или эксплуатации в течении первых <br />
            2 лет происходят поломки, мы всегда находим c <br />
            клиентом наиболее удобный вариант решения вопроса. </i>
            <p className='text-left mt-[30px]'>20.10.21</p>
          </div>
        </div>
        <button className='w-[15px] h-[15px] bg-[#5E3928]'></button>
        <button className='w-[15px] h-[15px] bg-[#031412] mx-5'></button>
        <button className='w-[15px] h-[15px] bg-[#031412]'></button><br />
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

export default Home
