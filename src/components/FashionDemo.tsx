import React from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { FashionBaseDemo } from './fashion/FashionBaseDemo';
import { FashionProDemo } from './fashion/FashionProDemo';
import { FashionMaxDemo } from './fashion/FashionMaxDemo';

interface FashionDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const FashionDemo: React.FC<FashionDemoProps> = ({ demo, isMobile, isTablet }) => {
  if (demo.plan === 'Base') {
    return <FashionBaseDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  if (demo.plan === 'Pro') {
    return <FashionProDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
  }

  return <FashionMaxDemo demo={demo} isMobile={isMobile} isTablet={isTablet} />;
};
