import Link from 'next/link';

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-200/40 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-purple-300/25 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-pink-300/35 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-blue-200/30 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-purple-200/25 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-pink-200/30 rounded-full blur-sm"></div>
      </div>

      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 group hover:scale-105"
        >
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      <div className="flex min-h-screen p-20 relative z-10">
        <div className="hidden lg:block w-1/4 p-10 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-purple-600 font-semibold">Connect Ad Accounts</h3>
                  <p className="text-sm text-gray-600 mt-1">Access the Ad Accounts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">Select Priorities</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">Pick Favorites</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">4</span>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">Set Up Monitoring</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">5</span>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">Invite Collaborators</h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-semibold">6</span>
                </div>
                <div>
                  <h3 className="text-gray-500 font-medium">Book Demo</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-purple-600 mb-4">Connect Ad Accounts</h1>
              <p className="text-xl text-gray-600">To get started, connect a Google Ads account.</p>
            </div>

            <div className="mb-8">
              <button className="w-full flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:border-purple-300 group">
                <div className="w-6 h-6 mr-4">
                  <img 
                    src="/adslogo.png" 
                    alt="Google Ads Logo" 
                    className="w-6 h-6 object-contain" 
                    width={24} 
                    height={24} 
                  />
                </div>
                <span className="text-lg font-semibold text-gray-800">Connect Google Ads Account</span>
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">
                Don't have a Google Ads account?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                We work with Microsoft Ads and Amazon Ads accounts as well.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:border-blue-300 group">
                  <div className="w-5 h-5 mr-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#00A4EF" d="M0 0h11.2v11.2H0z" />
                      <path fill="#7FBA00" d="M12.8 0H24v11.2H12.8z" />
                      <path fill="#FFB900" d="M0 12.8h11.2V24H0z" />
                      <path fill="#F25022" d="M12.8 12.8H24V24H12.8z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800">Connect Microsoft Ads Account</span>
                </button>

                <button className="flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:border-orange-300 group">
                  <div className="w-5 h-5 mr-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#FF9900" d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      <path fill="#232F3E" d="M12 22c-5.16-1.26-9-6.45-9-12V7l9-5 9 5v3c0 5.55-3.84 10.74-9 12z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800">Connect Amazon Ads Account</span>
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-white/50">
              <div className="flex-shrink-0 w-5 h-5 bg-purple-400 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-gray-600">
                You can connect more of these accounts later, as well as accounts for Meta Ads and Google Analytics 4.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden xl:block w-1/4 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50">
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-4">Frequently Asked Questions</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Why do I have to connect my ad accounts to AdsOptima?
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AdsOptima needs account access for insights and suggestions based on performance data.
                    We'll only make changes that you authorize. You can revoke permission anytime.
                    Connecting an account is completely confidential and won't be visible on ad interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="relative w-full h-48 bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg p-4">
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-8 right-6 w-12 h-12 bg-pink-300 rounded-full opacity-40"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-300 rounded-lg opacity-50"></div>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-2">
                    <div className="flex space-x-1 mb-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-gray-200 rounded"></div>
                      <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      <div className="w-1/2 h-1 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
