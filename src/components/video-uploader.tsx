"use client"

import type React from "react"

import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Upload } from "lucide-react"
import { useCallback, useRef, useState } from "react"
import { Input } from "@/src/components/ui/input"

export function VideoUploader() {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = Array.from(e.dataTransfer.files)
    if (files?.[0]?.type.startsWith("video/")) {
      setFile(files[0])
    }
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = e.target.files
    if (files?.[0]) {
      setFile(files[0])
    }
  }, [])

  const onButtonClick = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const handleUpload = useCallback(async () => {
    if (!file) return

    try {
      // Here you would typically upload to your server
      const formData = new FormData()
      formData.append("video", file)

      // Example upload endpoint - replace with your actual endpoint
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Upload failed")

      // Handle successful upload
      console.log("Upload successful")
    } catch (error) {
      console.error("Upload error:", error)
    }
  }, [file])

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Upload Video</h2>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors
              ${dragActive ? "border-primary bg-secondary/50" : "border-border"}
              ${file ? "border-green-500/50 bg-green-50" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Input ref={inputRef} type="file" accept="video/*" onChange={handleChange} className="hidden" />

            {!file ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <Button type="button" variant="secondary" onClick={onButtonClick}>
                    Browse Files
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">or drag and drop your video file here</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-medium">{file.name}</p>
                <Button type="button" variant="default" onClick={handleUpload}>
                  Upload Video
                </Button>
                <Button type="button" variant="ghost" onClick={() => setFile(null)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

