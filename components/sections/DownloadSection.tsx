'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

// NOTE: previously this section showed separate "Google Play" and
// "App Store" buttons that both linked to the same generic Google Drive
// file — misleading, since there's no actual store listing yet. Using a
// single honest "Download" CTA until real store listings exist.
const APK_URL = 'https://drive.google.com/file/d/1aYbvkL0WC7Tr_9aKOSmNfYk66YskWCjc/view?usp=sharing';

export default function DownloadSection() {
  return (
    <section id="download" className="section-padding relative overflow-hidden bg-[#08080A]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(91,95,239,0.15) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main text-center">
        <AnimatedSection>
          <div className="section-label">Mobile App</div>
          <h2 className="section-title mb-8 text-[clamp(32px,6vw,56px)]">
            Get the <span className="text-accent">EDUING App</span>
          </h2>
          <p className="mx-auto mb-12 max-w-[600px] text-lg leading-relaxed text-white/50">
            Take your university search and application journey anywhere. Download our mobile app to manage your
            profile and track applications on the go.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={APK_URL}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#08080A] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-lighter focus-visible:outline-offset-2"
            >
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm351.7 187.6L126.4 34 325.3 234.3l73.4-46.7zM304 256l172.6 98.6c4.5 2.2 8.5 3.5 13 3.5 13 0 23-10 23-23V178c0-13-10-23-23-23-4.5 0-8.5 1.3-13 3.5L304 256z" />
              </svg>
              <span className="text-[17px] leading-tight">Download Android App</span>
            </a>
          </div>
          <p className="mt-4 text-xs text-white/30">iOS app coming soon</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
