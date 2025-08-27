import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow">
              <Brain className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome to Aegnis</CardTitle>
          <CardDescription>Sign in to your AI-powered productivity dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center p-8 bg-muted/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Login Screen</h3>
            <p className="text-muted-foreground mb-4">
              This is a placeholder for the login functionality. The actual authentication system will be implemented in
              the next phase.
            </p>
            <div className="space-y-3">
              <Button className="w-full" size="lg">
                Sign In with Google
              </Button>
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                Sign In with Email
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
