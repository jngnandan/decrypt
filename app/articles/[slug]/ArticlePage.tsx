'use client';

import { Container, Grid, Paper, Text, Title, Group, Avatar, Badge, Divider, Anchor, Box } from '@mantine/core';
import { IconClock, IconEye, IconHeart } from '@tabler/icons-react';
import TableOfContents from './TableOfContents';

const articleData = {
  'building-sustainable-communities': {
    title: 'Building Sustainable Communities Through Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Discover how blockchain technology and decentralized governance are creating new opportunities for sustainable resource allocation.',
    date: 'December 15, 2024',
    author: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Technology',
    readTime: '5 min read',
    likes: 142,
    views: 1234,
    content: `
## Introduction

In the rapidly evolving landscape of digital governance, blockchain technology has emerged as a transformative force for building sustainable communities. This article explores how decentralized systems are reshaping traditional community structures and enabling more transparent, efficient resource allocation.

## The Foundation of Digital Communities

Digital communities built on blockchain technology offer unprecedented opportunities for democratic participation and resource management. Unlike traditional centralized systems, these communities operate on principles of transparency, immutability, and collective decision-making.

### Key Characteristics

Blockchain-based communities share several fundamental characteristics that distinguish them from conventional organizational structures:

- **Transparency**: All transactions and decisions are recorded on an immutable ledger
- **Decentralization**: Power is distributed among community members rather than centralized authorities  
- **Consensus Mechanisms**: Decisions are made through democratic voting processes
- **Token Economics**: Economic incentives align individual and collective interests

## Sustainable Resource Allocation

One of the most significant advantages of blockchain-based communities is their ability to implement sustainable resource allocation mechanisms. Through smart contracts and automated governance systems, these communities can ensure that resources are distributed fairly and efficiently.

### Environmental Impact Considerations

Modern blockchain networks are increasingly focused on environmental sustainability. Proof-of-stake consensus mechanisms and carbon offset programs are becoming standard practices in responsible blockchain communities.

## Governance Mechanisms

Effective governance is crucial for the long-term success of any digital community. Blockchain technology enables innovative governance models that balance efficiency with democratic participation.

### DAO Voting Systems

Decentralized Autonomous Organizations (DAOs) represent the cutting edge of digital governance. These systems allow community members to propose, discuss, and vote on important decisions affecting the community's future.

## Case Studies in Implementation

Several real-world examples demonstrate the practical application of these principles. From virtual nations to environmental conservation projects, blockchain communities are making tangible impacts across various sectors.

### Liberland: A Digital Nation-State

Liberland represents one of the most ambitious attempts to create a sovereign digital community. Through blockchain-based citizenship and governance systems, Liberland is pioneering new models of national organization.

## Future Implications

The implications of blockchain-based community governance extend far beyond current applications. As technology continues to evolve, we can expect to see even more innovative approaches to community organization and resource management.

### Challenges and Opportunities

While blockchain communities offer significant advantages, they also face unique challenges including scalability, energy consumption, and regulatory compliance. Addressing these challenges will be crucial for widespread adoption.

## Conclusion

Building sustainable communities through technology requires careful consideration of governance, economics, and environmental impact. Blockchain technology provides powerful tools for achieving these goals, but success ultimately depends on thoughtful implementation and community engagement.

The future of sustainable communities lies in our ability to combine technological innovation with human wisdom, creating systems that serve both present needs and future generations.
    `
  },
  'future-decentralized-governance': {
    title: 'The Future of Decentralized Governance',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    description: 'Exploring how DAO voting mechanisms and transparent blockchain governance are reshaping democratic participation.',
    date: 'December 12, 2024',
    author: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    category: 'Governance',
    readTime: '8 min read',
    likes: 89,
    views: 876,
    content: `
## The Evolution of Governance

Democratic governance has evolved significantly throughout human history, from ancient direct democracy to modern representative systems. Today, we stand at the threshold of another revolutionary change: decentralized governance powered by blockchain technology.

## Understanding Decentralized Autonomous Organizations

DAOs represent a fundamental shift in how organizations can be structured and governed. Unlike traditional hierarchical organizations, DAOs operate through smart contracts and community voting, enabling truly democratic decision-making at scale.

### Core Principles of DAO Governance

The foundation of effective DAO governance rests on several key principles that ensure fair representation and efficient decision-making:

- **Tokenized Voting Rights**: Governance tokens represent voting power in the organization
- **Proposal Systems**: Members can submit proposals for community consideration
- **Transparent Deliberation**: All discussions and votes are publicly recorded
- **Automated Execution**: Approved decisions are automatically implemented through smart contracts

## Voting Mechanisms and Their Impact

Different voting mechanisms can significantly impact governance outcomes. Understanding these mechanisms is crucial for designing effective decentralized governance systems.

### Quadratic Voting

Quadratic voting allows participants to express the intensity of their preferences, not just their direction. This mechanism helps prevent majority tyranny while ensuring that passionate minorities can still influence outcomes.

### Futarchy

Prediction markets can be integrated into governance to create futarchy systems, where policies are chosen based on their predicted outcomes rather than popularity.

## Challenges in Implementation

While decentralized governance offers many advantages, it also presents unique challenges that must be addressed for successful implementation.

### Scalability and Efficiency

As organizations grow larger, maintaining efficient decision-making becomes increasingly difficult. Various solutions, including delegation and liquid democracy, are being explored to address these challenges.

### Security and Attack Vectors

Decentralized systems must be designed to resist various attack vectors, including vote buying, sybil attacks, and governance token concentration.

## Real-World Applications

Several organizations have successfully implemented decentralized governance systems, providing valuable lessons for future implementations.

### MakerDAO

As one of the earliest successful DAOs, MakerDAO has pioneered many governance practices that are now widely adopted across the DeFi ecosystem.

### Compound Protocol

Compound's governance system demonstrates how DeFi protocols can effectively manage complex financial systems through decentralized decision-making.

## The Role of Technology in Democratic Participation

Blockchain technology is not just changing how organizations operate; it's also transforming how citizens can participate in democratic processes at all levels of society.

### Digital Identity and Voting

Secure digital identity systems enable verifiable online voting while maintaining privacy and preventing fraud.

### Transparent Government Operations

Blockchain-based systems can make government operations more transparent and accountable to citizens.

## Future Prospects and Innovations

The field of decentralized governance continues to evolve rapidly, with new innovations emerging regularly.

### AI-Assisted Governance

Artificial intelligence can help process large amounts of community feedback and identify optimal governance solutions.

### Cross-Chain Governance

As blockchain ecosystems become more interconnected, governance systems must evolve to manage multi-chain organizations effectively.

## Conclusion

Decentralized governance represents a powerful tool for creating more democratic, transparent, and efficient organizations. While challenges remain, ongoing innovation and real-world experimentation continue to refine these systems.

The future of governance lies in finding the right balance between decentralization and efficiency, ensuring that power remains distributed while maintaining the ability to make timely decisions. As these systems mature, they have the potential to transform not just business organizations, but society itself.
    `
  }
};

