import ArticlePage from './ArticlePage';

export default function Article({ params }: { params: { slug: string } }) {
  return <ArticlePage slug={params.slug} />;
}

export async function generateStaticParams() {
  // Generate static params for all articles
  return [
    { slug: 'building-sustainable-communities' },
    { slug: 'future-decentralized-governance' },
    { slug: 'environmental-blockchain-impact' },
    { slug: 'digital-identity-network-states' },
    { slug: 'treasury-management-daos' },
    { slug: 'community-building-virtual-spaces' }
  ];
}