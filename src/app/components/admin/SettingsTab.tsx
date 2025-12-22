import { useState } from 'react';
import { Save } from 'lucide-react';
import { useApp } from '../../utils/AppContext';
import { WebsiteSettings } from '../../utils/types';

export function SettingsTab() {
  const { settings, updateSettings } = useApp();
  const [formData, setFormData] = useState<WebsiteSettings>(settings);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-gray-900">Website Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <h3 className="text-lg text-gray-900 mb-4">Contact Information</h3>
          
          <div>
            <label className="block text-sm text-gray-700 mb-2">Primary Phone Number *</label>
            <input
              type="text"
              value={formData.contactPhone1}
              onChange={(e) => setFormData({ ...formData, contactPhone1: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
              placeholder="+91 98765 43210"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Secondary Phone Number *</label>
            <input
              type="text"
              value={formData.contactPhone2}
              onChange={(e) => setFormData({ ...formData, contactPhone2: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
              placeholder="+91 91234 56789"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white"
              placeholder="info@godavaritourism.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Office Address *</label>
            <textarea
              value={formData.contactAddress}
              onChange={(e) => setFormData({ ...formData, contactAddress: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white resize-none"
              rows={3}
              placeholder="Enter full address"
              required
            />
          </div>
        </div>

        {isSaved && (
          <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Settings saved successfully!
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Save className="h-5 w-5" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
