
import React from 'react';
import type { Project, SkillCategory, SocialLink, Experience, EducationItem, Certification } from './types';
import { GithubIcon, LinkedinIcon, ServerIcon, ShieldCheckIcon, CloudIcon, NetworkIcon, CodeIcon, CertificateIcon } from './components/icons';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nathancarrasco',
    icon: <GithubIcon className="h-6 w-6" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nathancarrasco',
    icon: <LinkedinIcon className="h-6 w-6" />,
  },
];

export const SKILL_DATA: SkillCategory[] = [
  {
    category: 'Cybersecurity',
    skills: [
      { name: 'Threat Analysis & Incident Response', icon: <ShieldCheckIcon /> },
      { name: 'SIEM & EDR Solutions', icon: <ShieldCheckIcon /> },
      { name: 'Firewall Management (Fortinet)', icon: <ShieldCheckIcon /> },
      { name: 'Vulnerability Management', icon: <ShieldCheckIcon /> },
      { name: 'PKI & Encryption', icon: <ShieldCheckIcon /> },
      { name: 'Compliance (NIST, HIPAA, PCI DSS)', icon: <ShieldCheckIcon /> },
    ],
  },
  {
    category: 'Cloud & Systems',
    skills: [
      { name: 'Azure & Microsoft 365', icon: <CloudIcon /> },
      { name: 'Windows Server & Active Directory', icon: <ServerIcon /> },
      { name: 'Linux (CentOS, Ubuntu, RedHat)', icon: <ServerIcon /> },
      { name: 'Virtualization (VMware, Hyper-V)', icon: <ServerIcon /> },
      { name: 'Cloud Management', icon: <CloudIcon /> },
    ],
  },
  {
    category: 'Automation & Scripting',
    skills: [
      { name: 'Python', icon: <CodeIcon /> },
      { name: 'PowerShell', icon: <CodeIcon /> },
      { name: 'Bash', icon: <CodeIcon /> },
    ],
  },
  {
    category: 'Networking',
    skills: [
      { name: 'Routing, Switching, VLANs', icon: <NetworkIcon /> },
      { name: 'VPN & Network Security', icon: <NetworkIcon /> },
      { name: 'VoIP Support', icon: <NetworkIcon /> },
      { name: 'DNS, DHCP, TCP/IP', icon: <NetworkIcon /> },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
    {
      title: 'Zoom Phone VoIP Deployment',
      period: 'Feb 2023 - July 2024',
      description: 'Led a comprehensive deployment of a Zoom Phone VOIP system with Yealink devices across the organization.',
      details: [
        'Conducted network assessment for bandwidth and QoS configuration.',
        'Implemented VLAN segmentation for voice traffic.',
        'Set up call routing rules, IVR menus, and auto-attendants.',
        'Successfully migrated over 200 extensions.'
      ],
      tags: ['VoIP', 'Network Assessment', 'QoS', 'VLAN'],
    },
    {
      title: 'Proofpoint Spam Filter',
      period: 'Aug 2022 - Aug 2024',
      description: 'Configured and managed an Azure connector for Proofpoint integration to enhance email security.',
      details: [
        'Managed email block and allow lists.',
        'Fine-tuned phishing and spam detection rules.',
        'Implemented email encryption policies for sensitive data.'
      ],
      tags: ['Email Security', 'Azure', 'Proofpoint', 'Phishing Prevention'],
    },
    {
      title: 'Guest Wi-Fi Deployment',
      period: 'Dec 2022 - Dec 2023',
      description: 'Successfully implemented VLAN and trunking configurations for enterprise access points to create a secure guest network.',
      details: [
        'Prevented subnet crosstalk between enterprise and guest networks.',
        'Enhanced security and performance for both user groups.'
      ],
      tags: ['Wi-Fi', 'VLAN', 'Network Security', 'Trunking'],
    },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Senior Support/Security Analyst',
    company: 'Zirrus',
    period: 'Jul 2024 - Present',
    location: 'Yadkinville, NC',
    responsibilities: [
      'Manage daily ticket volume and ensure adherence to ticket handling processes.',
      'Investigate alerts from firewalls, EDRs, IDS/IPS, and cloud platforms.',
      'Analyze scan results to identify and prioritize risks based on CVSS scores.',
      'Administer security tools like Bitdefender (EDR, MDR), DLP, and NAC.',
      'Review security controls in accordance with NIST SP-800 53.',
      'Lead vendor engagement for hardware/software/service issues within SLA.'
    ]
  },
  {
    role: 'System Administrator',
    company: 'VSI',
    period: 'Aug 2022 - Jun 2024',
    location: 'Millersburg, OR',
    responsibilities: [
      'Administered network, systems, and cloud environments (physical/virtual).',
      'Maintained Microsoft 365 services (Exchange, Teams, SharePoint).',
      'Managed VMware and Hyper-V virtualization environments.',
      'Experienced with Azure deployment and management.',
      'Handled Windows Server (AD, DNS, DHCP) and Linux (CentOS, Ubuntu, RedHat).',
      'Configured and managed Fortinet firewalls, VPNs, and advanced routing/switching.'
    ]
  },
    {
    role: 'Senior Deskside Analyst',
    company: 'EPA',
    period: 'Aug 2021 - Jun 2022',
    location: 'Corvallis, OR',
    responsibilities: [
      'Troubleshot Active Directory, Certificate Services, and Remote Desktop Services.',
      'Managed devices using Microsoft Intune (MDM) and SCCM/MCM.',
      'Investigated security incidents and monitored network traffic.',
      'Streamlined ITSM ServiceNow processes, improving asset management.',
      'Diagnosed hardware/software issues, leading to a 30% decrease in ticket resolution time.'
    ]
  },
  {
    role: 'Information Technology Technician',
    company: 'Mennonite Village',
    period: 'Aug 2018 - Aug 2021',
    location: '',
    responsibilities: [
      'Administered access controls and ensured compliance with HIPAA regulations.',
      'Configured Exchange and cloud-based SMTP connectors (Microsoft 365, Proofpoint).',
      'Managed OneDrive for Business DLP to protect PHI and HIPAA information.',
      'Administered Hyper-V clusters with SAN integration.',
      'Led IT infrastructure projects, including fiber and ethernet installation.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'B.S. Business Information Systems (BIS)',
        school: 'Oregon State University',
        period: '2016 - 2018'
    },
    {
        degree: 'A.S. Business and Administration',
        school: 'Linn-Benton Community College',
        period: '2014 - 2016'
    }
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { name: 'Certified in Cybersecurity (CC)', issuer: 'ISC2', icon: <CertificateIcon />},
    { name: 'Security+ Certificate', issuer: 'CompTIA', icon: <CertificateIcon />},
    { name: 'Cybersecurity Certificate', issuer: 'Google', icon: <CertificateIcon />},
    { name: 'Certified Associate Cybersecurity', issuer: 'Fortinet', icon: <CertificateIcon />}
]
