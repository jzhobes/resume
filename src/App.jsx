import { useEffect, useState } from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import ResumeViewSelector from './ResumeViewSelector.jsx';
import ThemeSelector from './ThemeSelector.jsx';

const experience = [
  {
    company: 'Altoida',
    role: 'Senior Software Engineer',
    dates: 'July 2025 - October 2026',
    bullets: [
      'Led web dashboard and backend API development for Altoida\'s cognitive assessment platform, collaborating with iOS and Data Science teams.',
      'Took ownership of a multi-year initiative mid-development to enable multiple cognitive assessments and scoring models. Completed feature development on schedule for the planned year-end release by resolving requirements gaps, finishing the remaining frontend and backend work, and writing migration scripts for legacy assessment data. Used AI tools connected to Jira and Confluence to accelerate requirements review and implementation.',
      'Built the platform’s Playwright end-to-end test suite from the ground up, initially covering critical scenarios in an isolated Docker environment that recreated the QA stack (Node.js, PostgreSQL). Integrated it into GitLab CI, then expanded coverage to high-priority scenarios, growing the suite from 76 to 128 tests while cutting E2E job runtime by 56% through parallel execution and setup optimizations.',
      'Implemented the API integration connecting Altoida\'s iOS app with the Data Science assessment-processing pipeline, handling S3 uploads, SNS processing requests, and SQS model results with automatic retries. Collaborated with Data Science on the message contract while preserving legacy assessment processing.',
      'Promoted AI-assisted workflows through team demos, pairing one model to draft code, tickets, and documentation with another to review them, while emphasizing human review and technical judgment.',
      'Designed and implemented a feature flag system that let administrators enable features such as multi-assessment workflows and third-party integrations for selected customer organizations from the web dashboard without redeployments.',
      'Developed contract tests for all 40 API endpoints used by the iOS app, deriving response requirements from its repository. Integrated the tests into GitLab CI to automatically detect API compatibility issues.',
      'Built localized audit reporting with exports in CSV, HTML, and PDF formats. Used chunked PDF generation to manage memory usage for large reports.'
    ]
  },
  {
    company: 'Atlas5D',
    role: 'Principal Web Developer',
    dates: 'November 2019 - March 2025',
    bullets: [
      'Architected the web stack for a healthcare IoT platform that monitored patient mobility. Built its frontend, backend, and AWS infrastructure, including patient-data visualization and device-management tools.',
      'Implemented bidirectional device communication using AWS IoT MQTT, Redis pub/sub, and Socket.IO for telemetry and device control. Developed a companion React Native/Expo mobile app with authentication, device configuration, camera integration, and remote device management.',
      'Built and maintained CI/CD pipelines using Jenkins, GitHub Actions, and AWS Elastic Beanstalk, supporting environment-specific releases, automated Lambda deployments, and blue/green traffic switching.',
      'Refactored device measurement retrieval and processing across AWS Lambda, DynamoDB, and Node.js APIs to support historical visualization, cached metrics, and patient activity analysis.',
      'Delivered user-configurable real-time alerts using AWS SNS and SES, with targeted, user-scoped DynamoDB queries to optimize alert processing.',
      'Built patient identification workflows using Python-based facial recognition, AWS Lambda, S3, and asynchronous device-side training and validation.',
    ]
  },
  {
    company: 'Mountain Gap Solutions',
    role: 'Senior Developer',
    dates: 'April 2016 - November 2019',
    bullets: [
      'Served as technical lead for a web-based virtual classroom platform that enabled asynchronous and real-time collaboration between teachers and students, using React, Redux, Socket.IO, Node.js, Java (Spring Boot), and PostgreSQL.',
      'Designed and developed core components for an early version of a student social networking mobile application using React Native, GraphQL, Firebase, and Node.js.',
      'Established Jenkins CI/CD pipelines and collaborated with DevOps on AWS infrastructure and deployment strategies.'
    ]
  },
  {
    company: 'Liberty Mutual Insurance',
    role: 'Senior Developer',
    dates: 'February 2012 - April 2016',
    bullets: [
      'Served as technical lead for a multi-quote initiative that streamlined bundled auto and property insurance quoting through the company\'s web platform.',
      'Led frontend development of a mobile web quoting application and developed the quoting engine\'s backend presentation layer using JavaScript, Dojo, Java/Spring Boot, Drools, and REST APIs.',
      'Rewrote and optimized the quoting platform as a responsive web application as part of the core development team.'
    ]
  },
  {
    company: 'Xplana Learning',
    role: 'Lead Web Applications Developer',
    dates: 'January 2008 - February 2012',
    bullets: [
      'Architected and developed educational web applications and interactive eBook experiences using JavaScript and Java.'
    ]
  }
];

