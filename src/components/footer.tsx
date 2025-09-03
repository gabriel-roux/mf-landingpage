import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Footer() {

    return (

        <footer className="w-full flex items-center justify-center flex-col border-t border-black">
            <div className="py-8 flex flex-col items-center w-full relative border-b border-[#ECECEC] gap-2">
                <h3 className="text-black text-base font-semibold">
                    REDES SOCIAIS
                </h3>
                <div className="flex items-center gap-4">
                    <Link href='https://www.instagram.com/myfamily.br/' className="text-[#3A34FF] hover:text-blue-600 transition duration-300 cursor-pointer">
                        <InstagramLogoIcon size={28} />
                    </Link>
                    <Link href='https://www.facebook.com/myfamilybrasil/' className="text-[#3A34FF] hover:text-blue-600 transition duration-300 cursor-pointer">
                        <FacebookLogoIcon size={28} />
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center py-6">
                <p className="text-base font-semibold text-[#C8C8C8]">
                    ©2025 MY FAMILY - Todos os direitos reservados
                </p>
            </div>

        </footer>

    )

}