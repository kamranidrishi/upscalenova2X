import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { RepairBaseDemo } from './repair/RepairBaseDemo';
import { RepairProDemo } from './repair/RepairProDemo';
import { RepairMaxDemo } from './repair/RepairMaxDemo';

interface RepairDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const RepairDemo: React.FC<RepairDemoProps> = ({ demo, isMobile, isTablet, onPlanChange }) => {
  if (demo.plan === 'Base') {
    return <RepairBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <RepairProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <RepairMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
