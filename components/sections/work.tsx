import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const projects = [
  {
    number: '01',
    title: 'Jewellery RFID Solution',
    type: 'Production system · Irys Group',
    description: 'A microservices-based RFID platform for jewellery operations, with Nuxt.js on the frontend, Node.js services, and gRPC communication between systems.',
    tags: ['Nuxt.js', 'Node.js', 'gRPC', 'BullMQ', 'AWS', 'Jenkins', 'Docker'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Gym Management Platform',
    type: 'Full-stack product · Avirait Technologies',
    description: 'An end-to-end platform for memberships, payments, communication, and media. Built with a performance-first architecture and a calm, accessible UI.',
    tags: ['Next.js', 'Golang', 'PostgreSQL', 'Razorpay'],
    accent: 'lime',
  },
  {
    number: '03',
    title: 'Wedding Service Marketplace',
    type: 'Marketplace · Avirait Technologies',
    description: 'A multi-role marketplace connecting clients, service partners, and admins through package discovery, bookings, and secure payments.',
    tags: ['Next.js', 'MongoDB', 'Razorpay', 'ShadCN UI'],
    accent: 'blue',
  },
  {
    number: '04',
    title: 'Task Management Portal',
    type: 'Junior Developer · PurpleZone Pvt. Ltd.',
    description: 'A task management portal built with React.js, Node.js, and MongoDB, integrating Google Calendar and Email APIs for automated scheduling and notifications. Firebase real-time push notifications improved task update responsiveness.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Google Calendar API', 'Email API', 'Firebase'],
    accent: 'purple',
  },
  {
    number: '05',
    title: 'Ecopass',
    type: 'Final year project · Smart transit',
    description: 'A smart ticketing system that enables card-based fare deduction by route, with dedicated experiences for admins, conductors, and passengers.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'RBAC'],
    accent: 'yellow',
  },
]

export function Work() {
  return (
    <section id="work" className="work section-pad">
      <div className="section-heading"><div className="section-index">02 <span>/</span> SELECTED WORK</div><h2>Things I&apos;ve<br /><em>shipped.</em></h2><p>Real systems, real constraints, and a lot of care in the details.</p></div>
      <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3><TextGenerateEffect words={project.title} duration={0.7} /></h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
    </section>
  )
}
