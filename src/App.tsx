import React, { useState } from 'react';
import { Brain, Database, Gauge, GitMerge, LineChart, Rocket, X, Book, ThumbsUp, Plus, Minus } from 'lucide-react';

function App() {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleAddInterest = (e: React.FormEvent) => {
    e.preventDefault();
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };

  const generateRecommendations = () => {
    // Mock recommendation generation based on user interests
    const mockRecommendations = [
      {
        title: 'Foundation Series',
        score: 0.95,
        reason: interests.includes('Science Fiction') 
          ? 'Based on your interest in Science Fiction'
          : 'Popular in similar interest categories',
      },
      {
        title: 'The Martian',
        score: 0.92,
        reason: interests.includes('Space') 
          ? 'Matches your interest in Space'
          : 'Highly rated by users with similar interests',
      },
      {
        title: 'Quantum Computing Basics',
        score: 0.89,
        reason: interests.includes('Technology')
          ? 'Aligns with your technology interests'
          : 'Recommended based on your profile',
      },
    ];

    setRecommendations(mockRecommendations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Intelligent Recommendation Engine
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            An end-to-end recommendation system powered by machine learning, delivering personalized suggestions with 91% precision
          </p>
          <button 
            onClick={() => setShowTechnicalDetails(true)}
            className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Technical Details
          </button>
        </div>
      </div>

      {/* User Input Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get Personalized Recommendations</h2>
            
            <form onSubmit={handleAddInterest} className="mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Enter your interests (e.g., Science Fiction, Technology, Space)"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add
                </button>
              </div>
            </form>

            {interests.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Your Interests:</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg"
                    >
                      <span>{interest}</span>
                      <button
                        onClick={() => handleRemoveInterest(interest)}
                        className="text-gray-400 hover:text-gray-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={generateRecommendations}
                  className="mt-4 px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get Recommendations
                </button>
              </div>
            )}

            {recommendations.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Your Personalized Recommendations</h3>
                <div className="grid gap-4">
                  {recommendations.map((item, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Book className="w-5 h-5 text-blue-400" />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">{item.reason}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-blue-600 px-2 py-1 rounded">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="font-semibold">{(item.score * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-blue-400" />}
            title="Hybrid Recommendation Engine"
            description="Combined Collaborative Filtering and Content-Based Filtering for optimal suggestions"
          />
          <FeatureCard
            icon={<Gauge className="w-8 h-8 text-purple-400" />}
            title="High Performance"
            description="Serving personalized recommendations in under 500ms"
          />
          <FeatureCard
            icon={<Database className="w-8 h-8 text-green-400" />}
            title="Scalable ETL Pipeline"
            description="Robust data processing with Python and Airflow"
          />
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Architecture</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GitMerge className="w-6 h-6 text-blue-400" />
              Machine Learning Pipeline
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                • TensorFlow for deep learning models
              </li>
              <li className="flex items-center gap-2">
                • Scikit-learn for feature engineering
              </li>
              <li className="flex items-center gap-2">
                • Custom collaborative filtering implementation
              </li>
              <li className="flex items-center gap-2">
                • Content-based filtering using NLP
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              Deployment Architecture
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                • FastAPI backend for real-time predictions
              </li>
              <li className="flex items-center gap-2">
                • Streamlit dashboard for visualization
              </li>
              <li className="flex items-center gap-2">
                • Airflow for automated data pipelines
              </li>
              <li className="flex items-center gap-2">
                • Containerized microservices architecture
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Performance Metrics</h2>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <LineChart className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Key Statistics</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricCard title="Precision" value="91%" />
              <MetricCard title="Response Time" value="<500ms" />
              <MetricCard title="Daily Users" value="10K+" />
              <MetricCard title="Data Sources" value="5+" />
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details Modal */}
      {showTechnicalDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Technical Specifications</h3>
              <button 
                onClick={() => setShowTechnicalDetails(false)}
                className="p-2 hover:bg-gray-700 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <section>
                <h4 className="text-xl font-semibold mb-3 text-blue-400">Machine Learning Models</h4>
                <p className="text-gray-300 mb-4">
                  The recommendation system employs a hybrid approach combining collaborative and content-based filtering:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Deep learning models built with TensorFlow for user embedding generation</li>
                  <li>Custom implementation of matrix factorization for collaborative filtering</li>
                  <li>NLP-based content analysis using BERT embeddings</li>
                  <li>Ensemble method for combining multiple model predictions</li>
                </ul>
              </section>
              <section>
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Data Pipeline</h4>
                <p className="text-gray-300 mb-4">
                  Automated ETL pipeline processing over 1M daily interactions:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Apache Airflow for workflow orchestration</li>
                  <li>Real-time data processing with Apache Kafka</li>
                  <li>Data validation and cleaning using Great Expectations</li>
                  <li>Automated feature engineering pipeline</li>
                </ul>
              </section>
              <section>
                <h4 className="text-xl font-semibold mb-3 text-green-400">System Architecture</h4>
                <p className="text-gray-300 mb-4">
                  Microservices architecture deployed on Kubernetes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>FastAPI backend with async request handling</li>
                  <li>Redis cache for high-performance response times</li>
                  <li>Horizontal scaling with Kubernetes</li>
                  <li>Monitoring with Prometheus and Grafana</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-blue-400 mb-1">{value}</div>
      <div className="text-sm text-gray-400">{title}</div>
    </div>
  );
}

export default App;