export default function ArticlePage({ slug }: { slug: string }) {
  const article = articleData[slug as keyof typeof articleData];

  if (!article) {
    return (
      <Container size="lg" py={50}>
        <Text>Article not found</Text>
      </Container>
    );
  }

  const headings = [
    { label: 'Introduction', link: '#introduction', order: 1 },
    { label: 'The Foundation of Digital Communities', link: '#foundation', order: 1 },
    { label: 'Key Characteristics', link: '#characteristics', order: 2 },
    { label: 'Sustainable Resource Allocation', link: '#resource-allocation', order: 1 },
    { label: 'Environmental Impact Considerations', link: '#environmental-impact', order: 2 },
    { label: 'Governance Mechanisms', link: '#governance', order: 1 },
    { label: 'DAO Voting Systems', link: '#dao-voting', order: 2 },
    { label: 'Case Studies in Implementation', link: '#case-studies', order: 1 },
    { label: 'Liberland: A Digital Nation-State', link: '#liberland', order: 2 },
    { label: 'Future Implications', link: '#future', order: 1 },
    { label: 'Challenges and Opportunities', link: '#challenges', order: 2 },
    { label: 'Conclusion', link: '#conclusion', order: 1 }
  ];

  return (
    <Container size="xl" py={40}>
      <Grid>
        {/* Main Article Content */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper p={40} radius="md" withBorder>
            {/* Article Header */}
            <img 
              src={article.image} 
              alt={article.title}
              style={{ 
                width: '100%', 
                height: '300px', 
                objectFit: 'cover', 
                borderRadius: '8px',
                marginBottom: '24px'
              }}
            />
            
            <Badge mb="sm" style={{ backgroundColor: '#00aff0' }}>
              {article.category}
            </Badge>
            
            <Title order={1} mb="sm">
              {article.title}
            </Title>
            
            <Text size="lg" c="dimmed" mb="xl">
              {article.description}
            </Text>
            
            <Group justify="space-between" mb="xl">
              <Group>
                <Avatar src={article.avatar} size={40} radius="xl" />
                <Box>
                  <Text size="sm" fw={500}>{article.author}</Text>
                  <Text size="xs" c="dimmed">{article.date}</Text>
                </Box>
              </Group>
              
              <Group gap="lg">
                <Group gap="xs">
                  <IconClock size={16} style={{ color: '#666' }} />
                  <Text size="sm" c="dimmed">{article.readTime}</Text>
                </Group>
                <Group gap="xs">
                  <IconHeart size={16} style={{ color: '#666' }} />
                  <Text size="sm" c="dimmed">{article.likes}</Text>
                </Group>
                <Group gap="xs">
                  <IconEye size={16} style={{ color: '#666' }} />
                  <Text size="sm" c="dimmed">{article.views}</Text>
                </Group>
              </Group>
            </Group>
            
            <Divider mb="xl" />
            
            {/* Article Content */}
            <div 
              style={{ 
                lineHeight: 1.7,
                fontSize: '16px',
                color: '#333'
              }}
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .split('\n\n')
                  .map(paragraph => {
                    if (paragraph.startsWith('## ')) {
                      const title = paragraph.replace('## ', '');
                      const id = title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                      return `<h2 id="${id}" style="font-size: 24px; font-weight: 600; margin: 32px 0 16px 0; color: #1a1a1a;">${title}</h2>`;
                    } else if (paragraph.startsWith('### ')) {
                      const title = paragraph.replace('### ', '');
                      const id = title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                      return `<h3 id="${id}" style="font-size: 20px; font-weight: 600; margin: 24px 0 12px 0; color: #1a1a1a;">${title}</h3>`;
                    } else if (paragraph.startsWith('- ')) {
                      return `<ul style="margin: 16px 0; padding-left: 24px;"><li style="margin: 8px 0;">${paragraph.replace('- ', '')}</li></ul>`;
                    } else {
                      return `<p style="margin: 16px 0;">${paragraph}</p>`;
                    }
                  })
                  .join('')
              }}
            />
          </Paper>
        </Grid.Col>
        
        {/* Table of Contents Sidebar */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TableOfContents data={headings} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}