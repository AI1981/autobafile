import Badge from "../components/Badge";
import Button from "../components/Button";

export const Contact = () => {
  return (
    <section className="relative overflow-hidden py-25">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* left col */}
          <div className="flex flex-col gap-6">
            <Badge>contatti</Badge>
            <h2 className="text-5xl mb-10 font-bold tracking-tighter">
              <span>contattaci per</span>
              <br />
              <span>prenotare il tuo servizio</span>
            </h2>
            <p className="leading-relaxed">
              Siamo qui per aiutarti! Contattaci per qualsiasi domanda o per
              prenotare un servizio. Il nostro team è pronto a fornirti
              assistenza e supporto.
            </p>
            <div className="flex flex-col w-full md:w-1/2">
              <Button>+39 3351092367</Button>
              <Button>info@autobafile.it</Button>
            </div>
          </div>
          {/* right col */}
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5937.808589381721!2d12.454630676667794!3d41.9164160712376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f608c6e4f5237%3A0x243ada0abf91396c!2sVia%20Andrea%20Bafile%2C%203%2C%2000195%20Roma%20RM!5e0!3m2!1sit!2sit!4v1765972189875!5m2!1sit!2sit"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full shadow-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
