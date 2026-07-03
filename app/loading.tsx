export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-accent-lighter" />
    </div>
  )
}
