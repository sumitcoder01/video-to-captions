"use client"

import { Card, CardContent } from "@/src/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible"
import { Button } from "@/src/components/ui/button"
import { ChevronDown, Video } from "lucide-react"

export function SubtitleSettings() {
  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Subtitles Position</h3>
            <Select defaultValue="bottom">
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="top">Top (25%)</SelectItem>
                <SelectItem value="middle">Middle (50%)</SelectItem>
                <SelectItem value="bottom">Bottom (75%)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">Choose where to position the subtitles in the video</p>
          </div>

          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Advanced Settings
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Font Style</h3>
                <Select defaultValue="poppins">
                  <SelectTrigger>
                    <SelectValue placeholder="Select font" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poppins">Poppins Extra Bold</SelectItem>
                    <SelectItem value="inter">Inter Bold</SelectItem>
                    <SelectItem value="roboto">Roboto Bold</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Select the font style for your subtitles</p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
            <Video className="mr-2 h-4 w-4" />
            Generate Captions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

