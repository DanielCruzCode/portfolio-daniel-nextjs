import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { nanoid } from "nanoid";

import MainLayout from "components/layout/main-layout/MainLayout";
import { KnownTechs } from "components/technologies/KnownTechs";

import { KnownTech } from "types";
import data from "data/data.json";
import { useEffect, useState } from "react";

export default function Knowledge() {
  const router = useRouter();
  const { asPath } = router;
  const [currentPath, setCurrentPath] = useState<string>(asPath);

  const handleChangeCurrrentPath = (url: string) => {
    const currentPathHash = getPathHash(url);
    setCurrentPath(currentPathHash);
  };

  useEffect(() => {
    router.events.on("hashChangeComplete", handleChangeCurrrentPath);

    return () => {
      router.events.off("hashChangeComplete", handleChangeCurrrentPath);
    };
  }, [asPath]);

  useEffect(() => {
    handleChangeCurrrentPath(asPath);
  }, [asPath]);

  const getTechAnchorId = (tech: KnownTech): string => tech.id.slice(1);
  const getPathHash = (hash: string): string => hash.slice(hash.indexOf("#"));

  // TODO: Refactor this logic, create a custom hook or move to _app.tsx
  return (
    <>
      <MainLayout>
        <h1>Knowledge</h1>
        <section className="text-container">
          <KnownTechs data={data.knownTechs} />
          {data.knownTechs.map((tech) => {
            const highlightStyle =
              currentPath === tech.id ? "link-highlight" : "";
            return (
              <article
                className="known-tech-container"
                key={`${nanoid() + "-known-tech"}`}
              >
                <a id={getTechAnchorId(tech)} className={`${highlightStyle}`}>
                  <h3>{tech.name}</h3>
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
      `}</style>
    </>
  );
}
