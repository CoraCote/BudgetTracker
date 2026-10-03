import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import VideoThumbnail from '@/components/VideoThumbnail';
import InitialsAvatar from '@/components/InitialsAvatar';
import EmailSubscribeForm from '@/components/EmailSubscribeForm';

export const metadata = {
  title: 'PPC Town Hall - Video Podcast on All Things Search Marketing | AdsOptima',
  description: 'Join the AdsOptima Product Team and a rotating panel of PPC practitioners twice a month at 9 am Pacific.',
};

export default function PPCTownHallPage() {
  const upcomingEpisodes = [
    {
      id: 118,
      title: 'Next Town Hall coming soon',
      description: 'Subscribe above and we will email you when the next episode is scheduled.',
    },
  ];

  const mostViewedEpisodes = [
    {
      id: 117,
      title: 'Lessons from years of PPC',
      guest: 'Northfield Digital',
      guestRole: 'Agency strategist',
      date: 'Aug 27, 2025',
      description: 'Lessons from years in PPC: how agencies should prepare for what comes next.',
    },
    {
      id: 116,
      title: 'How agencies can thrive with AI',
      guest: 'Tallgrass Media',
      guestRole: 'Paid media lead',
      date: 'Aug 6, 2025',
      description: 'How agencies can thrive in the age of AI.',
    },
    {
      id: 115,
      title: 'Showing up in AI answers',
      guest: 'AdsOptima Research Team',
      guestRole: 'Research',
      date: 'Jul 16, 2025',
      description: 'Why brands go missing from AI-generated answers, and what you can do about it.',
    },
    {
      id: 114,
      title: 'Performance Max, explained',
      guest: 'Harborline Outfitters',
      guestRole: 'E-commerce marketing manager',
      date: 'Jul 2, 2025',
      description: 'What we learned running Performance Max for a seasonal e-commerce catalog.',
    },
    {
      id: 113,
      title: 'A 3-stage B2B funnel',
      guest: 'AdsOptima Customer Success',
      guestRole: 'Customer success',
      date: 'Jun 18, 2025',
      description: 'A practical 3-stage strategy for B2B paid social that is easy to measure.',
    },
    {
      id: 112,
      title: "What's next for PMax",
      guest: 'AdsOptima Product Team',
      guestRole: 'Product',
      date: 'Jun 4, 2025',
      description: 'Performance Max: what is changing this year and how to prepare.',
    },
  ];

  const recentEpisodes = [
    {
      id: 108,
      title: 'PMax, First-Party Data, & AI: How to Win at PPC in 2025',
      date: 'Mar 12, 2025',
      episode: 'PPC Town Hall 108',
    },
    {
      id: 107,
      title: "AI Can't Fix Your Bad Feeds Alone: Here's Why You Still Matter",
      date: 'Feb 26, 2025',
      episode: 'PPC Town Hall 107',
    },
    {
      id: 106,
      title: 'PPC in 2025: What to Stop, Start & Double Down On',
      date: 'Feb 12, 2025',
      episode: 'PPC Town Hall 106',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 opacity-30" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #D3D3D3 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                PPC Town Hall, video podcast on all things search marketing
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join the AdsOptima Product Team and a rotating panel of PPC practitioners twice a month at 9 am Pacific.
              </p>

              <EmailSubscribeForm
                id="ppctownhall-email"
                className="max-w-md"
                successMessage="Thanks! We'll email you when the next episode is scheduled."
              />
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <VideoThumbnail title="PPC Town Hall by AdsOptima" seed="ppc-town-hall-hero" playSize="lg">
                  <div className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-xs sm:text-sm font-medium">PPC TOWN HALL by ADSOPTIMA</span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-3">
                      <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg p-0.5">
                        <InitialsAvatar name="AdsOptima Product Team" size="medium" />
                      </span>
                      <div>
                        <p className="font-semibold">AdsOptima Product Team</p>
                        <p className="text-sm text-white/80">Your hosts</p>
                      </div>
                    </div>
                  </div>
                </VideoThumbnail>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Upcoming Episodes
          </h2>

          <div className="space-y-4">
            {upcomingEpisodes.map((episode) => (
              <div key={episode.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-lg font-semibold text-gray-800">{episode.title}</p>
                <p className="text-gray-600 mt-1">{episode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Most Viewed Episodes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mostViewedEpisodes.map((episode) => (
              <article key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <VideoThumbnail title={episode.title} seed={`town-hall-${episode.id}`}>
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg uppercase pr-24">
                      {episode.title}
                    </h3>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] text-white font-medium border border-white/30">
                      PPC TOWN HALL
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                    <InitialsAvatar name={episode.guest} size="small" className="ring-2 ring-white" />
                    <span className="px-3 py-1 rounded-lg backdrop-blur-sm bg-black/30 text-white text-sm font-medium truncate">
                      {episode.guest}
                    </span>
                  </div>
                </VideoThumbnail>

                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 font-medium">PPC Town Hall {episode.id}</p>
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-500">{episode.date} · Guest: {episode.guestRole}, {episode.guest}</p>
                    <p className="text-gray-900 font-medium leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                      {episode.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Recent Episodes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEpisodes.map((episode) => (
              <article key={episode.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-6 relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                  }}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white text-sm font-medium">{episode.episode}</p>
                      <Clock className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                    </div>
                    <p className="text-white text-sm">{episode.date}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 leading-relaxed group-hover:text-purple-600 transition-colors duration-300">
                    {episode.title}
                  </h3>

                  <div className="mt-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Recent Episode</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Want to be a panelist?
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Are you a serious PPC practitioner and ready to share what you know with the community?
            Request to be a panelist on an upcoming episode.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-xl shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            Contact us
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
