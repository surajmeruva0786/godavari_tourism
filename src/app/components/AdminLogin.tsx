import { useState } from 'react';
import { Lock } from 'lucide-react';
import { useApp } from '../utils/AppContext';

export function AdminLogin() {
  const { login } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl text-gray-900">Admin Login</h1>
          <p className="text-gray-600 text-sm mt-2">Godavari Tourism Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Access this page by visiting: /admin
        </p>
      </div>
    </div>
  );
}
