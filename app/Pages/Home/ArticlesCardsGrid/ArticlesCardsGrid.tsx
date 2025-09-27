'use client';

import { 
  AspectRatio, 
  Card, 
  Container, 
  Image, 
  SimpleGrid, 
  Text, 
  Title, 
  Button, 
  Badge, 
  Group, 
  Stack,
  Avatar,
  Box
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare, IconEye } from '@tabler/icons-react';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: 'Building Sustainable Communities Through Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Discover how blockchain technology and decentralized governance are creating new opportunities for sustainable resource allocation and community-driven decision making.',
    date: 'December 15, 2024',
    author: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Technology',
    readTime: '5 min read',
    likes: 142,
    views: 1234
  },
  {
    title: 'The Future of Decentralized Governance',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Exploring how DAO voting mechanisms and transparent blockchain governance are reshaping democratic participation in digital communities.',
    date: 'December 12, 2024',
    author: 'Sarah Johnson', 
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Governance',
    readTime: '8 min read',
    likes: 89,
    views: 876
  },
  {
    title: 'Environmental Impact of Blockchain Networks',
    image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'A comprehensive analysis of energy consumption in blockchain networks and emerging solutions for sustainable cryptocurrency operations.',
    date: 'December 10, 2024',
    author: 'Michael Torres',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Environment',
    readTime: '6 min read',
    likes: 67,
    views: 543
  },
  {
    title: 'Digital Identity in Network States',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'How digital identity systems are enabling new forms of citizenship and participation in virtual nation-states and online communities.',
    date: 'December 8, 2024',
    author: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Identity',
    readTime: '7 min read',
    likes: 156,
    views: 1687
  },
  {
    title: 'Treasury Management in DAOs',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Best practices for transparent treasury management, budget allocation, and financial accountability in decentralized autonomous organizations.',
    date: 'December 5, 2024',
    author: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Finance',
    readTime: '9 min read',
    likes: 234,
    views: 2156
  },
  {
    title: 'Community Building in Virtual Spaces',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    description: 'Strategies for fostering meaningful connections and engagement in digital communities and online collaborative environments.',
    date: 'December 2, 2024',
    author: 'Lisa Park',
    avatar: 'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Community',
    readTime: '4 min read',
    likes: 98,
    views: 789
  }
];

function getCategoryColor(category: string) {
  const colors: Record<string, string> = {
    'Technology': '#00aff0',
    'Governance': '#7c4dff', 
    'Environment': '#00c851',
    'Identity': '#ff6b35',
    'Finance': '#2bbbad',
    'Community': '#ff5722'
  };
  return colors[category] || '#666';
}

export function ArticleCard({ article }: { article: typeof mockdata[0] }) {
  const handleClick = () => {
    const slug = article.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    window.location.href = `/articles/${slug}`;
  };

  return (
    <Card
      shadow="sm"
      radius="lg"
      onClick={handleClick}
      style={{
        border: '1px solid #e9ecef',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%'
      }}
      styles={{
        root: {
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)'
          }
        }
      }}
    >
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Image 
            src={article.image} 
            alt={article.title}
            style={{ borderRadius: '0' }}
          />
        </AspectRatio>
      </Card.Section>

      <Card.Section p="md" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Group justify="space-between" mb="sm">
          <Badge 
            style={{ 
              backgroundColor: `${getCategoryColor(article.category)}15`, 
              color: getCategoryColor(article.category),
              border: 'none'
            }}
            size="sm"
          >
            {article.category}
          </Badge>
          <Text size="xs" c="dimmed">
            {article.readTime}
          </Text>
        </Group>

        <Stack gap="xs" style={{ flex: 1 }}>
          <Title order={3} size="md" style={{ lineHeight: 1.3, marginBottom: '4px' }}>
            {article.title}
          </Title>

          <Text size="sm" c="dimmed" style={{ lineHeight: 1.4, flex: 1 }}>
            {article.description}
          </Text>

          <Group justify="space-between" align="center" mt="sm">
            <Text size="xs" c="dimmed">
              {article.date}
            </Text>

            <Group gap="lg">
              <Group gap="xs">
                <IconHeart size={16} style={{ color: '#666' }} />
                <Text size="xs" c="dimmed">{article.likes}</Text>
              </Group>
              <Group gap="xs">
                <IconEye size={16} style={{ color: '#666' }} />
                <Text size="xs" c="dimmed">{article.views}</Text>
              </Group>
            </Group>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  );
}

export function ArticlesCardsGrid() {
  const displayedArticles = mockdata.slice(0, 6); // Show first 6 articles
  
  const cards = displayedArticles.map((article, index) => (
    <ArticleCard key={index} article={article} />
  ));

  return (
    <Container py="xl" size="lg">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Title 
          order={2} 
          style={{ 
            fontSize: '36px', 
            fontWeight: 700, 
            color: '#1c1c1c',
            marginBottom: '16px'
          }}
        >
          Latest Articles & Insights
        </Title>
        <Text 
          size="lg" 
          style={{ 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px',
            lineHeight: 1.6
          }}
        >
          Stay updated with the latest developments in blockchain governance, 
          sustainable technology, and community building.
        </Text>
      </div>

      <SimpleGrid 
        cols={{ base: 1, sm: 2, lg: 3 }} 
        spacing="xl"
        verticalSpacing="xl"
      >
        {cards}
      </SimpleGrid>

      {/* View More Button */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Button
          size="lg"
          variant="outline"
          style={{
            borderColor: '#00aff0',
            color: '#00aff0',
            borderRadius: '8px',
            padding: '12px 40px',
            fontSize: '16px',
            fontWeight: 600
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: '#00aff0',
                color: 'white'
              }
            }
          }}
        >
          View More Articles
        </Button>
      </div>
    </Container>
  );
}