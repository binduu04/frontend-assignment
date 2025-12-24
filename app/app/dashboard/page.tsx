'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TrendingUp, TrendingDown, Minus, Brain, Shield, Target } from 'lucide-react';
import brandsData from '@/data/brands.json';
import snapshotsData from '@/data/dashboard-snapshots.json';
import { Brand, DashboardSnapshot, Score } from '@/types';

type SnapshotsData = {
  [key: string]: DashboardSnapshot;
};

const typedBrands = brandsData as Brand[];
const typedSnapshots = snapshotsData as SnapshotsData;

function ScoreCard({ score, icon: Icon }: { score: Score; icon: React.ElementType }) {
  const getTrendIcon = () => {
    if (!score.trend) return null;
    if (score.trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (score.trend === 'down') return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getScoreColor = () => {
    const percentage = (score.value / score.maxValue) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {score.label}
        </CardTitle>
        <Icon className="w-5 h-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-bold ${getScoreColor()}`}>
            {score.value}
          </span>
          <span className="text-gray-500">/ {score.maxValue}</span>
          {getTrendIcon()}
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(typedBrands[0].id);
  
  const selectedBrand = typedBrands.find(b => b.id === selectedBrandId);
  const snapshot = typedSnapshots[selectedBrandId];

  if (!selectedBrand || !snapshot) {
    return <div>Loading...</div>;
  }

  const lastAuditDate = new Date(snapshot.lastAuditDate);
  const formattedDate = lastAuditDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            High-level brand intelligence snapshot for AI-first search performance
          </p>
        </div>

        {/* Brand Selector */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Brand
          </label>
          <Select value={selectedBrandId} onValueChange={setSelectedBrandId}>
            <SelectTrigger className="w-full md:w-80 bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {typedBrands.map((brand) => (
                <SelectItem key={brand.id} value={brand.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{brand.name}</span>
                    <span className="text-sm text-gray-500">
                      {brand.domain} • {brand.industry}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Snapshot Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ScoreCard score={snapshot.aiVisibilityScore} icon={Brain} />
          <ScoreCard score={snapshot.trustScore} icon={Shield} />
          <ScoreCard score={snapshot.keywordCoverage} icon={Target} />
        </div>

        {/* Last Audit Info */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-medium">{selectedBrand.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Domain:</span>
                <span className="font-medium">{selectedBrand.domain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Industry:</span>
                <span className="font-medium">{selectedBrand.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Audit:</span>
                <span className="font-medium">{formattedDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Action */}
        <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
          <p className="text-gray-600 mb-4">
            View detailed audit results to understand your AI-SEO performance across all 7 modules.
          </p>
          <a
            href="/app/audit"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Full Audit
          </a>
        </div>
      </div>
    </div>
  );
}
