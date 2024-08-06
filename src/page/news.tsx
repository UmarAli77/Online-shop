import { Link } from 'react-router-dom'
import group1 from '../assets/group-1.svg'
import group2 from '../assets/group-2.svg'
import group3 from '../assets/group-3.svg'
import group4 from '../assets/group-4.svg'
import rightIcon from '../assets/right-color-icon.svg'
import leftImg from '../assets/left-icon.svg'



function NewsPage() {
  return (
    <div>
        <section>
            <div>
                <p className="text-left text-lg">Главная / <span className="text-lg font-extrabold"> Новости</span></p>
                <div className='grid grid-cols-2 gap-4 max-sm:grid-cols-1'>
                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group1} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>

                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group2} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff] max-sm:top-[120px]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>

                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group3} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff] max-sm:top-[120px]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>

                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group4} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff] max-sm:top-[120px]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>

                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group1} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff] max-sm:top-[120px]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>

                    <Link to="/novostiInside">
                        <div>
                            <div className='relative w-[600px] h-[180px] max-sm:w-[550px]'>
                                <img src={group2} alt="" />
                                <p className='text-xl font-semibold absolute top-[140px] left-8 text-[#fff] max-sm:top-[120px]'>Эфирные масла для улучшения сна</p>
                                <button className='text-xl text-white font-extrabold w-[90px] h-[40px] bg-gradient-to-t from-[#5E3928] to-[#E4A16F] absolute top-0 right-0'>27.10.21</button>
                            </div>
                            <div>
                                <p className='text-base font-medium my-[25px] text-left text-[#031412] max-sm:text-sm w-[400px]'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но <br />
                                если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо <br />
                                строго придерживаться определенных правил....</p>
                                <button className='w-[123px] flex items-center justify-between text-[#E4A16F] text-base font-semibold mt-[15px]'>Читать больше<img className='' src={rightIcon} alt="" /></button>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center h-[100px] gap-3 my-5'>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center'><img src={leftImg} alt="" /></button>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-white font-bold bg-gradient-to-t from-[#5E3928] to-[#E4A16F]'>1</button>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>2</button>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>3</button>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>4</button>
                    <button className='w-[38px] h-[48px] border flex items-center justify-center'><img src={rightIcon} alt="" /></button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default NewsPage
