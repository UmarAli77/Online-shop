import mask1 from '../assets/mask-1-1.svg'
import mask2 from '../assets/mask-2.svg'
import mask3 from '../assets/mask-3.svg'
import mask4 from '../assets/mask-4.svg'
import img1 from '../assets/img-1.svg'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.svg'
import yurak from '../assets/yurak.svg'
import leftImg from '../assets/left-icon.svg'
import rightImg from '../assets/right-icon.svg'



function KatalogPage() {
  return (
    <div>
      <section>
        <div>
            <p className="text-left text-lg">Главная / <span className="text-lg font-extrabold"> Каталог</span></p>
            <h3 className="text-[50px] font-medium text-black text-left max-sm:text-2xl">Каталог</h3>
            <div className='grid grid-cols-4 items-center mt-[15px] mb-[70px] max-sm:grid-cols-2'>
                <div className="w-[327px] h-auto bg-gradient-to-t from-[#CB8D62] to-[#CB8D62] relative max-sm:w-[200px] max-sm:my-5">
                    <img className='z-0' src={mask1} alt="" />
                    <p className='absolute top-[100px] left-[70px] text-xl font-bold text-white max-sm:top-[60px] max-sm:left-[35px] max-sm:text-sm'>Для эфирных масел</p>
                </div>
                <div className="w-[327px] h-auto bg-gradient-to-t from-[#CB8D62] to-[#CB8D62] relative max-sm:w-[200px] max-sm:my-5">
                    <img className='z-0' src={mask2} alt="" />
                    <p className='absolute top-[100px] left-[70px] text-xl font-bold text-white max-sm:top-[60px] max-sm:left-[35px] max-sm:text-sm'>Для эфирных масел</p>
                </div>
                <div className="w-[327px] h-auto bg-gradient-to-t from-[#CB8D62] to-[#CB8D62] relative max-sm:w-[200px] max-sm:my-5">
                    <img className='z-0' src={mask3} alt="" />
                    <p className='absolute top-[100px] left-[90px] text-xl font-bold text-white max-sm:top-[60px] max-sm:left-[35px] max-sm:text-sm'>Медная посуда</p>
                </div>
                <div className="w-[327px] h-auto bg-gradient-to-t from-[#CB8D62] to-[#CB8D62] relative max-sm:w-[200px] max-sm:my-5">
                    <img className='z-0' src={mask4} alt="" />
                    <p className='absolute top-[100px] left-[70px] text-xl font-bold text-white max-sm:top-[60px] max-sm:left-[35px] max-sm:text-sm'>Аксессуары из меди</p>
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
            <div className='w-[390px] max-sm:ml-[80px] relative'>
                <img className='w-[390px]' src={img1} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>
            
            <div className='w-[390px] max-sm:ml-[80px] relative max-sm:my-5'>
                <img className='w-[390px]' src={img2} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative'>
                <img className='w-[390px]' src={img3} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative my-[50px] max-sm:my-5'>
                <img className='w-[390px]' src={img1} alt="" />
                <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                    <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative my-[50px]'>
                <img className='w-[390px]' src={img2} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative my-[50px] max-sm:my-5'>
                <img className='w-[390px]' src={img3} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative'>
                <img className='w-[390px]' src={img1} alt="" />
                <button className='w-[84px] h-[36px] bg-[#9B0000] text-white absolute top-[27px] left-0'>SALE</button>
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <del className='text-lg font-semibold text-gray-200'>1 953 грн</del>
                    <p className='text-2xl font-bold text-[#9B0000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative max-sm:my-5'>
                <img className='w-[390px]' src={img2} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>

            <div className='w-[390px] max-sm:ml-[80px] relative'>
                <img className='w-[390px]' src={img3} alt="" />
                <button className='w-[36px] h-[75px] flex items-end bg-[#fff] absolute top-0 left-[354px]'><img src={yurak} alt="" /></button>
                <div className='flex items-center justify-between my-2'>
                <p className='text-left text-xl'>Медный чайник c <br />фарфоровой ручкой</p>
                <div>
                    <p className='text-3xl font-bold text-[#000000]'>1 953 грн</p>
                </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center h-[100px] gap-3'>
            <button className='w-[38px] h-[48px] border flex items-center justify-center'><img src={leftImg} alt="" /></button>
            <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-white font-bold bg-gradient-to-t from-[#5E3928] to-[#E4A16F]'>1</button>
            <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>2</button>
            <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>3</button>
            <button className='w-[38px] h-[48px] border flex items-center justify-center text-2xl text-gray-400 font-bold bg-transparent'>4</button>
            <button className='w-[38px] h-[48px] border flex items-center justify-center'><img src={rightImg} alt="" /></button>
        </div>
      </section>
    </div>
  )
}

export default KatalogPage
