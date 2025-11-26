"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Cloud, CloudRain, CloudSnow, Bug, Users, Bell } from "lucide-react"

const alerts = [
  {
    id: 1,
    title: "Riesgo de heladas",
    zone: "Valle del Cauca",
    type: "temperature",
    severity: "high",
    affected: 45,
    date: "2024-11-25",
    recommendations: [
      "Cubrir cultivos sensibles con plástico",
      "Regar cultivos antes del anochecer",
      "Preparar sistemas de calefacción",
    ],
  },
  {
    id: 2,
    title: "Lluvias intensas proyectadas",
    zone: "Antioquia",
    type: "rain",
    severity: "medium",
    affected: 23,
    date: "2024-11-26",
    recommendations: [
      "Revisar sistemas de drenaje",
      "Postponer aplicación de fertilizantes",
      "Asegurar estructuras temporales",
    ],
  },
  {
    id: 3,
    title: "Sequía prolongada",
    zone: "Cundinamarca",
    type: "drought",
    severity: "low",
    affected: 12,
    date: "2024-11-24",
    recommendations: [
      "Implementar riego por goteo",
      "Aplicar mulch para conservar humedad",
      "Monitorear niveles de estrés hídrico",
    ],
  },
  {
    id: 4,
    title: "Alerta de plaga - Broca del café",
    zone: "Caldas",
    type: "pest",
    severity: "high",
    affected: 67,
    date: "2024-11-25",
    recommendations: ["Realizar inspección de cultivos", "Aplicar control biológico", "Recolectar frutos caídos"],
  },
  {
    id: 5,
    title: "Temperaturas extremas",
    zone: "Quindío",
    type: "temperature",
    severity: "medium",
    affected: 31,
    date: "2024-11-26",
    recommendations: [
      "Aumentar frecuencia de riego",
      "Aplicar sombra en cultivos sensibles",
      "Monitorear signos de estrés térmico",
    ],
  },
]

const getAlertIcon = (type: string) => {
  switch (type) {
    case "temperature":
      return CloudSnow
    case "rain":
      return CloudRain
    case "drought":
      return Cloud
    case "pest":
      return Bug
    default:
      return AlertTriangle
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

const getSeverityLabel = (severity: string) => {
  switch (severity) {
    case "high":
      return "Alta"
    case "medium":
      return "Media"
    case "low":
      return "Baja"
    default:
      return severity
  }
}

export function AlertsView() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Alertas Climáticas</h1>
        <p className="text-muted-foreground">Sistema de alertas tempranas y recomendaciones</p>
      </div>

      <div className="flex gap-3">
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Tipo de alerta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las alertas</SelectItem>
            <SelectItem value="temperature">Temperatura</SelectItem>
            <SelectItem value="rain">Lluvia</SelectItem>
            <SelectItem value="drought">Sequía</SelectItem>
            <SelectItem value="pest">Plagas</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Severidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="high">Alta</SelectItem>
            <SelectItem value="medium">Media</SelectItem>
            <SelectItem value="low">Baja</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Zona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las zonas</SelectItem>
            <SelectItem value="valle">Valle del Cauca</SelectItem>
            <SelectItem value="antioquia">Antioquia</SelectItem>
            <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
            <SelectItem value="caldas">Caldas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mapa de Calor Climático</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[300px] w-full rounded-lg bg-muted flex items-center justify-center">
            <img
              src="/climate-heat-map-of-colombia-with-weather-patterns.jpg"
              alt="Mapa de calor climático"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              <div className="text-center space-y-2 text-white">
                <Cloud className="h-12 w-12 mx-auto" />
                <p className="font-medium">Mapa de calor climático</p>
                <p className="text-sm">Condiciones meteorológicas en tiempo real</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {alerts.map((alert) => {
          const Icon = getAlertIcon(alert.type)
          return (
            <Card key={alert.id}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                      alert.severity === "high"
                        ? "bg-danger/10"
                        : alert.severity === "medium"
                          ? "bg-warning/10"
                          : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        alert.severity === "high"
                          ? "text-danger"
                          : alert.severity === "medium"
                            ? "text-warning"
                            : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {alert.zone} • {alert.date}
                        </p>
                      </div>
                      <Badge variant={getSeverityColor(alert.severity) as any}>
                        {getSeverityLabel(alert.severity)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{alert.affected} productores potencialmente afectados</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Recomendaciones:</p>
                      <ul className="space-y-1">
                        {alert.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="sm" className="gap-2">
                      <Bell className="h-4 w-4" />
                      Notificar a productores
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
