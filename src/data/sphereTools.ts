import {
  SiDotnet,
  SiPython,
  SiDjango,
  SiFlask,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si';

import { FaCss3Alt } from 'react-icons/fa6';

import type { SphereTool } from '../components/IconSphere';

export const SPHERE_TOOLS: SphereTool[] = [
  { label: '.NET', Icon: SiDotnet },
  { label: 'Python', Icon: SiPython },
  { label: 'Django', Icon: SiDjango },
  { label: 'Flask', Icon: SiFlask },
  { label: 'Git', Icon: SiGit },
  { label: 'GitHub', Icon: SiGithub },
  { label: 'Bootstrap', Icon: SiBootstrap },
  { label: 'HTML', Icon: SiHtml5 },
  { label: 'CSS', Icon: FaCss3Alt },
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'C#', abbr: 'C#' },
  { label: 'SQL Server', abbr: 'SQL' },
  { label: 'C++', abbr: 'C++' },
  { label: 'Visual Studio', abbr: 'VS' },
];