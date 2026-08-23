import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { FinFlowBaseDemo } from './finance/FinFlowBaseDemo';
import { FinFlowProDemo } from './finance/FinFlowProDemo';
import { FinFlowMaxDemo } from './finance/FinFlowMaxDemo';

interface FinanceDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const FinanceDemo: React.FC<FinanceDemoProps> = ({ demo, isMobile, isTablet, onPlanChange }) => {
  if (demo.plan === 'Base') {
    return <FinFlowBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <FinFlowProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <FinFlowMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
