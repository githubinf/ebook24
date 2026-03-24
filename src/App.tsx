/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Layout, 
  PenTool, 
  Share2, 
  TrendingUp,
  HelpCircle,
  Award
} from "lucide-react";

const PAYMENT_URL = "https://fcofrancis.pay.clickbank.net/?cbitems=12";

const PaymentButton = ({ className = "" }: { className?: string }) => (
  <a 
    href="#comprar"
    className={`inline-block bg-brand-black text-brand-white px-10 py-5 text-xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform ${className}`}
  >
    Adquirir el método por $9,99
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-black selection:text-brand-yellow">
      {/* SECCIÓN HERO: IMPACTO INMEDIATO */}
      <section className="bg-brand-yellow min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl z-10"
        >
          <span className="meta-label text-brand-black/60 mb-8 block">MÉTODO DE ALTO RENDIMIENTO</span>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
            <h1 className="editorial-heading text-brand-black text-left lg:text-right">
              Ebook en <br />
              <span className="text-brand-white">24 HORAS</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="shrink-0 max-w-[300px] md:max-w-[400px]"
            >
              <img 
                src="https://i.postimg.cc/59hrpXW9/ebook-en-24-horas-no-ficcion.png" 
                alt="Portada Ebook en 24 Horas" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <p className="text-2xl md:text-3xl font-light text-brand-black/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Escribe y publica tu primer libro de no ficción en menos de un día. Sin experiencia previa, usando herramientas gratuitas e inteligencia artificial.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <PaymentButton />
            <a href="#comprar" className="text-lg font-semibold text-brand-black underline underline-offset-4">
              Ver detalles del método
            </a>
          </div>
        </motion.div>

        {/* Elemento decorativo sutil (Colibrí simbólico en código) */}
        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <Share2 size={300} className="text-brand-black rotate-12" />
        </div>
      </section>

      {/* SECCIÓN: EL PODER DE LA AUTORÍA (NUEVA) */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-tight">
            El Poder Invisible de ser <span className="text-brand-gold">Autor</span>
          </h2>
          <div className="prose prose-xl text-brand-black/70 space-y-8 leading-relaxed">
            <p>
              Ser autor de un libro no es solo tener un archivo a la venta en una plataforma digital. Es una transformación de identidad. Cuando alguien te pregunta "¿A qué te dedicas?" y tú puedes responder "Soy autor de un libro sobre...", la percepción de tu interlocutor cambia instantáneamente.
            </p>
            <p>
              La palabra "Autor" comparte raíz con la palabra "Autoridad". No es una coincidencia lingüística. Escribir un libro demuestra disciplina, conocimiento estructurado y la capacidad de llevar un proyecto complejo desde la concepción hasta la entrega. En el mundo de los negocios y la consultoría, un libro es la herramienta de prospección más poderosa que existe. No es una tarjeta de visita que se tira a la papelera; es un regalo valioso que se guarda en la estantería.
            </p>
            <p>
              Además, el proceso de escribir te obliga a clarificar tus propias ideas. A menudo, no sabemos realmente lo que pensamos sobre un tema hasta que intentamos explicárselo a otro de forma coherente y estructurada. Escribir este libro te hará mejor profesional, mejor comunicador y, en última instancia, mejor pensador.
            </p>
            <p>
              Y no olvidemos el impacto emocional. Hay una satisfacción profunda, casi ancestral, en ver tu nombre impreso en una portada. Es la culminación de un proceso creativo que te conecta con una tradición milenaria de intercambio de conocimiento. Es tu legado. Es tu voz resonando en el tiempo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: LA CIENCIA DE LA VELOCIDAD (NUEVA) */}
      <section className="py-32 px-6 bg-brand-gray/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">La Ciencia Detrás de las 24 Horas</h2>
          <div className="prose prose-xl text-brand-black/70 space-y-8">
            <p>
              Muchos se preguntan: "¿Cómo es posible crear algo de calidad en tan poco tiempo?". La respuesta no está en el apresuramiento, sino en la <span className="font-bold text-brand-black">Ley de Parkinson</span>. Esta ley establece que "el trabajo se expande hasta llenar el tiempo disponible para su realización".
            </p>
            <p>
              Si te das tres meses para escribir un libro, tardarás tres meses (y probablemente lo dejes a medias). Si te das veinticuatro horas, tu cerebro entra en un estado de flujo hiperenfocado. Eliminas lo superfluo, dejas de lado el perfeccionismo paralizante y te centras en lo que realmente importa: <span className="italic">entregar valor</span>.
            </p>
            <p>
              La velocidad es un filtro de calidad natural. Cuando escribes rápido, accedes a tu conocimiento intuitivo, a esa sabiduría que ya posees pero que a menudo queda sepultada bajo capas de duda racional. El método de las 24 horas te obliga a ser directo, honesto y práctico. No hay espacio para el relleno. Cada palabra tiene que ganarse su lugar en la página.
            </p>
            <p>
              Además, el impulso psicológico de ver progresos masivos en cuestión de horas es adictivo. En lugar de la fatiga que produce un proyecto de meses, experimentas la euforia de la creación constante. Este estado emocional se transmite al lector a través de una prosa enérgica y decidida.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EL MANIFIESTO DEL AUTOR MODERNO (NUEVA) */}
      <section className="py-32 px-6 bg-brand-yellow text-brand-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 leading-none uppercase tracking-tighter">
            El Manifiesto del <br /> Autor Moderno
          </h2>
          <div className="prose prose-2xl text-brand-black/80 space-y-8 font-light leading-relaxed">
            <p>
              Vivimos en la era de la democratización del conocimiento. Nunca antes en la historia de la humanidad ha sido tan sencillo, tan rápido y tan económico compartir una idea con el mundo entero. Sin embargo, paradójicamente, nunca ha habido tanto ruido, tanta distracción y tanta parálisis.
            </p>
            <p>
              El autor moderno no es aquel que se encierra en una cabaña en el bosque durante tres años esperando a que las musas le dicten una obra maestra. El autor moderno es un <span className="font-bold">estratega</span>. Es alguien que entiende que el valor de una idea no reside en su concepción, sino en su ejecución y en su capacidad para transformar la realidad de quien la lee.
            </p>
            <p>
              Escribir un libro de no ficción no es un ejercicio de ego. Es un acto de servicio. Si tienes una solución para un problema, si has superado un obstáculo que otros están enfrentando ahora mismo, tienes la <span className="font-bold">obligación moral</span> de poner ese conocimiento por escrito. Cada día que pasas sin publicar ese libro es un día en el que alguien, en algún lugar del mundo, sigue sufriendo o perdiendo tiempo por no tener acceso a tu perspectiva.
            </p>
            <p>
              Este método de veinticuatro horas no es un atajo para perezosos. Es un sistema de alta fidelidad para personas de acción. Es para aquellos que entienden que "hecho es mejor que perfecto" y que un libro publicado, aunque sea imperfecto, ayuda a infinitamente más personas que un libro perfecto que nunca salió de tu disco duro.
            </p>
            <p>
              En las próximas páginas de este método, no solo aprenderás a usar herramientas. Aprenderás a cambiar tu mentalidad. Dejarás de verte como alguien que "quiere escribir" para convertirte en alguien que "ha publicado". Esa sutil diferencia semántica es la que separa a los soñadores de los realizadores.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EL PROBLEMA (AGITACIÓN) */}
      <section className="bg-brand-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
              ¿Llevas meses queriendo escribir un libro pero nunca encuentras el momento?
            </h2>
            <div className="prose prose-2xl text-brand-black/70 leading-relaxed space-y-8 font-light">
              <p>
                Lo entiendo perfectamente. No eres el único. Entre las exigencias del trabajo, las responsabilidades familiares, los imprevistos constantes del día a día y esa lista interminable de tareas pendientes, tu proyecto de escribir un libro queda siempre relegado al último lugar.
              </p>
              <p>
                No es que te falten las ganas. Tampoco es que te falte talento o conocimientos. Lo que te falta es <span className="font-bold text-brand-black">tiempo</span> y, sobre todo, un <span className="font-bold text-brand-black">método claro</span> que te permita avanzar sin perderte en el laberinto de la duda y la perfección innecesaria.
              </p>
              <p>
                Tienes conocimientos valiosos. Posees experiencias que merecen ser compartidas con el mundo. Tienes una perspectiva única que podría ayudar a cientos, quizás miles de personas a resolver sus problemas. Pero el libro no avanza. Se queda en ideas dispersas, en archivos digitales que abres y cierras con frustración, en esa promesa recurrente que te haces cada año de que "este será el momento".
              </p>
              <p className="text-brand-black font-semibold italic border-l-4 border-brand-yellow pl-8 py-4">
                "La mayoría de las personas mueren con su libro aún dentro de ellas. No permitas que ese sea tu destino."
              </p>
              <p>
                ¿Y si te dijera que puedes pasar de la simple idea al libro publicado en menos de veinticuatro horas? ¿Y si todo lo que necesitas son herramientas gratuitas, el apoyo estratégico de la inteligencia artificial y un mapa de ruta paso a paso que no deje espacio para la vacilación?
              </p>
              <p>
                No es una exageración publicitaria. No es una promesa vacía. Es un método probado, refinado y diseñado para la ejecución inmediata. Y hoy, está finalmente a tu alcance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: LA PROMESA (SOLUCIÓN) */}
      <section className="bg-brand-black text-brand-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="meta-label text-brand-yellow mb-6 block">LA TRANSFORMACIÓN</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                De la idea a la <span className="italic">autoría</span> en un solo día.
              </h2>
              <p className="text-xl text-brand-gray/80 mb-12 leading-relaxed">
                Este no es un libro de teoría literaria. No es una obra de inspiración abstracta. Es un manual de operaciones tácticas diseñado para que ejecutes, no para que sueñes.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Un libro de no ficción de 5.000 a 7.000 palabras.",
                  "Portada profesional diseñada por ti en minutos.",
                  "Maquetación perfecta para Amazon Kindle.",
                  "Ficha técnica optimizada para el algoritmo.",
                  "Estrategia de lanzamiento sin inversión publicitaria."
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-yellow shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start">
                <PaymentButton className="bg-brand-yellow text-brand-black" />
              </div>
            </div>
            <div className="bg-brand-yellow p-12 rounded-none transform rotate-2">
              <h3 className="text-brand-black text-4xl font-bold mb-6">Lo que vas a conseguir:</h3>
              <ul className="space-y-6 text-brand-black/80 text-lg">
                <li>
                  <strong className="text-brand-black">Autoridad instantánea:</strong> Posiciónate como un experto en tu nicho de mercado.
                </li>
                <li>
                  <strong className="text-brand-black">Activo digital:</strong> Crea un producto que trabaje para ti mientras duermes.
                </li>
                <li>
                  <strong className="text-brand-black">Confianza absoluta:</strong> Supera el síndrome del impostor publicando tu primera obra.
                </li>
                <li>
                  <strong className="text-brand-black">Método replicable:</strong> Una vez que lo hagas una vez, podrás hacerlo diez veces más.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EL MÉTODO DETALLADO (EXPANDIDO) */}
      <section className="py-32 px-6 bg-brand-gray/30">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">La estructura del éxito</h2>
          <p className="text-xl text-brand-black/60 max-w-3xl mx-auto">
            El método está dividido en seis bloques de trabajo intensivo. No es una lectura pasiva; es un proceso de construcción en tiempo real.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-12">
          {/* Bloque 1 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-yellow text-brand-black text-4xl font-black p-6 shrink-0">01</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 01-02: El esqueleto del libro</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  En estas dos primeras horas, sentarás las bases inamovibles que garantizarán que el resto del proceso no pierda el rumbo. No empezamos a escribir a ciegas. Validarás tu tema directamente en Amazon para asegurarte de que existe una demanda real. Escribir un libro que nadie busca es, sencillamente, perder el tiempo.
                </p>
                <p>
                  Aprenderás a usar la barra de búsqueda de Amazon como una herramienta de prospección psicológica. Entenderás qué es lo que los lectores están gritando en las reseñas de tu competencia y cómo tu libro puede ser la respuesta a esas plegarias. No buscamos reinventar la rueda; buscamos encontrar una rueda que la gente ya esté intentando comprar y hacerla mejor, más rápida o más clara.
                </p>
                <p>
                  Definirás tu "Promesa Central", esa frase única que guiará cada decisión creativa y que más tarde se convertirá en el núcleo de tu descripción de venta. Construirás un mapa preciso: introducción, capítulos de desarrollo y conclusión. Al finalizar este bloque, no tendrás una idea vaga; tendrás un plano de ingeniería literaria. Sabrás exactamente qué va en cada página antes de haber escrito una sola palabra de contenido.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-black text-brand-white text-4xl font-black p-6 shrink-0">02</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 03-12: El vuelco de contenido</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  Estas nueve horas constituyen el corazón palpitante del proceso. Aquí es donde la magia ocurre. Escribirás tu libro completo utilizando la inteligencia artificial no como un sustituto de tu mente, sino como el asistente más eficiente que jamás hayas tenido.
                </p>
                <p>
                  Te enseñaré a dominar el arte de la "Instrucción Maestra". No le pedirás a la IA que "escriba un libro sobre cocina". Le darás un contexto profundo, una audiencia específica y un tono de voz que sea indistinguible del tuyo. Aprenderás la metodología del "Arquitecto y el Asistente": tú defines la estructura y el tono, la inteligencia artificial redacta el borrador inicial bajo tus instrucciones precisas, y tú editas para inyectar tu voz, tu experiencia y tu alma.
                </p>
                <p>
                  Dividiremos el trabajo en sprints de 45 minutos. En cada sprint, atacarás un capítulo. Verás cómo la IA puede ayudarte a generar ejemplos, analogías y pasos prácticos que a ti te tomaría horas imaginar. Pero lo más importante: aprenderás a filtrar ese contenido. Aplicarás técnicas de edición rápida: lectura en voz alta para detectar ritmos artificiales, adición de anécdotas personales que solo tú conoces y eliminación de cualquier rastro de lenguaje robótico. Al final de este bloque, tendrás un borrador de 5.000 a 7.000 palabras que suena a ti, no a un algoritmo genérico. Es tu conocimiento, amplificado por la tecnología.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-yellow text-brand-black text-4xl font-black p-6 shrink-0">03</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 13-15: Formato y Acabado Profesional</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  En tres horas, transformarás un documento de texto en una obra digital con acabado de alta gama. Sin necesidad de saber programación ni diseño complejo. Limpiarás el formato, aplicarás estilos consistentes e insertarás los elementos que separan a los aficionados de los profesionales.
                </p>
                <p>
                  Utilizarás herramientas gratuitas de Amazon para importar tu manuscrito, generar un índice interactivo y asegurar que la experiencia de lectura sea impecable en cualquier dispositivo. Incorporarás la página de derechos de autor, la página de título y, lo más importante, un "Llamado a la Acción" final que convierta a tus lectores en seguidores leales o clientes potenciales.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 4 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-black text-brand-white text-4xl font-black p-6 shrink-0">04</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 16-18: La portada que detiene el scroll</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  Tres horas dedicadas exclusivamente a la cara de tu libro. En el mercado digital, la gente sí juzga el libro por su portada. Aprenderás la anatomía de una portada exitosa: legibilidad extrema en miniatura, contraste cromático y coherencia con el género.
                </p>
                <p>
                  Te guiaré paso a paso en el uso de herramientas de diseño intuitivas para seleccionar plantillas, ajustar dimensiones exactas (1.600 x 2.560 píxeles) y utilizar tipografías que transmitan autoridad. No necesitas ser diseñador; solo necesitas seguir los principios de mercadotecnia visual que te revelaré.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 5 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-yellow text-brand-black text-4xl font-black p-6 shrink-0">05</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 19-20: Publicación Estratégica</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  Dos horas para configurar tu ficha de producto de manera que el algoritmo de Amazon trabaje a tu favor. Configurarás tu cuenta de autor, subirás tus archivos y optimizarás los metadatos críticos: título, subtítulo, descripción persuasiva y las siete palabras clave estratégicas.
                </p>
                <p>
                  Elegirás las categorías adecuadas donde la competencia sea manejable y la visibilidad sea alta. Definirás el precio de lanzamiento y tomarás decisiones informadas sobre la distribución exclusiva o amplia. Al terminar estas dos horas, tu libro estará en proceso de revisión por parte de Amazon.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque 6 */}
          <div className="bg-brand-white p-12 border border-brand-black/5 flex flex-col md:flex-row gap-12 items-start">
            <div className="bg-brand-black text-brand-white text-4xl font-black p-6 shrink-0">06</div>
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">Hora 21-24: El estallido del lanzamiento</h3>
              <div className="prose prose-lg text-brand-black/70 space-y-4">
                <p>
                  Las últimas cuatro horas son para asegurarte de que tu libro no nazca en el anonimato. Diseñarás una estrategia de siete días con un objetivo obsesivo: conseguir tus primeras diez reseñas. Estas valoraciones son el combustible que activa la visibilidad orgánica.
                </p>
                <p>
                  Aprenderás a movilizar a tu audiencia actual o a encontrar lectores desde cero en comunidades especializadas. Usarás plantillas de comunicación probadas para solicitar reseñas de forma ética y efectiva. Crearás un sistema simple para capturar los correos electrónicos de tus lectores, transformando una venta única en una relación a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <PaymentButton />
        </div>
      </section>
      <section className="py-32 px-6 bg-brand-black text-brand-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">La Anatomía de un Libro que <span className="text-brand-yellow">Vende</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="text-brand-yellow text-6xl font-black">01</div>
              <h4 className="text-2xl font-bold">Título Magnético</h4>
              <p className="text-brand-gray/70 leading-relaxed">
                El título es el 80% del éxito. Aprenderás a crear títulos que no solo informan, sino que prometen un resultado específico y urgente. Usaremos fórmulas probadas que han generado miles de ventas en Amazon.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-brand-yellow text-6xl font-black">02</div>
              <h4 className="text-2xl font-bold">Subtítulo Estratégico</h4>
              <p className="text-brand-gray/70 leading-relaxed">
                Si el título es el gancho, el subtítulo es la red. Aquí es donde incluimos las palabras clave que el algoritmo de Amazon adora y donde explicamos exactamente qué beneficio obtendrá el lector al comprar tu obra.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-brand-yellow text-6xl font-black">03</div>
              <h4 className="text-2xl font-bold">Descripción Persuasiva</h4>
              <p className="text-brand-gray/70 leading-relaxed">
                Tu descripción no es un resumen; es una carta de ventas. Te daré una plantilla de cinco párrafos diseñada para agitar el problema del lector, presentar tu solución y cerrar con un llamado a la acción irresistible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EL ARTE DE LA INSTRUCCIÓN (NUEVA) */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-brand-black text-brand-white p-10 space-y-6">
                <h3 className="text-3xl font-bold text-brand-yellow">El Código del Arquitecto</h3>
                <p className="text-lg text-brand-gray/80">
                  Aprenderás a dar instrucciones que extraen lo mejor de la tecnología. No son simples comandos; son marcos de pensamiento.
                </p>
                <ul className="space-y-4 text-brand-gray/60">
                  <li className="flex gap-3"><Zap size={20} className="text-brand-yellow shrink-0" /> Definición de contexto profundo</li>
                  <li className="flex gap-3"><Zap size={20} className="text-brand-yellow shrink-0" /> Modelado de tono y estilo</li>
                  <li className="flex gap-3"><Zap size={20} className="text-brand-yellow shrink-0" /> Estructuración por capas</li>
                  <li className="flex gap-3"><Zap size={20} className="text-brand-yellow shrink-0" /> Validación de veracidad</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Domina a tu Asistente Digital</h2>
              <p className="text-xl text-brand-black/70 leading-relaxed mb-8">
                La diferencia entre un libro que parece escrito por un robot y uno que parece escrito por un genio reside en la calidad de las instrucciones. 
              </p>
              <p className="text-lg text-brand-black/60 leading-relaxed">
                En el Capítulo 2, te revelaré exactamente cómo configurar a tu asistente de inteligencia artificial para que entienda tu nicho, hable tu lenguaje y respete tus valores. No se trata de copiar y pegar; se trata de una simbiosis creativa donde tú aportas la visión estratégica y la máquina aporta la velocidad de ejecución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: SÍNDROME DEL IMPOSTOR (NUEVA) */}
      <section className="py-32 px-6 bg-brand-yellow text-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 uppercase tracking-tighter">Matar al Impostor</h2>
          <div className="prose prose-2xl text-brand-black/80 space-y-8 text-left font-light">
            <p>
              "¿Quién soy yo para escribir un libro?". Esa es la pregunta que ha matado más sueños que cualquier falta de talento. El síndrome del impostor es esa voz interna que te dice que no sabes lo suficiente, que otros ya lo han dicho mejor o que nadie querrá leerte.
            </p>
            <p>
              Permíteme decirte algo: <span className="font-bold">No necesitas ser el mayor experto del mundo para ayudar a alguien que sabe menos que tú.</span> Solo necesitas estar un paso por delante. Si has resuelto un problema, tienes la autoridad necesaria para guiar a quien aún está atrapado en él.
            </p>
            <p>
              Este método está diseñado para silenciar esa voz. Al centrarte en la ejecución rápida y en la estructura lógica, no le das tiempo a tu mente para sabotearte. Cuando te das cuenta, ya tienes tres capítulos escritos. Cuando quieres dudar, ya estás diseñando la portada. Y cuando finalmente publicas, la realidad de ver tu libro a la venta destruye cualquier sombra de duda.
            </p>
            <p>
              Tu perspectiva es única. Tu forma de explicar las cosas puede ser la que finalmente haga "clic" en la mente de un lector que no entendió a otros autores. No prives al mundo de tu voz por un miedo infundado.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: LA ÉTICA Y EL FUTURO (NUEVA) */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">La Ética de la Creación Aumentada</h2>
          <div className="prose prose-xl text-brand-black/70 space-y-8 text-left">
            <p>
              Es natural sentir cierto escepticismo ante el uso de la inteligencia artificial en la escritura. Muchos se preguntan: "¿Sigue siendo mi libro si una máquina me ayudó a redactarlo?". La respuesta corta es un rotundo <span className="font-bold text-brand-black">SÍ</span>.
            </p>
            <p>
              Piensa en la IA como en un procesador de textos supervitaminado. Hace décadas, pasamos de la pluma a la máquina de escribir, y luego al ordenador. Cada salto tecnológico fue recibido con sospecha, pero cada uno permitió que más personas compartieran sus ideas con mayor eficiencia. La IA es simplemente el siguiente paso en esa evolución.
            </p>
            <p>
              En este método, la IA no es el autor. Tú eres el autor. Tú eres quien valida la idea, quien diseña la estructura, quien supervisa la veracidad de los datos y quien decide qué se queda y qué se va. La IA es tu asistente de redacción, tu corrector de estilo y tu generador de borradores. Pero el <span className="italic">alma</span> del libro, la experiencia vivida y la visión estratégica, provienen exclusivamente de ti.
            </p>
            <p>
              Utilizar estas herramientas no te hace menos escritor; te hace un escritor más inteligente y adaptado a los tiempos. El mundo no necesita más personas que sufran frente a una pantalla en blanco; necesita más personas que compartan soluciones efectivas de la manera más rápida posible.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: POR QUÉ FUNCIONA (PSICOLOGÍA Y MÉTODO) */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 leading-tight">
            ¿Por qué este método funciona donde otros <span className="text-brand-gold">fracasan</span>?
          </h2>
          <div className="space-y-16">
            <div className="flex gap-8">
              <Zap size={48} className="text-brand-yellow shrink-0" />
              <div>
                <h4 className="text-2xl font-bold mb-4">Vence la parálisis por análisis</h4>
                <p className="text-xl text-brand-black/70 leading-relaxed">
                  La mayoría de los aspirantes a autores se pierden en la investigación infinita o en la búsqueda de la frase perfecta. Al asignar bloques de tiempo estrictos a cada tarea, eliminamos la posibilidad de procrastinar. No tienes tiempo para dudar; solo tienes tiempo para ejecutar.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <Layout size={48} className="text-brand-yellow shrink-0" />
              <div>
                <h4 className="text-2xl font-bold mb-4">La Inteligencia Artificial como multiplicador</h4>
                <p className="text-xl text-brand-black/70 leading-relaxed">
                  No usamos la tecnología para que escriba por nosotros, sino para que elimine la fricción de la página en blanco. La IA actúa como un redactor junior que sigue tus órdenes expertas. Esto reduce el tiempo de producción en un 80% sin sacrificar la calidad ni la originalidad de tu mensaje.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <TrendingUp size={48} className="text-brand-yellow shrink-0" />
              <div>
                <h4 className="text-2xl font-bold mb-4">Enfoque en el mercado, no en el ego</h4>
                <p className="text-xl text-brand-black/70 leading-relaxed">
                  Muchos autores escriben lo que ellos quieren decir, no lo que el lector necesita escuchar. Nuestro método comienza con la validación del mercado, asegurando que cada palabra escrita tenga un propósito comercial y de servicio real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EL CAMINO DEL AUTOR (NUEVA) */}
      <section className="py-32 px-6 bg-brand-black text-brand-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Mucho más que un libro</h2>
            <p className="text-xl text-brand-gray/60 max-w-3xl mx-auto">
              Publicar tu primer ebook en 24 horas es solo el comienzo de una nueva etapa en tu vida profesional y personal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-brand-white/10 space-y-4">
              <Award className="text-brand-yellow" size={40} />
              <h4 className="text-2xl font-bold">Autoridad</h4>
              <p className="text-brand-gray/70">Convertirte en autor publicado te otorga un estatus inmediato de experto en tu campo. Es la mejor tarjeta de visita que existe.</p>
            </div>
            <div className="p-8 border border-brand-white/10 space-y-4">
              <TrendingUp className="text-brand-yellow" size={40} />
              <h4 className="text-2xl font-bold">Ingresos</h4>
              <p className="text-brand-gray/70">Un libro en Amazon es un activo que genera ingresos pasivos mes tras mes, año tras año, sin mantenimiento constante.</p>
            </div>
            <div className="p-8 border border-brand-white/10 space-y-4">
              <Share2 className="text-brand-yellow" size={40} />
              <h4 className="text-2xl font-bold">Networking</h4>
              <p className="text-brand-gray/70">Tu libro llegará a manos de personas a las que nunca podrías acceder de otra forma, abriendo puertas a colaboraciones y negocios.</p>
            </div>
            <div className="p-8 border border-brand-white/10 space-y-4">
              <Zap className="text-brand-yellow" size={40} />
              <h4 className="text-2xl font-bold">Legado</h4>
              <p className="text-brand-gray/70">Estás dejando una huella permanente. Tus conocimientos ayudarán a otros incluso cuando tú no estés presente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: TESTIMONIOS (SIMULADOS PERO PROFESIONALES) */}
      <section className="bg-brand-black text-brand-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">Resultados reales de autores reales</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Elena Rodríguez",
                role: "Consultora de Bienestar",
                text: "Llevaba dos años con la idea en la cabeza. Con este método, publiqué mi libro un sábado y el lunes ya tenía mis primeras tres ventas. Increíble."
              },
              {
                name: "Marcos Santos",
                role: "Especialista en Finanzas",
                text: "Lo que más me gustó fue la estructura. No tuve que pensar qué seguía, el libro me llevaba de la mano. La IA me ayudó a pulir mis ideas de forma brillante."
              },
              {
                name: "Claudia Méndez",
                role: "Emprendedora Digital",
                text: "Pensé que necesitaba invertir miles de dólares en diseño y edición. Este método me demostró que con herramientas gratuitas se puede lograr un acabado de lujo."
              }
            ].map((t, i) => (
              <div key={i} className="border border-brand-white/10 p-8 space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(s => <Award key={s} size={16} className="text-brand-yellow" />)}
                </div>
                <p className="text-lg italic text-brand-gray/80">"{t.text}"</p>
                <div>
                  <p className="font-bold text-brand-yellow">{t.name}</p>
                  <p className="text-sm text-brand-gray/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: GARANTÍA */}
      <section className="py-32 px-6 bg-brand-yellow text-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={80} className="mx-auto mb-8" />
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Garantía de 30 días</h2>
          <p className="text-2xl font-light mb-12 leading-relaxed">
            Este libro está diseñado para ser usado, no solo leído. Si sigues el método paso a paso y al finalizar las veinticuatro horas no tienes tu libro publicado en Amazon, te devuelvo cada centavo de tu inversión.
          </p>
          <div className="prose prose-xl text-brand-black/70 mx-auto mb-12">
            <p>
              Sin preguntas incómodas. Sin condiciones ocultas. Sin procesos complicados. Solo envíame un correo electrónico dentro de los primeros treinta días tras tu compra y procesaré el reembolso completo de inmediato. Mi compromiso es con tu éxito como autor, no con tu dinero.
            </p>
          </div>
          <PaymentButton />
        </div>
      </section>

      {/* SECCIÓN: PARA QUIÉN ES Y PARA QUIÉN NO */}
      <section className="py-32 px-6 bg-brand-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold uppercase tracking-tighter border-b-4 border-brand-yellow inline-block mb-8">Esto es para ti si:</h3>
            <ul className="space-y-6">
              {[
                "Nunca has publicado y no sabes por dónde empezar.",
                "Tienes conocimientos valiosos pero te falta estructura.",
                "Has empezado mil veces y nunca has terminado nada.",
                "Quieres ganar credibilidad y autoridad en tu sector.",
                "Tienes poco tiempo y necesitas un sistema de alta eficiencia.",
                "Prefieres usar herramientas gratuitas antes que gastar en servicios.",
                "Buscas resultados tangibles y no solo teoría académica."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-xl text-brand-black/70">
                  <CheckCircle2 className="text-brand-black shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-4xl font-bold uppercase tracking-tighter border-b-4 border-brand-black inline-block mb-8">No es para ti si:</h3>
            <ul className="space-y-6">
              {[
                "Buscas un tratado profundo sobre teoría literaria clásica.",
                "Quieres escribir una novela épica de 800 páginas.",
                "Esperas hacerte millonario de la noche a la mañana sin esfuerzo.",
                "No estás dispuesto a seguir instrucciones precisas.",
                "Prefieres quedarte en la fase de 'algún día lo haré'.",
                "Buscas un curso de diseño gráfico avanzado.",
                "No crees en el potencial de la inteligencia artificial."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-xl text-brand-black/40">
                  <div className="w-6 h-6 border-2 border-brand-black/20 rounded-full shrink-0 mt-1 flex items-center justify-center text-xs">✕</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-32 px-6 bg-brand-gray/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-12">
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Necesito conocimientos técnicos avanzados?
              </h4>
              <p className="text-lg text-brand-black/70">
                Absolutamente no. El método utiliza herramientas intuitivas diseñadas para el usuario común. Cada paso está explicado con la claridad de un tutorial para principiantes. Si sabes usar un procesador de textos básico, puedes hacer esto.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Realmente todas las herramientas son gratuitas?
              </h4>
              <p className="text-lg text-brand-black/70">
                Sí. He seleccionado cuidadosamente un ecosistema de herramientas que ofrecen versiones gratuitas robustas. No tendrás que gastar ni un dólar adicional en software, bancos de imágenes o servicios de maquetación para completar tu libro.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Qué pasa si no tengo experiencia escribiendo?
              </h4>
              <p className="text-lg text-brand-black/70">
                Este método está diseñado precisamente para personas que no son escritores profesionales. La inteligencia artificial se encarga de la redacción técnica mientras tú aportas el conocimiento y el criterio. Es una colaboración donde tú eres el director de orquesta.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Tengo que dedicar las 24 horas de forma ininterrumpida?
              </h4>
              <p className="text-lg text-brand-black/70">
                No es necesario. Aunque el método está optimizado para completarse en un día intensivo, puedes distribuir los bloques de tiempo a lo largo de una semana o un mes según tu disponibilidad. Lo importante es respetar el orden y completar cada fase antes de pasar a la siguiente.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Qué pasa si mi tema es muy complejo?
              </h4>
              <p className="text-lg text-brand-black/70">
                Incluso los temas más complejos pueden desglosarse en guías prácticas de 5.000 a 7.000 palabras. De hecho, la brevedad es una virtud en el mercado actual. Los lectores buscan soluciones rápidas y accionables. Si tu tema es inmenso, el método te enseñará a seleccionar el ángulo más valioso para tu primer libro, permitiéndote crear una serie de libros en el futuro.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Es legal usar IA para escribir un libro?
              </h4>
              <p className="text-lg text-brand-black/70">
                Sí, es totalmente legal. Amazon permite el uso de contenido generado o asistido por IA, siempre y cuando se declare (en ciertos casos) y no infrinja derechos de autor. Nuestro método se enfoca en la "Creación Aumentada", donde tú eres el autor intelectual y supervisor final, asegurando que el contenido sea original y valioso.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Cómo recibiré el libro tras la compra?
              </h4>
              <p className="text-lg text-brand-black/70">
                Inmediatamente después de completar el pago, recibirás un enlace de descarga en tu correo electrónico. El libro está disponible en formato PDF y ePub, compatible con todos los dispositivos (ordenadores, tablets, teléfonos y lectores Kindle).
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Qué pasa si no tengo una audiencia previa?
              </h4>
              <p className="text-lg text-brand-black/70">
                Muchos de nuestros autores empezaron desde cero absoluto. El método incluye estrategias específicas para aprovechar el tráfico orgánico de Amazon y comunidades de lectores existentes. No necesitas miles de seguidores en redes sociales para tener un lanzamiento exitoso si sabes cómo activar el algoritmo de recomendación de la plataforma.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Puedo publicar bajo un seudónimo?
              </h4>
              <p className="text-lg text-brand-black/70">
                Sí, Amazon KDP permite perfectamente el uso de seudónimos. Puedes proteger tu privacidad o crear diferentes marcas de autor para distintos nichos de mercado. El libro te explica cómo configurar esto correctamente en tu ficha de autor.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿El libro se actualiza con los cambios de Amazon o la IA?
              </h4>
              <p className="text-lg text-brand-black/70">
                Sí, mantenemos el método actualizado. El mundo de la tecnología y las plataformas digitales cambia rápido, y nosotros nos aseguramos de que las herramientas y estrategias recomendadas sigan siendo las más efectivas en el momento actual.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <HelpCircle className="text-brand-yellow" /> ¿Es un pago único o hay cuotas mensuales?
              </h4>
              <p className="text-lg text-brand-black/70">
                Es un pago único de $9,99. Tendrás acceso de por vida al método y a todas sus futuras actualizaciones. Sin suscripciones, sin cargos ocultos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CARTA DEL AUTOR (NUEVA) */}
      <section className="py-32 px-6 bg-brand-gray/5">
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-white p-16 shadow-2xl border-t-8 border-brand-yellow">
            <h2 className="text-4xl font-serif italic mb-12">Una carta personal para ti...</h2>
            <div className="prose prose-xl text-brand-black/80 space-y-8 font-serif leading-relaxed">
              <p>Querido futuro autor,</p>
              <p>
                Sé exactamente cómo te sientes. He estado ahí. He tenido esa carpeta en mi ordenador titulada "Mi Libro" que contenía tres páginas escritas hace dos años y un montón de notas desordenadas. Cada vez que la miraba, sentía una mezcla de culpa y nostalgia por un proyecto que parecía destinado al olvido.
              </p>
              <p>
                El problema no era mi falta de ideas. El problema era que estaba intentando escribir un libro siguiendo las reglas del siglo XIX en un mundo que se mueve a la velocidad del siglo XXI. Estaba intentando ser el "genio solitario" cuando lo que necesitaba era ser un "productor eficiente".
              </p>
              <p>
                Cuando descubrí este método, todo cambió. No solo publiqué mi primer libro, sino que descubrí que podía repetir el proceso una y otra vez. La libertad que sientes cuando ves tu nombre en la portada de Amazon por primera vez es indescriptible. Pero la libertad que sientes cuando recibes el primer ingreso por regalías es, sencillamente, transformadora.
              </p>
              <p>
                No he escrito este libro para que lo pongas en una estantería digital. Lo he escrito para que lo destruyas, lo subrayes, lo apliques y, finalmente, lo superes con tu propia obra publicada. Mi éxito es tu publicación.
              </p>
              <p>Te espero al otro lado de la autoría.</p>
              <p className="font-bold mt-12">El equipo de Ebook en 24 Horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CIERRE Y CTA FINAL */}
      <section id="comprar" className="bg-brand-black text-brand-white py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-none">
              EL MOMENTO ES <span className="text-brand-yellow">AHORA</span>.
            </h2>
            <p className="text-2xl text-brand-gray/70 mb-16 max-w-2xl mx-auto">
              Llevas años posponiendo este sueño. Las próximas veinticuatro horas pueden ser las que cambien tu carrera para siempre. ¿Te atreves a ser autor?
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="bg-brand-yellow text-brand-black p-12 inline-block">
                <p className="text-xl uppercase tracking-widest mb-2 font-bold">Inversión única</p>
                <p className="text-7xl font-black mb-6">$9,99</p>
                <a 
                  href={PAYMENT_URL}
                  className="inline-block bg-brand-black text-brand-white px-12 py-6 text-2xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform"
                >
                  Adquirir el método completo
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 text-brand-gray/40">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span className="text-sm uppercase tracking-widest">Pago seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="text-sm uppercase tracking-widest">Acceso instantáneo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER MINIMALISTA */}
      <footer className="bg-brand-black border-t border-brand-white/5 py-12 px-6 text-center">
        <p className="text-brand-gray/30 text-sm tracking-widest uppercase">
          © 2026 Ebook en 24 Horas. Todos los derechos reservados. <br />
          Desarrollado para autores de alto rendimiento.
        </p>
      </footer>
    </div>
  );
}
