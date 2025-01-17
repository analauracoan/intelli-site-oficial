"use client";

import Image from "next/image";
import Logo from "../assets/logo_intelli.png";
import Ilustracao1 from "../assets/section_1.png";
import Ilustracao2 from "../assets/section_2-1.png";
import Ilustracao3 from "../assets/section_2-2.png";
import QRcode from "../assets/qr_code.png";
import Number1 from "../assets/number_one.png";
import Number2 from "../assets/number_two.png";
import Number3 from "../assets/number_three.png";
import Number4 from "../assets/number_four.png";

export default function Page() {
  return (
    <>
      <section className="w-full h-dvh bg-background px-5 py-2 Laptop:px-10 4K:px-20">
        <div className="w-full h-1/6 flex flex-row justify-between items-center">
          <Image src={Logo} className="w-1/4 MobileL:w-1/6 Tablet:w-1/12" />
        </div>
        <div className="w-full h-5/6 flex flex-col justify-around items-center Tablet:flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold leading-tight Tablet:text-5xl 4K:text-8xl">
              Softwares do seu jeito criados de forma moderna
            </h1>
            <p className="text-xl text-cinza my-5 Tablet:text-2xl 4K:text-4xl">
              Os projetos que você sempre planejou virando realidade sem
              estresse
            </p>
          </div>
          <Image src={Ilustracao1} className="w-3/4 MobileL:w-1/2" />
        </div>
      </section>
      <section className="w-full h-full bg-primary flex flex-col justify-start items-center px-5 Tablet:flex-row Tablet:items-center Laptop:px-10 LaptopL:px-15 LaptopL:justify-around">
        <Image
          src={Ilustracao2}
          className="w-3/4 MobileL:w-1/2 LaptopL:w-1/4"
        />
        <div className="flex flex-col justify-around items-center Tablet:w-9/12 Tablet:px-5 Tablet:items-end LaptopL:w-2/4">
          <h1 className="text-4xl text-white font-bold text-center Tablet:my-5 LaptopL:text-6xl">
            Nossa missão
          </h1>
          <p className="text-center text-xl text-white font-thin Tablet:text-right LaptopL:text-3xl">
            Fornecer soluções de software{" "}
            <strong className="font-extrabold">personalizadas</strong> que
            capacitem nossos clientes a alcançar seus objetivos de negócios com{" "}
            <strong className="font-extrabold">eficiência</strong> e{" "}
            <strong className="font-extrabold">inovação</strong>.
          </p>
        </div>
      </section>
      <section className="w-full h-full bg-primary flex flex-col-reverse justify-start items-center px-5 Tablet:flex-row Tablet:items-center Laptop:px-10 LaptopL:px-15 LaptopL:justify-around">
        <div className="flex flex-col justify-around items-center py-5 Tablet:w-9/12 Tablet:px-5 Tablet:items-start LaptopL:w-2/4">
          <h1 className="text-4xl text-white font-bold text-center Tablet:my-5 LaptopL:text-6xl">
            Nossa visão
          </h1>
          <p className="text-center text-xl text-white font-thin Tablet:text-left LaptopL:text-3xl">
            Ser reconhecidos por transformar{" "}
            <strong className="font-bold">desafios tecnológicos</strong> em
            oportunidades de <strong className="font-bold">crescimento</strong>.
          </p>
        </div>
        <Image
          src={Ilustracao3}
          className="w-3/4 MobileL:w-1/2 LaptopL:w-1/4"
        />
      </section>
      <section className="w-full h-dvh bg-background px-5 py-2 Laptop:px-10 4K:px-20">
        <div className="w-full h-1/6 flex flex-row justify-between items-center">
          <Image src={Logo} className="w-1/4 MobileL:w-1/6 Tablet:w-1/12" />
        </div>
        <div className="w-full h-5/6 flex flex-col justify-around items-center Tablet:flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold leading-tight Tablet:text-5xl 4K:text-8xl">
              Como funciona para eu ter meu site ou sistema?
            </h1>
          </div>
          <Image src={Ilustracao1} className="w-3/4 MobileL:w-1/2" />
        </div>
      </section>
      <section className="w-full [height:200dvh] bg-primary Tablet:flex Tablet:flex-col Tablet:items-center">
        <h1 className="text-3xl text-white p-5 text-center font-bold leading-tight Tablet:py-16 Tablet:text-5xl 4K:text-8xl">
          Etapas de Desenvolvimento
        </h1>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number1} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            <strong>PLANEJAMENTO</strong>
            <br />
            Entendimento de negócio, montagem de requisitos, design de
            interfaces e planejamento de projeto.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number2} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            <strong>DESENVOLVIMENTO</strong>
            <br />
            Desenvolvimento Front-End e Back-End.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number3} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            <strong>TESTE</strong>
            <br />
            Execução de testes com o objetivo de encontrar falhas.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number4} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            <strong>IMPLEMENTAÇÃO</strong>
            <br />
            Deploy e entrega do produto.
          </p>
        </div>
      </section>
      <footer
        id="qr"
        className="w-full bg-background flex flex-col items-center py-5 Tablet:flex-row Tablet:px-5"
      >
        <Image src={QRcode} width={200} />
        <div className="flex flex-col w-full">
          <h1 className="m-10 text-xl 4K:text-3xl">
            Entre em contato com a Intelli Desenvolvimento escaneando o QRcode
            ou pelo número: (48) 99197-5338. <br />
            <strong className="font-bold">Você irá se surpreender.</strong>
          </h1>
        </div>
      </footer>
    </>
  );
}
