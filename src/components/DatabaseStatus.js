'use client';

import { useState, useEffect } from 'react';

export default function DatabaseStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkHealth = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/health');
      const data = await response.json();
      setStatus(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkHealth();
    // Refresh every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
        <h3 className="text-red-800 font-medium">Database Status Error</h3>
        <p className="text-red-600 text-sm">{error}</p>
        <button 
          onClick={checkHealth}
          className="mt-2 px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-600';
      case 'unhealthy': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy': return '🟢';
      case 'unhealthy': return '🔴';
      default: return '🟡';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Database Status</h3>
        <button 
          onClick={checkHealth}
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
        >
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {/* Overall Status */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getStatusIcon(status?.status)}</span>
          <span className={`font-medium ${getStatusColor(status?.status)}`}>
            {status?.status?.toUpperCase()}
          </span>
        </div>

        {/* Database Connection */}
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-medium text-gray-900 mb-2">Database Connection</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Status: <span className={status?.database?.status === 'connected' ? 'text-green-600' : 'text-red-600'}>
              {status?.database?.status}
            </span></p>
            {status?.database?.timestamp && (
              <p>Last Check: {new Date(status.database.timestamp).toLocaleString()}</p>
            )}
            {status?.database?.version && (
              <p>Version: {status.database.version}</p>
            )}
          </div>
        </div>

        {/* Connection Pool */}
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-medium text-gray-900 mb-2">Connection Pool</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Total Connections: {status?.pool?.totalCount || 0}</p>
            <p>Idle Connections: {status?.pool?.idleCount || 0}</p>
            <p>Waiting Requests: {status?.pool?.waitingCount || 0}</p>
          </div>
        </div>

        {/* Environment */}
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-medium text-gray-900 mb-2">Environment</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Node Environment: {status?.environment?.nodeEnv}</p>
            <p>Database URL: <span className={status?.environment?.databaseUrl === 'configured' ? 'text-green-600' : 'text-red-600'}>
              {status?.environment?.databaseUrl}
            </span></p>
            <p>JWT Secret: <span className={status?.environment?.jwtSecret === 'configured' ? 'text-green-600' : 'text-red-600'}>
              {status?.environment?.jwtSecret}
            </span></p>
          </div>
        </div>

        {/* Uptime */}
        <div className="border-l-4 border-yellow-500 pl-4">
          <h4 className="font-medium text-gray-900 mb-2">System Info</h4>
          <div className="text-sm text-gray-600">
            <p>Uptime: {Math.floor((status?.uptime || 0) / 60)} minutes</p>
            <p>Last Updated: {new Date(status?.timestamp).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
