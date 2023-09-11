import Image from 'next/image'

import LogoNubank from "public/midia/homeNubank_2304x1536.webp"

export function Dashboard() {
   return (

      <div className={'w-full pt-[10vh]'}>

         <div className='w-full h-[90vh] overflow-hidden relative'>

            <Image src={LogoNubank} alt="" width={2304} height={1536} objectFit='cover' className=''/>

            <div className='absolute left-0 top-0 bottom-0 right-0 z-20 justify-around'>

               <div className='text-white text-left w-1/3 flex flex-col gap-2'>

                  <text className='text-5xl font-extrabold'>
                     Tenha N Possibilidades de produtos para N Possibilidades na vida
                  </text>

                  <text className='text-xl font-medium'>
                  O que você precisa pra ficar no controle da sua vida financeira tem no app do Nubank.
                  </text>

               </div>

            </div>

         </div>

         oi
      </div>
   )
}