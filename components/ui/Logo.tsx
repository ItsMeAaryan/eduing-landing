import Image from 'next/image'

export default function Logo({ size = 34, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/eduing-logo.png" alt="" width={size} height={Math.round(size * 1.03)} className="h-auto object-contain" style={{ width: size }} priority />
      <span className="font-display text-[21px] font-bold leading-none tracking-[-0.03em] text-ink">
        EDU<span className="text-brand">ING</span><span className="ml-0.5 text-[13px] font-semibold text-gold">.in</span>
      </span>
    </span>
  )
}
