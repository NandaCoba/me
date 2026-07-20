export type Certification = {
  id: string
  title: string
  issuer: string
  issued: string
  credentialId?: string
  logoInitials: string
  logo?: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Issued Mar 2025',
    credentialId: 'AWS-CCP-0001',
    logoInitials: 'AWS',
  },
  {
    id: '2',
    title: 'Meta Back-End Developer',
    issuer: 'Meta · Coursera',
    issued: 'Issued Nov 2024',
    credentialId: 'META-BE-0002',
    logoInitials: 'M',
  },
  {
    id: '3',
    title: 'Node.js Application Development',
    issuer: 'OpenJS Foundation',
    issued: 'Issued Jun 2024',
    logoInitials: 'JS',
  },
]
