import { KnownTech } from "types";
import { KnownTechsGrid } from "./KnownTechsGrid";

interface Props {
  data: Array<KnownTech>;
}

export const KnownTechs = ({ data }: Props) => {
  return (
    // TODO: Make this feature (Show the tech grid and tech descriptions with links)
    <>
      <KnownTechsGrid techsData={data} />
      <hr />
    </>
  );
};
