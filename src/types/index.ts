import { IconType } from "react-icons";

export interface PricingFeature {
  icon: IconType;
  text: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  description: string;
  priceYear: string;
  renewalMonthly: string;
  features: PricingFeature[];
  popular?: {
    isPopular: boolean;
    text: string;
  };
  button: string;
}

export interface PricingSection {
  title: string;
  text: string;
  plans: PricingPlan[];
}
