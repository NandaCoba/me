export type PortfolioPost = {
  id: string
  text: string
  image?: string
  date: string
  replies: string
  reposts: string
  likes: string
  views: string
}

export const portfolioPosts: PortfolioPost[] = [
  {
    id: '1',
    text: 'Built a full-stack booking platform with Nuxt, NestJS, and PostgreSQL. Real-time availability, payment flow, and admin dashboard.',
    image: 'https://picsum.photos/seed/portfolio-1/1200/675',
    date: 'Mar 12',
    replies: '245',
    reposts: '1K',
    likes: '2.8K',
    views: '191K',
  },
  {
    id: '2',
    text: 'API gateway + microservices for an e-commerce stack. Auth, inventory, and checkout services talking over Redis queues.',
    image: 'https://picsum.photos/seed/portfolio-2/1200/800',
    date: 'Feb 28',
    replies: '42',
    reposts: '128',
    likes: '890',
    views: '24K',
  },
  {
    id: '3',
    text: 'Hospital internal tools — ticketing, asset tracking, and network monitoring dashboards for IT ops.',
    image: 'https://picsum.photos/seed/portfolio-3/1200/700',
    date: 'Jan 9',
    replies: '18',
    reposts: '56',
    likes: '312',
    views: '8.4K',
  },
]
