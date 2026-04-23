/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Clock, 
  Users, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Youtube, 
  Menu, 
  X,
  Phone,
  Mail,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for Leaflet default icon issues (though we use custom marker)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Marker component using Lucide icon
const CustomMarkerIcon = L.divIcon({
  html: `<div class="bg-brand-accent p-2 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
         </div>`,
  className: '',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const ChurchMap = () => {
  const position: [number, number] = [-6.4947, -43.5186];

  return (
    <div className="h-full w-full grayscale-[100%] contrast-[1.1] hover:grayscale-0 transition-all duration-700">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={CustomMarkerIcon}>
          <Popup className="font-serif">
            <div className="text-brand-ink">
              <p className="font-bold uppercase text-[10px] tracking-widest mb-1">Assembleia de Deus Missões</p>
              <p className="text-xs">S. J. dos Patos - MA</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-paper/80 backdrop-blur-md border-b border-brand-line">
      <div className="max-w-7xl mx-auto px-16 h-24 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-tighter uppercase text-brand-ink">
            Esperança<span className="font-light italic text-brand-accent">Igreja</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center font-sans text-xs uppercase tracking-[0.2em] text-brand-ink">
          <a href="#" className="hover:text-brand-accent transition-colors">Início</a>
          <a href="#sobre" className="hover:text-brand-accent transition-colors">Sobre</a>
          <a href="#cultos" className="hover:text-brand-accent transition-colors">Cultos</a>
          <a href="#comunidade" className="hover:text-brand-accent transition-colors">Comunidade</a>
          <a href="#depoimentos" className="hover:text-brand-accent transition-colors">Depoimentos</a>
          <a href="#visite" className="font-bold border-b border-brand-ink pb-1 hover:text-brand-accent hover:border-brand-accent transition-all">
            Visite-nos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-paper border-b border-brand-line px-16 py-12 flex flex-col gap-8 text-center"
        >
          <a href="#" className="font-sans text-xs uppercase tracking-[0.2em] text-brand-ink" onClick={() => setIsOpen(false)}>Início</a>
          <a href="#sobre" className="font-sans text-xs uppercase tracking-[0.2em] text-brand-ink" onClick={() => setIsOpen(false)}>Sobre</a>
          <a href="#cultos" className="font-sans text-xs uppercase tracking-[0.2em] text-brand-ink" onClick={() => setIsOpen(false)}>Cultos</a>
          <a href="#comunidade" className="font-sans text-xs uppercase tracking-[0.2em] text-brand-ink" onClick={() => setIsOpen(false)}>Comunidade</a>
          <a href="#depoimentos" className="font-sans text-xs uppercase tracking-[0.2em] text-brand-ink" onClick={() => setIsOpen(false)}>Depoimentos</a>
          <a href="#visite" className="font-bold border-b border-brand-ink pb-1 mx-auto" onClick={() => setIsOpen(false)}>Visite-nos</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-brand-paper">
      {/* Decorative Arch */}
      <div className="absolute -right-20 top-20 w-[600px] h-[800px] border-[1px] border-brand-line rounded-t-full opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-16 w-full grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs uppercase tracking-[0.4em] text-brand-muted mb-8"
          >
            Bem-vindo à nossa comunidade
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[110px] leading-[0.95] font-medium tracking-tight mb-12 text-brand-ink"
          >
            Onde a <span className="italic font-light text-brand-accent tracking-tighter">Fé</span> <br/> 
            encontra <br/> 
            <span className="italic font-light text-brand-accent tracking-tighter">Esperança</span>.
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10">
            <button className="px-12 py-5 bg-brand-ink text-white font-sans text-xs uppercase tracking-widest hover:bg-brand-accent transition-colors">
              Conecte-se Agora
            </button>
            <div className="hidden sm:block h-[1px] w-24 bg-brand-line"></div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-muted text-center sm:text-left">
              Cultos aos Domingos — 10h & 19h
            </p>
          </div>
        </div>

        {/* Sidebar Info - Hidden on smaller screens to match design focus */}
        <div className="hidden lg:col-span-4 lg:flex flex-col justify-end pb-12">
          <div className="border-l border-brand-line pl-8 space-y-12">
            <div>
              <h3 className="text-xs font-sans uppercase tracking-widest text-brand-muted mb-4">Nossa Localização</h3>
              <p className="text-xl leading-relaxed font-serif italic text-brand-ink">
                São João dos Patos<br/>
                Maranhão — MA
              </p>
            </div>
            <div>
              <h3 className="text-xs font-sans uppercase tracking-widest text-brand-muted mb-4">Palavra da Semana</h3>
              <p className="text-xl italic font-light leading-snug text-brand-ink">
                "Um novo mandamento vos dou: que vos ameis uns aos outros; como eu vos amei."
              </p>
              <p className="text-sm mt-3 font-sans uppercase tracking-widest opacity-50 text-brand-muted">— João 13:34</p>
            </div>
            <div className="pt-4">
              <div className="w-14 h-14 rounded-full border border-brand-line flex items-center justify-center text-brand-ink hover:text-brand-accent hover:border-brand-accent transition-all cursor-pointer">
                <ChevronRight className="w-6 h-6 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ day, time, type }: { day: string, time: string, type: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/40 p-10 rounded-none border border-brand-line flex flex-col items-start transition-all hover:bg-white"
  >
    <div className="w-10 h-10 border border-brand-line flex items-center justify-center mb-8">
      <Clock className="text-brand-accent w-4 h-4" />
    </div>
    <h3 className="text-xs font-sans uppercase tracking-widest text-brand-muted mb-2">{type}</h3>
    <p className="font-serif text-3xl mb-1 text-brand-ink">{day}</p>
    <p className="text-brand-accent font-light italic text-lg">{time}</p>
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Intro Section */}
      <section id="sobre" className="py-32 px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative border border-brand-line p-4"
          >
            <img 
              src="https://picsum.photos/seed/community-church/800/1000" 
              alt="Membros da comunidade da Igreja Esperança reunidos em momento de celebração e comunhão" 
              className="grayscale-[30%]"
              referrerPolicy="no-referrer"
            />
            {/* Design overlap decoration */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-48 border border-brand-line bg-brand-paper hidden lg:block z-20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Nossa História</span>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-brand-ink leading-[1.1] mb-10">
              Um refúgio de paz em meio <br/> <span className="italic font-light text-brand-accent">ao caos cotidiano</span>.
            </h2>
            <p className="text-lg text-brand-muted mb-8 leading-relaxed font-serif">
              A Igreja Esperança nasceu do desejo de criar um espaço onde todos se sintam em casa. Não somos apenas uma organização, somos uma família unida pelo propósito de amar o próximo e caminhar na luz.
            </p>
            <p className="text-lg text-brand-ink mb-12 leading-relaxed font-light italic opacity-80 border-l-2 border-brand-accent pl-8 py-2">
              "Porque sou eu que conheço os planos que tenho para vocês", diz o Senhor, "planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro." — <span className="font-sans text-xs uppercase tracking-widest not-italic">Jeremias 29:11</span>
            </p>
            <div className="flex items-center gap-6 text-brand-ink font-sans text-xs uppercase tracking-[0.2em] cursor-pointer group">
              <span className="border-b border-brand-ink pb-1 group-hover:text-brand-accent group-hover:border-brand-accent transition-all">Nossa Visão completa</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-brand-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="cultos" className="bg-white/50 py-32 px-16 border-y border-brand-line">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Fique Conectado</span>
            <h2 className="text-5xl font-medium tracking-tight text-brand-ink">Horários dos Cultos</h2>
          </div>
          <p className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.2em] mb-2 border-b border-brand-line pb-1">Todos são bem-vindos</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-0 border-l border-t border-brand-line">
          <ServiceCard day="Domingo" time="10:00 & 18:00" type="Culto da Família" />
          <ServiceCard day="Quarta-feira" time="20:00" type="Noite de Oração" />
          <ServiceCard day="Sábado" time="19:30" type="Encontro de Jovens" />
        </div>
      </section>

      {/* Comunidade Section */}
      <section id="comunidade" className="py-32 px-16 max-w-7xl mx-auto border-b border-brand-line">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Nossa Vida Juntos</span>
            <h2 className="text-5xl font-medium tracking-tight text-brand-ink">Vida em Comunidade</h2>
          </div>
          <p className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.2em] mb-2 border-b border-brand-line pb-1">Conectando pessoas a propósitos</p>
        </div>

        <div className="grid md:grid-cols-4 gap-16 mb-32">
          {[
            { icon: Users, title: "Pequenos Grupos", desc: "Comunidade próxima em reuniões nos lares para estudo e amizade." },
            { icon: Heart, title: "Ação Social", desc: "Impactando nossa cidade através de projetos de apoio e compaixão." },
            { icon: MapPin, title: "Kids & Teens", desc: "Um lugar seguro e divertido para seus filhos crescerem na fé." },
            { icon: Youtube, title: "Ministérios Online", desc: "Acompanhe nossas transmissões ao vivo de onde estiver." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-left group"
            >
              <div className="w-12 h-12 border border-brand-line flex items-center justify-center mb-8 group-hover:border-brand-accent transition-colors">
                <item.icon className="w-5 h-5 text-brand-muted group-hover:text-brand-accent transition-colors" />
              </div>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold mb-4 text-brand-ink">{item.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed font-serif opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-32 px-16 max-w-7xl mx-auto border-b border-brand-line">
        <div className="text-center mb-24">
          <span className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Testemunhos Reais</span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-brand-ink leading-tight">Vidas que foram <br/> <span className="italic font-light text-brand-accent font-serif">transformadas</span>.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              text: "A Igreja Esperança se tornou meu lar. Aqui encontrei acolhimento e uma fé que faz sentido no meu dia a dia.",
              author: "Maria Silva",
              time: "Membro há 5 anos",
              seed: "person1"
            },
            {
              text: "Os pequenos grupos são o coração dessa igreja. É onde realmente vivemos a comunhão e o cuidado mútuo.",
              author: "Lucas Oliveira",
              time: "Líder de Célula",
              seed: "person2"
            },
            {
              text: "Meus filhos amam vir para a igreja. O trabalho com as crianças é feito com muito amor e excelência.",
              author: "Ricardo Santos",
              time: "Fiel Frequentador",
              seed: "person3"
            }
          ].map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-brand-line p-12 bg-white hover:bg-brand-paper transition-all group relative"
            >
              <Quote className="text-brand-accent w-8 h-8 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
              <p className="font-serif text-xl italic leading-relaxed mb-12 text-brand-ink">"{d.text}"</p>
              <div className="flex items-center gap-4 border-t border-brand-line pt-8">
                <div className="w-10 h-10 rounded-full overflow-hidden grayscale border border-brand-line">
                  <img src={`https://picsum.photos/seed/${d.seed}/100/100`} alt={d.author} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-brand-ink">{d.author}</p>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-brand-muted">{d.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter/Action */}
      <section className="bg-brand-ink py-32 px-16 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] mb-8 block opacity-60">Fique por dentro</span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-12 leading-tight">Quer receber nossas orações e novidades?</h2>
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto items-center">
            <input 
              type="text" 
              placeholder="Seu melhor e-mail" 
              className="w-full bg-white/5 border-y border-l border-white/20 px-8 py-5 focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/30 text-white font-sans text-xs uppercase tracking-widest"
            />
            <button className="w-full sm:w-auto bg-brand-accent text-white px-12 py-5 font-sans text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all whitespace-nowrap">
              Cadastrar
            </button>
          </div>
        </div>
        
        {/* Minimalist abstract lines for Artistic Flair */}
        <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/5 hidden lg:block"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block"></div>
      </section>

      {/* Visit Us Section with Interactive Map */}
      <section id="visite" className="py-32 px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4">
            <span className="text-brand-muted font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block">Venha nos conhecer</span>
            <h2 className="text-5xl font-medium tracking-tight text-brand-ink mb-10 leading-tight">Sinta-se em <span className="italic font-light text-brand-accent">casa</span>.</h2>
            <div className="space-y-8 border-l border-brand-line pl-8 font-sans text-[10px] uppercase tracking-widest text-brand-muted">
              <div>
                <p className="font-bold text-brand-ink mb-2">Endereço</p>
                <p>Igreja Evangélica Assembleia de Deus Missões<br/>São João dos Patos — MA</p>
              </div>
              <div>
                <p className="font-bold text-brand-ink mb-2">Horários Principais</p>
                <p>Domingo: 10h & 19h<br/>Quarta: 20h</p>
              </div>
              <a 
                href="https://share.google/moDFj4zaVoJ6AXuMN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-brand-accent font-bold group w-fit"
              >
                Ver no Google Maps
                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="h-[500px] w-full border border-brand-line p-4 bg-white relative group z-0">
              <ChurchMap />
              {/* Artistic border overlay */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-brand-line border-t-0 border-l-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-paper pt-32 pb-12 px-16 border-t border-brand-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold tracking-tighter uppercase text-brand-ink mb-8">
              Esperança<span className="font-light italic text-brand-accent">Igreja</span>
            </div>
            <p className="text-brand-muted text-xs leading-relaxed mb-8 uppercase tracking-widest">
              Um lugar de recomeços, cura e vida em abundância. Junte-se a nós em nossa jornada de fé.
            </p>
            <div className="flex gap-10">
              <Instagram className="w-4 h-4 text-brand-muted hover:text-brand-accent cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-brand-muted hover:text-brand-accent cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 text-brand-muted hover:text-brand-accent cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-ink mb-10 font-bold">Navegação</h5>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] text-brand-muted">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Quem Somos</a></li>
              <li><a href="#cultos" className="hover:text-brand-accent transition-colors">Agenda de Cultos</a></li>
              <li><a href="#comunidade" className="hover:text-brand-accent transition-colors">Comunidade</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-accent transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-ink mb-10 font-bold">Contato</h5>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] text-brand-muted">
              <li className="flex items-center gap-4">
                <Mail className="w-3 h-3 text-brand-accent" />
                <span>contato@igrejaesperanca.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-3 h-3 text-brand-accent" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-3 h-3 text-brand-accent mt-0.5 shrink-0" />
                <span className="leading-relaxed">São João dos Patos - Maranhão</span>
              </li>
            </ul>
          </div>

          <div>
             <h5 className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-ink mb-10 font-bold">Arquivos</h5>
             <div className="flex flex-col gap-4">
               <div className="border border-brand-line p-5 flex items-center gap-5 cursor-pointer hover:border-brand-accent transition-colors group">
                 <div className="w-8 h-8 border border-brand-line flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <div>
                   <p className="text-[9px] uppercase font-bold text-brand-muted">Jovens</p>
                   <p className="text-[11px] font-bold text-brand-ink uppercase tracking-widest">Encontros 2024</p>
                 </div>
               </div>
               <div className="border border-brand-line p-5 flex items-center gap-5 cursor-pointer hover:border-brand-accent transition-colors group">
                 <div className="w-8 h-8 border border-brand-line flex items-center justify-center text-brand-muted group-hover:text-brand-accent group-hover:border-brand-accent transition-colors">
                   <ChevronRight className="w-4 h-4" />
                 </div>
                 <div>
                   <p className="text-[9px] uppercase font-bold text-brand-muted">Social</p>
                   <p className="text-[11px] font-bold text-brand-ink uppercase tracking-widest">Relatório Anual</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-brand-line pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-muted">© 2026 Igreja Esperança — Todos os direitos reservados</p>
          <div className="flex gap-12 font-sans text-[9px] uppercase tracking-[0.3em] text-brand-muted">
            <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">YouTube</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Spotify</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
