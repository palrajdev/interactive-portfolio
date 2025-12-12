import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Palraj",
  lastName: "Govintharasu",
  name: `Palraj Govintharasu`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/palrajdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/palraj-dev/",
  },
  {
    name: "Mobile",
    icon: "call",
    link: "tel:+919894759374",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/about",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Palraj, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A Full-Stack Developer with 3+ years of experience specializing in React.js, Next.js, TypeScript, Node.js, and Express.js. Builds scalable, responsive, and high-performing applications with strong frontend styling skills using Material-UI, Tailwind CSS, and ShadCN. Focuses on performance optimization, reliable API design, and delivering user-centered solutions that align with business goals.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Fegosoft Private Limited – DSAI Projects",
        timeframe: "Oct 2024 – Present",
        role: "Full Stack Developer",
        achievements: [
          <>
          Developed responsive frontend interfaces using Next.js, ShadCN, and Tailwind CSS,
          ensuring consistent UI/UX and 25% faster load times across modules.
        </>,
          <>
            Designed and implemented secure RESTful APIs and role-based authentication systems,
            improving platform security and scalability.
          </>,
          <>
            Configured Nginx reverse proxy and integrated AWS services (S3, RDS) for cloud-based
            scalability and high availability.
          </>,
          <>
            Built and maintained modular microservices architecture, reducing deployment time
            and improving maintainability.
          </>,
          <>
            Optimized API performance by 30% using Redis caching and rate-limiting strategies.
          </>,
          <>
            Authored HLD/LLD documentation and applied TDD/BDD principles, reducing production
            bugs by 25%.
          </>,
          <>
            Mentored junior developers and collaborated directly with stakeholders for seamless
            delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Fegosoft Private Limited – Service Provider Marketplace (SPM)",
        timeframe: "Mar 2024 – Oct 2024",
        role: "Full Stack Developer",
        achievements: [
          <>
            Developed a multi-tenant SaaS platform using Next.js, ShadCN, and Tailwind CSS,
            providing a responsive and modern user interface.
          </>,
          <>
            Engineered booking and notification systems via ZeptoMail, WhatsApp, and SMS,
            improving user engagement by 40%.
          </>,
          <>
            Designed backend APIs with Node.js, Express.js, and MySQL to manage service
            listings and transactions efficiently.
          </>,
          <>
            Implemented CI/CD pipelines and Dockerized deployments using Kubernetes for
            reliable and automated releases.
          </>,
          <>
            Conducted on-field client visits to gather product feedback, resulting in improved
            adoption and usability.
          </>,
        ],
        images: [],
      },
      {
        company: "Fegosoft Private Limited –Switchpe Web Journey & Portal",
        timeframe: "Nov 2022 – Feb 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Developed responsive fintech portals using React.js, Redux, and Material-UI,
            enhancing user experience across devices.
          </>,
          <>
            Integrated Google Login and Cashfree Payment Gateway for faster and more secure
            user onboarding.
          </>,
          <>
            Implemented role-based login systems and bulk upload features, reducing processing
            time by 15%.
          </>,
          <>
            Collaborated closely with UI/UX designers and backend engineers to deliver
            consistent, high-performing interfaces.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "NeoMart – E-Commerce Platform",
        link: "https://neomart-one.vercel.app/",
        description: (
          <>
            Developed an end-to-end <b>e-commerce platform</b> supporting authentication, payment
            processing, and order management. Implemented <b>role-based access</b> for admins, sellers,
            and customers, optimized performance using <b>Redis caching</b> and <b>RabbitMQ</b> for
            background jobs, and enhanced user experience through <b>Next.js SSR</b>.
          </>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Redis", icon: "redis" },
          { name: "RabbitMQ", icon: "rabbitmq" },
        ],
        images: [
          {
            src: "/images/projects/neomart/Dashboard-01.png",
            alt: "NeoMart product page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/neomart/Products-02.png",
            alt: "NeoMart dashboard interface",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/neomart/View-Product-03.png",
            alt: "NeoMart product view",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Service Provider Marketplace (SPM)",
        // link: "https://cal.com",
        description: (
          <>
            Developed a multi-tenant SaaS platform using <b>Next.js</b>, <b>Node.js</b>, and <b>MySQL</b>,
            enabling service providers to manage bookings, customers, and communications efficiently.
            Integrated real-time notifications via WhatsApp, ZeptoMail, and SMS, improving engagement by 40%.
          </>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "ShadCN", icon: "code" },
          { name: "MySQL", icon: "mysql" },
        ],
        // images: [
        //   {
        //     src: "/images/projects/spm/cover-01.jpg",
        //     alt: "Service Provider Marketplace dashboard",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/spm/cover-02.jpg",
        //     alt: "SPM booking interface",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "DSAI Web Portal",
        // link: "https://cal.com",
        description: (
          <>
            Built a secure, data-driven enterprise portal focused on <b>performance</b> and <b>scalability</b>.
            Designed REST APIs and microservices using <b>Node.js</b> and <b>Express.js</b>, integrated
            <b>Redis</b> caching to reduce response time by 30%, and developed responsive dashboards
            with <b>Next.js</b> and <b>Tailwind CSS</b>.
          </>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "Redis", icon: "redis" },
          { name: "AWS", icon: "aws" },
        ],
        // images: [
        //   {
        //     src: "/images/projects/dsai/cover-01.jpg",
        //     alt: "DSAI dashboard interface",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/dsai/cover-02.jpg",
        //     alt: "DSAI portal analytics view",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },

    ],
  },
  technicalSkills: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript (ES6+)", icon: "javascript" },
          { name: "Material-UI", icon: "mui" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "ShadCN", icon: "shadcn" },
          { name: "Responsive Design", icon: "layout" },
        ],
      },
      {
        title: "Backend",
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "RESTful APIs", icon: "api" },
          { name: "Role-Based Authentication", icon: "lock" },
          { name: "Microservices", icon: "layers" },
        ],
      },
      {
        title: "DevOps & Cloud",
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "CI/CD", icon: "cicd" },
          { name: "AWS", icon: "aws" },
          { name: "Azure", icon: "azure" },
          { name: "GCP", icon: "gcp" },
          { name: "Nginx", icon: "nginx" },
        ],
      },
      {
        title: "Database & Messaging",
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Redis", icon: "redis" },
          { name: "RabbitMQ", icon: "rabbitmq" },
          { name: "Kafka", icon: "kafka" },
        ],
      },
      {
        title: "Testing & State Management",
        tags: [
          { name: "Redux / Redux Toolkit", icon: "redux" },
          { name: "Jest", icon: "jest" },
          { name: "React Testing Library", icon: "test" },
          { name: "TDD / BDD", icon: "check" },
        ],
      },
      {
        title: "Architecture & System Design",
        tags: [
          { name: "System Design (HLD/LLD)", icon: "diagram" },
          { name: "API Contracts", icon: "file" },
          { name: "Scalable Architectures", icon: "architecture" },
        ],
      },
      {
        title: "Tools & Workflow",
        tags: [
          { name: "Git / GitHub", icon: "github" },
          { name: "Jira / Confluence", icon: "jira" },
          { name: "Agile / Scrum", icon: "agile" },
          { name: "SOLID Principles", icon: "solid" },
          { name: "DRY / KISS", icon: "principle" },
        ],
      },
    ],
  },
  
  
  
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
