export type PortfolioPost = {
  id: string
  text: string
  image?: string
  link?: string
  collaborators?: {
    username: string
    url: string
  }[]
  date: string
  replies: string
  reposts: string
  likes: string
  views: string
}

export const portfolioPosts: PortfolioPost[] = [
  {
    id: 'msa-legal-center',
    text: 'Built the MSA Legal Center website as a freelance project, collaborating with a friend to create a professional digital presence for corporate legal consultation services.',
    image: '/msa.png',
    collaborators: [
      {
        username: '2ndson._',
        url: 'https://www.instagram.com/2ndson._/',
      },
    ],
    date: 'Jul 2026',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'curcool-backend',
    text: 'Contributed to the backend development of Curcool, a psychological counseling platform that connects users with professional counselors. I helped build and maintain the server-side functionality that supports the application.',
    image: '/curcool.png',
    link: 'https://curcool.com/en',
    date: 'Jul 2026',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'storra-wms-backend',
    text: 'Contributed to the backend development of Storra, a Warehouse Management System (WMS) designed to simplify inventory, stock movement, and warehouse operations. I helped develop and maintain the server-side functionality behind the platform.',
    image: '/storra.png',
    link: 'https://www.storra.id/id',
    date: 'Jul 2026',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-network-engineering',
    text: 'Certified in Computer Network Engineering (KKNI Level II) by BNSP.',
    image: '/certif-network.jpeg',
    date: 'Apr 2, 2024',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-frontend-development',
    text: 'Completed the Intro to Programming Class from Coding Studio.',
    image: '/certif-frontend-dev.jpeg',
    date: 'Feb 23, 2024',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-cyber-cloud',
    text: 'Participated in Exploring Cyber Security and Cloud Computing by GDSC Telkom University Jakarta and Dicoding.',
    image: '/certif-cyber-cloud.jpeg',
    date: 'Feb 24, 2024',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-gitops',
    text: 'Participated in AWS x Dicoding LIVE: Membangun Software Lebih Produktif dengan GitOps.',
    image: '/certif-gitops.jpeg',
    date: 'Sep 29, 2023',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-basic-coding',
    text: 'Completed the Belajar Dasar Pemrograman Web course from Dicoding.',
    image: '/certif-basic-coding.jpeg',
    date: 'Sep 17, 2023',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
  {
    id: 'cert-basic-cyber',
    text: 'Completed the Intro to Cyber Security class from Coding Studio.',
    image: '/basic-cyber.jpeg',
    date: 'Feb 25, 2023',
    replies: '0',
    reposts: '0',
    likes: '0',
    views: '0',
  },
]
