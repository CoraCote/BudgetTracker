/** Contact form options, shared by the /contact page and POST /api/contact. */

export const CONTACT_TOPICS = [
  { value: 'sales', label: 'Talk to sales' },
  { value: 'demo', label: 'Book a demo' },
  { value: 'onboarding', label: 'Connect my ad accounts' },
  { value: 'support', label: 'Product support' },
  { value: 'partnership', label: 'Partnerships' },
];

export const CONTACT_TOPIC_VALUES = CONTACT_TOPICS.map((topic) => topic.value);

export const MONTHLY_SPEND_OPTIONS = [
  'Under $10k',
  '$10k – $50k',
  '$50k – $250k',
  '$250k – $1M',
  'Over $1M',
];

export const MESSAGE_MAX_LENGTH = 4000;
export const COMPANY_MAX_LENGTH = 150;
