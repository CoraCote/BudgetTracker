import Link from 'next/link';
import VideoThumbnail from '@/components/VideoThumbnail';
import { getBrand } from '@/components/fictionalBrands';

const caseStudies = [
  {
    id: 1,
    company: "Summit Ridge Auto",
    title: "Summit Ridge Auto Levels the Dealership Ad Playing Field Using AdsOptima",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "Jul 21, 2025",
    description: "A multi-location dealer group pairs AdsOptima rules with its own campaign templates to keep every rooftop's budget on track."
  },
  {
    id: 2,
    company: "Northfield Digital",
    title: "Northfield Digital: Taking Routine Google Ads Work Off Strategists' Plates",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "May 19, 2025",
    description: "How a performance agency uses automated checks and bulk changes to spend more time on client strategy."
  },
  {
    id: 3,
    company: "Tallgrass Media",
    title: "The Tallgrass Media Story: A Small Agency Scaling Its PPC Practice",
    category: "ADSOPTIMA",
    subcategory: "CASE STUDY",
    date: "Feb 23, 2025",
    description: "A small agency with big PPC experience standardizes reporting and account audits across its client roster."
  }
];

export default function CaseStudies() {
  return (
    <section id="customer-stories" className="bg-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real success stories of customers optimizing with paid media automation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => {
            const brand = getBrand(study.company);
            return (
              <Link
                key={study.id}
                href="/case-studies"
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Header visual */}
                <VideoThumbnail title={study.title} seed={study.company} aspect={false} showPlay={false} className="h-48">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-lg font-bold mb-3">
                      {brand ? brand.initials : study.company.charAt(0)}
                    </span>
                    <span className="text-lg font-bold tracking-wide drop-shadow">{study.company}</span>
                    {brand && <span className="text-xs text-white/80 mt-1">{brand.industry}</span>}
                  </div>
                </VideoThumbnail>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                      {study.subcategory}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-sm">{study.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-3 group-hover:text-purple-600 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-right">
          <Link href="/case-studies" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
            Read more case studies
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
