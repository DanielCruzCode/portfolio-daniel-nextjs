import MainLayout from "components/layout/main-layout/MainLayout";
import { ProjectsGrid } from "components/projects/projects-list/ProjectsGrid";
import { FormattedMessage } from "react-intl";

export default function WorkingExperience() {
  return (
    <>
      <MainLayout>
        <div className="text-container">
          <h1>
            <FormattedMessage id="working-xp-page.title" />
          </h1>
          <h4 className="content-subtitle">Lorem Ipsum:</h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
          <hr />
          <h1>Projects</h1>
          <ProjectsGrid />
        </div>
      </MainLayout>
      <style jsx>{`
        h1 {
          max-width: 18rem;
          margin-inline: auto;
          margin-bottom: 4.125rem;
        }
      `}</style>
    </>
  );
}
