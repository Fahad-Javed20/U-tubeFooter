
import type { FooterSectionType } from "../types/FooterSectionType";
import FooterSection from "./FooterSection";

interface FooterParentProps {
  data: FooterSectionType[];
}

const FooterParent = ({ data }: FooterParentProps) => {
  return (
      <div className="flex justify-around">
        {data.map((section, index) => (
          <FooterSection key={index} footer={section} />
        ))}
      </div>
  );
};

export default FooterParent;

