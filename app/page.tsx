import Image from "next/image";
import Link from "next/link";

const address = "701 N Federal Hwy, Ste 201B, Hallandale Beach, Florida 33009";
const phone = "786 265 8907";
const email = "info@alvarengapartners.info";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#111111]">
      <section className="relative isolate flex min-h-screen overflow-hidden">
        <div className="absolute inset-y-0 left-0 hidden w-20 border-r border-[#d8d1c6] bg-[#111111] text-[#fbfaf7] lg:flex">
          <p className="m-auto rotate-[-90deg] whitespace-nowrap text-xs font-semibold uppercase tracking-[0.6em]">
            Truly Alvarenga
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-rows-[auto_1fr_auto] px-5 py-6 sm:px-8 lg:ml-20 lg:px-12">
          <header className="flex items-center justify-between gap-6 border-b border-[#d8d1c6] pb-5">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.36em]"
            >
              Truly Alvarenga
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#4f4b46] sm:flex">
              <a className="transition-colors hover:text-[#9d1d2e]" href="#atelier">
                Atelier
              </a>
              <a className="transition-colors hover:text-[#9d1d2e]" href="#contacto">
                Contacto
              </a>
            </nav>
            <a
              href={`tel:+1${phone.replaceAll(" ", "")}`}
              className="text-sm font-semibold text-[#9d1d2e] transition-colors hover:text-[#111111]"
            >
              {phone}
            </a>
          </header>

          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-center lg:py-16">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#9d1d2e]">
                Moda de ocasion y piezas a medida
              </p>
              <h1 className="text-[clamp(3.4rem,9vw,8.8rem)] font-semibold leading-[0.88] tracking-normal">
                Elegancia hecha con intencion.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4a4641] sm:text-xl">
                Un home inspirado en la sensibilidad couture de Truly
                Alvarenga: siluetas pulidas, detalles delicados y una
                experiencia pensada para clientas que buscan presencia.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:+1${phone.replaceAll(" ", "")}`}
                  className="inline-flex h-12 items-center justify-center bg-[#111111] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#9d1d2e]"
                >
                  Llamar ahora
                </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex h-12 items-center justify-center border border-[#111111] px-6 text-sm font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[#9d1d2e] hover:text-[#9d1d2e]"
            >
              Escribir correo
            </a>
              </div>
            </div>

            <div id="atelier" className="relative min-h-[440px] border border-[#d8d1c6] bg-[#f1ebe3]">
              <Image
                src="/atelier-silhouette.svg"
                alt="Ilustracion editorial de un vestido de moda"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-[#d8d1c6] bg-[#fbfaf7]/92 px-5 py-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9d1d2e]">
                  Bridal. Evening. Custom.
                </p>
              </div>
            </div>
          </div>

          <footer
            id="contacto"
            className="grid gap-5 border-t border-[#d8d1c6] pt-5 text-sm text-[#4a4641] md:grid-cols-[1fr_1fr_auto]"
          >
            <p className="font-semibold uppercase tracking-[0.24em] text-[#111111]">
              Hallandale Beach
            </p>
            <address className="not-italic leading-7">{address}</address>
            <div className="flex flex-col gap-2 font-semibold">
              <a
                href={`tel:+1${phone.replaceAll(" ", "")}`}
                className="text-[#9d1d2e] transition-colors hover:text-[#111111]"
              >
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="text-[#9d1d2e] transition-colors hover:text-[#111111]"
              >
                {email}
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
