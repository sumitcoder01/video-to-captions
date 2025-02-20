import { Card, CardContent } from "@/src/components/ui/card";

export function ExampleVideos() {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-6">Example Video Captions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Original Video</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="p-4 rounded-full bg-white/80 backdrop-blur">
                <div className="w-12 h-12 flex items-center justify-center">▶️</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Video with Captions</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="p-4 rounded-full bg-white/80 backdrop-blur">
                <div className="w-12 h-12 flex items-center justify-center">▶️</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

