"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Clock, Thermometer, Package } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const shipments = [
  {
    id: "ENV-2024-0234",
    origin: "Finca El Cafetal",
    destination: "Puerto Buenaventura",
    status: "En tránsito",
    eta: "2h 30m",
    delay: null,
    temp: "18-22°C",
    driver: "Jorge Ramírez",
    progress: 65,
  },
  {
    id: "ENV-2024-0233",
    origin: "Hacienda La Esperanza",
    destination: "Centro Acopio Cali",
    status: "Entregado",
    eta: "Completado",
    delay: null,
    temp: "20°C",
    driver: "Ana María Torres",
    progress: 100,
  },
  {
    id: "ENV-2024-0232",
    origin: "Finca Los Andes",
    destination: "Puerto Cartagena",
    status: "Retrasado",
    eta: "5h 15m",
    delay: "2h",
    temp: "19-23°C",
    driver: "Carlos Méndez",
    progress: 45,
  },
  {
    id: "ENV-2024-0231",
    origin: "Cooperativa El Futuro",
    destination: "Centro Acopio Medellín",
    status: "En tránsito",
    eta: "1h 45m",
    delay: null,
    temp: "17-21°C",
    driver: "Luis Hernández",
    progress: 80,
  },
  {
    id: "ENV-2024-0230",
    origin: "Finca La Primavera",
    destination: "Puerto Barranquilla",
    status: "En tránsito",
    eta: "4h 10m",
    delay: null,
    temp: "20-24°C",
    driver: "Diana Gómez",
    progress: 55,
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Entregado":
      return "default"
    case "Retrasado":
      return "destructive"
    case "En tránsito":
      return "secondary"
    default:
      return "secondary"
  }
}

export function LogisticsView() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gestión Logística</h1>
        <p className="text-muted-foreground">Monitoreo de envíos y optimización de rutas en tiempo real</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mapa en Tiempo Real</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-[400px] w-full rounded-lg bg-muted flex items-center justify-center">
            <img
              src="/logistics-map-with-truck-routes-and-delivery-point.jpg"
              alt="Mapa logístico"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              <div className="text-center space-y-2 text-white">
                <Truck className="h-12 w-12 mx-auto" />
                <p className="font-medium">Vista en tiempo real</p>
                <p className="text-sm">Rutas activas y ubicación de vehículos</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Envíos Activos</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Optimizar rutas
            </Button>
            <Button size="sm">Nuevo envío</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Envío</TableHead>
                <TableHead>Origen</TableHead>
                <TableHead>Destino</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Conductor</TableHead>
                <TableHead>Temp</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {shipment.origin}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {shipment.destination}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(shipment.status) as any}>{shipment.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{shipment.driver}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Thermometer className="h-4 w-4 text-muted-foreground" />
                      {shipment.temp}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {shipment.eta}
                      {shipment.delay && <span className="text-danger ml-1">+{shipment.delay}</span>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Ver detalle
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Envíos en Tránsito</CardTitle>
            <Truck className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 con prioridad alta</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Entregas Hoy</CardTitle>
            <Package className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">96% tasa de éxito</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <Clock className="h-5 w-5 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2h</div>
            <p className="text-xs text-muted-foreground">-15% vs mes anterior</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
