"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, UserPlus, QrCode, AlertTriangle, Truck, Award, ChevronLeft, Leaf } from "lucide-react"

interface SidebarProps {
  activeView: string
  onViewChange: (view: string) => void
  collapsed: boolean
  onToggleCollapse: () => void
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "register", label: "Registro Productor", icon: UserPlus },
  { id: "traceability", label: "Trazabilidad", icon: QrCode },
  { id: "alerts", label: "Alertas Climáticas", icon: AlertTriangle },
  { id: "logistics", label: "Logística", icon: Truck },
  { id: "sustainability", label: "Sostenibilidad", icon: Award },
]

export function Sidebar({ activeView, onViewChange, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">AgroConnect360</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleCollapse}
          className={cn("text-sidebar-foreground hover:bg-sidebar-accent", collapsed && "mx-auto")}
        >
          <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
        </Button>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.id}
              variant={activeView === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                activeView === item.id && "bg-sidebar-accent text-sidebar-accent-foreground",
                collapsed && "justify-center px-2",
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          )
        })}
      </nav>

      {!collapsed && (
        <div className="border-t border-sidebar-border p-4">
          <p className="text-xs text-sidebar-foreground/60">© 2025 AgriNova Foods</p>
        </div>
      )}
    </aside>
  )
}
