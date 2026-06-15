import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { AppShell } from './components/AppShell';
import ClientDashboard from './components/dashboard/ClientDashboard';

export default function ClientsPage() {
  const [selectedClientName, setSelectedClientName] = useState<string>(() => {
    return localStorage.getItem('selectedClient') || 'Pure Air Solutions';
  });

  const handleClientChange = (name: string) => {
    setSelectedClientName(name);
    localStorage.setItem('selectedClient', name);
  };

  return (
    <AppShell
      activeNav="clients"
      title="AI-maintained dashboard"
      subtitle={selectedClientName}
      titleIcon={<Users size={20} className="text-[#607484]" />}
    >
      <div key={selectedClientName}>
        <ClientDashboard
          clientName={selectedClientName}
          onClientChange={handleClientChange}
        />
      </div>
    </AppShell>
  );
}
