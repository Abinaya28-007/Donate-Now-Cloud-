import type { ReactNode } from 'react';

export type Role = 'donor' | 'recipient' | 'volunteer' | 'admin';

export type DonationCategory =
  | 'Food'
  | 'Clothing'
  | 'Books'
  | 'Educational Materials'
  | 'Medical Supplies'
  | 'Electronics'
  | 'Furniture'
  | 'Hygiene Products'
  | 'Emergency Supplies'
  | 'Other';

export type Urgency = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type MatchReason = {
  title: string;
  detail: string;
};

export interface Donation {
  id: string;
  donorId: string;
  title: string;
  category: DonationCategory;
  quantity: number;
  unit: string;
  location: string;
  status: string;
  createdAt: string;
  expiresAt?: string;
}

export interface RequestItem {
  id: string;
  organizationId: string;
  category: DonationCategory;
  item: string;
  quantity: number;
  urgency: Urgency;
  beneficiaries: number;
  location: string;
  status: string;
  priorityScore: number;
  createdAt: string;
}

export interface MatchResult {
  donationId: string;
  requestId: string;
  item: string;
  score: number;
  distance: number;
  quantityFit: string;
  reasons: string[];
  status: string;
}
