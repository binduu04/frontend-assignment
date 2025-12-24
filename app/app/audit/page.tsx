'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, AlertTriangle, XCircle, TrendingUp, Lightbulb } from 'lucide-react';
import auditDataJson from '@/data/audit-data.json';
import { AuditModule, Issue, Recommendation, Insight } from '@/types';

type AuditDataType = {
  [key: string]: {
    brandId: string;
    timestamp: string;
    modules: AuditModule[];
  };
};

const auditData = auditDataJson as AuditDataType;
const brandAudit = auditData['brand-1'];

function ModuleSidebar({ 
  modules, 
  selectedModuleId, 
  onSelectModule 
}: { 
  modules: AuditModule[];
  selectedModuleId: string;
  onSelectModule: (id: string) => void;
}) {
  return (
    <div className="space-y-2">
      {modules.map((module) => {
        const isActive = module.id === selectedModuleId;
        const scorePercentage = (module.score.value / module.score.maxValue) * 100;
        const scoreColor = scorePercentage >= 80 ? 'bg-green-500' : scorePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500';
        
        return (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className={`w-full text-left p-4 rounded-lg transition-all ${
              isActive
                ? 'bg-primary text-white shadow-md'
                : 'bg-white hover:bg-gray-50 border'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{module.name}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                isActive ? 'bg-white/20' : scoreColor + ' text-white'
              }`}>
                {module.score.value}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className={isActive ? 'bg-white' : scoreColor}
                style={{ width: `${scorePercentage}%`, height: '100%', borderRadius: '9999px' }}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  const getSeverityIcon = () => {
    switch (issue.severity) {
      case 'critical': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'high': return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'low': return <AlertCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  const getSeverityColor = () => {
    switch (issue.severity) {
      case 'critical': return 'border-red-200 bg-red-50';
      case 'high': return 'border-orange-200 bg-orange-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 ${getSeverityColor()}`}>
      <div className="flex items-start gap-3">
        {getSeverityIcon()}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{issue.title}</h4>
            <Badge variant="outline" className="text-xs">
              {issue.severity}
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-2">{issue.description}</p>
          <p className="text-xs text-gray-500">
            <strong>Affected:</strong> {issue.affectedArea}
          </p>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const getPriorityColor = () => {
    switch (recommendation.priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
    }
  };

  const getEffortColor = () => {
    switch (recommendation.effort) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="flex items-start gap-3 mb-3">
        <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{recommendation.title}</h4>
            <Badge className={getPriorityColor()}>
              {recommendation.priority} priority
            </Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">{recommendation.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Expected Impact:</span>
              <p className="font-medium text-green-700">{recommendation.expectedImpact}</p>
            </div>
            <div>
              <span className="text-gray-500">Effort:</span>
              <p className={`font-medium ${getEffortColor()}`}>
                {recommendation.effort.charAt(0).toUpperCase() + recommendation.effort.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const getTypeColor = () => {
    switch (insight.type) {
      case 'positive': return 'border-green-200 bg-green-50';
      case 'negative': return 'border-red-200 bg-red-50';
      case 'neutral': return 'border-gray-200 bg-gray-50';
    }
  };

  const getTypeIcon = () => {
    switch (insight.type) {
      case 'positive': return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'negative': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'neutral': return <TrendingUp className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 ${getTypeColor()}`}>
      <div className="flex items-start gap-3">
        {getTypeIcon()}
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
          <p className="text-sm text-gray-600">{insight.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(brandAudit.modules[0].id);
  
  const selectedModule = brandAudit.modules.find(m => m.id === selectedModuleId);

  if (!selectedModule) {
    return <div>Loading...</div>;
  }

  const scorePercentage = (selectedModule.score.value / selectedModule.score.maxValue) * 100;
  const scoreColor = scorePercentage >= 80 ? 'text-green-600' : scorePercentage >= 60 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="flex h-[calc(100vh-73px)]">
      {/* Left Sidebar - Module List */}
      <div className="w-80 bg-gray-50 border-r p-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Audit Modules</h2>
          <p className="text-sm text-gray-600">
            Select a module to view detailed analysis
          </p>
        </div>
        <ModuleSidebar
          modules={brandAudit.modules}
          selectedModuleId={selectedModuleId}
          onSelectModule={setSelectedModuleId}
        />
      </div>

      {/* Main Panel - Module Details */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="max-w-5xl mx-auto">
            {/* Module Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedModule.name}
              </h1>
              <p className="text-gray-600 mb-4">{selectedModule.description}</p>
              <div className="flex items-baseline gap-3">
                <span className={`text-5xl font-bold ${scoreColor}`}>
                  {selectedModule.score.value}
                </span>
                <span className="text-2xl text-gray-400">/ {selectedModule.score.maxValue}</span>
                <span className="ml-4 text-sm text-gray-600">{selectedModule.score.label}</span>
              </div>
            </div>

            {/* Insights Section */}
            {selectedModule.insights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Insights</h2>
                <div className="space-y-3">
                  {selectedModule.insights.map((insight) => (
                    <InsightCard key={insight.id} insight={insight} />
                  ))}
                </div>
              </div>
            )}

            {/* Issues Section */}
            {selectedModule.issues.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Issues & Flags ({selectedModule.issues.length})
                </h2>
                <div className="space-y-3">
                  {selectedModule.issues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations Section */}
            {selectedModule.recommendations.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Recommendations ({selectedModule.recommendations.length})
                </h2>
                <div className="space-y-3">
                  {selectedModule.recommendations.map((recommendation) => (
                    <RecommendationCard key={recommendation.id} recommendation={recommendation} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
