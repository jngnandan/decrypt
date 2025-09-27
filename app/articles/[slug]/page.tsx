import ArticlePage from './ArticlePage';

export default function Article({ params }: { params: { slug: string } }) {
  return <ArticlePage slug={params.slug} />;
}

export async function generateStaticParams() {
  // Generate static params for all articles
  return [
    { slug: 'building-sustainable-communities-through-technology' },
    { slug: 'the-future-of-decentralized-governance' },
    { slug: 'environmental-impact-of-blockchain-networks' },
    { slug: 'digital-identity-in-network-states' },
    { slug: 'treasury-management-in-daos' },
    { slug: 'community-building-in-virtual-spaces' }
  ];
}