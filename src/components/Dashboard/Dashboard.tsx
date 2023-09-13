import Image from 'next/image'

import { BiArrowBack } from "react-icons/bi";

import LogoNubank from "public/midia/homeNubank_2304x1536.webp"

export function Dashboard() {
   return (

      <div className={'w-full pt-[10vh]'}>

         <div className='w-full h-[90vh] overflow-hidden relative'>

            <Image src={LogoNubank} alt="" width={2304} height={1536} objectFit='cover' className=''/>

            <div className='absolute left-0 top-0 bottom-0 right-0 z-20 flex items-center justify-around'>

               <div className='text-white text-left max-w-xl flex flex-col gap-4 '>

                  <text className='text-5xl font-semibold'>
                     Tenha N Possibilidades de produtos para N Possibilidades na vida
                  </text>

                  <text className='text-2xl font-semibold'>
                  O que você precisa pra ficar no controle da sua vida financeira tem no app do Nubank.
                  </text>

               </div>

               <div className='bg-white flex flex-col rounded-2xl p-6 gap-10 max-w-[20.6rem]'>
                  
                  <text className='text-2xl font-semibold'> Peça sua conta e cartão de crédito do Nubank </text>

                  <input placeholder='Digite se CPF' className='py-2 text-sm outline-none border-b-[1px] text-600/20 border-gray-600/20 hover:border-gray-600 duration-300'/>

                  <button className='bg-gray-600/10 flex text-gray-600/20 rounded-full justify-between p-4 hover:cursor-not-allowed'>

                     <text>Continuar</text>

                     <BiArrowBack size={24} className={'rotate-180'}/>

                  </button>

               </div>

            </div>

         </div>

         <div className=''>

            <div className='flex flex-col gap-8 max-w-xs'>

               <div className='font-semibold'>


                  <text className=''>Empréstimo</text>
               </div>

               <text>Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no controle do início ao fim.</text>

               <button className='text-purple-600 flex justfy-bettwen'>
                  <text>Saiba mais</text>

                  <BiArrowBack size={24} className={'rotate-180'}/>
               </button>

            </div>

         </div>

      </div>
   )
}