import Image from "next/image";

import { BiArrowBack } from "react-icons/bi";

import InvistaSeuDinheiro from "public/midia/invista_seu-dinheiro.jpg"
import ShoppingNu from "public/midia/shopping_do_nu.jpg"
import Card3 from "public/midia/blog-card-image-3.jpg"

export function Section5 () {
   return (
      <div className="px-16 my-10 flex flex-col gap-6">

         <div className="flex flex-col gap-2">

            <text className="text-5xl">Fique por dentro das Novidades</text>

            <div className="flex flex-col w-fit overflow-hidden relative group text-lg ">

               <button className='text-purple-600 gap-2 flex items-center'>
                  <text>Ir para o Blog do Nu</text>

                  <BiArrowBack size={20} className={'rotate-[135deg]'}/>

               </button>
               
               <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[200px] group-hover:left-0"/>

            </div>

         </div>

         <div className="flex gap-10 justify-around">

            <div className="rounded-3xl flex flex-col w-full overflow-hidden border-[1px] border-gray-600/10">
               
               <div className="min-h-[300px] w-full overflow-hidden bg-slate-800 relative">
                  <Image src={InvistaSeuDinheiro} alt="" fill objectFit="cover" className="scale-150"/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="font-normal">Caixinhas</text>

                  <text className=" text-2xl">
                     Caixinhas do Nubank: tudo o que você precisa saber sobre a ferramenta que facilita os seus planos
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg">

                     <button className='text-purple-600 gap-2 flex items-center'>
                        <text>Ler artigo</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>

                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

            <div className="rounded-3xl flex flex-col w-full overflow-hidden border-[1px] border-gray-600/10">
               
               <div className="min-h-[300px] w-full overflow-hidden bg-slate-800 relative">
                  <Image src={ShoppingNu} alt="" fill objectFit="cover" className="scale-150"/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="font-normal">Empréstimo</text>

                  <text className=" text-2xl">
                     Como fazer empréstimo no Nubank? Confira dicas para escolher o crédito certo para você
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg">

                     <button className='text-purple-600 gap-2 flex items-center'>
                        <text>Ler artigo</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>

                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

            <div className="rounded-3xl flex flex-col w-full overflow-hidden border-[1px] border-gray-600/10">
               
               <div className="min-h-[300px] w-full overflow-hidden bg-slate-800 relative">
                  <Image src={Card3} alt="" fill objectFit="cover" className=""/>
               </div>

               <div className="flex flex-col p-6 py-6 gap-4 justify-between h-full">

                  <text className="font-normal">N Possibilidades</text>

                  <text className=" text-2xl">
                     10 situações da sua vida que o Nubank ajuda a resolver com N Possibilidades
                  </text>

                  <div className="flex flex-col w-fit overflow-hidden relative group text-lg">

                     <button className='text-purple-600 gap-2 flex items-center'>
                        <text>Ler artigo</text>

                        <BiArrowBack size={20} className={'rotate-[135deg]'}/>

                     </button>
                     
                     <div className="absolute h-[2px] bottom-0 w-full bg-purple-600 duration-300 -left-[150px] group-hover:left-0"/>

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}