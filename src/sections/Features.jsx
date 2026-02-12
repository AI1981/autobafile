import { SquareParking } from 'lucide-react';
import { ClockArrowUp } from 'lucide-react';
import { Shield } from 'lucide-react';


export const Features = () => {

  const cardsInfo = [
    {
      icon: <SquareParking size={40} className='text-accent' />,
      title: 'parcheggio custodito',
      text: 'Parcheggio sicuro con video sorveglianza 24/7.',
    },
    {
      icon: <ClockArrowUp size={40} className='text-accent' />,
      title: 'rapidità',
      text: 'Parcheggio e ritiro auto immediato.',
    },
    {
      icon: <Shield size={40} className='text-accent' />,
      title: "servizi per l'auto",
      text: 'servizi complementari aggiuntivi per la tua auto.',
    },
  ];
  return (
    <section className="relative overflow-hidden py-25 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center capitalize">
          <h2 className="text-5xl mb-10 font-bold tracking-tighter">
            <span>per ogni problema</span>
            <br />
            <span className="text-accent"> una soluzione</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cards */}
          {cardsInfo.map((card) => (
            <div
              className="flex flex-col justify-center gap-2 border border-gray-300/20 p-5 min-h-60 shadow-lg"
            >
              <div className="self-center">{card.icon}</div>
              <h2 className="font-bold text-2xl leading-10 capitalize text-center">
                {card.title}
              </h2>
              <span className="leading-relaxed text-center">{card.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