const skillGroups = [
  { label: 'Languages', skills: 'TypeScript, JavaScript, Python, Java' },
  { label: 'Frontend & Mobile', skills: 'React, React Native, Redux, MobX, Expo, HTML, CSS/SCSS' },
  { label: 'Backend & Data', skills: 'Node.js, Express, Spring Boot, Sequelize, PostgreSQL, DynamoDB, Redis' },
  { label: 'Cloud & DevOps', skills: 'AWS (EC2, Lambda, IoT, CloudWatch), Docker, GitLab CI/CD, GitHub Actions, Jenkins' },
  { label: 'Testing & APIs', skills: 'Playwright, Jest, REST, GraphQL, OpenAPI' }
];

const getResumeView = () => new URLSearchParams(window.location.search).get('view') === 'ats' ? 'ats' : 'designed';

export default function App() {
  const [view, setView] = useState(getResumeView);

  useEffect(() => {
    const syncView = () => setView(getResumeView());
    window.addEventListener('popstate', syncView);
    return () => window.removeEventListener('popstate', syncView);
  }, []);

  const changeView = nextView => {
    if (nextView === view) {
      return;
    }
    const url = new URL(window.location.href);
    if (nextView === 'ats') {
      url.searchParams.set('view', 'ats');
    } else {
      url.searchParams.delete('view');
    }
    window.history.pushState(null, '', url);
    setView(nextView);
  };

  return (
    <Container component='main' className={`resume resume--${view}`} maxWidth={false} disableGutters>
      <Box component='header' className='resume-header'>
        <Box className='resume-controls' role='group' aria-label='Resume display options'>
          <ResumeViewSelector view={view} onChange={changeView} />
          <ThemeSelector />
        </Box>
        <Typography component='p' className='eyebrow'>
          Greater Boston, MA
        </Typography>
        <Typography component='h1' className='resume-name'>John Ho</Typography>
        <Typography component='p' className='resume-title'>
          Senior Software Engineer · Full Stack · Technical Lead
        </Typography>
        <Box component='nav' className='contact-links' aria-label='Contact'>
          <Link href='mailto:jzho.dev@gmail.com'>
            <EmailOutlinedIcon fontSize='inherit' />
            jzho.dev@gmail.com
          </Link>
          <Link href='https://www.linkedin.com/in/jzhobes' target='_blank' rel='noreferrer'>
            <LinkedInIcon fontSize='inherit' />
            linkedin.com/in/jzhobes
          </Link>
          <Link href='https://github.com/jzhobes' target='_blank' rel='noreferrer'>
            <GitHubIcon fontSize='inherit' />
            github.com/jzhobes
          </Link>
        </Box>
        <Typography component='p' className='resume-summary'>
          {view === 'designed' && <><strong>TL;DR:</strong>{' '}</>}
          Senior full stack engineer and technical lead with nearly two decades of experience delivering web applications across the full software development life cycle. I specialize in React, TypeScript, Node.js, and AWS. I also believe building and shipping software should be the hard part, not developer friction. So I improve the tools and processes that help teams spend more time actually doing the building and shipping, and less time dealing with the stuff in between.
        </Typography>
      </Box>

      <Box className='resume-columns'>
        <Box component='section' className='experience' aria-labelledby='experience-heading'>
          <Typography component='h2' id='experience-heading' className='section-heading'>
            Professional experience
          </Typography>
          {experience.map(job => (
            <Box component='article' className='job' key={job.company}>
              <Box className='job-heading'>
                <Typography component='h3' className='company-name'>{job.company}</Typography>
                <Typography component='p' className='job-dates'>{job.dates}</Typography>
              </Box>
              <Typography component='p' className='job-role'>{job.role}</Typography>
              <Box component='ul' className='accomplishments'>
                {job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
              </Box>
            </Box>
          ))}
        </Box>

        <Box component={view === 'ats' ? 'section' : 'aside'} className='resume-sidebar' aria-label='Skills and education'>
          <Box component='section' aria-labelledby='skills-heading'>
            <Typography component='h2' id='skills-heading' className='section-heading'>
              Technical expertise
            </Typography>
            <Box component='dl' className='skill-groups'>
              {skillGroups.map(group => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.skills}</dd>
                </div>
              ))}
            </Box>
          </Box>
          <Box component='section' className='education' aria-labelledby='education-heading'>
            <Typography component='h2' id='education-heading' className='section-heading'>
              Education
            </Typography>
            <Box className='school'>
              <Typography component='h3'>University of Massachusetts Amherst</Typography>
              <Typography component='p'>Bachelor's degree in Computer Science</Typography>
              <Typography component='p'>Minor in Chinese</Typography>
              <Typography component='p' className='school-dates'>2003 - 2007</Typography>
            </Box>
            <Box className='school'>
              <Typography component='h3'>Fudan University</Typography>
              <Typography component='p'>Chinese Language Studies</Typography>
              <Typography component='p' className='school-dates'>2006 - 2007</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component='footer' className='resume-footer'>
        <span>John Ho</span><span>Resume</span>
      </Box>
    </Container>
  );
}
