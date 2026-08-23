import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { SchoolBaseDemo } from './school/SchoolBaseDemo';
import { SchoolProDemo } from './school/SchoolProDemo';
import { SchoolMaxDemo } from './school/SchoolMaxDemo';

interface SchoolDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const SchoolDemo: React.FC<SchoolDemoProps> = ({ demo, isMobile, isTablet }) => {
  if (demo.plan === 'Base') {
    return <SchoolBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <SchoolProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <SchoolMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
