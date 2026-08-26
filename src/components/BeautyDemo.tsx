import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { BeautyBaseDemo } from './beauty/BeautyBaseDemo';
import { BeautyProDemo } from './beauty/BeautyProDemo';
import { BeautyMaxDemo } from './beauty/BeautyMaxDemo';

interface BeautyDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const BeautyDemo: React.FC<BeautyDemoProps> = ({ demo, isMobile, isTablet }) => {
  if (demo.plan === 'Base') {
    return <BeautyBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <BeautyProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <BeautyMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
