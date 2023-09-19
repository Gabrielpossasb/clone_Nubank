import Image from 'next/image'

import { BiArrowBack } from "react-icons/bi";

import LogoNubank from "public/midia/homeNubank_2304x1536.webp"

export function Home () {
   return (
      <div className='w-full h-[91vh] relative'>

         <Image src={LogoNubank} alt="" fill={true} objectFit='cover'  className=''/>

         <div className='absolute left-0 top-0 bottom-0 right-0 z-20 flex items-center justify-around'>

            <div className='text-white text-left max-w-xl flex flex-col gap-4 '>

               <text className='text-5xl font-medium'>
                  Tenha N Possibilidades de produtos para N Possibilidades na vida
               </text>

               <text className='text-2xl font-medium'>
               O que você precisa pra ficar no controle da sua vida financeira tem no app do Nubank.
               </text>

            </div>

            <div className='bg-white flex flex-col rounded-2xl p-6 pb-10 gap-10 max-w-[20.6rem]'>
               
               <text className='text-2xl font-medium'> Peça sua conta e cartão de crédito do Nubank </text>

               <input placeholder='Digite se CPF' className='py-2 text-sm outline-none border-b-[1px] text-600/20 border-gray-600/20 hover:border-gray-600 duration-300'/>

               <button className='bg-gray-600/10 flex text-gray-600/20 rounded-full justify-between p-3 hover:cursor-not-allowed'>

                  <text>Continuar</text>

                  <BiArrowBack size={24} className={'rotate-180'}/>

               </button>

            </div>

         </div>

      </div>
   )
}