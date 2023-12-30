import Mdx from "@/components/mdx-components"
import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import "@/styles/mdx.css"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {doc.title}
      </h1>
      <div>hello docs!</div>
      <div className="pb-12 pt-8">
        <Mdx code={doc.body.code} />
      </div>
    </main>
  )
}
