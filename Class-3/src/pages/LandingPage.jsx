import Hero from "../components/Hero"
import ServiceCard from "../components/ServiceCard"
import Testimonials from "../components/Testimonials"

export default function LandingPage() {
  const services = [
    {
      title: "Diseño Web",
      description: "Creamos sitios web atractivos y funcionales para tu marca."
    },
    {
      title: "Desarrollo Frontend",
      description: "Desarrollamos interfaces de usuario interactivas y responsivas utilizando las ultimas tecnologías."
    },
    {
      title: "Optimización SEO",
      description: "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico."
    }
  ]

  return (
    <>
        <Hero/>
        <section className="max-w-7xl mx-auto px-6 md:py-16 gap-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-amber-50 text-center">
            Nuestro Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
        <Testimonials/>
    </>
  )
}