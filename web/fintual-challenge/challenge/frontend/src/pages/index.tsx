import { useEffect, useState } from "react";
import axiosInstance from "~/helpers/axiosHelper";
import { FintualLogoWithText } from "../components/FintualLogos";
import { FintualistSVG } from "~/components/FintualistSVG";
import { ReactTyped } from "react-typed";
import { FintualBtn } from "~/components/FintualBtn";
import Link from "next/link";

function NavbarLink(props: React.ComponentProps<typeof Link>) {
  return <Link className="text-sm font-medium text-[#757575]" {...props} />;
}

function NavbarLinks() {
  return (
    <div className="flex h-full items-center gap-8">
      <NavbarLink href="/">Inbox</NavbarLink>
      <NavbarLink href="/">Fondos</NavbarLink>
      <NavbarLink href="/">Jubilación</NavbarLink>
      <NavbarLink href="/">Acciones</NavbarLink>
      <NavbarLink href="/">Personas</NavbarLink>
      <Link href="/">
        <FintualistSVG />
      </Link>
      <FintualBtn href="/app/login/">Entrar</FintualBtn>
      <FintualBtn href="/app/login/" primary>
        Empieza Ahora
      </FintualBtn>
    </div>
  );
}

export default function Home() {
  const [testMsg, setTestMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/healthcheck/");
        setTestMsg(JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchData();

    return;
  }, []);

  return (
    <>
      <header className="mx-auto box-content flex h-[130px]  max-w-screen-xl flex-row items-center justify-between bg-white px-20">
        <FintualLogoWithText className="h-8" />
        <div>
          <NavbarLinks />
          {/* Mobile se ignora */}
        </div>
      </header>
      <main>
        <section>
          <header className="mx-auto box-content min-h-[800px] max-w-screen-xl px-20 py-40">
            <div className="pb-6">
              <h2 className="select-none whitespace-pre text-[65px] font-medium leading-[1.125] text-[#282828]">
                Una máquina{"\n"}para hacer crecer{"\n"}tu{" "}
                <ReactTyped {...typerArgs} />
              </h2>
            </div>
            <h1 className="box-content select-none whitespace-pre pb-6 font-medium">
              Haz más cosas con lo que ganas.{"\n"}Inversiones sin mínimos y
              reguladas.
            </h1>
            <FintualBtn href="/app/login/" primary>
              Empieza Ahora
            </FintualBtn>
          </header>
        </section>
      </main>
    </>
  );
}

const typerArgs = {
  strings: ["patrimonio", "sueldo", "inversión", "plata", "bienestar"],
  typeSpeed: 50,
  backSpeed: 5,
  backDelay: 800,
  startDelay: 200,
  loop: true,
};
