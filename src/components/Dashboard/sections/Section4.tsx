import Image from 'next/image'

import { BiArrowBack } from "react-icons/bi";

import InvistaSeuDinheiro from "public/midia/invista_seu-dinheiro.jpg"
import ContaNubank from "public/midia/conta_do_nuank.jpg"
import ContaPJ from "public/midia/conta_pj.jpg"
import ShoppingNu from "public/midia/shopping_do_nu.jpg"

export function Section4 () {
   return (
      <div>

         <div className='bg-gray-200 flex p-16 justify-between'>

            <div className='flex flex-col gap-4 justify-center w-[40%]'>

               <text className='text-purple-600 text-[48px] font-semibold'>
                  InvistaSeuDinheiro
               </text>

               <text className='text-2xl'>
                  O plano é facilitar seus planos. Comece hoje com as Caixinhas do Nubank.
               </text>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className='text-purple-600 gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

            <div className='w-[50%]'>
               <Image src={InvistaSeuDinheiro} alt='' width={800} height={300}/>
            </div>

         </div>

         <div className='flex'>

            <div className='bg-purple-600 flex flex-col p-12 gap-8 w-[50%] text-white'>

               <div className=''>
                  <Image src={ContaNubank} alt='' className='h-[400px]'/>
               </div>

               <div className='flex flex-col gap-2'>

                  <text className='text-[48px] font-semibold'>
                     Conta do Nubank
                  </text>

                  <text className='text-2xl '>
                     Manter suas contas em dia nunca foi tão simples com Assistente de Pagamentos.
                  </text>

               </div>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className=' gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-white duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

            <div className='bg-purple-800 flex flex-col p-12 gap-8 w-[50%] text-white'>

               <div className=''>
                  <Image src={ContaPJ} alt='' className='h-[400px]'/>
               </div>

               <div className='flex flex-col gap-2'>

                  <text className='text-[48px] font-semibold'>
                     Conta PJ
                  </text>

                  <text className='text-2xl'>
                     Ficou mais fácil organizar o seu negócio com a conta PJ do Nubank
                  </text>

               </div>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className=' gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-white duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

         </div>

         <div className='bg-gray-200 flex p-16 justify-between'>

            <div className='w-[45%]'>
               <Image src={ShoppingNu} alt='' width={800} height={300}/>
            </div>

            <div className='flex flex-col gap-4 justify-center w-[40%]'>

               <text className='text-purple-600 text-5xl leading-[1.6] font-semibold'>
                  Shopping do Nu
               </text>

               <text className='text-5xl leading-[1.16]'>
                  Tem shopping no seu bank! Mais de 150 parceiros com ofertas para você aproveitar.
               </text>

               <div className="flex flex-col w-fit overflow-hidden relative group">

                  <button className='text-purple-600 gap-2 flex'>
                     <text>Saiba mais</text>

                     <BiArrowBack size={20} className={'rotate-180'}/>

                  </button>
                  
                  <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

               </div>

            </div>

         </div>

      </div>
   )
}