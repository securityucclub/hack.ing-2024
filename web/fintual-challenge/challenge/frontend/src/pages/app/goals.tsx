import Link from "next/link";
import { useEffect, useRef } from "react";
import { FintualLogo, FintualLogoWithText } from "~/components/FintualLogos";
import ProtectAuthedView from "~/helpers/protectAuthedView";

function Money() {
  const bigNumberRef = useRef<HTMLSpanElement>(null);
  const smallNumberRef = useRef<HTMLSpanElement>(null);

  function formatMainNumber(num: number) {
    return Intl.NumberFormat("es-CL", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  }

  function formatDecimalNumber(num: number) {
    return num.toFixed(4).split(".")[1];
  }

  const money = useRef(1234567.8901);

  useEffect(() => {
    const listener = () => {
      money.current += 0.001;
      bigNumberRef.current!.textContent = `$ ${formatMainNumber(money.current)}`;
      smallNumberRef.current!.textContent = `,${formatDecimalNumber(money.current)}`;
    };
    const interval = setInterval(listener, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-roboto [font-variant:tabular-nums]">
      <span ref={bigNumberRef}>$ {formatMainNumber(money.current)}</span>
      <span ref={smallNumberRef} className="text-sm text-[#757575]">
        ,{formatDecimalNumber(money.current)}
      </span>
    </div>
  );
}

export default function AppHome() {
  return (
    <ProtectAuthedView>
      <div className="flex min-h-[100svh] flex-col text-[#282828]">
        <nav className="sticky top-0 bg-white shadow-border-b">
          <div className="mx-auto flex min-h-[76px] w-full  max-w-screen-lg items-center px-6">
            <Link href="/">
              <FintualLogoWithText className="h-6 px-4" />
            </Link>
            <div className="flex-grow">
              <Link href="/logout/">Logout</Link>
            </div>
          </div>
        </nav>
        <div className="flex h-[275px] flex-col items-center justify-center">
          <h3 className="text-2xl font-medium">Hola Maximiliano 👋</h3>
          <h5 className="text-[#757575]">Invirtiendo fácil hace 512 días</h5>
        </div>
        <div className="w-full shadow-border-b">
          <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-6">
            <div className="border-b border-[#005ad6] px-6 py-4 text-[#005ad6]">
              Inicio
            </div>
            <div className="flex gap-4  pb-1">
              <Link
                href="/35dc4fcb5887440d7a163667904353c28fcfee2d678e8d346784f0f583739d2f/"
                className="flex h-[44px] flex-row items-center justify-center gap-4 rounded-[32px] border border-solid px-6 text-sm text-[#005ad6]"
              >
                Descargar portafolio
              </Link>
              <Link
                href="/"
                className="flex h-[44px] flex-row items-center justify-center gap-4 rounded-[32px] border border-solid border-transparent bg-[#005ad6] px-6 text-sm text-white"
              >
                Invertir más
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-lg flex-1 p-6">
          <div className="flex">
            <div className="flex-1">
              <p className="my-4 font-medium">Inversiones</p>
              <div className="grid [grid-template-columns:repeat(auto-fill,360px)]">
                <div className="flex items-center rounded-xl border border-[#e1e1e1] p-6">
                  <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f6fa] text-center">
                    📥
                  </div>
                  <div className="flex-1 text-sm">
                    <div>Inbox</div>
                    <div className="text-[#757575]">Reserva</div>
                  </div>
                  <Money />
                </div>
              </div>
            </div>
            <div className="min-w-96">
              <p className="my-4 font-medium">Movimientos</p>
              <div className="rounded-xl bg-[#f3f6fa] px-8 py-6 text-center ">
                No hay nuevos movimientos
              </div>
            </div>
          </div>
        </div>
        <footer className="mx-auto mb-32 w-full">
          <div className="mx-auto max-w-screen-lg p-6 text-xs text-[#757575]">
            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/">Rentabilidad</Link>
              <Link href="/">APV</Link>
              <Link href="/">Store</Link>
              <Link href="/">API</Link>
              <Link href="/">Personas</Link>
              <Link href="/">Opiniones</Link>
              <Link href="/">Términos y Condiciones</Link>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <FintualLogo className="h-8" />
              <div className="mt-2">2024, SUCC</div>
            </div>
          </div>
        </footer>
      </div>
    </ProtectAuthedView>
  );
}
