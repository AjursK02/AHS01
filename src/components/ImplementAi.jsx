import React, { useState } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, TrendingUp, Users, FileText, MessageSquare } from 'lucide-react';

const ImplementAi = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const aiAreas = [
    { id: 1, name: 'Data Analysis', icon: <TrendingUp />, description: 'AI-powered data analysis for deeper insights and trend prediction.' },
    { id: 2, name: 'Client Segmentation', icon: <Users />, description: 'Advanced clustering algorithms for precise client segmentation and personalized strategies.' },
    { id: 3, name: 'Report Generation', icon: <FileText />, description: 'Automated report generation using natural language processing for faster delivery.' },
    { id: 4, name: 'Chatbots', icon: <MessageSquare />, description: 'Intelligent chatbots for 24/7 client support and initial consultations.' },
  ];

  const impactData = [
    { name: 'Efficiency', withAI: 85, withoutAI: 50 },
    { name: 'Accuracy', withAI: 95, withoutAI: 70 },
    { name: 'Client Satisfaction', withAI: 90, withoutAI: 75 },
    { name: 'Cost Reduction', withAI: 70, withoutAI: 40 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">AI in Business Consulting</h1>
      <p className="text-xl mb-8 text-center">Revolutionizing the consulting industry with cutting-edge AI technologies</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {aiAreas.map((area) => (
          <div
            key={area.id}
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${
              selectedArea === area.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setSelectedArea(area.id === selectedArea ? null : area.id)}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4 text-blue-500">{area.icon}</div>
              <h3 className="text-xl font-semibold">{area.name}</h3>
            </div>
            {selectedArea === area.id && <p className="text-gray-600">{area.description}</p>}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Impact of AI on Consulting</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={impactData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="withAI" fill="#3b82f6" name="With AI" />
          <Bar dataKey="withoutAI" fill="#9ca3af" name="Without AI" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Consulting Business?</h2>
        <p className="mb-4">Discover how our AI-powered solutions can revolutionize your consulting practice. Schedule a demo today!</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};

export default ImplementAi;
