import type { FooterSectionType } from "../types/FooterSectionType";

interface FooterSectionProps {
  footer: FooterSectionType;
}

const FooterSection = ({ footer }: FooterSectionProps) => {
  return (
    <div className="pt-5">
      <h1 className="font-bold">{footer.title}</h1>
      <div className="grid gap-y-3 mt-6">
        {footer.links.map((link, index) => (
          <a key={index} href="#" className="text-gray-600">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
