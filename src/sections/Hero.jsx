import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import Badge from '../components/Badge';

export const Hero = () => {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-5 pt-30">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* left col */}
            <div className="flex flex-col text-center md:text-start gap-2 p-3">
              <div className="animate-in slide-in-t time-500">
                <Badge>
                  roma - prati
                </Badge>
              </div>
              <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight leading-tight animate-in slide-in-t time-500 time-delay-100">
                <span>Parcheggio facile</span>
                <br />
                <span>servizi</span>
                <span className="text-accent"> TOP</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed animate-in slide-in-t time-500 time-delay-200">
                Nel cuore di Prati, Autobafile offre soluzioni di parcheggio
                sicuro con abbonamenti mensili o tariffe orarie, affiancate da
                un'officina meccanica completa per ogni esigenza della tua auto.
              </p>
              <div>
                <Button
                  size="lg"
                  className="animate-in slide-in-t time-500 time-delay-300"
                >
                  scopri di più
                </Button>
              </div>
            </div>
            {/* right col */}
            <div className="p-3">
              <img
                className="object-cover shadow-xl h-full"
                src="./mechanic-garage.jpg"
                alt="Autobafile"
              />
            </div>
          </div>
        </div>
      </section>
    );
};
