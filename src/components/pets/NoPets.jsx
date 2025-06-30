import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function NoPets({ onAddPet }) {
  return (
    <Card className="text-center items-center p-8 gap-6">
      <div className="text-5xl" role="img" aria-label="paw">
        🐾
      </div>
      <CardContent className="flex flex-col items-center gap-4 p-0">
        <h3 className="text-xl font-semibold">No tienes mascotas registradas</h3>
        <p className="text-muted-foreground mb-2">
          Comienza agregando información sobre tus queridas mascotas
        </p>
        <Button onClick={onAddPet}>Agregar Mascota</Button>
      </CardContent>
    </Card>
  )
}
