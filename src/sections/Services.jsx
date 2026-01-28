import { Circle } from 'lucide-react';
import { Cog } from 'lucide-react';
import { Activity } from 'lucide-react';
import { AirVent } from 'lucide-react';
import { SquareParking } from 'lucide-react';
import { ScrollText } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import Badge from '../components/Badge';
import { useMemo, useState } from 'react';

export const Services = () => {
  const buttonServices = [
    {
      id: 'meccanica',
      icon: <Cog />,
      text: 'meccanica generale',
      image: '/service-meccanica.jpg',
      titleTop: 'meccanica generale da oltre',
      titleAccent: '50 anni',
      body: 'Da più di mezzo secolo ci prendiamo cura delle auto con competenza, precisione e passione. La nostra meccanica generale unisce l’esperienza maturata in 50 anni di attività alle tecnologie più attuali, offrendo interventi affidabili su ogni tipo di veicolo. Il tuo mezzo è sempre nelle mani di professionisti di fiducia.',
      alt: 'Meccanica generale',
    },
    {
      id: 'tagliando',
      icon: <BadgeCheck />,
      text: 'tagliando',
      image: '/service-tagliando.jpg',
      titleTop: 'tagliando completo e',
      titleAccent: 'certificato',
      body: 'Interventi programmati secondo le specifiche del costruttore, con ricambi di qualità e controlli accurati per mantenere prestazioni e sicurezza.',
      alt: 'Tagliando',
    },
    {
      id: 'diagnostica',
      icon: <Activity />,
      text: 'diagnostica',
      image: '/service-diagnostica.jpg',
      titleTop: 'diagnostica elettronica',
      titleAccent: 'avanzata',
      body: 'Strumentazione aggiornata e analisi precisa dei sistemi del veicolo per individuare rapidamente anomalie e intervenire in modo mirato.',
      alt: 'Diagnostica',
    },
    {
      id: 'clima',
      icon: <AirVent />,
      text: 'clima auto',
      image: '/service-clima.png',
      titleTop: 'climatizzazione',
      titleAccent: 'efficiente',
      body: 'Ricarica, ricerca perdite e sanificazione: comfort e sicurezza con controlli completi sull’impianto A/C.',
      alt: 'Clima auto',
    },
    {
      id: 'revisione',
      icon: <ScrollText />,
      text: 'revisione periodica',
      image: '/service-revisione.jpg',
      titleTop: 'revisione periodica',
      titleAccent: 'senza pensieri',
      body: 'Preparazione e controlli preliminari per affrontare la revisione in modo semplice, con attenzione a sicurezza e conformità.',
      alt: 'Revisione periodica',
    },
    {
      id: 'parcheggio',
      icon: <SquareParking />,
      text: 'parcheggio',
      image: '/service-parcheggio.jpg',
      titleTop: 'parcheggio custodito',
      titleAccent: 'in zona',
      body: 'Soluzioni di sosta sicura e comoda, con accesso semplice e gestione affidabile per chi lavora in città.',
      alt: 'Parcheggio',
    },
  ];

  const [activeBtn, setActiveBtn] = useState('meccanica');

  const activeItem = useMemo(
    () => buttonServices.find((s) => s.id === activeBtn) ?? buttonServices[0],
    [activeBtn],
  );

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto py-28 px-6">
        <div className="text-center mb-10">
          <Badge>servizi</Badge>
          <h2 className="font-bold tracking-tighter text-5xl">
            <span>Anni di esperienza al</span>
            <br />
            <span>
              servizio della tua <span className="text-accent">auto</span>
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* left col */}
          <div className="flex flex-col gap-3 justify-between">
            {buttonServices.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveBtn(btn.id)}
                className={`text-start shadow-sm p-5 ${
                  activeBtn === btn.id
                    ? 'bg-accent text-white'
                    : 'bg-background hover:bg-accent text-foreground hover:text-white'
                } transition-all duration-300`}
              >
                <div className="inline-flex gap-4 items-center">
                  {btn.icon}
                  <span className="uppercase font-semibold tracking-tight">
                    {btn.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* center col */}
          <div className="relative h-[500px] w-full overflow-hidden">
            <img
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.alt}
              className="h-full w-full object-cover shadow-xl
               animate-in fade-up ease-out time-500"
            />
          </div>

          {/* right col */}
          <div
            key={activeItem.id + '-content'}
            className="flex flex-col gap-6
             animate-in fade-up ease-out time-500 time-delay-100"
          >
            <h3 className="font-bold tracking-tighter text-4xl capitalize">
              <span>{activeItem.titleTop}</span>
              <br />
              <span className="text-accent text-4xl">
                {activeItem.titleAccent}
              </span>
            </h3>
            <p className="leading-relaxed">{activeItem.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
