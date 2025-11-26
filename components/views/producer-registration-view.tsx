"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, QrCode, Check } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ProducerRegistrationView() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    hectares: "",
    cropType: "",
    methods: "",
    organic: false,
    fairTrade: false,
    globalGap: false,
  })
  const [completed, setCompleted] = useState(false)

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      setCompleted(true)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const progress = (step / 4) * 100

  if (completed) {
    return (
      <div className="p-6">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-success flex items-center justify-center">
                  <Check className="h-8 w-8 text-success-foreground" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">¡Registro Completado!</h2>
                <p className="text-muted-foreground">El productor {formData.name} ha sido registrado exitosamente</p>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <QrCode className="h-32 w-32 mx-auto text-foreground" />
                <p className="text-sm text-muted-foreground mt-4">
                  Código QR del productor: PROD-2024-{Math.floor(Math.random() * 9999)}
                </p>
              </div>
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => {
                    setCompleted(false)
                    setStep(1)
                  }}
                >
                  Registrar otro productor
                </Button>
                <Button variant="outline">Descargar certificado</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Registro de Productor</h1>
          <p className="text-muted-foreground">Complete el formulario para registrar un nuevo productor</p>
        </div>

        <Card>
          <CardHeader>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Paso {step} de 4</span>
                <span>{Math.round(progress)}% completado</span>
              </div>
              <Progress value={progress} />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Datos Básicos</h3>
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del productor</Label>
                  <Input
                    id="name"
                    placeholder="Ej: Juan Carlos Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de productor</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequeño (&lt; 5 hectáreas)</SelectItem>
                      <SelectItem value="medium">Mediano (5-20 hectáreas)</SelectItem>
                      <SelectItem value="large">Grande (&gt; 20 hectáreas)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione una región" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="valle">Valle del Cauca</SelectItem>
                      <SelectItem value="antioquia">Antioquia</SelectItem>
                      <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
                      <SelectItem value="caldas">Caldas</SelectItem>
                      <SelectItem value="quindio">Quindío</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Información de Cultivo</h3>
                <div className="space-y-2">
                  <Label htmlFor="hectares">Hectáreas cultivadas</Label>
                  <Input
                    id="hectares"
                    type="number"
                    placeholder="Ej: 10"
                    value={formData.hectares}
                    onChange={(e) => setFormData({ ...formData, hectares: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cropType">Tipo de cultivo</Label>
                  <Select
                    value={formData.cropType}
                    onValueChange={(value) => setFormData({ ...formData, cropType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un cultivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coffee">Café</SelectItem>
                      <SelectItem value="avocado">Aguacate</SelectItem>
                      <SelectItem value="flowers">Flores</SelectItem>
                      <SelectItem value="cacao">Cacao</SelectItem>
                      <SelectItem value="banana">Plátano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="methods">Métodos de cultivo</Label>
                  <Select
                    value={formData.methods}
                    onValueChange={(value) => setFormData({ ...formData, methods: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione métodos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="organic">Orgánico</SelectItem>
                      <SelectItem value="conventional">Convencional</SelectItem>
                      <SelectItem value="mixed">Mixto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Certificaciones</h3>
                <p className="text-sm text-muted-foreground">Seleccione las certificaciones que posee el productor</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="organic"
                      checked={formData.organic}
                      onCheckedChange={(checked) => setFormData({ ...formData, organic: checked as boolean })}
                    />
                    <Label htmlFor="organic" className="cursor-pointer">
                      Certificación Orgánica
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="fairTrade"
                      checked={formData.fairTrade}
                      onCheckedChange={(checked) => setFormData({ ...formData, fairTrade: checked as boolean })}
                    />
                    <Label htmlFor="fairTrade" className="cursor-pointer">
                      Fair Trade (Comercio Justo)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="globalGap"
                      checked={formData.globalGap}
                      onCheckedChange={(checked) => setFormData({ ...formData, globalGap: checked as boolean })}
                    />
                    <Label htmlFor="globalGap" className="cursor-pointer">
                      Global GAP
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Resumen y Confirmación</h3>
                <div className="space-y-3 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Nombre:</span>
                    <span className="text-sm font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tipo:</span>
                    <Badge variant="secondary">{formData.type}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Ubicación:</span>
                    <span className="text-sm font-medium">{formData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Hectáreas:</span>
                    <span className="text-sm font-medium">{formData.hectares} ha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cultivo:</span>
                    <span className="text-sm font-medium">{formData.cropType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Certificaciones:</span>
                    <div className="flex gap-1">
                      {formData.organic && (
                        <Badge variant="outline" className="text-xs">
                          Orgánico
                        </Badge>
                      )}
                      {formData.fairTrade && (
                        <Badge variant="outline" className="text-xs">
                          Fair Trade
                        </Badge>
                      )}
                      {formData.globalGap && (
                        <Badge variant="outline" className="text-xs">
                          Global GAP
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Anterior
              </Button>
              <Button onClick={handleNext}>
                {step === 4 ? "Completar registro" : "Siguiente"}
                {step < 4 && <ChevronRight className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
