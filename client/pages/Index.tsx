import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Laptop, Users, TrendingUp, Code, Database, Shield, Cloud, Briefcase, Star, ArrowRight, BookOpen, Calendar, DollarSign } from "lucide-react";

export default function Index() {
  const [selectedMonth, setSelectedMonth] = useState(1);

  const courseMonths = [
    {
      month: 1,
      title: "Fundamentos y Bases Técnicas",
      color: "bg-tech-blue",
      weeks: [
        { week: 1, content: "HTML, CSS, JS + Proyecto de landing page" },
        { week: 2, content: "Dise��o responsivo + Figma + Media queries" },
        { week: 3, content: "Git + GitHub + Proyecto colaborativo en equipo" },
        { week: 4, content: "Introducción a algoritmos + listas, pilas, colas + proyecto visual" }
      ]
    },
    {
      month: 2,
      title: "Frontend Dinámico",
      color: "bg-tech-green",
      weeks: [
        { week: 5, content: "React básico + Hooks" },
        { week: 6, content: "React avanzado + routing + proyecto SPA" },
        { week: 7, content: "Consumo de APIs + integración de datos" },
        { week: 8, content: "Proyecto final frontend + documentación" }
      ]
    },
    {
      month: 3,
      title: "Backend Funcional",
      color: "bg-tech-purple",
      weeks: [
        { week: 9, content: "Node.js + Express" },
        { week: 10, content: "PHP + Laravel (estructura backend alternativa)" },
        { week: 11, content: "Autenticación + CRUD completo" },
        { week: 12, content: "Proyecto API REST + integración frontend" }
      ]
    },
    {
      month: 4,
      title: "Bases de Datos SQL + NoSQL",
      color: "bg-tech-orange",
      weeks: [
        { week: 13, content: "MySQL profundo + queries optimizados" },
        { week: 14, content: "PostgreSQL + diseño relacional" },
        { week: 15, content: "MongoDB + esquema flexible NoSQL" },
        { week: 16, content: "Proyecto fullstack con SQL y NoSQL comparativo" }
      ]
    },
    {
      month: 5,
      title: "Seguridad en Red + DevOps",
      color: "bg-red-500",
      weeks: [
        { week: 17, content: "Protocolos básicos, puertos, VPN, proxies" },
        { week: 18, content: "Sniffers, firewalls, logs + análisis con Wireshark + OWASP" },
        { week: 19, content: "Docker + contenedores en proyectos" },
        { week: 20, content: "AWS Cloud + Proyecto deploy con EC2 + S3" }
      ]
    },
    {
      month: 6,
      title: "Arquitectura & Escalabilidad",
      color: "bg-indigo-500",
      weeks: [
        { week: 21, content: "MVC y estructuras de diseño" },
        { week: 22, content: "Microservicios + API Gateway básico" },
        { week: 23, content: "Monitoreo con dashboards + salud de apps" },
        { week: 24, content: "Proyecto distribuido cloud + presentación" }
      ]
    },
    {
      month: 7,
      title: "Preparación Certificaciones",
      color: "bg-yellow-500",
      weeks: [
        { week: 25, content: "Roadmap y práctica para MySQL Developer Cert" },
        { week: 26, content: "Práctica de queries + examen simulado SQL" },
        { week: 27, content: "Scrum Fundamentos CertiProf + proyecto scrum" },
        { week: 28, content: "AWS Developer Associate: práctica y simulador" }
      ]
    },
    {
      month: 8,
      title: "FAANG + Algoritmos aplicados",
      color: "bg-pink-500",
      weeks: [
        { week: 29, content: "Two Pointers + proyecto real" },
        { week: 30, content: "Sliding Window, DFS + dashboard jerárquico" },
        { week: 31, content: "Backtracking, DP + optimizador de descuentos" },
        { week: 32, content: "Graph algorithms + rutas + gestor dependencias" }
      ]
    },
    {
      month: 9,
      title: "Mock Interviews + Portafolio Técnico",
      color: "bg-teal-500",
      weeks: [
        { week: 33, content: "Estructura de entrevistas técnicas" },
        { week: 34, content: "Algoritmos simulados en tiempo real" },
        { week: 35, content: "Proyectos documentados estilo FAANG" },
        { week: 36, content: "Portafolio visual con cards + dashboard compartible" }
      ]
    },
    {
      month: 10,
      title: "Consolidación + Proyecto Final",
      color: "bg-emerald-500",
      weeks: [
        { week: 37, content: "Proyecto fullstack integrador: App con diseño responsivo" },
        { week: 38, content: "Consumo de APIs + Seguridad con login/roles" },
        { week: 39, content: "Algoritmos aplicados + Base de datos SQL y NoSQL" },
        { week: 40, content: "Deploy en AWS con dashboard de log + Presentación final" }
      ]
    }
  ];

  const salaryData = [
    { level: "Junior (0–3 años)", range: "$46,000 – $71,410", average: "~$58,000" },
    { level: "Intermedio (4–6 años)", range: "$79,916 – $128,000", average: "~$97,000" },
    { level: "Senior (7+ años)", range: "$84,969 – $138,000", average: "~$111,000" },
    { level: "Fullstack Developer", range: "$97,155", average: "" }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Comunicación Global",
      description: "Aprende a documentar, presentar y colaborar en inglés y español. Domina el vocabulario técnico en ambos idiomas."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Desarrollo Técnico Integral",
      description: "Cubre Front-end, Back-end y bases de datos, con proyectos reales y enfoque práctico."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Posicionamiento Profesional",
      description: "Accede a más oportunidades laborales en empresas globales, startups remotas y clientes internacionales."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "SEO y UX Multicultural",
      description: "Aprende a adaptar interfaces, contenido y estrategias de posicionamiento para distintos mercados."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-50 to-brand-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700 py-20 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-2 tracking-wider font-mono shadow-2xl">
                CODELINGUALS.MX
              </h1>
              <div className="w-32 h-1 bg-white/70 mx-auto rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Curso Fullstack Bilingüe
              <span className="block text-2xl md:text-4xl font-normal text-white/90 mt-2">
                Desarrolla sin fronteras
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              En un mundo digital sin fronteras, dominar el desarrollo web no es suficiente. 
              Prepárate para ser el profesional que las empresas buscan: capaz de crear, 
              comunicar y colaborar en múltiples idiomas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 text-lg px-8 py-3">
              <BookOpen className="mr-2 h-5 w-5" />
              Inscríbete Ahora
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10</div>
              <div className="text-white/80">Meses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">40</div>
              <div className="text-white/80">Semanas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-white/80">Idiomas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$97K</div>
              <div className="text-white/80">Salario Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">
              Ventajas Exclusivas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué aprender desarrollo web Fullstack en dos idiomas?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las empresas buscan profesionales capaces de crear, comunicar y colaborar en múltiples idiomas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Advantages */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-50 to-tech-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white">
              Ventajas Profesionales
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preparación Integral para el Mercado Global
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No solo aprendes a programar, te preparamos para destacar en entrevistas técnicas
              y trabajar con las herramientas que usan las mejores empresas del mundo.
            </p>
          </div>

          <div className="mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    ⏰ Metodología de Aprendizaje: 2 Horas Diarias
                  </h3>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    Estructura optimizada para maximizar tu aprendizaje y dominio del inglés técnico
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">60 min</div>
                    <div className="font-medium mb-2">Teoría y Aplicación</div>
                    <div className="text-sm text-white/80">
                      Conceptos fundamentales con implementación práctica inmediata
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">30 min</div>
                    <div className="font-medium mb-2">Práctica Dirigida</div>
                    <div className="text-sm text-white/80">
                      Ejercicios hands-on para reforzar los conocimientos adquiridos
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold mb-2">30 min</div>
                    <div className="font-medium mb-2">Aplicación en Inglés</div>
                    <div className="text-sm text-white/80">
                      Desarrollo de proyectos reales usando terminología técnica en inglés
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-white/90">
                    🎯 <strong>Resultado:</strong> Dominio técnico bilingüe que te diferencia en el mercado global
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Briefcase className="h-6 w-6 text-brand-600" />
                  Asesoría en Entrevistas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">6 meses de seguimiento post-graduación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Proyectos reales en tu portafolio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Simulacros de entrevistas técnicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Herramientas actuales del mercado internacional</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Star className="h-6 w-6 text-brand-600" />
                  Certificaciones Incluidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      ✅ MySQL Developer Certification - Oracle
                    </div>
                    <div className="text-xs text-gray-600">
                      Expertise en diseño de bases de datos relacionales, consultas y optimización
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      ✅ Scrum Foundations Professional Certificate - CertiProf
                    </div>
                    <div className="text-xs text-gray-600">
                      Principios Agile, roles de Scrum, eventos y artefactos
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      ✅ AWS Certified Developer - Associate
                    </div>
                    <div className="text-xs text-gray-600">
                      Desarrollo y mantenimiento de aplicaciones en AWS
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Code className="h-6 w-6 text-brand-600" />
                  Entorno Empresarial Real
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Práctica con Jira y herramientas corporativas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Algoritmos de empresas tecnológicas líderes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Metodologías ágiles en proyectos reales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-tech-green" />
                    <span className="text-sm">Code reviews y mejores prácticas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-600 to-green-700 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🏆 Preparación para Empresas FAANG
                </h3>
                <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                  Domina los algoritmos y estructuras de datos que evalúan Facebook, Apple, Amazon,
                  Netflix y Google. Entrena con problemas reales de entrevistas técnicas FAANG.
                </p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-medium">Two Pointers</div>
                    <div className="text-white/70">Proyectos reales</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-medium">Dynamic Programming</div>
                    <div className="text-white/70">Optimización avanzada</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-medium">Graph Algorithms</div>
                    <div className="text-white/70">Sistemas distribuidos</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="font-medium">System Design</div>
                    <div className="text-white/70">Arquitectura escalable</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Global Developer Ranking */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">
              Posicionamiento Global
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desarrolladores por Nacionalidad a Nivel Mundial
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              México ocupa actualmente la posición #11 en el ranking mundial de desarrolladores.
              <strong> Nuestro objetivo es posicionar desarrolladores latinos en el top 5 global.</strong>
            </p>
          </div>

          <div className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Globe className="h-6 w-6 text-tech-orange" />
                  Desarrolladores Latinos a Nivel Mundial
                </CardTitle>
                <CardDescription>
                  Representación latinoamericana en la industria tecnológica global
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      { country: "🇧🇷 Brasil", developers: "500K", rank: 1, flag: "🥇" },
                      { country: "🇲🇽 México", developers: "385K", rank: 2, flag: "🥈", highlight: true },
                      { country: "🇦🇷 Argentina", developers: "180K", rank: 3, flag: "🥉" },
                      { country: "🇨🇴 Colombia", developers: "125K", rank: 4, flag: "" },
                      { country: "🇨🇱 Chile", developers: "85K", rank: 5, flag: "" },
                      { country: "🇵🇪 Perú", developers: "65K", rank: 6, flag: "" },
                    ].map((item) => (
                      <div
                        key={item.rank}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          item.highlight
                            ? 'bg-brand-50 border-2 border-brand-200'
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{item.flag}</span>
                          <span className={`font-medium ${item.highlight ? 'text-brand-700' : 'text-gray-700'}`}>
                            {item.country}
                          </span>
                        </div>
                        <span className={`font-bold ${item.highlight ? 'text-brand-600' : 'text-gray-600'}`}>
                          {item.developers}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-tech-orange to-yellow-500 text-white p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">🎯 Misión Latinoamericana</h3>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Meta:</strong> Posicionar desarrolladores latinos en el
                        <span className="bg-white/20 px-2 py-1 rounded ml-1">Top 5 Mundial</span>
                      </p>
                      <p>
                        <strong>Estrategia:</strong> Formar talento bilingüe competitivo internacionalmente
                      </p>
                      <p>
                        <strong>Impacto:</strong> Representar 15% de desarrolladores globales para 2040
                      </p>
                    </div>
                    <div className="mt-4 p-3 bg-white/10 rounded">
                      <p className="text-xs mb-2">
                        📊 <strong>Solo el 23% de programadores latinos habla inglés fluido</strong>
                      </p>
                      <p className="text-xs">
                        💡 México lidera la segunda posición latina con potencial de
                        superar a Brasil y competir globalmente
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <TrendingUp className="h-6 w-6 text-brand-600" />
                    Ranking Mundial de Desarrolladores 2024
                  </CardTitle>
                  <CardDescription>
                    Número de desarrolladores por país (en millones)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { country: "🇺🇸 Estados Unidos", developers: "4.3M", rank: 1, bar: "100%" },
                      { country: "🇮🇳 India", developers: "4.0M", rank: 2, bar: "93%" },
                      { country: "🇨🇳 China", developers: "2.0M", rank: 3, bar: "47%" },
                      { country: "🇩🇪 Alemania", developers: "901K", rank: 4, bar: "21%" },
                      { country: "🇬🇧 Reino Unido", developers: "813K", rank: 5, bar: "19%" },
                      { country: "🇫🇷 Francia", developers: "568K", rank: 6, bar: "13%" },
                      { country: "🇨🇦 Canadá", developers: "519K", rank: 7, bar: "12%" },
                      { country: "🇧🇷 Brasil", developers: "500K", rank: 8, bar: "12%" },
                      { country: "🇯🇵 Japón", developers: "454K", rank: 9, bar: "11%" },
                      { country: "🇦🇺 Australia", developers: "423K", rank: 10, bar: "10%" },
                      { country: "🇲🇽 México", developers: "385K", rank: 11, bar: "9%", highlight: true },
                    ].map((item) => (
                      <div
                        key={item.rank}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                          item.highlight
                            ? 'bg-brand-50 border-2 border-brand-200 shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Badge
                            variant={item.highlight ? "default" : "outline"}
                            className={`min-w-fit ${item.highlight ? 'bg-brand-600' : ''}`}
                          >
                            #{item.rank}
                          </Badge>
                          <span className={`font-medium ${item.highlight ? 'text-brand-700' : 'text-gray-700'}`}>
                            {item.country}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${item.highlight ? 'bg-brand-600' : 'bg-gray-400'}`}
                              style={{ width: item.bar }}
                            ></div>
                          </div>
                          <span className={`font-bold min-w-fit ${item.highlight ? 'text-brand-600' : 'text-gray-600'}`}>
                            {item.developers}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-500 to-tech-blue text-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    🎯 Nuestra Meta: Latinos en Top 5 Mundial
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    Elevando el talento latinoamericano al siguiente nivel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Posición Actual:</span>
                      <Badge className="bg-white/20 text-white border-white/30">
                        #11 Mundial
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Meta 2026:</span>
                      <Badge className="bg-yellow-400 text-yellow-900">
                        #10 Mundial
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Meta 2027:</span>
                      <Badge className="bg-blue-400 text-blue-900">
                        #8 Mundial
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90">Meta 2040:</span>
                      <Badge className="bg-green-400 text-green-900">
                        #5 Mundial
                      </Badge>
                    </div>
                    <div className="mt-6 p-4 bg-white/10 rounded-lg">
                      <p className="text-sm text-white/90">
                        <strong>¿Cómo lo lograremos?</strong> Capacitando desarrolladores latinos bilingües
                        con habilidades técnicas de clase mundial y comunicación internacional.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-tech-green" />
                    Oportunidad para México
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span className="text-sm">385K desarrolladores actuales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span className="text-sm">Crecimiento del 15% anual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span className="text-sm">Zona horaria ventajosa para EEUU</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span className="text-sm">Costos competitivos vs otros países</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span className="text-sm">Talento joven y adaptable</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-brand-50 rounded-lg">
                    <p className="text-sm text-brand-700 font-medium">
                      💡 Con formación bilingüe, los desarrolladores latinos pueden
                      posicionarse en el top 5 mundial para 2040.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">
              Programa Académico
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              10 Meses de Transformación Profesional
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un programa integral diseñado para llevarte desde los fundamentos hasta el nivel profesional.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {courseMonths.map((month) => (
                <Button
                  key={month.month}
                  variant={selectedMonth === month.month ? "default" : "outline"}
                  onClick={() => setSelectedMonth(month.month)}
                  className="mb-2"
                >
                  Mes {month.month}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader className={`text-white ${courseMonths[selectedMonth - 1].color}`}>
                  <CardTitle className="text-2xl">
                    Mes {selectedMonth}: {courseMonths[selectedMonth - 1].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {courseMonths[selectedMonth - 1].weeks.map((week) => (
                      <div key={week.week} className="flex items-start gap-3">
                        <Badge variant="outline" className="min-w-fit">
                          Sem {week.week}
                        </Badge>
                        <p className="text-gray-700">{week.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-tech-green" />
                    Potencial Salarial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {salaryData.map((salary, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700">{salary.level}</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{salary.range}</div>
                          {salary.average && <div className="text-lg font-bold text-tech-green">{salary.average}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    💡 Un perfil bilingüe puede aumentar tu acceso a estos rangos salariales y abrir puertas en mercados internacionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-600" />
                    ¿A quién va dirigido?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span>Profesionales técnicos que quieren internacionalizar su carrera</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span>Emprendedores que buscan crear productos digitales globales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-tech-green" />
                      <span>Estudiantes que desean destacar en un mercado competitivo</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700">
                Sobre CODELINGUALS.MX
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empoderando el Talento Tecnológico Mexicano
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  En <strong>CODELINGUALS.MX</strong>, ofrecemos oportunidades de mentoría para principiantes que 
                  buscan ingresar a la industria tecnológica. Nuestra misión es empoderar a las personas, 
                  independientemente de su formación académica, para que participen, aprendan y contribuyan 
                  significativamente al mercado global.
                </p>
                <p>
                  Ofrecemos vías de aprendizaje accesibles en áreas clave como desarrollo web, ciberseguridad, 
                  programación de PLC y redes. Nuestros programas están diseñados para apoyar a quienes desean 
                  explorar y crecer en estos dinámicos campos.
                </p>
                <p>
                  Con sede en la Ciudad de México, reconocemos que, si bien la industria tecnológica local ha 
                  experimentado un crecimiento notable en los últimos años, el idioma sigue siendo una barrera 
                  importante debido a las limitadas oportunidades de práctica.
                </p>
                <p>
                  En respuesta a este desafío, una parte de nuestra capacitación se imparte en inglés para dotar 
                  a los participantes de vocabulario práctico y habilidades de comunicación esenciales para las 
                  tareas diarias en entornos tecnológicos reales.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-2">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Desarrollo Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Fullstack bilingüe con tecnologías modernas</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-2">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Ciberseguridad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Protocolos y herramientas de seguridad</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-2">
                    <Database className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Bases de Datos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">SQL y NoSQL para aplicaciones modernas</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-2">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">AWS, Docker y arquitecturas escalables</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¡Inscríbete hoy y conviértete en un desarrollador Fullstack sin fronteras!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a la próxima generación de desarrolladores bilingües que están transformando 
            la industria tecnológica mexicana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 text-lg px-8 py-3">
              <Star className="mr-2 h-5 w-5" />
              Comenzar Ahora
            </Button>
          </div>
          
          <div className="text-white/80 text-sm">
            📍 Ciudad de México, México | 🌐 Programa Bilingüe | 💼 Garantía de Empleabilidad
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CODELINGUALS.MX</h3>
              <p className="text-gray-400 mb-4">
                Transformando vidas a través de la educación tecnológica bilingüe.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="border-brand-500 text-brand-400">
                  Ciudad de México
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desarrollo Web Fullstack</li>
                <li>Ciberseguridad</li>
                <li>Programación PLC</li>
                <li>Redes y Sistemas</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@codelinguals.mx</li>
                <li>📱 +52 55 XXXX XXXX</li>
                <li>🌐 www.codelinguals.mx</li>
                <li>📍 Ciudad de México</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CODELINGUALS.MX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
