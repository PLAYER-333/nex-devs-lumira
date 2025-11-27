import { ReactNode } from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient?: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface OpportunityProps {
  title: string;
  icon: ReactNode;
  description: string;
}
