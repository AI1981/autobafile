import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Heronew = () => {

    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero bg-cover bg-fixed">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 to-slate-950/40"></div>
        <div className="container mx-auto px-4 pt-30 w-[max(35vw,750px)]">
          <div className="flex flex-col justify-center items-center text-center gap-4 p-3">
            <div className="animate-in slide-in-t time-500 bg-accent/40 border border-accent rounded-4xl py-2 px-5">
              <Badge className='text-white animate-pulse'>roma - prati</Badge>
            </div>
            <div className='text-white'>
              <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight animate-in slide-in-t time-500 time-delay-100">
                <span>Parcheggio e servizi</span>
                <br />
                <span className="text-accent"> Facili</span>
              </h1>
              <p className="mt-6 text-base md:text-xl leading-relaxed animate-in slide-in-t time-500 time-delay-200">
                Nel cuore di Prati, Autobafile offre soluzioni di parcheggio
                sicuro con abbonamenti mensili o tariffe orarie, affiancate da
                un'officina meccanica completa per ogni esigenza della tua auto.
              </p>
            </div>
            <div>
              <a href="#about">
                <Button
                  size="lg"
                  className="animate-in slide-in-t time-500 time-delay-300"
                >
                  scopri di più
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};
