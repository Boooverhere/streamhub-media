export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billingCycle: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  subscriptionPlan: SubscriptionPlan;
}