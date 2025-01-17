import { getAllTags } from "@/lib/wordpress";
import { Section, Container } from "@/components/craft";
import { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Tags",
    description: "Browse all tags on the site.",
  };
}

export default async function Page() {
  const tags = await getAllTags();

  return (
    <Section>
      <Container className="space-y-6">
        <h2>All Tags</h2>
        <BackButton />
        <div className="grid craft">
          {tags.map((tag: any) => (
            <Link key={tag.id} href={`/posts/?tag=${tag.id}`}>
              {tag.name}
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
