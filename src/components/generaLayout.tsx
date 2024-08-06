import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import { TiTimes } from 'react-icons/ti'
import { TfiMenuAlt } from 'react-icons/tfi'
import yurak from '../assets/yurak.svg'
import people from '../assets/people-icon.png'
import shop from '../assets/shopping-icon.svg'
import { FaInstagram } from 'react-icons/fa'
import facebook from '../assets/facebok.svg';
import twitter from '../assets/twitter.svg';
import { Outlet } from 'react-router-dom'

function GeneraLayout() {
    const [click, setClick] = useState(false)
    const content: JSX.Element = <>
        <div className='lg:hidden block absolute top-[108px] w-auto left-8 right-8 bg-[#5E3928] transition z-50'>
            <ul className='text-center lg:hidden'>
                <Link className='hover:text-2xl hover:border-b-2 hover:border-neutral-950 text-white font-semibold cursor-pointer  ' to="/katalog"><li className='my-5'>Каталог</li></Link>
                <Link className='hover:text-2xl hover:border-b-2 hover:border-neutral-950 text-white font-semibold cursor-pointer  ' to="/novosti"><li>Новости</li></Link>
                <Link className='hover:text-2xl hover:border-b-2 hover:border-neutral-950 text-white font-semibold cursor-pointer  ' to="/dostavka"><li className='my-5'>Доставка</li></Link>
                <Link className='hover:text-2xl hover:border-b-2 hover:border-neutral-950 text-white font-semibold cursor-pointer  ' to="/nas"><li>O нас</li></Link>
                <Link className='hover:text-2xl hover:border-b-2 hover:border-neutral-950 text-white font-semibold cursor-pointer  ' to="/kontact"><li className='my-5'>Контакты</li></Link>
            </ul>
        </div>
    </>
    const handleClick = () => setClick(!click)
  return (
    <div>
        <div>
        <nav>
            <div className='h-10vh flex items-center justify-around z-50 lg:py-5 px-20 py-4 flex-1 bg-emerald-500'>
                <div className='flex items-center flex-1'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-7 text-[18px]'>
                            <Link className='hover:text-[#5E3928] hover:border-b-2 text-white text-base font-semibold cursor-pointer' to="/katalog"><li>Каталог</li></Link>
                            <Link className='hover:text-[#5E3928] hover:border-b-2 text-white text-base font-semibold cursor-pointer' to="/novosti"><li>Новости</li></Link>
                            <Link className='hover:text-[#5E3928] hover:border-b-2 text-white text-base font-semibold cursor-pointer' to="/dostavka"><li>Доставка</li></Link>
                            <Link className='hover:text-[#5E3928] hover:border-b-2 text-white text-base font-semibold cursor-pointer' to="/nas"><li>O нас</li></Link>
                            <Link className='hover:text-[#5E3928] hover:border-b-2 text-white text-base font-semibold cursor-pointer' to="/kontact"><li>Контакты</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='flex items-start'>
                    <div className='w-[30px] h-[60px] bg-white block'><img src={yurak} alt="" /></div>
                    <div className='w-[30px] h-[60px] bg-white mx-5'><img src={people} alt="" /></div>
                    <div className='w-[30px] h-[60px] bg-white'><img src={shop} alt="" /></div>
                </div>
                <div>
                    { click && content }
                </div>
                <button className='block sm:hidden transition text-white ml-10' onClick={handleClick}>
                    {click ? <TiTimes /> : <TfiMenuAlt />}
                </button>
            </div>
        </nav>
        </div>
        <main>
            <Outlet />
        </main>
        <footer>
            <div className='bg-green-800 flex items-start justify-around pt-20 max-sm:block'>
                <div className='items-start max-sm:ml-[30px]'>
                    <img src={logo} alt="" />
                    <p className='w-[180px] text-gray-400 my-5'>© 2021 “Copper Pro” <br />Bce права защищенны</p>
                    <p className='border-b-2 w-[250px] text-gray-500'>Политика конфиденциальности</p>
                </div>
                <div className='grid grid-cols-3 max-sm:grid-cols-2 max-sm:mt-10'>
                    <div className='max-sm:ml-[30px]'>
                        <ul>
                            <p className='text-lg text-white font-bold text-left'>Навигация</p>
                            <li className='text-white text-base hover:border-b-2 w-[80px] border-gray-50 my-[20px]'>Каталог</li>
                            <li className='text-white text-base hover:border-b-2 w-[80px] border-gray-50'>Новости</li>
                            <li className='text-white text-base hover:border-b-2 w-[80px] border-gray-50 my-[20px]'>Доставка</li>
                            <li className='text-white text-base hover:border-b-2 w-[80px] border-gray-50'>O нас</li>
                            <li className='text-white text-base hover:border-b-2 w-[80px] border-gray-50 my-[20px]'>Контакты</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <p className='text-lg text-white font-bold text-left ml-[70px]'>Каталог</p>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>Для эфирных масел</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50'>Для гидролатов</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>Медная посуда</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50'>Аксессуары из меди</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>Индивидуальный заказ</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>Скидки и предложения</li>
                        </ul>
                    </div>

                    <div className='max-sm:mb-6'>
                        <ul>
                            <p className='text-lg text-white font-bold text-left ml-[60px]'>Контакты</p>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>Бажана 8-Б, Киев,<br /> 02132 Украина</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50'>+38 (096) 990 67 56</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 my-[20px]'>a.alambik@gmail.com</li>
                            <li className='text-white text-base hover:border-b-2 w-[210px] border-gray-50 flex items-center justify-around'>
                                <FaInstagram />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default GeneraLayout
