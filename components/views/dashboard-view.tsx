"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Package, AlertTriangle, CheckCircle2, TrendingUp, Clock } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const kpiData = [
  { icon: Users, label: "Productores Activos", value: "1,247", change: "+12%", color: "text-primary" },
  { icon: Package, label: "Toneladas en Tránsito", value: "3,456", change: "+8%", color: "text-info" },
  { icon: AlertTriangle, label: "Alertas Activas", value: "7", change: "-15%", color: "text-warning" },
  { icon: CheckCircle2, label: "Trazabilidad Completa", value: "94%", change: "+3%", color: "text-success" },
]

const productionData = [
  { month: "Ene", produccion: 2400, proyeccion: 2400 },
  { month: "Feb", produccion: 2210, proyeccion: 2600 },
  { month: "Mar", produccion: 2890, proyeccion: 2800 },
  { month: "Abr", produccion: 3200, proyeccion: 3100 },
  { month: "May", produccion: 3100, proyeccion: 3400 },
  { month: "Jun", produccion: 3600, proyeccion: 3600 },
]

const recentShipments = [
  {
    id: "ENV-2024-0234",
    origin: "Finca El Cafetal",
    destination: "Puerto Buenaventura",
    status: "En tránsito",
    eta: "2h 30m",
  },
  {
    id: "ENV-2024-0233",
    origin: "Hacienda La Esperanza",
    destination: "Centro Acopio Cali",
    status: "Entregado",
    eta: "Completado",
  },
  {
    id: "ENV-2024-0232",
    origin: "Finca Los Andes",
    destination: "Puerto Cartagena",
    status: "Retrasado",
    eta: "5h 15m",
  },
]

const activeAlerts = [
  { zone: "Valle del Cauca", type: "Heladas", severity: "Alta", affected: 45 },
  { zone: "Antioquia", type: "Lluvias intensas", severity: "Media", affected: 23 },
  { zone: "Cundinamarca", type: "Sequía", severity: "Baja", affected: 12 },
]

interface DashboardViewProps {
  onViewChange: (view: string, id?: string) => void
}

export function DashboardView({ onViewChange }: DashboardViewProps) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Vista general del ecosistema agrícola</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon
          return (
            <Card key={kpi.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
                <Icon className={cn("h-5 w-5", kpi.color)} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  <span className="text-success">{kpi.change}</span> vs mes anterior
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Production Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Producción Mensual vs. Proyección</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="produccion"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  name="Producción Real"
                />
                <Line
                  type="monotone"
                  dataKey="proyeccion"
                  stroke="hsl(var(--info))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Proyección"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Shipments */}
        <Card>
          <CardHeader>
            <CardTitle>Envíos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <div
                  key={shipment.id}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{shipment.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {shipment.origin} → {shipment.destination}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      variant={
                        shipment.status === "Entregado"
                          ? "default"
                          : shipment.status === "Retrasado"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {shipment.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {shipment.eta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => onViewChange("logistics")}>
              Ver todos los envíos
            </Button>
          </CardContent>
        </Card>

        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas Climáticas Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeAlerts.map((alert, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{alert.zone}</p>
                    <p className="text-xs text-muted-foreground">{alert.type}</p>
                    <p className="text-xs text-muted-foreground">{alert.affected} productores afectados</p>
                  </div>
                  <Badge
                    variant={
                      alert.severity === "Alta" ? "destructive" : alert.severity === "Media" ? "default" : "secondary"
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent" onClick={() => onViewChange("alerts")}>
              Ver todas las alertas
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Mapa en Tiempo Real</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[400px] w-full rounded-lg bg-muted flex items-center justify-center">
            <img
              src="/colombia-map-with-routes-and-markers-for-agricultu.jpg"
              alt="Mapa de Colombia"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              <div className="text-center space-y-2 text-white">
                <Package className="h-12 w-12 mx-auto" />
                <p className="font-medium">Vista interactiva del mapa</p>
                <p className="text-sm">Productores, rutas y centros de acopio</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
