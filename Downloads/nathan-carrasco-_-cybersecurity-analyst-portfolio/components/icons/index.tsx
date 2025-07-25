import React from 'react';

type IconProps = {
  className?: string;
};

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V8h3v11ZM6.5 6.73c-.97 0-1.75-.78-1.75-1.73S5.53 3.27 6.5 3.27c.97 0 1.75.78 1.75 1.73S7.47 6.73 6.5 6.73ZM19 19h-3v-5.6c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.93V19h-3V8h3v1.38h.04c.42-.79 1.44-1.63 2.87-1.63 3.07 0 3.64 2.02 3.64 4.64V19Z" />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.65H8.228a3.375 3.375 0 00-3.285 2.65l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
    </svg>
);

export const NetworkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12H21M12 21v-1.5m-8.25-12H3M12 3v1.5m0 16.5V21m-4.125-18L3.75 5.25m16.5 9.5L20.25 19.5M12 8.25h.008v.008H12V8.25zm0 3.75h.008v.008H12v-.008zm0 3.75h.008v.008H12v-.008z" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0l-4.5 16.5" />
  </svg>
);

export const CertificateIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.372-5.454c.26-1.002.72-1.936 1.355-2.753Q10.5 9.75 12 9.75t1.773.797c.635.817 1.095 1.75 1.355 2.753A9.75 9.75 0 0116.5 18.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75l-1.24-1.24a1.5 1.5 0 010-2.12l1.24-1.24 1.24 1.24a1.5 1.5 0 010 2.12l-1.24 1.24zM12 15.75L10.76 17a1.5 1.5 0 01-2.12 0l-1.24-1.24-1.24-1.24a1.5 1.5 0 010-2.12l1.24-1.24 1.24-1.24a1.5 1.5 0 012.12 0L12 8.25l1.24 1.24a1.5 1.5 0 010 2.12L12 12.75l1.24 1.24a1.5 1.5 0 010 2.12L12 17.25l-1.24-1.24a1.5 1.5 0 010-2.12l1.24-1.24z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 10.875c0-4.33-3.4-7.875-7.5-7.875s-7.5 3.545-7.5 7.875" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.25v-2.25c0-1.244-1.006-2.25-2.25-2.25H6c-1.244 0-2.25 1.006-2.25 2.25v2.25m16.5 0v2.25c0 1.244-1.006 2.25-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25m16.5 0h-16.5M12 9v2.25m-2.25 0h4.5" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V3M3.75 6.75v10.5a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25V6.75M4.5 9.75a2.25 2.25 0 01-2.25-2.25V4.5a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 012.25 2.25v3a2.25 2.25 0 01-2.25 2.25M4.5 9.75h15" />
  </svg>
);
