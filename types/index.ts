// Brand types
export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
}

// Score types
export interface Score {
  value: number;
  maxValue: number;
  label: string;
  trend?: 'up' | 'down' | 'stable';
}

// Audit Module types
export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: Score;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'positive' | 'neutral' | 'negative';
}

export interface Issue {
  id: string;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  affectedArea: string;
}

export interface Recommendation {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  description: string;
  expectedImpact: string;
  effort: 'low' | 'medium' | 'high';
}

// Dashboard snapshot types
export interface DashboardSnapshot {
  brandId: string;
  aiVisibilityScore: Score;
  trustScore: Score;
  keywordCoverage: Score;
  lastAuditDate: string;
}

// Complete audit data
export interface AuditData {
  brandId: string;
  timestamp: string;
  modules: AuditModule[];
}

// Module IDs enum
export enum ModuleId {
  CONTENT_ANALYSIS = 'content-analysis',
  EEAT_ASSESSMENT = 'eeat-assessment',
  KEYWORD_OPTIMIZATION = 'keyword-optimization',
  TECHNICAL_SEO = 'technical-seo',
  COMPETITOR_ANALYSIS = 'competitor-analysis',
  AI_VISIBILITY = 'ai-visibility',
  BRAND_SENTIMENT = 'brand-sentiment',
}
