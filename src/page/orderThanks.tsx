import { Link } from 'react-router-dom'
import order1 from '../assets/order-1.svg'
import order2 from '../assets/order-2.svg'


function OrderThanksPage() {
  return (
    <div>
      <section>
        <div className="h-[100px]">
            <div className='relative'>
                <img className='absolute top-[40px] left-[590px] max-sm:w-[140px] max-sm:left-[220px]' src={order1} alt="" />
                <img className='absolute top-[130px] left-[480px] max-sm:w-[110px] max-sm:left-[180px] max-sm:top-[90px]' src={order2} alt="" />
            </div>
        </div>
        <div className='mt-[250px] mb-[100px] max-sm:mt-[120px] max-sm:mb-[40px]'>
            <h2 className='text-[50px] max-sm:text-[30px] text-black font-normal'>Спасибо за заказ</h2>
            <p className='text-[27px] font-semibold my-[20px] max-sm:my-[10px] max-sm:text-xl'>Мы свяжемся с вами <br />в ближайшее время</p>
            <button className='bg-gradient-to-tr from-[#5E3928] to-[#E4A16F] text-lg text-white font-extrabold w-[446px] h-[50px] max-sm:w-[280px]'><Link to="/">Главная</Link></button>
        </div>
      </section>
    </div>
  )
}

export default OrderThanksPage
