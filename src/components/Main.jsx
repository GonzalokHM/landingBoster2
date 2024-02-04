import { Button } from "./ui/Button";

export const Main = () => {
  return (
    <main>
      <div>
        <div>
          <h1>Unlock Your Service`&apos;`s Potential with Pro Landing Pages</h1>
          <p>
            Experience the Unparalleled Quality of Handcrafted, SEO-Optimized
            Landing Pages, Tailored to Your Unique Brand – No Templates, No AI,
            Just Real Expertise.
          </p>
        </div>
        <div>
          <h2>3x your leads and sales</h2>
          <p>
            Ready to supercharge your service`&apos;`s online presence? Discover the
            power of our handcrafted, SEO-optimized landing pages that are
            tailored exclusively to your brand. By taking the next step and
            filling out the form with your name and email, you`&apos;`re not only
            gaining access to a wealth of knowledge about landing pages but also
            unlocking a FREE downloadable eBook, a comprehensive guide that
            covers everything you need to know to make your landing pages truly
            effective. Don`&apos;`t miss out on this opportunity to elevate your online
            marketing game. Simply fill in your details below and click `&apos;`Try
            Now`&apos;` to get started. Your path to successful landing pages begins
            here.
          </p>
        </div>
        <form action="procesar_formulario.php" method="post">
            <label htmlFor="nombre">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" required />
            
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required />
            
            <Button type="submit">
            Try Now
            </Button> 
        </form>
      </div>
    </main>
  );
};
