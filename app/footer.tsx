import FooterLink from "@/components/links/footer-link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-full md:max-w-[42rem] w-[calc(100%+1.5rem)] text-sm">
      <section className="grid grid-cols-2 gap-4 p-4 pb-10 border-t dark:border-white/20 border-black/10 sm:pb-20 md:grid-cols-3 sm:grid-cols-2 place-items-center">
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="https://www.linkedin.com/in/railly-hugo" external>
          LinkedIn
        </FooterLink>
        <FooterLink to="/stack">Stack</FooterLink>
        <FooterLink to="/projects">Projects</FooterLink>
        <FooterLink to="https://www.github.com/Railly" external>
          Github
        </FooterLink>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/blog">Blog</FooterLink>
        <FooterLink to="https://www.twitter.com/RaillyHugo" external>
          Twitter
        </FooterLink>
      </section>
    </footer>
  );
}
