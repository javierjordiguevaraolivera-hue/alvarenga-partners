import Image from "next/image";
import Link from "next/link";

const address = "701 N Federal Hwy, Ste 201B, Hallandale Beach, Florida 33009";
const phone = "+1 786 265 8907";
const email = "info@alvarengapartners.info";

const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85";

const categories = [
  {
    name: "Vestidos",
    label: "Ver coleccion",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tops & Blusas",
    label: "Nuevas piezas",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Accesorios",
    label: "Detalles finales",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    name: "Vestido Midi Lino",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Blazer Sastre Crema",
    price: "$215",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Set Resort Negro",
    price: "$168",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Camisa Satinada",
    price: "$124",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Home() {
  const phoneHref = `tel:${phone.replaceAll(" ", "")}`;

  return (
    <main className="min-h-screen bg-white text-[#151515]">
      <div className="bg-[#151515] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white">
        Boutique en Hallandale Beach - Nuevas llegadas disponibles
      </div>

      <header className="sticky top-0 z-30 border-b border-[#e6e0d7] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-black uppercase tracking-[0.2em]">
            Alvarenga
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-[#55504a] md:flex">
            <a className="hover:text-[#c73542]" href="#colecciones">
              Colecciones
            </a>
            <a className="hover:text-[#c73542]" href="#novedades">
              Novedades
            </a>
            <a className="hover:text-[#c73542]" href="#contacto">
              Contacto
            </a>
          </nav>
          <a
            href={phoneHref}
            className="text-sm font-bold text-[#c73542] hover:text-[#151515]"
          >
            {phone}
          </a>
        </div>
      </header>

      <section className="grid min-h-[calc(100vh-104px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex items-center px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-xl lg:mx-0">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#c73542]">
              Moda femenina - Boutique edit
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-normal sm:text-6xl lg:text-7xl">
              Looks que se sienten listos.
            </h1>
            <p className="mt-7 text-lg leading-8 text-[#5a554f]">
              Un home de moda con energia de tienda: colecciones faciles de
              explorar, fotos reales, novedades al frente y contacto inmediato
              para visitar o reservar en Hallandale Beach.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#novedades"
                className="inline-flex h-12 items-center justify-center bg-[#151515] px-7 text-sm font-black uppercase tracking-[0.16em] text-white hover:bg-[#c73542]"
              >
                Ver novedades
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex h-12 items-center justify-center border border-[#151515] px-7 text-sm font-black uppercase tracking-[0.16em] hover:border-[#c73542] hover:text-[#c73542]"
              >
                Escribir
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <Image
            src={heroImage}
            alt="Cliente con bolsas de compras de moda"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:left-auto sm:w-80">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c73542]">
              Store mood
            </p>
            <p className="mt-2 text-2xl font-black uppercase leading-none">
              Casual, party, resort.
            </p>
          </div>
        </div>
      </section>

      <section id="colecciones" className="border-y border-[#e6e0d7] bg-[#f7f4ef] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[#c73542]">
                Compra por categoria
              </p>
              <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                Colecciones
              </h2>
            </div>
            <p className="hidden max-w-md text-sm leading-6 text-[#5a554f] md:block">
              Una entrada directa a las lineas clave, pensada para que el home
              se sienta como tienda y no como pagina de espera.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#contacto"
                className="group relative min-h-[430px] overflow-hidden bg-[#ddd4ca]"
              >
                <Image
                  src={category.image}
                  alt={`Categoria ${category.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.22em]">
                    {category.label}
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase">
                    {category.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="novedades" className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h2 className="text-3xl font-black uppercase sm:text-4xl">
              New arrivals
            </h2>
            <a
              href={phoneHref}
              className="text-xs font-black uppercase tracking-[0.18em] text-[#c73542] hover:text-[#151515]"
            >
              Reservar cita
            </a>
          </div>

          <div className="grid gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#eee8df]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 bg-[#c73542] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    Nuevo
                  </span>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="font-bold uppercase leading-5">{product.name}</h3>
                  <p className="font-black text-[#c73542]">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151515] py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffb3ba]">
              Visit us
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none">
              Estilo listo para probar.
            </h2>
          </div>
          <div id="contacto" className="grid gap-4 text-sm leading-7 text-[#e8ded2] sm:grid-cols-2">
            <address className="not-italic">{address}</address>
            <div className="flex flex-col gap-2 font-bold">
              <a href={phoneHref} className="hover:text-[#ffb3ba]">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="hover:text-[#ffb3ba]">
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
