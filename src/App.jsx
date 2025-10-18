import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Check, Heart, Moon, Star, Sparkles, Baby, Clock } from 'lucide-react'
import heroImage from './assets/hero-image.jpg'
import testimonialImage from './assets/testimonial-image.jpg'
import methodImage from './assets/method-image.jpg'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('cta-section')
    ctaSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Selo de Prova Social */}
          <div className="flex justify-center mb-8 animate-fade-in-down">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-pink-300 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-800">+2.380 mães já reservaram</span>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-6 leading-tight animate-fade-in">
            O Guia Definitivo Que Faz Mães Exaustas Fazerem Seus Bebês{' '}
            <span className="text-pink-500 relative">
              Dormirem a Noite Toda
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#F47FA3" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            em Até 7 Dias
          </h1>

          <p className="text-xl sm:text-2xl text-center text-gray-700 mb-4 italic animate-fade-in delay-200">
            Mesmo que já tenham tentado de tudo!
          </p>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in delay-300">
            "Método criado por uma mãe que estava no limite e que só queria uma coisa: dormir em paz, sem abandonar o bebê."
          </p>

          {/* Hero Image */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in delay-400">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={heroImage} 
                alt="Mãe e bebê dormindo tranquilamente" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center animate-fade-in delay-500">
            <Button 
              onClick={scrollToCTA}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Sim! Quero Meu Bebê Dormindo a Noite Toda
            </Button>
            <p className="mt-4 text-sm text-gray-500">Acesso imediato • Garantia de 7 dias • Risco zero</p>
          </div>
        </div>
      </section>

      {/* Seção: Isso parece com você? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            😩 Isso parece com você?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Seu bebê acorda toda hora e você sente que vai desmoronar",
              "Já tentou seguir dicas da internet, mas nada funcionou",
              "Se sente exausta, perdida e cheia de culpa",
              "Já pensou: \"Será que tem algo de errado comigo?\""
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border-2 border-pink-200 hover:border-pink-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Minha História */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8">
            💬 Minha história <span className="text-pink-500">(que talvez seja a sua também)</span>
          </h2>
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border-4 border-pink-200">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
              Era 3h22 da manhã. Eu estava sentada no chão do quarto, com o bebê no colo, chorando. Mas não era só ele que chorava. Eu também.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              A maternidade tava me esmagando. Nada funcionava.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
              Foi nesse momento que pensei: <span className="font-bold text-pink-600">"Precisa existir um jeito mais leve..."</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-semibold">
              E existia. Só que ninguém ensina esse jeito nas redes sociais.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            💖 Depoimentos de Mães Reais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Meu bebê dormia só 2 horas por noite. Depois do método, dorme 7 seguidas! Mudou minha vida.",
                author: "Ana Paula, mãe do Lucas"
              },
              {
                text: "Achei que nada ia funcionar… até testar o Método M.A.E. Hoje eu durmo, e meu bebê também!",
                author: "Juliana, mãe da Laura"
              },
              {
                text: "É diferente de tudo. Não tem choro, não tem culpa, só leveza. Obrigada!",
                author: "Camila, mãe do Rafael"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg border-2 border-pink-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-pink-600">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apresentação do Método */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ✨ Apresento o Método M.A.E
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700">
              Sono de Verdade em 7 Dias
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Um método simples, acolhedor e eficaz que respeita você e seu bebê.
            </p>
          </div>

          {/* Imagem do Método */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={methodImage} 
                alt="Método M.A.E" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 3 Pilares */}
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Os 3 Pilares do M.A.E:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Moon className="w-12 h-12" />,
                letter: "M",
                title: "Montar",
                description: "uma rotina simples e acolhedora"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                letter: "A",
                title: "Acalmar",
                description: "o bebê com técnicas suaves"
              },
              {
                icon: <Baby className="w-12 h-12" />,
                letter: "E",
                title: "Ensinar",
                description: "o sono, sem deixar o bebê chorando"
              }
            ].map((pilar, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border-4 border-pink-300 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white">
                  {pilar.icon}
                </div>
                <div className="text-4xl font-bold text-pink-500 mb-2">{pilar.letter}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{pilar.title}</h4>
                <p className="text-gray-600">{pilar.description}</p>
              </div>
            ))}
          </div>

          {/* O que você vai aprender */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border-4 border-pink-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              💡 O que você vai aprender:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Como montar uma rotina noturna sem pressão",
                "Como acalmar o bebê em minutos",
                "Como lidar com despertares da madrugada",
                "Como parar de se sentir culpada",
                "Como criar noites leves e tranquilas"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white font-bold" />
                  </div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oferta e CTA Principal */}
      <section id="cta-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-600 via-rose-500 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            📦 O que você vai receber hoje:
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border-4 border-white/30 mb-8">
            <div className="space-y-4 mb-8">
              {[
                { name: "Método M.A.E – Sono em 7 Dias", value: "R$97" },
                { name: "Planner da Rotina do Bebê", value: "R$27" },
                { name: "Checklist da Mãe Tranquila", value: "R$87" },
                { name: "Mini-guia: Acalmar o Bebê em Minutos", value: "R$47" },
                { name: "Guia: Bebê Dormindo Sozinho no Berço", value: "R$67" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/30 pb-4">
                  <span className="text-lg">{item.name}</span>
                  <span className="font-bold text-xl">{item.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 text-2xl font-bold">
                <span>Valor Total:</span>
                <span className="line-through">R$325</span>
              </div>
            </div>

            <div className="text-center py-8 border-y-4 border-white/50 my-8">
              <p className="text-xl mb-2">💥 Hoje por apenas</p>
              <p className="text-6xl sm:text-7xl font-bold mb-2">R$37</p>
              <p className="text-xl">ou 10x de R$4,81</p>
            </div>

            <div className="text-center">
              <Button 
                onClick={() => window.open('https://pay.kiwify.com.br', '_blank')}
                className="bg-white text-pink-600 hover:bg-gray-100 text-xl sm:text-2xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold w-full sm:w-auto"
              >
                <Check className="w-7 h-7 mr-2" />
                Sim! Quero o Método M.A.E AGORA
              </Button>
              <p className="mt-6 text-lg">
                🧠 Por menos que um lanche no iFood, tenha noites reais de sono e paz.
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl border-4 border-pink-300">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-10 h-10 text-white font-bold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">✅ Garantia Incondicional de 7 Dias</h3>
                <p className="text-lg mb-2">
                  Se o guia não te ajudar ou você sentir que não vale cada centavo, eu devolvo seu dinheiro — sem perguntas.
                </p>
                <p className="text-lg font-semibold text-pink-600">
                  Mãe já tem culpa demais. Aqui, você tem apoio — ou seu dinheiro de volta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            ❓ Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Funciona mesmo se meu bebê acorda de hora em hora?",
                answer: "✅ Sim! O método foi criado justamente para bebês com sono fragmentado."
              },
              {
                question: "Preciso imprimir algo?",
                answer: "❌ Não! Tudo é digital e acessível pelo celular, tablet ou computador."
              },
              {
                question: "É curso ou ebook?",
                answer: "📘 É um guia prático em formato digital com planners e checklists incluídos."
              },
              {
                question: "E se eu não gostar?",
                answer: "💸 Você tem 7 dias de garantia incondicional. Dinheiro de volta, sem perguntas."
              },
              {
                question: "Serve para qualquer idade?",
                answer: "👶 Sim! Funciona para bebês de 4 meses a 2 anos, com ajustes por fase."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-pink-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                  <span className="text-2xl text-pink-500 transform transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t-2 border-pink-200">
                    <p className="text-gray-700 text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center gap-8 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-pink-500" />
                <span className="font-semibold text-gray-700">Entrega Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <span className="font-semibold text-gray-700">Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-pink-500" />
                <span className="font-semibold text-gray-700">Risco Zero</span>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => window.open('https://pay.kiwify.com.br', '_blank')}
    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xs sm:text-xl px-1 py-0.5 sm:px-10 sm:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"    >
            <Sparkles className="w-7 h-7 mr-2" />
            Quero Transformar Minhas Noites Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2025 Método M.A.E — Todos os direitos reservados</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

