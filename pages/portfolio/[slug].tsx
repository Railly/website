import { allProjects } from ".contentlayer/generated";
import type { Project } from ".contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "components/MDXComponents";
import ProjectLayout from "components/ProjectLayout";

export default function Post({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);

  return (
    <ProjectLayout project={project}>
      <Component components={MDXComponents} />
    </ProjectLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params?.slug);

  return { props: { project } };
}
