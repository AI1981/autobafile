import { Circle } from 'lucide-react';
import Badge from '../components/Badge';


export const About = () => {
    const cardsInfo = [
    {
      icon: <Circle size={24} className="animate-pulse text-accent" />,
      title: 'sicurezza una priorità',
      text: 'sistema di videosorveglianza h24 e accessi controllati.',
    },
    {
      icon: <Circle size={24} className="animate-pulse text-accent" />,
      title: 'professionalità garantita',
      text: 'personale con oltre 50 anni di esperienza nel settore.',
    },
    {
      icon: <Circle size={24} className="animate-pulse text-accent" />,
      title: "Flessibilità",
      text: 'soluzioni e pacchetti personalizzati per ogni esigenza.',
    },
    ]
  
    const textCard = `Nata come piccola officina nel quartiere Prati, Autobafile è oggi un centro completo per la cura dell’auto. Alla meccanica di alta qualità abbiamo affiancato un servizio di parcheggio custodito e sicuro, con posti auto e sistemi di sicurezza. La fiducia dei clienti resta il nostro valore principale.`;
  
    
  return (
    <section id="about">
      <div className="container mx-auto py-28 px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* left col */}
          <div className="flex flex-col gap-5">
            <Badge>chi siamo</Badge>
            {/* heading */}
            <div className="font-bold tracking-tighter text-5xl">
              <span className="text-accent">
                Auto<span className="font-light text-foreground">bafile</span>
              </span>
              <br />
              <span> l'officina per la tua auto</span>
            </div>
            {/* text card */}
            <div className="p-5 bg-white border border-foreground/20">
              <p className="leading-relaxed">{textCard}</p>
            </div>
            {/* da automatizzare */}
            {cardsInfo.map((card) => (
              <div className="flex gap-4">
                {/* icona */}
                <div className="">{card.icon}</div>
                <div className="flex flex-col">
                  <h3 className="font-bold capitalize mb-2">{card.title}</h3>
                  <p className="leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* right col */}
          <div>
            <img
              className="object-cover shadow-xl h-full"
              src="./car-garage.webp"
              alt="Autobafile"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
