"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MFLabel } from '@/components/mf-label';
import { Footer } from '@/components/footer';
import { ShopModal } from '@/components/modal';
import { CartButton } from '@/components/cart-button';
import { CartSidebar } from '@/components/cart-modal';
import { CartProvider } from '@/contexts/CartContext';
import { useState } from 'react';
import Image from 'next/image';

import Vinho1 from '@/assets/images/vinho1.jpg';
import Preto1 from '@/assets/images/preto4.jpg';
import Branco1 from '@/assets/images/branco1.jpg';
import AbaReta1 from '@/assets/images/aba-reta-5.png'
import Estonado1 from '@/assets/images/estonado5.jpg'
import Camisetas from '@/assets/images/camisetas.png'
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';


  function ShopContent() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (productId: number) => {
    setSelectedProductId(productId.toString());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
        <header className='w-full h-[66px]'>
        {/* Header */}
        <div className="h-[66px] fixed w-full top-0 z-50 bg-white px-5 md:px-0">
          <div className="flex items-center h-[66px] justify-between mx-auto max-w-screen-xl">
            <div className="flex items-center gap-3">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.01256 25.7581C2.47548 24.0554 1.36065 22.1509 0.681194 19.9794C-0.0343748 17.6923 -0.170689 15.3646 0.199512 13.0251C0.575253 10.6508 1.51006 8.49157 2.9442 6.5334C4.63596 4.22348 6.81635 2.57108 9.42618 1.46591C10.9942 0.801957 12.646 0.462509 14.3487 0.36466C16.2128 0.257537 18.0395 0.484973 19.8063 1.06026C22.4073 1.90709 24.6377 3.35602 26.4707 5.39556C27.657 6.7154 28.5919 8.19744 29.2387 9.85127C30.1598 12.206 30.5269 14.6359 30.2357 17.1629C29.9773 19.4059 29.2646 21.4893 28.0875 23.4049C26.7243 25.6237 24.8992 27.3861 22.6331 28.6749C20.1585 30.0824 17.4839 30.76 14.6445 30.6493C11.6302 30.532 8.86582 29.6056 6.39724 27.8405C5.54164 27.2288 4.74624 26.5524 4.01256 25.7581ZM1.80243 19.215C1.85119 19.4037 1.88437 19.5981 1.95124 19.7802C2.36582 20.9088 2.85312 22.0021 3.51495 23.0127C4.80215 24.9781 6.46213 26.5446 8.5214 27.6747C10.3594 28.6836 12.3171 29.2465 14.4297 29.3288C16.0102 29.3904 17.5486 29.2438 19.0625 28.8079C20.4967 28.3949 21.8339 27.7702 23.0492 26.9012C26.6778 24.3061 28.7046 20.7765 29.0208 16.3336C29.2406 13.2452 28.4375 10.3843 26.6991 7.80409C25.4282 5.91744 23.803 4.41639 21.7982 3.33508C20.1978 2.47184 18.5108 1.89517 16.686 1.71984C15.4124 1.59744 14.1432 1.58861 12.8877 1.80221C11.0674 2.11191 9.36391 2.75528 7.79982 3.75534C4.51844 5.85346 2.43565 8.81455 1.59369 12.5964C1.10904 14.7732 1.17091 16.9799 1.80243 19.215Z" fill="black"/>
              <path d="M4.84854 12.1589C5.15507 11.4079 5.3998 10.6621 5.75412 9.97258C6.04833 9.40001 6.36673 8.81004 6.97778 8.47351C7.35795 8.2641 7.67953 8.28964 7.94191 8.62772C8.10256 8.8347 8.26227 9.06888 8.331 9.31625C8.67807 10.5655 9.07714 11.8017 9.33923 13.073C9.41207 13.4263 9.42001 13.7931 9.4542 14.1541C9.4769 14.3938 9.5446 14.6131 9.69624 14.802C9.87319 14.7431 9.9086 14.5959 9.95453 14.4728C10.2178 13.7676 10.4684 13.0576 10.7302 12.3518C10.782 12.2121 10.7855 12.0951 10.7225 11.9533C10.4974 11.447 10.5642 10.9483 10.786 10.4544C10.9116 10.1748 11.0204 9.88719 11.1256 9.5991C11.464 8.67235 12.0157 7.91903 12.9264 7.49585C13.3837 7.28333 13.8443 7.51909 14.2395 7.70358C14.9853 8.05182 15.4214 8.65375 15.4033 9.52857C15.3875 10.297 15.3985 11.0661 15.4002 11.8349C15.4018 12.6167 15.3931 13.3963 15.5595 14.1707C15.7017 14.8323 15.5506 15.5077 15.5769 16.1767C15.5825 16.3171 15.5225 16.4798 15.6678 16.5879C15.8183 16.5313 15.7906 16.4163 15.7755 16.3304C15.5961 15.3091 15.7768 14.269 15.597 13.2444C15.4953 12.6637 15.6156 12.0862 15.7419 11.5046C15.8642 10.9423 15.9089 10.3621 16.0451 9.7962C16.2173 9.07953 16.6634 8.65902 17.3567 8.60748C18.2214 8.54318 18.8607 7.95934 19.4515 7.3949C20.212 6.66847 21.0353 6.52826 21.9072 7.10515C22.0558 7.20352 22.2138 7.23563 22.3767 7.26589C22.9956 7.3809 23.5839 7.54532 24.0167 8.05736C24.1651 8.23303 24.4363 8.24138 24.5847 8.46312C25.0137 9.10402 24.6947 9.9289 23.9297 10.0299C23.4606 10.0918 22.9515 10.1325 22.5197 9.94404C21.8516 9.65259 21.2922 9.87466 20.7242 10.1583C20.4633 10.2885 20.2217 10.4586 19.9765 10.6183C19.2154 11.1137 18.8469 11.8271 18.8483 12.7259C18.8489 13.0267 18.7768 13.3043 18.6999 13.5878C18.5511 14.1354 18.5957 14.6985 18.5909 15.2564C18.5879 15.6015 18.882 15.6663 19.0918 15.6031C20.1314 15.2898 21.1048 15.7909 22.1152 15.8103C22.5329 15.8183 22.7506 16.14 22.7291 16.5657C22.7181 16.7832 22.2549 17.1369 21.8991 17.1531C21.3968 17.176 20.8927 17.1627 20.3897 17.1638C20.1101 17.1644 19.8196 17.2119 19.5528 17.1531C18.7501 16.9759 18.359 17.5051 17.9578 18.0278C17.9034 18.0987 17.8724 18.2119 17.8795 18.3017C18.0335 20.2342 17.9841 22.1804 18.265 24.1045C18.2859 24.2473 18.3441 24.3697 18.4105 24.4935C18.733 25.0936 18.6699 25.6792 18.3208 26.2421C18.0981 26.6018 17.7463 26.6818 17.3914 26.4647C16.8866 26.1555 16.5303 25.7137 16.2958 25.1759C16.1867 24.9254 16.1253 24.6132 16.2766 24.4048C16.626 23.9232 16.5224 23.4106 16.4409 22.9159C16.2836 21.9605 16.3457 20.991 16.2101 20.0385C16.1044 19.2945 15.9426 18.5584 15.8826 17.8072C15.8742 17.7028 15.8291 17.607 15.7044 17.6182C15.5804 17.6294 15.5647 17.7393 15.5521 17.8372C15.4783 18.4115 15.3894 18.9674 15.4481 19.5695C15.556 20.6777 15.635 21.7918 15.7679 22.8977C15.8648 23.7039 15.9479 24.5059 15.9275 25.3181C15.9196 25.6346 15.8669 25.9428 15.5108 25.9971C15.1515 26.0521 14.9601 25.807 14.858 25.4764C14.7023 24.9717 14.5648 24.4716 14.4828 23.9412C14.2876 22.6753 13.9534 21.4309 13.75 20.166C13.6045 19.2619 13.264 18.414 13.1371 17.4956C13.0325 16.7383 13.0387 15.9576 12.8227 15.2017C12.6557 14.6173 12.734 13.9779 12.883 13.3745C13.0242 12.8021 12.7348 12.2935 12.7367 11.6757C12.3258 11.8888 12.1614 12.1968 12.0169 12.5034C11.4617 13.6821 11.188 14.9608 10.7328 16.1759C10.6425 16.4168 10.5348 16.6346 10.3548 16.8182C9.89156 17.291 9.42351 17.2252 9.0353 16.6863C8.41182 15.8206 8.14731 14.8378 7.99112 13.8067C7.87156 13.0174 7.52759 12.2996 7.22865 11.5469C7.01038 11.9567 6.8441 12.3687 6.76777 12.8188C6.52767 14.2348 6.48389 15.6788 6.15317 17.0822C6.06305 17.4646 6.06046 17.8238 6.27081 18.209C6.61856 18.8459 6.35641 19.8677 5.80437 20.3347C5.78306 20.3527 5.76278 20.3727 5.73928 20.3874C5.26064 20.6865 3.62772 20.5265 3.21747 20.1381C2.97733 19.9107 2.8833 19.5869 2.90391 19.2989C2.94424 18.7354 2.96747 18.1471 3.32789 17.6603C3.48456 17.4487 3.55951 17.2194 3.54258 16.9564C3.51228 16.4856 3.6818 16.0492 3.79367 15.6053C3.97647 14.8799 4.14337 14.1459 4.3983 13.4451C4.54994 13.0283 4.67298 12.6016 4.84854 12.1589Z" fill="black"/>
              <path d="M7.95289 6.32553C8.19034 6.52939 8.41483 6.73595 8.24206 7.04552C8.12643 7.25271 8.07502 7.58332 7.68055 7.45795C7.21188 7.309 7.18132 7.248 7.2323 6.68878C7.26771 6.3006 7.5138 6.29686 7.79416 6.30959C7.83596 6.31149 7.87769 6.31488 7.95289 6.32553Z" fill="black"/>
              </svg>
            </div>

           {/* Tagline */}
            <p className="text-center text-[#F2F2F2] font-bold hidden md:block">
              Louvado seja o nome do Senhor e Salvador, Jesus Cristo!
            </p>

            <Link
              href="https://api.whatsapp.com/send?phone=5521966134990&text=Olá%2C+quero+comprar+e+tenho+duvidas."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              <WhatsappLogoIcon weight='fill' className="h-5 w-5" />
              (21) 96613-4990
            </Link>
          </div>
        </div>
            
        </header>

 

        {/* Hero Carousel */}
        <section className="">
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              className="md:h-[712px] h-[490px] overflow-hidden"
            >
                <SwiperSlide>
                  <Image
                    src={AbaReta1}
                    alt='Aba Reta 1'
                    width={1440}
                    height={645}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
            </Swiper>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center z-10">
            <h3 className="font-semibold text-sm mb-2 text-center text-white">CLASSIC ABA RETA 16’</h3>

              <button 
                onClick={() => handleOpenModal(2)}
                className="w-full max-w-[168px] mx-auto bg-white text-black border-[1.5px] border-black px-6 py-3 rounded-md hover:bg-black hover:text-white duration-300 cursor-pointer transition-colors font-bold text-sm"
              >
                MAIS DETALHES
              </button>
            </div>
          </div>
        </section>

        <MFLabel />
        
        {/* Product Grid */}
        <section className="max-w-[1216px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            {/* Trucker - Vinho */}
              <div className="w-full md:w-[384px] h-[624px] border-b md:border-x border-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
                <h3 className="font-semibold text-sm mb-2 text-center text-white">TRUCKER - VINHO</h3>

                  <button 
                    onClick={() => handleOpenModal(1)}
                    className="w-full max-w-[168px] mx-auto bg-white text-black border-[1.5px] border-black px-6 py-3 rounded-md hover:bg-black hover:text-white duration-300 cursor-pointer transition-colors font-bold text-sm"
                  >
                    MAIS DETALHES
                  </button>
                </div>

                <Image
                  src={Vinho1}
                  alt="Trucker - Vinho"
                  className="w-full h-full object-cover"
                />
              </div>

            {/* Dad Hat - Azul Estonado */}
              <div className="w-full md:w-[384px] h-[624px] border-b md:border-x border-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
                  <h3 className="font-semibold text-sm mb-2 text-center text-white">DAD HAT - AZUL ESTONADO</h3>
                  <button 
                    onClick={() => handleOpenModal(5)}
                    className="w-full max-w-[168px] mx-auto bg-white text-black border-[1.5px] border-black px-6 py-3 rounded-md hover:bg-black hover:text-white duration-300 cursor-pointer transition-colors font-bold text-sm"
                  >
                    MAIS DETALHES
                  </button>
                </div>

                <Image
                  src={Estonado1}
                  alt="Dad Hat - Azul Estonado"
                  className="w-full h-full object-cover"
                />
              </div>

            {/* Dad Hat - Branco */}
              <div className="w-full md:w-[384px] h-[624px] md:border-x border-black relative">
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
                  <h3 className="font-semibold text-sm mb-2 text-center text-white">DAD HAT - BRANCO BRILHANTE</h3>
                  <button 
                    onClick={() => handleOpenModal(3)}
                    className="w-full max-w-[168px] mx-auto bg-white text-black border-[1.5px] border-black px-6 py-3 rounded-md hover:bg-black hover:text-white duration-300 cursor-pointer transition-colors font-bold text-sm"
                  >
                    MAIS DETALHES
                  </button>
                </div>

                <Image
                  src={Branco1}
                  alt="Dad Hat - Branco"
                  className="w-full h-full object-cover"
                />
              </div>
          </div>
        </section>

        <MFLabel />

        <section className='w-full md:h-[624px] flex flex-col md:flex-row justify-center items-start md:gap-8'>
          <div className='md:w-[704px] h-[624px] md:border-x border-black relative'>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
              <h3 className="font-semibold text-sm mb-2 text-center text-white">DAD HAT - PRETO</h3>
              <button 
                onClick={() => handleOpenModal(4)}
                className="w-full max-w-[168px] mx-auto bg-white text-black border-[1.5px] border-black px-6 py-3 rounded-md hover:bg-black hover:text-white duration-300 cursor-pointer transition-colors font-bold text-sm"
              >
                MAIS DETALHES
              </button>
            </div>

            <Image
               src={Preto1}
               alt="Dad Hat - Preto"
               className="w-full h-full object-cover"
             />
          </div>
          <div className='w-full md:w-[704px] h-[624px] border-t md:border-t-0 md:border-x border-black relative'>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
              <h3 className="font-semibold text-base text-center text-black">CAMISETAS MASC. & FEM. MODELAGEM PRÓPRIA MY FAMILY</h3>
              <p className='text-base text-center text-[#929292]'>
                Disponíveis a partir de 04/10/25.
              </p>
            </div>

            <Image
              src={Camisetas}
              alt='Camisetas - EM BRE'
              width={492}
              height={272}
              className='w-[492px] h-[272px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
              />
          </div>

        </section>

        {/* Modal */}
        {selectedProductId && (
          <ShopModal
            productId={selectedProductId}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}

        <Footer />
    </div>
  );
}

export default function Shop() {
  return (
    <CartProvider>
      <ShopContent />
      {/* Componentes do Carrinho - Fora do ShopContent para garantir visibilidade */}
      <CartButton />
      <CartSidebar />
    </CartProvider>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7zm5.25-2.75a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2z" />
    </svg>
  );
}