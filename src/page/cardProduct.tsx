import topIcon from '../assets/topIcon.svg'
import card1 from '../assets/card1.svg'
import bottomIcon from '../assets/bottomImg.svg'
import cardBig from '../assets/card-big.svg'
import galochka from '../assets/galochka.png'
import instagram from '../assets/instagram-color.svg'
import facebok from '../assets/facebook-color.svg'
import twitter from '../assets/twitter-color.svg'
import yurak from '../assets/yurak.svg'
import ivan from '../assets/ivan.svg'
import img1 from '../assets/img-1.svg'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.svg'
import { useState } from 'react'


function CardProductPage() {
    const [count, setCount] = useState<number>(1)
    const decrement = (zero: number) => {
        zero > 1 ? setCount( zero - 1 ) : setCount(1)
    }
    const increment = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <section>
        <p className="text-left text-lg max-sm:text-base w-[291px]">Главная / Каталог /<span className="text-lg font-extrabold">  Дистиллятор для получения гидролата 8л</span></p>
        <div className='grid grid-cols-3 items-start justify-between my-[50px] gap-5 max-sm:grid-cols-2'>
            <div className='w-[120px] flex flex-col items-center justify-center gap-5 max-sm:gap-3'>
                <button className='w-7 h-9 bg-[#0B3F37] flex items-center justify-center max-sm:w-[13px] max-sm:h-[16px]'><img src={topIcon} alt="" /></button>
                <img className='w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px]' src={card1} alt="" />
                <img className='w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px]' src={card1} alt="" />
                <img className='w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px]' src={card1} alt="" />
                <img className='w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px]' src={card1} alt="" />
                <img className='w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px]' src={card1} alt="" />
                <button className='w-7 h-9 bg-[#0B3F37] flex items-center justify-center'><img src={bottomIcon} alt="" /></button>
            </div>
            <div className='w-[460px] h-[500px] relative max-sm:w-[250px] max-sm:h-auto'>
                <img className='w-full' src={cardBig} alt="" />
                <button className='bg-[#9B0000] uppercase w-[84px] h-[36px] text-white absolute top-[35px] left-0'>sale</button>
                <button className='bg-white w-[46px] h-[75px] absolute top-0 right-0 flex items-end justify-center'><img src={yurak} alt="" /></button>
            </div>
            <div className='w-[690px] h-auto'>
                <h2 className='text-[40px] font-medium text-left max-sm:text-[25px]'>Дистиллятор для получения<br /> гидролата 8л</h2>
                <div className='flex items-center justify-between mt-[37px] mb-[70px] max-sm:grid max-sm:grid-cols-2'>
                    <div className='flex items-center justify-between w-[105px] max-sm:flex max-sm:w-[95px]'>
                        <img src={galochka} alt="" />
                        <p>B наличии</p>
                    </div>
                    <div className='text-base text-black flex items-center justify-between w-[140px] max-sm:flex max-sm:w-[130px]'>
                        <p className='font-medium'>Артикул: </p>
                        <span className='font-bold'>CP-0803</span>
                    </div>
                </div>
                <hr className='w-[550px]' />
                <div className='text-left'>
                    <h3 className='text-lg font-bold uppercase mt-[35px] mb-[15px]'>Описание</h3>
                    <p className='text-sm font-medium text-[#031412]'>Медный дистиллятор «Феникс» станет Вашим надёжным <br />
                    помощником и проводником в мир дистилляции и красоты, c <br />
                    которым Вы легко сможете получать свои любимые гидролаты или <br />
                    алкогольные напитки.</p>
                </div>
                <hr className='mt-[36px] mb-[44px] w-[550px]' />
                <div>
                    <div className='flex items-center justify-between max-sm:flex max-sm:justify-start'>
                        <div className='max-sm:mr-[30px]'>
                            <h3 className='text-4xl text-[#031412] font-semibold max-sm:text-2xl'>Цена</h3>
                        </div>
                        <div className='flex items-start'>
                            <p className='text-[45px] text-[#9B0000] font-bold max-sm:text-2xl'>10 953 грн</p>
                            <del className='text-2xl text-gray-500 mt-[22px] ml-[20px] max-sm:text-lg max-sm:mt-[12px]'>1 953 грн</del>
                        </div>
                    </div>
                    <div className='flex items-center justify-between max-sm:flex max-sm:justify-start'>
                        <div className='w-[210px] h-[50px] max-sm:w-[125px] max-sm:mr-[30px]'>
                            <button onClick={() => decrement(count)} className='w-[50px] h-[50px] border max-sm:w-[32.5px]'>-</button>
                            <button className='w-[110px] h-[50px] border max-sm:w-[60px]'>{count}</button>
                            <button onClick={increment} className='w-[50px] h-[50px] border max-sm:w-[32.5px]'>+</button>
                        </div>
                        <div>
                            <button className='w-[446px] h-[50px] border bg-gradient-to-tr from-[#5E3928] to-[#E4A16F] text-xl font-bold text-white max-sm:w-[155px]'>Купить</button>
                        </div>
                    </div>
                    <hr className='my-[35px] w-[550px]' />
                    <div className='w-[248px] h-[25px] flex items-center justify-end max-sm:mt-[20px]'>
                        <p>Поделиться</p>
                        <img className='ml-[52px] mr-[20px]' src={instagram} alt="" />
                        <img src={facebok} alt="" />
                        <img className='ml-[20px]' src={twitter} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <hr className='my-[70px] max-sm:my-[25px] w-[550px]' />
        </section>
        <section className='text-left'>
            <h3 className='text-[40px] text-[#031412] font-medium'>Описание</h3>
            <p className='text-lg font-normal my-[30px]'>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. <br />
            Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на <br />
            собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.</p>
            <p className='text-lg font-normal'>Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные <br />
            швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. <br />
            Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма. </p>
            <p className='text-lg font-normal my-[30px]'>Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества <br />
            паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. <br />
            Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.</p>
        </section>
        <hr className='mb-[80px] mt-[120px] max-sm:mb-[50px] max-sm:mt-[90px] w-[550px]' />
        <section>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[40px] font-normal'>Отзывы</h3>
                    <button className='text-lg text-[#fff] font-bold bg-gradient-to-tr from-[#5E3928] to-[#E4A16F] w-[327px] h-[50px]'>Оставить отзыв</button>
                </div>
            </div>
            <section>
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
        </section>
        <section>
            <p className='text-4xl my-[80px]'>Вам также будет интересно…</p>
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
    </div>
  )
}

export default CardProductPage
