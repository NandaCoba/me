export type Experience = {
  id: string
  role: string
  company: string
  type: string
  period: string
  duration: string
  location: string
  description: string
  logo?: string
  logoInitials: string
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer',
    company: 'AxionTeams',
    type: 'Full-time',
    period: 'Jul 2026 – Present',
    duration: '1 mo',
    location: 'Jakarta, Indonesia',
    description:
      'Building scalable backend services using NestJS, TypeScript, PostgreSQL, Docker and AWS.',
    logo: '/axion.jpeg',
    logoInitials: 'AT',
  },
  {
    id: '2',
    role: 'Junior Software Engineer',
    company: 'WinTech',
    type: 'Full-time',
    period: 'Aug 2025 – Jul 2026',
    duration: '1 yr',
    location: 'Jakarta, Indonesia',
    description:
      'Developed and maintained scalable backend services using NestJS, TypeScript, and microservice architecture. Designed RESTful APIs, integrated AWS services (EC2, S3, Lambda), and implemented event-driven communication between services. Collaborated with cross-functional teams to deliver reliable, maintainable, and high-performance applications while following clean architecture and software engineering best practices.',
    logo: '/wintech.jpeg',
    logoInitials: 'WT',
  },
  {
    id: '3',
    role: 'Back End Developer',
    company: 'PT. Sinergi Merah Putih',
    type: 'Contract',
    period: 'Jul 2024 – Jun 2025',
    duration: '1 yr',
    location: 'Tangerang, Indonesia',
    description:
      'Built and maintained backend systems by developing secure RESTful APIs, designing efficient SQL/NoSQL databases, and integrating third-party services such as payment gateways and cloud platforms. Improved application performance through query optimization, implemented JWT/OAuth authentication, wrote API documentation, and participated in testing, debugging, and CI/CD deployment processes.',
    logo: '/sinergimerahputih.jpeg',
    logoInitials: 'SM',
  },
  {
    id: '4',
    role: 'IT Support Specialist',
    company: 'RSUD Cengkareng',
    type: 'Internship',
    period: 'Jan 2023 – Mar 2023',
    duration: '3 mos',
    location: 'Jakarta, Indonesia',
    description:
      'Provided technical support for hardware, software, operating systems, and network infrastructure. Diagnosed and resolved technical issues, performed system installation and maintenance, applied security updates and backups, and documented troubleshooting procedures to improve operational efficiency and user support.',
    logo: '/rsud.png',
    logoInitials: 'RC',
  },
]
