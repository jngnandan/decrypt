import { Card, Text, Group, Button, Container, SimpleGrid } from '@mantine/core';
import { IconHeart, IconEye, IconBookmark } from '@tabler/icons-react';

const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Digital Citizenship Revolution',
    author: 'Liberland Ministry',
    likes: '2,847',
    views: '12K',
    category: 'governance'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Blockchain Environmental Impact',
    author: 'Sustainability Council',
    likes: '1,923',
    views: '8.5K',
    category: 'environment'
  },
  {
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Community-Driven Development',
    author: 'Developer Coalition',
    likes: '3,156',
    views: '15.2K',
    category: 'technology'
  }
];

function ImageCard({ image, title, author, likes, views }: any) {
  return (
    <Card
      p="lg"
      shadow="lg"
      radius="md"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 320,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Text size="lg" fw={500} mb="md">
          {title}
        </Text>
      </div>

      <div>
        <Text size="sm" mb="xs" style={{ opacity: 0.9 }}>
          {author}
        </Text>
        
        <Group justify="space-between" align="center">
          <Group gap="lg">
            <Group gap="xs">
              <IconHeart size={16} />
              <Text size="sm">{likes}</Text>
            </Group>
            <Group gap="xs">
              <IconEye size={16} />
              <Text size="sm">{views}</Text>
            </Group>
          </Group>
          
          <Button 
            variant="filled" 
            size="sm"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            Read More
          </Button>
        </Group>
      </div>
    </Card>
  );
}

export function ImageCards() {
  const cards = cardsData.map((card, index) => (
    <ImageCard key={index} {...card} />
  ));

  return (
    <Container size="lg" py={80}>
      <Group justify="center" mb={50}>
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <Text fw={600} fz="h2" mb="md" style={{ color: '#1a1a1a' }}>
            Explore Our Impact Stories
          </Text>
          <Text size="lg" c="dimmed" style={{ lineHeight: 1.6 }}>
            Discover how blockchain technology is transforming governance, sustainability, 
            and community development in the network state of Liberland.
          </Text>
        </div>
      </Group>
      
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'md', md: 'lg' }}
      >
        {cards}
      </SimpleGrid>
    </Container>
  );
}