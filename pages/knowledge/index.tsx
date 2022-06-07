import { FormattedMessage } from "react-intl";
import { nanoid } from "nanoid";

import MainLayout from "components/layout/main-layout/MainLayout";
import { useCurrentHash } from "../../hooks/useCurrentHash";

import { KnownTech } from "types";
import data from "data/data.json";
import KnownTechsGrid from "components/technologies/KnownTechsGrid";

export default function Knowledge() {
  const { currentHash } = useCurrentHash();
  const getTechAnchorId = (tech: KnownTech): string => tech.id.slice(1);

  return (
    <>
      <MainLayout>
        <h1>
          <FormattedMessage id="knowledge-page.title" />
        </h1>
        <section className="text-container">
          <KnownTechsGrid techsData={data.knownTechs} />
          <hr />
          {data.knownTechs.map((tech) => {
            const highlightStyle =
              currentHash === tech.id ? "link-highlight" : "";
            return (
              <article
                className="known-tech-description"
                key={`${nanoid() + "-known-tech"}`}
              >
                <a id={getTechAnchorId(tech)} className={`${highlightStyle}`}>
                  <h3>⚓{tech.name}</h3>
                </a>
                <p>
                  <FormattedMessage id={tech.messageId} />
                </p>
              </article>
            );
          })}
        </section>
      </MainLayout>
      <style jsx>{`
        a {
          display: block;
        }
        h3 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
}
