import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { CognitaBaseDemo } from './cognita/CognitaBaseDemo';
import { CognitaProDemo } from './cognita/CognitaProDemo';
import { CognitaMaxDemo } from './cognita/CognitaMaxDemo';

interface CognitaDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const CognitaDemo: React.FC<CognitaDemoProps> = ({ demo, isMobile, isTablet, onPlanChange }) => {
  if (demo.plan === 'Base') {
    return <CognitaBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <CognitaProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <CognitaMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
