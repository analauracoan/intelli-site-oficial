import Image from "next/image";
import Logo from "../assets/logo_intelli.png";
import Ilustracao1 from "../assets/section_1.png";
import Ilustracao2 from "../assets/section_2-1.png";
import Ilustracao3 from "../assets/section_2-2.png";
import QRcode from "../assets/qr_code.png";

export default function Page() {
  return (
    <>
      <section className="w-dvw h-dvh bg-background px-20 py-5">
        <div className="w-full h-1/6 flex flex-row justify-between items-start">
          <Image src={Logo} width={100} height={100} />
          <h4 className="font-sans font-medium text-black text-3xl">
            <a href="#qr">Como funciona?</a>
          </h4>
        </div>
        <div className="w-full h-auto flex flex-row justify-between items-center">
          <div className="w-fit h-full flex flex-col justify-around">
            <h1 className="text-6xl	font-bold leading-tight">
              Softwares do seu jeito criados de forma moderna
            </h1>
            <p className="text-3xl text-cinza my-5">
              Os projetos que você sempre planejou virando realidade sem
              estresse
            </p>
          </div>
          <Image src={Ilustracao1} width={"20%"} />
        </div>
      </section>
      <section className="w-dvw h-dvh bg-primary px-20 flex flex-row justify-around">
        <Image src={Ilustracao2} width={800} />
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-7xl text-white font-bold text-right py-16">
            Nossa missão
          </h1>
          <p className="text-right text-4xl text-white font-thin">
            Fornecer soluções de software{" "}
            <strong className="font-extrabold">personalizadas</strong> que
            capacitem nossos clientes a alcançar seus objetivos de negócios com{" "}
            <strong className="font-extrabold">eficiência</strong> e{" "}
            <strong className="font-extrabold">inovação</strong>.
          </p>
        </div>
      </section>
      <section className="w-dvw h-dvh bg-primary px-20 flex flex-row justify-around">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-7xl text-white font-bold text-left my-16">
            Nossa visão
          </h1>
          <p className="text-left text-4xl text-white font-thin">
            Ser reconhecidos por{" "}
            <strong className="font-bold">
              transformar desafios tecnológicos
            </strong>{" "}
            em oportunidades de{" "}
            <strong className="font-bold">crescimento</strong>.
          </p>
        </div>
        <Image src={Ilustracao3} width={800} />
      </section>
      <footer id="qr" className="w-dvw bg-background px-20 py-5 flex flex-row">
        <Image src={QRcode} width={200} />
        <h1 className="m-10 text-4xl">
          Entre em contato com a Intelli Desenvolvimento! <br />
          <strong className="font-bold">Você irá se surpreender</strong>
        </h1>
      </footer>
    </>
  );
}
