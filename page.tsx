"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"google" | "apple">("google")
  const [googleEmail, setGoogleEmail] = useState("")
  const [googlePassword, setGooglePassword] = useState("")
  const [appleEmail, setAppleEmail] = useState("")
  const [applePassword, setApplePassword] = useState("")

  const handleSubmit = (e: FormEvent, provider: "google" | "apple") => {
    e.preventDefault()
    const email = provider === "google" ? googleEmail : appleEmail
    const password = provider === "google" ? googlePassword : applePassword
    if (email && password) {
      router.push("/dashboard")
    } else {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-blue-500 relative overflow-hidden flex flex-col items-center px-6">
      {/* Back to Home link */}
      <Link href="/" className="absolute top-4 left-4 text-white hover:underline">
        ← Back to Home
      </Link>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md pt-16 flex-grow">
        {/* Logo */}
        <div className="w-24 h-24 mb-6">
          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#2B4D6F" />
              <path d="M30 45 C30 35, 70 35, 70 45" stroke="white" strokeWidth="4" fill="none" />
              <circle cx="50" cy="50" r="25" fill="#4A90E2" stroke="white" strokeWidth="4" />
              <circle cx="42" cy="45" r="5" fill="white" />
            </svg>
          </div>
        </div>

        {/* App name and tagline */}
        <h1 className="text-white text-3xl font-bold mb-2 text-center">WATERBOY ALPHA</h1>
        <p className="text-white text-center mb-8 px-4 text-lg leading-tight">
          Clean Water Clear Choices
          <br />
          Empowering Communities with Real-Time Insights
        </p>

        {/* Login form */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-8">
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "google" | "apple")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="google" className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </TabsTrigger>
              <TabsTrigger value="apple" className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Apple
              </TabsTrigger>
            </TabsList>
            <TabsContent value="google">
              <form onSubmit={(e) => handleSubmit(e, "google")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="google-email">Email</Label>
                  <Input
                    id="google-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="google-password">Password</Label>
                  <Input
                    id="google-password"
                    type="password"
                    required
                    value={googlePassword}
                    onChange={(e) => setGooglePassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-800">
                  Sign in with Email
                </Button>
              </form>
              <div className="mt-4">
                <Button
                  onClick={(e) => handleSubmit(e, "google")}
                  className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                >
                  Sign in with Google Account
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="apple">
              <form onSubmit={(e) => handleSubmit(e, "apple")} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apple-email">Apple ID</Label>
                  <Input
                    id="apple-email"
                    type="email"
                    placeholder="you@icloud.com"
                    required
                    value={appleEmail}
                    onChange={(e) => setAppleEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apple-password">Password</Label>
                  <Input
                    id="apple-password"
                    type="password"
                    required
                    value={applePassword}
                    onChange={(e) => setApplePassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-800">
                  Sign in with Email
                </Button>
              </form>
              <div className="mt-4">
                <Button
                  onClick={(e) => handleSubmit(e, "apple")}
                  className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-300"
                >
                  Sign in with Apple ID
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

