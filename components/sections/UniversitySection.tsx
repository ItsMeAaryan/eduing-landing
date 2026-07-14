'use client';


import { 
  Search, SlidersHorizontal, MapPin, IndianRupee, TrendingUp, 
  Award, Building2, GraduationCap, Sparkles, Filter, Briefcase, 
  BookOpen, LineChart, Building 
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const categories = ['Engineering', 'MBA', 'Medical', 'Law', 'Design', 'Commerce'];
const advancedFilters = [
  { label: 'Location', icon: MapPin },
  { label: 'Fee Range', icon: IndianRupee },
  { label: 'Placement %', icon: TrendingUp },
  { label: 'NIRF Ranking', icon: Award },
  { label: 'Hostel', icon: Building2 },
  { label: 'Scholarships', icon: GraduationCap },
  { label: 'AI Match', icon: Sparkles },
];

const suggestedFilters = ['High Placement', 'Low Fees', 'Scholarship Available', 'Hostel Included'];
const outcomes = ['Software Engineer', 'AI Engineer', 'Data Scientist', 'Cloud Engineer', 'Cyber Security'];
const scholarships = ['Government', 'Merit', 'Need Based', 'Private'];
const compared = ['Computer Science', 'AI & ML', 'Information Technology', 'Data Science', 'Cyber Security'];

export default function UniversitySection() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-24 lg:py-32" id="universities" aria-labelledby="discovery-heading">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
        
        {/* LEFT COLUMN (45%) */}
        <div className="flex w-full flex-col lg:max-w-[45%]">
          <AnimatedSection className="mb-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent-lighter">
                AI PROGRAM DISCOVERY
              </span>
            </div>

            <h2 id="discovery-heading" className="mb-5 font-display text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] text-white lg:text-[42px]">
              Discover Your Perfect Program,<br />
              <span className="bg-gradient-to-br from-[#818CF8] via-[#5B5FEF] to-[#A78BFA] bg-clip-text text-transparent">Powered by AI.</span>
            </h2>

            <p className="text-base leading-relaxed text-white/50">
              Search thousands of academic programs, compare universities, analyze placements, fees, scholarships and receive AI-powered recommendations from one place.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            <div className="group relative flex w-full items-center">
              <Search size={18} className="absolute left-4 text-white/30 transition-colors duration-200 group-focus-within:text-[#5B5FEF]" />
              <input 
                type="text" 
                aria-label="Search academic programs"
                defaultValue="Computer Science"
                className="w-full rounded-xl border border-white/10 bg-black/40 py-3.5 pl-11 pr-4 text-[14px] text-white shadow-inner outline-none transition-all duration-200 focus:border-[#5B5FEF]/50 focus:bg-black/60 focus:shadow-[0_0_20px_rgba(91,95,239,0.15)]"
              />
            </div>
            
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">Categories</div>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    className={`rounded-lg border px-3 py-1.5 text-[12px] font-medium transition-all duration-200 ${
                      cat === 'Engineering' 
                        ? 'border-[#5B5FEF]/50 bg-[#5B5FEF]/20 text-white' 
                        : 'border-white/5 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
                <SlidersHorizontal size={12} /> Advanced Filters
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {advancedFilters.map((filter) => {
                  const Icon = filter.icon;
                  return (
                    <button 
                      key={filter.label} 
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-[12px] font-medium text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                    >
                      <Icon size={14} className="text-white/40" />
                      {filter.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* RIGHT COLUMN (55%) */}
        <div className="w-full flex-1 lg:max-w-[55%]">
          <AnimatedSection delay={0.2}>
            <div className="flex w-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0A0A] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <BookOpen size={14} className="text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white">Computer Science</h3>
                    <p className="text-[11px] font-medium text-white/40">128 Programs Found</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1">
                  <Sparkles size={12} className="text-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-400">Excellent Match</span>
                </div>
              </div>

              <div className="flex flex-col gap-5 p-5">
                {/* Suggested Filters */}
                <div className="flex flex-wrap gap-2">
                  {suggestedFilters.map(f => (
                    <div key={f} className="flex cursor-default items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-white/50 transition-colors duration-200 hover:bg-white/5 hover:text-white/70">
                      <Filter size={10} /> {f}
                    </div>
                  ))}
                </div>

                {/* Analytics Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  
                  {/* Placement Insight */}
                  <div className="flex flex-col gap-3 rounded-[14px] border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      <LineChart size={12} /> Placement Insight
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Average Package</span>
                        <span className="font-bold text-white">₹8.5 LPA</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Highest Package</span>
                        <span className="font-bold text-emerald-400">₹42 LPA</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Top Recruiters</span>
                        <span className="font-bold text-white">150+</span>
                      </div>
                    </div>
                  </div>

                  {/* Fees Overview */}
                  <div className="flex flex-col gap-3 rounded-[14px] border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      <IndianRupee size={12} /> Fees Overview
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Lowest</span>
                        <span className="font-bold text-white">₹1.2L / yr</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Average</span>
                        <span className="font-bold text-white">₹3.5L / yr</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-white/60">Highest</span>
                        <span className="font-bold text-white">₹8.0L / yr</span>
                      </div>
                    </div>
                  </div>

                  {/* Career Outcomes */}
                  <div className="flex flex-col gap-3 rounded-[14px] border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      <Briefcase size={12} /> Career Outcomes
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {outcomes.map(o => (
                        <span key={o} className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-white/70">{o}</span>
                      ))}
                    </div>
                  </div>

                  {/* Scholarship Insight */}
                  <div className="flex flex-col gap-3 rounded-[14px] border border-white/5 bg-white/[0.02] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      <GraduationCap size={12} /> Scholarship Insight
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {scholarships.map(s => (
                        <span key={s} className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-white/70">{s}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* BOTTOM STRIP */}
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection delay={0.3} className="mt-12 w-full">
          <div className="flex flex-col gap-4 rounded-[16px] border border-white/5 bg-white/[0.015] p-5 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/40">
              <Building size={12} /> Programs Compared
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {compared.map((prog) => (
                <div key={prog} className="flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#5B5FEF]" />
                  <span className="text-[11px] font-medium text-white/80">{prog}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
