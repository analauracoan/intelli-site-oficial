"use client";

import Image from "next/image";
import Logo from "../../assets/logo_intelli.png";
import QRcode from "../../assets/qr_code.png";
import Ilustracao1 from "../../assets/section_1_page_2.png";
import Number1 from "../../assets/number_one.png";
import Number2 from "../../assets/number_two.png";
import Number3 from "../../assets/number_three.png";
import Number4 from "../../assets/number_four.png";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <section className="w-full h-dvh bg-background px-5 py-2 Laptop:px-10 4K:px-20">
        <div className="w-full h-1/6 flex flex-row justify-between items-center">
          <Image src={Logo} className="w-1/4 MobileL:w-1/6 Tablet:w-1/12" />
          <button
            type="button"
            onClick={() => router.push("/")}
            className="font-sans font-medium text-black text-lg Tablet:text-xl 4K:text-5xl"
          >
            Página Inicial
          </button>
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
            Ao entrar em contato conosno, enviaremos um{" "}
            <strong className="font-extrabold">
              documento que deverá ser preenchido
            </strong>{" "}
            com as informações chave do software e/ou website a ser
            desenvolvido, como{" "}
            <strong className="font-extrabold">
              cores e inspirações de design
            </strong>{" "}
            de páginas.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number2} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            Com o documento enviado, será feito um{" "}
            <strong className="font-extrabold">
              protótipo de layout da página principal
            </strong>{" "}
            do software e/ou website. Quando aprovado o layout, será iniciado a
            execução do{" "}
            <strong className="font-extrabold">
              mapeamento dos requisitos
            </strong>{" "}
            do software.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number3} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            Com o documento de requisitos aprovado, será realizado o{" "}
            <strong className="font-extrabold">planejamento de projeto</strong>,
            com o{" "}
            <strong className="font-extrabold">cronograma da execução</strong>{" "}
            das atividades e o contrato, com o{" "}
            <strong className="font-extrabold">orçamento</strong>, bem
            definidos.
          </p>
        </div>
        <div className="w-full h-1/5 bg-background p-3 flex flex-row items-center mb-8 MobileL:h-1/6 Tablet:h-1/6 Tablet:rounded-lg Tablet:w-3/4">
          <Image src={Number4} width={30} className="mr-4 Tablet:mx-8" />
          <p className="h-full leading-tight text-justify content-center">
            Com o planejamento e o orçamento aprovados, será iniciado a{" "}
            <strong className="font-extrabold">
              execução efetiva do projeto
            </strong>
            , que inclui o design de telas e a programação em si, tudo sempre
            com comunicação clara e feedbacks semanais.
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
            Entre em contato com a Intelli Desenvolvimento! <br />
            <strong className="font-bold">Você irá se surpreender</strong>
          </h1>
        </div>
      </footer>
    </>
  );
}
