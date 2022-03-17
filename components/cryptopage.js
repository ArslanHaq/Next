import React from 'react'
import Slider from './slider'
import Image from 'next/image'
const cryptopage = () => {
  return (
    <div className='bg-mainback'>
        <header className='bg-main-header2 max-w-full xs:max-h-[6000px] md:max-h-[885px]  xl:bg-cover bg-no-repeat'>
            
            <div className='max-w-[936px] xs:max-h-[800px] md:max-h-[562px]   mx-auto pt-36' >
                <h1 className='xs:font-[200] md:font-[700] xs:text-[40px] md:text-[72px]  text-fonts font-ivymade xs:max-w-lg md:max-w-5xl max-h-[216px] mx-auto text-center '>
                    Crypto payments is a crypto exchange for everyone
                </h1>
            </div>
            <div className='md:mt-[135px] xs:mt-[75px] text-center'>
                    <Slider/>
            </div>

        </header>

        <main >
            {/* currency box outer */}
            <div className='max-w-[1129px] md:max-h-[261px] xs:max-h-[1000px]  px-[14px] justify-between mx-auto  xs:text-center flex flex-wrap  bg-currencyback rounded-[12px] mt-60 pb-9'>
              {/* left */}
                <div className=' flex-col  max-w-[206px]  mt-7 hover:bg-currencyhover hover:rounded-[18px] hover:shadow-lg px-6  py-6 '>
                  <Image src="/bitcoin.svg" width={40} height={40} alt="none"/>
                  <p>BTC/USDT</p>
                  <h2 className='font-verdanab mt-4 text-[22px] font-[700]'>
                  55350.21
                  </h2>
                  <p className=' font-poppins text-[16px] font-normal mt-2 '>
                    55350.21
                  </p>


                </div >
                {/* leftmid */}
                <div className='flex-col max-w-[206px]  mt-7 hover:bg-currencyhover hover:rounded-[18px] hover:shadow-lg px-6  py-6 '>
                  <Image src="/curreny2.svg" width={40} height={40} alt="none"/>
                  <p>BTC/USDT</p>
                  <h2 className='font-verdanab mt-4 text-[22px] font-[700]'>
                  55350.21
                  </h2>
                  <p className=' font-poppins text-[16px] font-normal mt-2 '>
                    55350.21
                  </p>


                </div >
                {/* right mid */}
                <div className='flex-col max-w-[206px]  mt-7 hover:bg-currencyhover hover:rounded-[18px] hover:shadow-lg px-6  py-6'>
                  <Image src="/currency3.svg" width={40} height={40} alt="none"/>
                  <p>BTC/USDT</p>
                  <h2 className='font-verdanab mt-4 text-[22px] font-[700]'>
                  55350.21
                  </h2>
                  <p className=' font-poppins text-[16px] font-normal mt-2 '>
                    55350.21
                  </p>


                </div >
                {/* right */}
                <div className='flex-col  max-w-[206px]  mt-7 hover:bg-currencyhover hover:rounded-[18px] hover:shadow-lg px-6  py-6 '>
                  <Image src="/currency4.svg" width={40} height={40} alt="none"/>
                  <p>BTC/USDT</p>
                  <h2 className='font-verdanab mt-4 text-[22px] font-[700]'>
                  55350.21
                  </h2>
                  <p className=' font-poppins text-[16px] font-normal mt-2 '>
                    55350.21
                  </p>


                </div >

            </div>


            <div className='mt-44 py-3 px-3  '>
              
                <h1 className='font-verdanab font-[700] xs:text-[30px] md:text-[40px]  text-cardfont text-center '>
                    How it Works
                </h1>

                <p className='mt-6 font-poppins font-[400] text-[16px] mx-auto text-center sm:w-1/2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torque
                </p>
            </div>
           
            {/* outer */}
            <div className='max-w-[1170px] md:max-h-[261px] xs:max-h-[1000px]  px-[14px] justify-between mx-auto   xs:text-center flex flex-wrap   rounded-[12px] mt-16 pb-9' >
              {/* left */}
              <div className='flex-col xs:mb-10 md:mb-0 '>
                <Image src="/cloud.svg" alt='none' width={50} height={50} />
                
                <p className='font-poppins font-[400] text-new'>Step 1</p>
                <h1 className='font-verdanab font-[700] text-[18px] text-black mt-3'>Download</h1>
                <p className='font-poppins font-[400] text-[16px] text-new max-w-[246px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>

              </div>
              <div className='md:block xs:hidden'>
                <Image  src="/lines.svg" alt='none' width={50} height={50} />
              
              </div>
               
              {/* left mid */}
              <div>
              <div className='flex-col  xs:mb-10 md:mb-0'>
                  <Image src="/phone.svg" alt='none' width={50} height={50} />
                  
                  <p className='font-poppins font-[400] text-new'>Step 2</p>
                  <h1 className='font-verdanab font-[700] text-[18px] text-black mt-3'>Connect Wallet</h1>
                  <p className='font-poppins font-[400] text-[16px] text-new max-w-[246px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>

                </div>
                

              </div>
              <div className=' md:block xs:hidden'>
                <Image  src="/lines.svg" alt='none' width={50} height={50} />
              
              </div>
              {/* right mid */}
              <div>
              <div className='flex-col xs:mb-10 md:mb-0 '>
                <Image src="/arrow.svg" alt='none' width={50} height={50} />
                
                <p className='font-poppins font-[400] text-new'>Step 3</p>
                <h1 className='font-verdanab font-[700] text-[18px] text-black mt-3'>Earn Money</h1>
                <p className='font-poppins font-[400] text-[16px] text-new max-w-[246px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>

              </div>

              </div>
              <div className=' md:block xs:hidden'>
                <Image  src="/lines.svg" alt='none' width={50} height={50} />
              
              </div>
              {/* right */}
              <div>
              <div className='flex-col xs:mb-10 md:mb-0'>
                <Image src="/cash.svg" alt='none' width={50} height={50} />
                
                <p className='font-poppins font-[400] text-new'>Step 4</p>
                <h1 className='font-verdanab font-[700] text-[18px] text-black mt-3'>Download</h1>
                <p className='font-poppins font-[400] text-[16px] text-new max-w-[246px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero</p>

              </div>

              </div>
            </div>


            {/* outer */}
            <div className='max-w-[950px] md:max-h-[261px] xs:max-h-[1000px]  px-[14px]  mx-auto  xs:text-center flex flex-wrap rounded-[12px] mt-44 pb-9' >

              {/* left */}
              <div>

                <h1 className='font-verdanab font-[700] xs:text-[30px] md:text-[40px] text-cardfont'>Trade Anywhere</h1>
                <p className='font-poppins font-[400] text-[16px] text-new'>Anytime, Anywhere. Trade crypto on your terms</p>
                
                <div className='mt-12 float-left flex flex-col'>
                  <div>
                    <Image   src="/apple.svg"  alt='none' width={182} height={48} />
                  </div>
                  <div className='mt-14'>
                    <Image   src="/g38.svg"  alt='none' width={182} height={48} />
                  </div>
                  <div className='mt-14'>
                    <Image   src="/g37.svg"  alt='none' width={182} height={48} />
                  </div>

                </div>
                
               
              </div>
              {/* right */}
              <div className='ml-7 md:mt-0 xs:mt-20'>
                <Image src="/man.svg" alt='none' width={471} height={471} />

              </div>
            </div>
          <div className='mt-96'>
            <h1 className=' font-verdanab font-[700] xs:text-[30px] md:text-[40px] max-w-[539px] max-h-[500px] text-center mx-auto text-cardfont'>
              Become a crypto trader in seconds
            </h1>
            <p className='font-poppins font-[400] text-[16px] text-new text-center'>
            Anytime, Anywhere. Trade crypto on your terms
            </p>

          </div>

          {/* outer */}
          <div className='max-w-[1050px] md:max-h-[401px] xs:max-h-[2000px]  px-[14px]  mx-auto  xs:text-center justify-between flex flex-wrap rounded-[12px] mt-14 pb-9' >
      {/* left */}
            <div className='flex-col max-w-xs bg-white max-h-[370px] shadow-lg rounded-[18px] px-5 py-8 xs:mb-5 md:mb-0'>
              <Image src="/people.svg" alt='none' width={90} height={67}/>
              <p className='font-verdanab font-[700] text-[18px] text-black mt-10'>Buy and Sell Crypto</p>
              <p className='font-poppins font-[400] mt-4 text-[16px] text-new max-w-[246px] max-h-[72px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              </p>
              <button className='hover:bg-black bg-transparent mt-6  py-2 px-4 rounded-[4px] border border-solid border-button text-button font-poppins font-[500] text-[16px]   '>
                Buy Crypto
              </button>
            </div>
            {/* mid */}
            <div className='flex-col max-w-xs bg-white max-h-[370px] shadow-lg rounded-[18px] px-5 py-8 xs:mb-5 md:mb-0'>
              <Image src="/p2.svg" alt='none' width={90} height={67}/>
              <p className='font-verdanab font-[700] text-[18px] text-black mt-10'>Trade Asstes</p>
              <p className='font-poppins font-[400] mt-4 text-[16px] text-new max-w-[246px] max-h-[72px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              </p>
              <button className='hover:bg-black bg-transparent mt-6  py-2 px-4 rounded-[4px] border border-solid border-button text-button font-poppins font-[500] text-[16px]   '>
                Trade Now
              </button>
            </div>
            {/* right */}
            <div className='flex-col max-w-xs bg-white max-h-[370px] shadow-lg rounded-[18px] px-5 py-8 xs:mb-5 md:mb-0'>
              <Image src="/people3.svg" alt='none' width={90} height={67}/>
              <p className='font-verdanab font-[700] text-[18px] text-black mt-10'>Learn Crypto</p>
              <p className='font-poppins font-[400] mt-4 text-[16px] text-new max-w-[246px] max-h-[72px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              </p>
              <button className='hover:bg-black bg-transparent mt-6  py-2 px-4 rounded-[4px] border border-solid border-button text-button font-poppins font-[500] text-[16px]   '>
                Learn Now
              </button>
            </div>
          </div>

          <div className='text-center mt-12'>
            <button className='px-6 py-3 bg-button rounded-[4px] text-white font-poppins font-[500] text-[16px] hover:bg-black'>
              Contact Us
            </button>
          </div>

          <div className=' text-center mt-44'>
            <h1 className='font-verdanab font-[700] xs:text-[30px] md:text-[40px] text-cardfont'>
              Testimonials
            </h1>
          </div>

          {/* outer */}
          <div className='max-w-[1300px] md:max-h-[600px] xs:max-h-[2000px]  px-[14px]  mx-auto  xs:text-center justify-between flex flex-wrap rounded-[12px] mt-12 pb-9' >
            {/* left */}
            <div className='flex-col bg-white px-9 py-14 rounded-[18px] shadow-lg xs:mb-5 md:mb-0'>
              <div className='flex flex-row'>
                <Image src="/pp.svg" alt='none' width={53} height={53}/>
                <div className='flex  flex-col mt-2'>
                  <h1 className='font-verdanab font-[700] text-[18px] text-black ml-5'>
                    Lorem Ispum
                  </h1>
                  
                  <p className='font-poppins font-[400] text-[16px] text-new'>
                    Lorem Ispum
                  </p>

                </div>

                <div className='ml-20 mt-2'>
                  <Image  src="/sym.svg" alt='none' width={20} height={20}/>
                </div>
                
              </div>
              
              <p className='max-w-[253px] max-h-[500px] font-poppins font-[400] text-[16px] mt-8'>
                Leave Zoom links behind. Move 
                from room to room in one click, 
                and keep track of open rooms 
                in the room list.
              </p>

            </div>
            {/* mid */}
            <div className='flex-col bg-white px-9 py-14 rounded-[18px] shadow-lg xs:mb-5 md:mb-0'>
              <div className='flex flex-row'>
                <Image src="/pp.svg" alt='none' width={53} height={53}/>
                <div className='flex  flex-col mt-2'>
                  <h1 className='font-verdanab font-[700] text-[18px] text-black ml-5'>
                    Lorem Ispum
                  </h1>
                  
                  <p className='font-poppins font-[400] text-[16px] text-new'>
                    Lorem Ispum
                  </p>

                </div>

                <div className='ml-20 mt-2'>
                  <Image  src="/sym.svg" alt='none' width={20} height={20}/>
                </div>
                
              </div>
              
              <p className='max-w-[253px] max-h-[500px] font-poppins font-[400] text-[16px] mt-8'>
                Leave Zoom links behind. Move 
                from room to room in one click, 
                and keep track of open rooms 
                in the room list.
              </p>

            </div>
            {/* right */}
            <div className='flex-col bg-white px-9 py-14 rounded-[18px] shadow-lg xs:mb-5 md:mb-0'>
              <div className='flex flex-row'>
                <Image src="/pp.svg" alt='none' width={53} height={53}/>
                <div className='flex  flex-col mt-2'>
                  <h1 className='font-verdanab font-[700] text-[18px] text-black ml-5'>
                    Lorem Ispum
                  </h1>
                  
                  <p className='font-poppins font-[400] text-[16px] text-new'>
                    Lorem Ispum
                  </p>

                </div>

                <div className='ml-20 mt-2'>
                  <Image  src="/sym.svg" alt='none' width={20} height={20}/>
                </div>
                
              </div>
              
              <p className='max-w-[253px] max-h-[500px] font-poppins font-[400] text-[16px] mt-8'>
                Leave Zoom links behind. Move 
                from room to room in one click, 
                and keep track of open rooms 
                in the room list.
              </p>

            </div>
          </div>

          <div className='mt-28 border border-t-2 border-gray-300 '>
            <hr></hr>
          </div>

          {/* outer */}
          <div className='max-w-[1300px] md:max-h-[600px] xs:max-h-[2000px]  px-[14px]  mx-auto  xs:text-center justify-between flex flex-wrap rounded-[12px] mt-36 pb-16 ' >

            {/* left */}
            <div className='flex-col'>

              <div className='float-left'>
                <h1 className='font-verdanab xs:font-[400] md:font-[700] text-[18px] text-black'>
                  Ready to get Started
                </h1>
              </div>
              <br></br>
              <p className='font-poppins font-[400] text-[16px] text-new float-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
               <br></br> 
              <div className='mt-12 float-left'>
                <button className='px-10 py-3 bg-button text-white font-poppins font-[700] text-[17px] rounded-[7px] hover:bg-black'>
                  Get Started
                </button>
              </div>

            </div>
            {/* right */}
            <div className='flex-col font-poppins font-[400]  text-[17px] max-w-[200px] text-left xs:mt-10 md:mt-0'>
              <div>
                <button className='hover:text-button'>
                  Navigation
                </button>
                
              </div>
              <div>
                <button className='hover:text-button mt-4'>
                Email Marketing
                </button>
                
              </div>
              <div>
                <button className='hover:text-button mt-4'>
                Campaings
                </button>
                
              </div>
              <div>
                <button className='hover:text-button mt-4'>
                 Branding
                </button>
                
              </div>
              

              <div>
                <button className='hover:text-button mt-4'>
                  Offline
                </button>
                
              </div>
              

              
              

            </div>
          </div>
        </main>
    </div>
  )
}

export default cryptopage