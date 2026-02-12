import Badge from "../components/Badge";
import Button from "../components/Button";

export const Footer = () => {
  return (
    <section className="relative overflow-hidden bg-slate-700 py-10">
      <div className="container mx-auto px-6 text-center flex flex-col">
        <span className="text-sm text-white">
          © 2026 Autobafile. Tutti i diritti riservati.
        </span>
        <span className="text-sm text-white">
          <a href="https://www.wiinet.it">Powerd by Wiinet</a>
        </span>
      </div>
    </section>
  );
};
