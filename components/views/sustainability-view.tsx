"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Sprout, Award, Download, TrendingDown } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const co2Data = [
  { name: "Reducido", value: 65 },
  { name: "Pendiente", value: 35 },
]

const pesticideData = [
  { month: "Ene", organico: 75, quimico: 25 },
  { month: "Feb", organico: 78, quimico: 22 },
  { month: "Mar", organico: 82, quimico: 18 },
  { month: "Abr", organico: 85, quimico: 15 },
  { month: "May", organico: 88, quimico: 12 },
  { month: "Jun", organico: 90, quimico: 10 },
]

const COLORS = ["hsl(var(--success))", "hsl(var(--muted))"]

const certifications = [
  { name: "USDA Organic", status: "Activo", producers: 234, expires: "2025-12-31" },
  { name: "Fair Trade", status: "Activo", producers: 189, expires: "2025-08-15" },
  { name: "Rainforest Alliance", status: "Activo", producers: 156, expires: "2025-10-20" },
  { name: "Global GAP", status: "En renovación", producers: 298, expires: "2024-12-31" },
]

export function SustainabilityView() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Certificaciones y Sostenibilidad</h1>
        <p className="text-muted-foreground">Impacto ambiental y certificaciones internacionales</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Reducción CO₂</CardTitle>
            <Leaf className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-success" />
              1,234 ton CO₂ ahorradas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ahorro de Agua</CardTitle>
            <Droplets className="h-5 w-5 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-muted-foreground">18.5M litros ahorrados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Uso Orgánico</CardTitle>
            <Sprout className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-muted-foreground">Pesticidas orgánicos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Hectáreas Certificadas</CardTitle>
            <Award className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,450</div>
            <p className="text-xs text-muted-foreground">+15% vs año anterior</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reducción de Huella de Carbono</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={co2Data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {co2Data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  Reducción alcanzada
                </span>
                <span className="font-medium">65%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-muted" />
                  Meta pendiente
                </span>
                <span className="font-medium">35%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uso de Pesticidas: Orgánicos vs Químicos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={pesticideData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="organico" fill="hsl(var(--success))" name="Orgánico" />
                <Bar dataKey="quimico" fill="hsl(var(--muted))" name="Químico" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Certificaciones Internacionales</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Estado actual de certificaciones</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="2024">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar reporte
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.producers} productores certificados</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Badge variant={cert.status === "Activo" ? "default" : "secondary"}>{cert.status}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">Vence: {cert.expires}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generador de Reportes de Sostenibilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <Select defaultValue="month">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Última semana</SelectItem>
                  <SelectItem value="month">Último mes</SelectItem>
                  <SelectItem value="quarter">Último trimestre</SelectItem>
                  <SelectItem value="year">Último año</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Zona</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las zonas</SelectItem>
                  <SelectItem value="valle">Valle del Cauca</SelectItem>
                  <SelectItem value="antioquia">Antioquia</SelectItem>
                  <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Formato</label>
              <Select defaultValue="pdf">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="infographic">Infografía</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full mt-4">
            <Download className="h-4 w-4 mr-2" />
            Generar reporte
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
