'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

export default function DownloadSection() {
  return (
    <section id="download" className="section-padding" style={{ background: '#08080A', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(91,95,239,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none'
      }} />

      <div className="container-main text-center">
        <AnimatedSection>
          <div className="section-label">Mobile App</div>
          <h2 className="section-title mb-8" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
            Get the <span style={{ color: 'var(--indigo)' }}>EDUING App</span>
          </h2>
          <p className="mb-12 mx-auto" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', lineHeight: 1.6 }}>
            Take your university search and application journey anywhere. Download our mobile app to manage your profile and track applications on the go.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://drive.google.com/file/d/1aYbvkL0WC7Tr_9aKOSmNfYk66YskWCjc/view?usp=sharing" 
              className="group flex items-center gap-2 bg-white text-[#08080A] px-8 py-4 rounded-[16px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 0 24 10 24 23v466c0 13 10 23 23 23 4.5 0 8.5-1.3 12-3.5L304 256 59 3.5C55.5 1.3 51.5 0 47 0zm351.7 187.6L126.4 34 325.3 234.3l73.4-46.7zM304 256l172.6 98.6c4.5 2.2 8.5 3.5 13 3.5 13 0 23-10 23-23V178c0-13-10-23-23-23-4.5 0-8.5 1.3-13 3.5L304 256z"/>
              </svg>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-60">GET IT ON</span>
                <span className="text-[17px]">Google Play</span>
              </div>
            </a>

            <a 
              href="https://drive.google.com/file/d/1aYbvkL0WC7Tr_9aKOSmNfYk66YskWCjc/view?usp=sharing" 
              className="group flex items-center gap-2 bg-white text-[#08080A] px-8 py-4 rounded-[16px] font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <svg viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-[10px] uppercase tracking-wider opacity-60">DOWNLOAD ON THE</span>
                <span className="text-[17px]">App Store</span>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
