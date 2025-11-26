"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, QrCode, MapPin, CheckCircle2, Download, Leaf, Package, Truck, Ship } from "lucide-react"

const mockTraceabilityData = {
  lotId: "LOTE-2024-0456",
  product: "Café Arábica",
  producer: "Finca El Cafetal",
  status: "Exportado",
  events: [
    {
      stage: "Siembra",
      date: "2024-01-15",
      location: "Finca El Cafetal, Valle del Cauca",
      details: "Semilla certificada variedad Castillo",
      verified: true,
      responsible: "Carlos Mendoza",
      icon: Leaf,
    },
    {
      stage: "Fertilización",
      date: "2024-03-20",
      location: "Finca El Cafetal, Valle del Cauca",
      details: "Fertilizante orgánico certificado",
      verified: true,
      responsible: "Carlos Mendoza",
      icon: Leaf,
    },
    {
      stage: "Monitoreo",
      date: "2024-05-10",
      location: "Finca El Cafetal, Valle del Cauca",
      details: "3 alertas climáticas recibidas, medidas preventivas aplicadas",
      verified: true,
      responsible: "Sistema AgroConnect360",
      icon: Leaf,
    },
    {
      stage: "Cosecha",
      date: "2024-07-15",
      location: "Finca El Cafetal, Valle del Cauca",
      details: "2.5 toneladas - Calidad Premium",
      verified: true,
      responsible: "Carlos Mendoza",
      icon: Package,
    },
    {
      stage: "Transporte",
      date: "2024-07-16",
      location: "Ruta: Finca → Centro Acopio Cali",
      details: "Temp: 18-22°C, Duración: 4h 20m",
      verified: true,
      responsible: "Transportes Valle S.A.",
      icon: Truck,
    },
    {
      stage: "Centro de Acopio",
      date: "2024-07-17",
      location: "Centro Acopio Cali",
      details: "Calidad validada: 95/100, Procesamiento completado",
      verified: true,
      responsible: "AgriNova Foods",
      icon: Package,
    },
    {
      stage: "Exportación",
      date: "2024-07-20",
      location: "Puerto Buenaventura → Rotterdam",
      details: "Certificados: Orgánico, Fair Trade, Fitosanitario",
      verified: true,
      responsible: "Export Colombia S.A.",
      icon: Ship,
    },
  ],
}

export function TraceabilityView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = () => {
    if (searchTerm) {
      setShowResults(true)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Trazabilidad Blockchain</h1>
        <p className="text-muted-foreground">Rastreo completo desde la semilla hasta el consumidor</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Ingrese código QR o ID de lote..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button variant="outline">
              <QrCode className="h-4 w-4 mr-2" />
              Escanear QR
            </Button>
          </div>
        </CardContent>
      </Card>

      {showResults && (
        <>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{mockTraceabilityData.lotId}</CardTitle>
                  <p className="text-muted-foreground mt-1">{mockTraceabilityData.product}</p>
                </div>
                <Badge className="bg-success text-success-foreground">{mockTraceabilityData.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Productor</p>
                    <p className="text-sm text-muted-foreground">{mockTraceabilityData.producer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <QrCode className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Código QR</p>
                    <p className="text-sm text-muted-foreground">PROD-2024-0123</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar certificados
                </Button>
                <Button variant="outline" size="sm">
                  <QrCode className="h-4 w-4 mr-2" />
                  Compartir trazabilidad
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline de Trazabilidad</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {mockTraceabilityData.events.map((event, idx) => {
                    const Icon = event.icon
                    return (
                      <div key={idx} className="relative flex gap-4">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 pt-2">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{event.stage}</h4>
                              <p className="text-sm text-muted-foreground">{event.date}</p>
                            </div>
                            {event.verified && (
                              <Badge variant="outline" className="gap-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Verificado
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                              <span>{event.location}</span>
                            </p>
                            <p className="text-muted-foreground ml-6">{event.details}</p>
                            <p className="text-xs text-muted-foreground ml-6">Responsable: {event.responsible}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {!showResults && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <QrCode className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Busque un lote para ver su trazabilidad</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Ingrese el código de lote o escanee el código QR del producto para ver su historial completo de
              trazabilidad
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
