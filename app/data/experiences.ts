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
      'Developed REST APIs, integrated AWS services, designed database architecture and maintained production systems.',
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
      'Built secure RESTful APIs, payment gateway integrations, SQL/NoSQL databases and cloud deployment.',
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
      'Provided technical support, troubleshooting, hardware/software maintenance and network assistance.',
    logoInitials: 'RC',
  },
]
