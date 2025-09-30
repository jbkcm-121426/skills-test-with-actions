import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JP1TransformationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "JP1 to Cloud-Native Transformation",
      subtitle: "Enterprise Scheduling Modernization Roadmap",
      content: (
        <div className="space-y-8 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-xl mb-3 text-blue-900">Current State</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Hitachi JP1 scheduler on Azure infrastructure</li>
              <li>• Multiple EDI and FTP integrations with external parties</li>
              <li>• Legacy architecture limiting agility and scalability</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="font-bold text-xl mb-3 text-green-900">Target State</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cloud-native, serverless scheduling architecture</li>
              <li>• API-driven, event-based integrations</li>
              <li>• Enhanced monitoring, resilience, and cost optimization</li>
            </ul>
          </div>

          <div className="text-center mt-8">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold">
              Strategic Migration Journey
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Slide 1: Current Challenges & Drivers for Change",
      content: (
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-lg mb-3 text-red-800">Technical Challenges</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Infrastructure overhead:</strong> VM-based JP1 requires patching, maintenance</li>
                <li>• <strong>Scalability limits:</strong> Difficult to handle burst workloads</li>
                <li>• <strong>Integration complexity:</strong> Point-to-point FTP/EDI connections</li>
                <li>• <strong>Limited observability:</strong> Scattered logs and monitoring</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h3 className="font-bold text-lg mb-3 text-orange-800">Business Impact</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>High TCO:</strong> License + infrastructure costs</li>
                <li>• <strong>Slow time-to-market:</strong> Manual job configuration</li>
                <li>• <strong>Risk exposure:</strong> Single point of failure</li>
                <li>• <strong>Skill dependency:</strong> Specialized JP1 expertise required</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600 mt-6">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Strategic Drivers</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">40-60%</div>
                <div className="text-gray-600">Cost Reduction Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10x</div>
                <div className="text-gray-600">Faster Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                <div className="text-gray-600">Target Availability</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Slide 2: Cloud-Native Architecture Blueprint",
      content: (
        <div className="space-y-6 mt-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg text-center">
            <h3 className="font-bold text-lg">Azure-Native Scheduling Stack</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="border-2 border-purple-300 bg-purple-50 p-4 rounded-lg">
              <div className="font-bold text-purple-900 mb-2">🎯 Orchestration Layer</div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Azure Logic Apps / Azure Data Factory</strong> - Primary workflow orchestration
              </div>
              <div className="text-xs text-gray-600">✓ Visual workflow design | ✓ 400+ connectors | ✓ Built-in retry logic</div>
            </div>

            <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded-lg">
              <div className="font-bold text-blue-900 mb-2">⚡ Compute Layer</div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Azure Functions + Container Apps</strong> - Serverless execution
              </div>
              <div className="text-xs text-gray-600">✓ Event-driven | ✓ Auto-scaling | ✓ Pay-per-execution</div>
            </div>

            <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
              <div className="font-bold text-green-900 mb-2">🔄 Integration Layer</div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Azure API Management + Service Bus</strong> - Unified integration hub
              </div>
              <div className="text-xs text-gray-600">✓ Replace point-to-point FTP/EDI | ✓ Async messaging | ✓ Security & throttling</div>
            </div>

            <div className="border-2 border-yellow-300 bg-yellow-50 p-4 rounded-lg">
              <div className="font-bold text-yellow-900 mb-2">📊 Observability Layer</div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Azure Monitor + Application Insights</strong> - End-to-end visibility
              </div>
              <div className="text-xs text-gray-600">✓ Distributed tracing | ✓ Alerting | ✓ Dashboards</div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            <strong>Data Transfer Migration:</strong> FTP → Azure Blob Storage + Event Grid | EDI → Logic Apps with EDI connectors or Azure Integration Account
          </div>
        </div>
      )
    },
    {
      title: "Slide 3: Phased Migration Strategy",
      content: (
        <div className="space-y-4 mt-6">
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-blue-900">Phase 1: Foundation (Months 1-3)</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">3 months</span>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Job inventory and dependency mapping (JP1 job flow analysis)</li>
                <li>✓ Setup Azure landing zone (Logic Apps, ADF, Storage, APIM)</li>
                <li>✓ Pilot migration: 2-3 non-critical batch jobs</li>
                <li>✓ Establish monitoring baselines and runbooks</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-green-900">Phase 2: Integration Modernization (Months 4-7)</h3>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">4 months</span>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Migrate FTP integrations to Azure Blob + Event Grid pattern</li>
                <li>✓ Implement EDI workflows using Logic Apps EDI connectors</li>
                <li>✓ Build API gateway for external partner onboarding</li>
                <li>✓ Parallel run with JP1 for validation</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-purple-900">Phase 3: Core Workload Migration (Months 8-12)</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">5 months</span>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Migrate critical batch jobs in waves (by business domain)</li>
                <li>✓ Implement job dependency orchestration in ADF/Logic Apps</li>
                <li>✓ Setup disaster recovery and business continuity</li>
                <li>✓ User training and documentation</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-orange-900">Phase 4: Optimization & Decommission (Months 13-15)</h3>
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">3 months</span>
              </div>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>✓ Performance tuning and cost optimization</li>
                <li>✓ Hypercare support period (30-60 days)</li>
                <li>✓ JP1 infrastructure decommissioning</li>
                <li>✓ Post-migration audit and lessons learned</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Slide 4: Risk Mitigation & Success Factors",
      content: (
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-red-800 bg-red-50 p-2 rounded">⚠️ Key Risks</h3>
              
              <div className="border border-red-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-red-900">Business Continuity</div>
                <div className="text-gray-600 text-xs mt-1">Risk: Service disruption during cutover</div>
                <div className="text-gray-700 text-xs mt-1"><strong>Mitigation:</strong> Blue-green deployment, parallel runs, rollback plan</div>
              </div>

              <div className="border border-red-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-red-900">Integration Complexity</div>
                <div className="text-gray-600 text-xs mt-1">Risk: External partner coordination delays</div>
                <div className="text-gray-700 text-xs mt-1"><strong>Mitigation:</strong> Phased partner migration, maintain FTP bridge temporarily</div>
              </div>

              <div className="border border-red-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-red-900">Data Loss</div>
                <div className="text-gray-600 text-xs mt-1">Risk: Job execution history or data in-flight</div>
                <div className="text-gray-700 text-xs mt-1"><strong>Mitigation:</strong> Comprehensive backup, transaction logging, idempotent design</div>
              </div>

              <div className="border border-red-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-red-900">Skill Gap</div>
                <div className="text-gray-600 text-xs mt-1">Risk: Team unfamiliar with cloud-native tools</div>
                <div className="text-gray-700 text-xs mt-1"><strong>Mitigation:</strong> Early training, CoE setup, vendor support engagement</div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg text-green-800 bg-green-50 p-2 rounded">✅ Critical Success Factors</h3>
              
              <div className="border border-green-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-green-900">Executive Sponsorship</div>
                <div className="text-gray-700 text-xs mt-1">Secure C-level buy-in for budget and organizational change management</div>
              </div>

              <div className="border border-green-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-green-900">Cross-Functional Team</div>
                <div className="text-gray-700 text-xs mt-1">Infrastructure, Application, Integration, Security teams aligned from day 1</div>
              </div>

              <div className="border border-green-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-green-900">Automated Testing</div>
                <div className="text-gray-700 text-xs mt-1">CI/CD pipelines with regression testing for every migrated job</div>
              </div>

              <div className="border border-green-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-green-900">Partner Communication</div>
                <div className="text-gray-700 text-xs mt-1">Early notification to EDI/FTP partners with migration timeline and API specs</div>
              </div>

              <div className="border border-green-200 bg-white p-3 rounded text-sm">
                <div className="font-semibold text-green-900">Governance Model</div>
                <div className="text-gray-700 text-xs mt-1">Weekly steering committee, clear RACI, change control process</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded text-sm">
            <strong>Recommendation:</strong> Start with a 2-week Discovery Workshop to validate assumptions, assess JP1 complexity, and refine roadmap with stakeholders
          </div>
        </div>
      )
    },
    {
      title: "Slide 5: Business Case & Expected Outcomes",
      content: (
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-700 mb-1">45-60%</div>
              <div className="text-sm font-semibold text-green-900">Cost Reduction</div>
              <div className="text-xs text-gray-600 mt-2">Eliminate JP1 licensing, reduce infrastructure by 70%</div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-500 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">80%</div>
              <div className="text-sm font-semibold text-blue-900">Faster Deployment</div>
              <div className="text-xs text-gray-600 mt-2">New workflows in hours vs. days</div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-500 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-700 mb-1">99.95%</div>
              <div className="text-sm font-semibold text-purple-900">Availability</div>
              <div className="text-xs text-gray-600 mt-2">Azure SLA with multi-region DR</div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Investment Overview (15-month program)</h3>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-gray-700 mb-2">One-Time Costs</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• Migration project team: $400K-600K</li>
                  <li>• Azure setup & tooling: $80K-120K</li>
                  <li>• Training & change mgmt: $50K-80K</li>
                  <li>• Consulting/SI partner: $200K-350K</li>
                </ul>
                <div className="mt-2 font-bold text-gray-800">Total: $730K-1.15M</div>
              </div>
              <div>
                <div className="font-semibold text-gray-700 mb-2">Annual Recurring Savings</div>
                <ul className="space-y-1 text-gray-600">
                  <li>• JP1 licensing elimination: $180K-250K</li>
                  <li>• Infrastructure reduction: $200K-300K</li>
                  <li>• Operational efficiency: $120K-180K</li>
                </ul>
                <div className="mt-2 font-bold text-green-700">Savings: $500K-730K/year</div>
                <div className="mt-1 text-xs text-green-600">ROI: 12-18 months</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Strategic Benefits</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold mb-1">🚀 Business Agility</div>
                <div className="text-blue-100">Rapid integration of new partners and services</div>
              </div>
              <div>
                <div className="font-semibold mb-1">🔒 Enhanced Security</div>
                <div className="text-blue-100">Azure-native encryption, RBAC, audit trails</div>
              </div>
              <div>
                <div className="font-semibold mb-1">📈 Scalability</div>
                <div className="text-blue-100">Auto-scale for seasonal peaks, no capacity planning</div>
              </div>
              <div>
                <div className="font-semibold mb-1">🌍 Global Reach</div>
                <div className="text-blue-100">Multi-region deployment for international expansion</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-sm">
            <strong>Next Steps:</strong> Schedule discovery workshop → Validate architecture → Secure budget approval → Launch Phase 1 pilot (Target: Q4 2025)
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Slide Content */}
          <div className="p-12 min-h-[600px]">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {slides[currentSlide].title}
              </h1>
              {slides[currentSlide].subtitle && (
                <p className="text-xl text-gray-600">{slides[currentSlide].subtitle}</p>
              )}
            </div>
            <div>{slides[currentSlide].content}</div>
          </div>

          {/* Navigation */}
          <div className="bg-gray-100 px-12 py-6 flex items-center justify-between border-t-2 border-gray-300">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              disabled={currentSlide === slides.length - 1}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="bg-gray-200 px-12 py-3 text-center text-sm text-gray-600 font-medium">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JP1TransformationDeck;