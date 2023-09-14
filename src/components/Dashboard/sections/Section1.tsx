import Image from 'next/image'

import { BiArrowBack } from "react-icons/bi";

import CartaoCredio from "public/midia/conheca-nosso-cartao-de-credito.jpg"
import NubankUltravioleta from "public/midia/nubank-ultravioleta.jpeg"

export function Section1 () {
   return (
      <div className=''>

         <div className='bg-gray-200 flex p-16 justify-between'>

            <div className='flex flex-col gap-4 justify-center w-[40%]'>

               <text className='text-purple-600 text-[48px] font-semibold'>Conheça nosso Cartão de Crédito</text>

               <text className='text-2xl'>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</text>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className='text-purple-600 gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

            <div className='w-[50%]'>
               <Image src={CartaoCredio} alt='' width={800} height={300}/>
            </div>

         </div>

         <div className='bg-purple-800 flex p-16 justify-between'>
            
            <div className='w-[42%]'>
               <Image src={NubankUltravioleta} alt='' width={800} height={400}/>
            </div>

            <div className='flex flex-col gap-4 justify-center w-[50%] text-white'>

               <text className='text-[48px] font-semibold'>Nubank Ultravioleta</text>

               <text className='text-2xl'>O cartão de crédito premium para você viver todas as suas escolhas.</text>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className='text-white gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-white duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

         </div>

      </div>
   )
}