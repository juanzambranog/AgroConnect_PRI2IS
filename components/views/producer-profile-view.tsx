"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, Award, TrendingUp, DollarSign, Calendar, Package } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const productionData = [
  { month: "Ene", production: 2.1 },
  { month: "Feb", production: 2.3 },
  { month: "Mar", production: 2.8 },
  { month: "Abr", production: 3.2 },
  { month: "May", production: 3.0 },
  { month: "Jun", production: 3.5 },
]

const recentLots = [
  { id: "LOTE-2024-0456", date: "2024-07-15", quantity: "2.5 ton", quality: 95, status: "Exportado" },
  { id: "LOTE-2024-0412", date: "2024-06-20", quantity: "2.2 ton", quality: 92, status: "Procesado" },
  { id: "LOTE-2024-0389", date: "2024-05-28", quantity: "2.8 ton", quality: 97, status: "Exportado" },
]

interface ProducerProfileViewProps {
  producerId: string
}

export function ProducerProfileView({ producerId }: ProducerProfileViewProps) {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">CM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Carlos Mendoza</h1>
                  <p className="text-muted-foreground flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4" />
                    Finca El Cafetal, Valle del Cauca
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Grande (25 ha)</Badge>
                  <Badge>Activo</Badge>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Badge variant="secondary" className="gap-1">
                  <Award className="h-3 w-3" />
                  Orgánico
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Award className="h-3 w-3" />
                  Fair Trade
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Award className="h-3 w-3" />
                  Global GAP
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Producción 2024</CardTitle>
            <Package className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16.4 ton</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-success" />
              +18% vs 2023
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Calidad Promedio</CardTitle>
            <Award className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94/100</div>
            <p className="text-xs text-muted-foreground">Premium</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lotes Procesados</CardTitle>
            <Package className="h-5 w-5 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">En 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Acumulados</CardTitle>
            <DollarSign className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,450</div>
            <p className="text-xs text-muted-foreground">USD</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Evolución de Producción</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="production"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  name="Producción (ton)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ubicación de Parcelas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[250px] w-full rounded-lg bg-muted flex items-center justify-center">
              <img
                src="/satellite-view-of-coffee-farm-with-gps-boundaries.jpg"
                alt="Mapa de parcelas"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                <div className="text-center space-y-2 text-white">
                  <MapPin className="h-12 w-12 mx-auto" />
                  <p className="font-medium">25 hectáreas delimitadas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Lotes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentLots.map((lot) => (
              <div
                key={lot.id}
                className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{lot.id}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {lot.date}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm">
                    <p className="font-medium">{lot.quantity}</p>
                    <p className="text-muted-foreground">Cantidad</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{lot.quality}/100</p>
                    <p className="text-muted-foreground">Calidad</p>
                  </div>
                  <Badge>{lot.status}</Badge>
                  <Button variant="ghost" size="sm">
                    Ver trazabilidad
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pagos Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "2024-07-20", amount: "$12,450", status: "Completado" },
                { date: "2024-06-25", amount: "$11,200", status: "Completado" },
                { date: "2024-06-01", amount: "$13,800", status: "Completado" },
              ].map((payment, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{payment.date}</p>
                    <p className="text-sm text-muted-foreground">{payment.amount} USD</p>
                  </div>
                  <Badge variant="outline" className="text-success">
                    {payment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas para Esta Zona</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-danger/10 rounded-lg border border-danger/20">
                <div className="h-2 w-2 rounded-full bg-danger mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Riesgo de heladas</p>
                  <p className="text-xs text-muted-foreground">Valle del Cauca • Próximas 48h</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Lluvias moderadas</p>
                  <p className="text-xs text-muted-foreground">Zona cafetera • Próxima semana</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
