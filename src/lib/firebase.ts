import type { MatchResult, RequestItem, Donation } from '@/lib/types';

const donationSample: Donation = {
  id: 'CD-1001',
  donorId: 'donor-01',
  title: '100 food packets',
  category: 'Food',
  quantity: 100,
  unit: 'Packets',
  location: 'Chennai',
  status: 'Verified',
  createdAt: '2026-10-08T10:30:00Z',
};

const requests: RequestItem[] = [
  {
    id: 'REQ-1042',
    organizationId: 'org-01',
    category: 'Food',
    item: '100 food packets',
    quantity: 80,
    urgency: 'CRITICAL',
    beneficiaries: 250,
    location: 'Chennai',
    status: 'Active',
    priorityScore: 96,
    createdAt: '2026-10-08T09:30:00Z',
  },
  {
    id: 'REQ-1046',
    organizationId: 'org-02',
    category: 'Food',
    item: '100 food packets',
    quantity: 100,
    urgency: 'MEDIUM',
    beneficiaries: 180,
    location: 'Tambaram',
    status: 'Active',
    priorityScore: 71,
    createdAt: '2026-10-08T08:00:00Z',
  },
];

export function calculateMatchScore(donation: Donation, request: RequestItem): { score: number; reasons: string[] } {
  const categoryMatch = donation.category === request.category ? 30 : 0;
  const distanceScore = Math.max(0, 25 - (request.location === donation.location ? 0 : 10));
  const urgencyValue = request.urgency === 'CRITICAL' ? 20 : request.urgency === 'HIGH' ? 15 : request.urgency === 'MEDIUM' ? 10 : 5;
  const quantityFit = request.quantity <= donation.quantity ? 15 : 8;
  const timingScore = 10;

  const score = Math.min(100, Math.round(categoryMatch + distanceScore + urgencyValue + quantityFit + timingScore));

  const reasons = [
    donation.category === request.category ? 'Same donation category' : 'Category overlap',
    request.urgency === 'CRITICAL' ? 'Critical priority' : 'Priority aligned',
    request.quantity <= donation.quantity ? 'Required quantity matches' : 'Requested quantity requires review',
    request.location === donation.location ? 'Recipient is near the donor' : 'Distance is acceptable',
    'Delivery required within the requested timing window',
  ];

  return { score, reasons };
}

export function getSampleMatches(): MatchResult[] {
  return requests.map((request) => {
    const result = calculateMatchScore(donationSample, request);
    return {
      donationId: donationSample.id,
      requestId: request.id,
      item: request.item,
      score: result.score,
      distance: request.location === donationSample.location ? 5.2 : 40,
      quantityFit: request.quantity <= donationSample.quantity ? 'Compatible' : 'Requires review',
      reasons: result.reasons,
      status: 'Best Match Found',
    };
  });
}
