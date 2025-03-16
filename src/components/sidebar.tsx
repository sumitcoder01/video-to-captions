import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import {
  Camera,
  Image,
  MessageSquare,
  Mic,
  Settings,
  Video,
  Youtube,
  Paintbrush,
  FileText,
  Languages,
  Grid,
  RefreshCw,
  Shirt,
  Home,
  Linkedin,
} from "lucide-react"
import { ThemeSwitcher } from "./ThemeSwitcher"

const tools = [
  { name: "All Tools", icon: Grid, badge: "2052" },
  { name: "Chat with AI", icon: MessageSquare },
  { name: "Chat Arena", icon: MessageSquare },
  { name: "Custom GPTs", icon: Settings },
  { name: "Chat with PDF", icon: FileText },
  { name: "AI Image Generator", icon: Image },
  { name: "AI Photo Studio", icon: Camera },
  { name: "AI Headshot Generator", icon: Camera },
  { name: "AI Music Generator", icon: Mic },
  { name: "AI Voice Cloner", icon: Mic },
  { name: "AI Video Generator", icon: Video },
  { name: "AI Logo Generator", icon: Paintbrush },
  { name: "AI YouTube Summarizer", icon: Youtube },
  { name: "AI Translator", icon: Languages },
  { name: "AI Illustration Generator", icon: Paintbrush },
  { name: "AI Icon Generator", icon: Grid },
  { name: "AI Image Restorer", icon: RefreshCw },
  { name: "AI Text To Speech", icon: Mic },
  { name: "AI Transcription", icon: FileText },
  { name: "AI Text Humanizer", icon: FileText },
  { name: "AI Background Remover", icon: Image },
  { name: "AI Clothes Changer", icon: Shirt },
  { name: "AI Interior Design", icon: Home },
  { name: "Image to Text", icon: FileText },
  { name: "LinkedIn Post Generator", icon: Linkedin },
]

export function Sidebar() {
  return (
    <div className="w-64 border-r bg-background flex flex-col h-screen">
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-mono font-bold">Galaxy.ai</h1>
        <ThemeSwitcher />
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100"
            >
              <tool.icon className="h-4 w-4 shrink-0" />
              <span className="text-sm flex-1">{tool.name}</span>
              {tool.badge && (
                <Badge variant="secondary" className="font-normal">
                  {tool.badge}
                </Badge>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t mt-auto">
        <Button variant="outline" className="w-full mb-4">
          Sign in
        </Button>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Upgrade</Button>
      </div>
    </div>
  )
}

