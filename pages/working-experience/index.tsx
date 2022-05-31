import MainLayout from "components/layout/main-layout/MainLayout";
import { ProjectsGrid } from "components/projects/projects-list/ProjectsGrid";

export default function WorkingExperience() {
  return (
    <>
      <MainLayout>
        <h1>Working Experience</h1>
        <h4 className="content-subtitle">Lorem Ipsum:</h4>
        <p className="content-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <h4 className="content-subtitle">Lorem Ipsum:</h4>
        <p className="content-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <h4 className="content-subtitle">Lorem Ipsum:</h4>
        <p className="content-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <h4 className="content-subtitle">Lorem Ipsum:</h4>
        <p className="content-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
        <hr />
        <h1>Projects</h1>
        <ProjectsGrid />
      </MainLayout>
      <style jsx>{`
        h1 {
          max-width: 13rem;
          margin-inline: auto;
          margin-bottom: 4.125rem;
        }
      `}</style>
    </>
  );
}
