import React, { ChangeEvent } from 'react';
import people from '../assets/people-icon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img-1.svg'
import furgon from '../assets/furgon.svg'

interface IInitialState {
    name: string;
    surname: string;
    phone: string;
    email: string;
    strana: string;
    city: string;
}

const initialState: IInitialState = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    strana: '',
    city: ''
}

function ContactPage() {
    const [form, setForm] = React.useState(initialState)
    const { name, surname, phone, email, strana, city } = form;
    const navigate = useNavigate();
    const handleSubmit = () => {
        if(!name || !surname || !phone || !email || !strana || !city) {
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 5000,
            })
            console.log("Please fill all the fields");
        } else {
            toast.success('Message sent successfully', {
                position: "top-right",
                autoClose: 5000,
            })
            console.log(form);
            setForm(initialState)
            navigate("/orderthanks")
        }
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
  return (
    <div className='flex items-start gap-4 max-sm:block'>
      <div>
        <section>   
            <div className="flex items-center max-sm:block">
                <div className="text-left">
                    <button className="text-lg font-extrabold text-[#A1A1A1] w-[327px] h-[50px] max-sm:ml-[120px] border mt-[20px]">Назад к покупкам</button>
                </div>
                <div className="text-left">
                    <h3 className="text-[50px] text-black font-normal ml-[140px] max-sm:ml-[30px]">Оформить заказ</h3>
                </div>
            </div>
        </section>

        <section>
            <div className="w-[822px] h-[125px] bg-[#E6E8E7] flex items-center justify-around max-sm:w-[420px] max-sm:h-[400px] max-sm:block max-sm:ml-[20px] max-sm:pt-[30px]">
                <div className="w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center max-sm:ml-[170px] max-sm:mb-[30px]">
                    <img width={40} height={40} src={people} alt="" />
                </div>
                    
                <div className='text-left max-sm:text-center'>
                    <h3 className='text-lg font-bold max-sm:mt-[15px]'>Уже есть аккаунт или <br />хотите зарегистрироваться ?</h3>
                    <p className='text-base font-normal max-sm:my-[15px]'>Войдите в кабинет и получите скидку </p>
                </div >
                    
                <div className='flex items-center gap-4 max-sm:block'>
                    <div className='max-sm:my-[20px]'>
                        <button className='w-[186px] h-[50px] bg-gradient-to-tr from-[#5E3928] to-[#E4A16F] text-white'>Войти</button>
                    </div>
                    <div>
                        <button className='w-[186px] h-[50px] bg-transparent border text-black border-[#031412]'>Регистрация</button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div>
                <div className='text-left my-10 flex max-sm:my-5 text-white'>
                    <button className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62]'>1</button>
                    <p className='text-[27px] font-semibold text-[#031412] max-sm:text-lg max-sm:font-medium ml-[32px] max-sm:ml-[10px]'>Личные данные</p>
                </div>

                <div className='grid grid-cols-2 gap-[30px] max-sm:grid-cols-1 max-sm:mb-[20px] my-10'>
                    <input type="text" value={name} onChange={handleChange} name='name' placeholder='Имя' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer outline-none' />
                    <input type="text" value={surname} onChange={handleChange} name='surname' placeholder='Фамилия' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer  outline-none' />
                    <input type="text" value={phone} onChange={handleChange} name='phone' placeholder='Телефон' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer  outline-none' />
                    <input type="text" value={email} onChange={handleChange} name='email' placeholder='E-mail' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer  outline-none' />
                    <input type="text" value={strana} onChange={handleChange} name='strana' placeholder='Страна' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer  outline-none' />
                    <input type="text" value={city} onChange={handleChange} name='city' placeholder='Город' className='border-[#A1A1A1] border w-[310px] h-[50px] pl-5 max-sm:w-[280px] cursor-pointer  outline-none' />
                    <ToastContainer />
                </div>

                <hr />
            </div>
        </section>

        <section>
            <div className='text-left my-10 flex max-sm:my-5 text-white'>
                <button className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62]'>2</button>
                <p className='text-[27px] font-semibold text-[#031412] max-sm:text-lg max-sm:font-medium ml-[32px] max-sm:ml-[10px]'>Доставка</p>
            </div>

            <div>
                <div>
                    <div className='text-left flex items-center'>
                        <div className='w-7 h-7 rounded-full border bg-gradient-to-t from-[#5E3928] to-[#E4A16F] mr-[10px]'>
                            <button className='w-5 h-5 border-[3px] rounded-full border-[#fff] mt-[3px] ml-[3.5px]'></button>
                        </div>
                        <p className='text-[#5E3928] text-2xl font-bold'>Самовывоз</p>
                    </div>
                    <p className='text-left mt-[17px] mb-[30px] text-base text-[#031412] font-normal'>Вы можете забрать из нашего официального магазина по <br />адресу Бажана 8-Б, Киев, 02132 Украина </p>
                </div>

                <div>
                    <div className='text-left flex items-center'>
                        <button className='w-5 h-5 border-[3px] rounded-full border-[#A1A1A1] mt-[3px] ml-[3.5px] mr-[10px]'></button>
                        <p className='text-[#A1A1A1] text-2xl font-bold'>Новая почта</p>
                    </div>
                    <p className='text-left mt-[17px] mb-[30px] text-base text-[#031412] font-normal'>Вы можете забрать из нашего официального магазина по <br />адресу Бажана 8-Б, Киев, 02132 Украина </p>
                </div>

                <div>
                    <div className='text-left flex items-center'>
                        <button className='w-5 h-5 border-[3px] rounded-full border-[#A1A1A1] mt-[3px] ml-[3.5px] mr-[10px]'></button>
                        <p className='text-[#A1A1A1] text-2xl font-bold'>Курьер “Новая почта”</p>
                    </div>
                    <p className='text-left mt-[17px] mb-[30px] text-base text-[#031412] font-normal'>Вы можете забрать из нашего официального магазина по <br />адресу Бажана 8-Б, Киев, 02132 Украина </p>
                </div>
            </div>
        </section>
        <section>
            <div className='text-left my-10 flex max-sm:my-5 text-white'>
                <button className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62]'>3</button>
                <p className='text-[27px] font-semibold text-[#031412] max-sm:text-lg max-sm:font-medium ml-[32px] max-sm:ml-[10px]'>Оплата</p>
            </div>
            <div>
                <div className='text-left flex items-center'>
                    <div className='w-7 h-7 rounded-full border bg-gradient-to-t from-[#5E3928] to-[#E4A16F] mr-[10px]'>
                        <button className='w-5 h-5 border-[3px] rounded-full border-[#fff] mt-[3.5px] ml-[3.5px]'></button>
                    </div>
                    <p className='text-[#5E3928] text-2xl font-bold'>При получении</p>
                </div>
                <div>
                    <div className='text-left flex items-center'>
                        <button className='w-5 h-5 border-[3px] rounded-full border-[#A1A1A1] mt-[3px] ml-[3.5px] mr-[10px]'></button>
                        <p className='text-[#A1A1A1] text-2xl font-bold my-3'>Онлайн-оплата картой</p>
                    </div>
                </div>
                <hr className='w-[400px] mt-5 mb-8 max-sm:block hidden' />
            </div>
        </section>
      </div>
      <div>
        <div className='flex items-center my-5'>
            <img className='mr-[20px]' width={90} src={img1} alt="" />
            <div className=''>
                <p className='text-base font-bold uppercase text-left'>Дистиллятор для <br />получения гидролата 8л</p>
                <div className='text-left flex items-end'>
                    <p className='text-xl text-black font-semibold mr-[120px]'>2шт</p>
                    <div>
                        <del className='text-[#A1A1A1]'>1 953 грн</del>
                        <p className='text-[#9B0000]'>5 000 грн</p>
                    </div>
                </div>
            </div>
        </div>
        
        <hr className='w-[400px]' />

        <div className='flex items-center my-5'>
            <img className='mr-[20px]' width={90} src={img1} alt="" />
            <div className=''>
                <p className='text-base font-bold uppercase text-left'>Дистиллятор для <br />получения гидролата 8л</p>
                <div className='text-left flex items-end'>
                    <p className='text-xl text-black font-semibold mr-[120px]'>2шт</p>
                    <div>
                        <del className='text-[#A1A1A1]'>1 953 грн</del>
                        <p className='text-[#9B0000]'>5 000 грн</p>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <div className='flex '>
                <input type="text" placeholder='Введите прокод' className='pl-[10px] w-[200px] h-[50px] border border-[#A1A1A1]' />
                <button className='text-sm text-[#fff] font-bold bg-gradient-to-tl from-[#5E3928] to-[#E4A16F] w-[130px] h-[50px]'>Применить</button>
            </div>
            <div className='text-left'>
                <h3 className='text-[35px] text-[#031412] font-normal'>Итого</h3>
                <p className='text-[40px] text-[#031412] font-extrabold'>10 953 грн</p>
                <hr className='my-5 w-[400px]' />
            </div>
            <div className='flex items-center'>
                <img className='mr-5' src={furgon} alt="" />
                <p className='text-lg text-[#A1A1A1] font-semibold'>У вас бесплатная <br />доставка!</p>
            </div>
            <button onClick={handleSubmit} className='text-lg text-white font-extrabold w-[382px] h-[50px] bg-gradient-to-tr from-[#5E3928] to-[#E4A16F] flex items-center justify-center my-8'>Оформить заказ</button>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
