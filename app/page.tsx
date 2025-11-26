"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { DashboardView } from "@/components/views/dashboard-view"
import { ProducerRegistrationView } from "@/components/views/producer-registration-view"
import { TraceabilityView } from "@/components/views/traceability-view"
import { AlertsView } from "@/components/views/alerts-view"
import { LogisticsView } from "@/components/views/logistics-view"
import { SustainabilityView } from "@/components/views/sustainability-view"
import { ProducerProfileView } from "@/components/views/producer-profile-view"

export default function Home() {
  const [activeView, setActiveView] = useState("dashboard")
  const [selectedProducerId, setSelectedProducerId] = useState<string | null>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const handleViewChange = (view: string, producerId?: string) => {
    setActiveView(view)
    if (producerId) {
      setSelectedProducerId(producerId)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar
        activeView={activeView}
        onViewChange={handleViewChange}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {activeView === "dashboard" && <DashboardView onViewChange={handleViewChange} />}
          {activeView === "register" && <ProducerRegistrationView />}
          {activeView === "traceability" && <TraceabilityView />}
          {activeView === "alerts" && <AlertsView />}
          {activeView === "logistics" && <LogisticsView />}
          {activeView === "sustainability" && <SustainabilityView />}
          {activeView === "producer-profile" && selectedProducerId && (
            <ProducerProfileView producerId={selectedProducerId} />
          )}
        </main>
      </div>
    </div>
  )
}
