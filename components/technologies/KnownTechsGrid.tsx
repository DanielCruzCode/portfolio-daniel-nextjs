import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

import { KnownTech } from "types";
import { generalStyles } from "styles/components/technologies/KnownTechGrid";

interface Props {
  techsData: Array<KnownTech>;
}

export const KnownTechsGrid = ({ techsData }: Props) => {
  return (
    <>
      <div className="grid">
        {techsData.map((tech) => (
          <Link
            href={`${tech.id}`}
            key={nanoid() + "tech-bubble"}
            scroll={false}
          >
            <a className="tech-bubble">
              <Image
                src={tech.image}
                alt={tech.name}
                width={43}
                height={43}
                quality={100}
              />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{generalStyles}</style>
    </>
  );
};
