import { VideoUploader } from "@/src/components/video-uploader"
import { SubtitleSettings } from "@/src/components/subtitle-settings"
import { ExampleVideos } from "@/src/components/example-videos"

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">AI Video Caption Generator</h1>
        <p className="text-xl text-muted-foreground">Add professional captions to your video using AI</p>
      </div>

      <div className="grid gap-8">
        <VideoUploader />
        <SubtitleSettings />
        <ExampleVideos />
      </div>
    </div>
  )
}

