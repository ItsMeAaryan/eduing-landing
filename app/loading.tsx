export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line/10 border-t-accent-lighter" />
    </div>
  )
}
