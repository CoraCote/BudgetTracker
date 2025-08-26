import Link from 'next/link';
import SignupForm from '../../components/SignupForm';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-80" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70" style={{animationDelay: '0.5s'}}></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-20 blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-25 blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-15 blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-indigo-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-10 w-16 h-16 border-2 border-purple-200 rounded-full opacity-20 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/" 
          className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-300 group hover:scale-110 hover:rotate-12"
        >
          <svg 
            className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >                                                                                                                                                                                                                                                                                                                               
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      <div className="flex min-h-screen relative z-10">
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[33%] p-4 sm:p-8 lg:p-10 flex items-center justify-center mx-auto">
          <div className="w-full">
            <div className="text-center mb-2">
              <div className="flex justify-center mb-2">
                <div className="w-16 h-16 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300 hover:rotate-3 overflow-hidden">
                  <Image 
                    src="/favicon.svg" 
                    alt="AdOptima Logo" 
                    width={64} 
                    height={64} 
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 animate-pulse">
                Welcome to AdOptima! 🚀
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Start your 14-day free trial today. <br /> No credit card needed, just pure awesomeness! ✨
              </p>
            </div>

            <SignupForm />

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4 mb-4">
              <button className="w-full group flex items-center justify-center px-6 py-3 border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-white/90 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02]">
                <svg className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-slate-700 font-semibold text-lg">Sign up with Google</span>
              </button>
              
              <button className="w-full group flex items-center justify-center px-6 py-3 border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-white/90 transition-all duration-300 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02]">
                <svg className="w-6 h-6 mr-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                  <path fill="#0078D4" d="M23.5 12c0 6.35-5.15 11.5-11.5 11.5S.5 18.35.5 12 5.65.5 12 .5 23.5 5.65 23.5 12z"/>
                  <path fill="#FFF" d="M12 1C5.65 1 .5 5.65 .5 12S5.65 23 12 23s11.5-4.65 11.5-11.5S18.35 1 12 1zm0 21C6.21 22 1.5 17.29 1.5 11.5S6.21 1 12 1s10.5 4.71 10.5 10.5S17.79 22 12 22z"/>
                  <path fill="#0078D4" d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z"/>
                  <path fill="#0078D4" d="M12 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5zm0 11c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"/>
                </svg>
                <span className="text-slate-700 font-semibold text-lg">Sign up with Microsoft</span>
              </button>
            </div>

            <div className="text-center mb-4">
              <p className="text-slate-600">
                Already rocking with us?{' '}
                <Link href="/signin" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors">
                  Sign In here! 🎉
                </Link>
              </p>
            </div>

            <div className="text-center mb-4">
              <p className="text-xs text-slate-500 leading-relaxed">
                By continuing, you're agreeing to our{' '}
                <Link href="#" className="text-indigo-600 hover:text-indigo-700 underline hover:no-underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-indigo-600 hover:text-indigo-700 underline hover:no-underline">
                  Privacy Policy
                </Link>
                . <br/> We promise to keep your data safe and sound! 🔒
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-500">
                🌍 Available in: English • 日本語 (Japanese) • Español (Spanish)
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-[67%] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-60 blur-sm animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-70 blur-sm animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-50 blur-sm animate-pulse delay-2000"></div>
            
            <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-indigo-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-1/3 left-10 w-16 h-16 border-2 border-purple-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center ml-10 mr-10">
            <div className="mb-6 bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="text-8xl text-white/30 animate-bounce">"</div>
              <blockquote className="text-3xl font-bold text-slate-800 mb-4 leading-relaxed">
                AdOptima is like having a team of AI geniuses watching our campaigns 24/7!
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-4 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <cite className="text-slate-700 font-semibold text-lg block">
                    Sarah Johnson
                  </cite>
                  <span className="text-slate-600">CEO, Digital Growth Solutions Ltd.</span>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                🏆 Industry recognition we're proud of
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="group text-center transform hover:scale-110 hover:-rotate-2 transition-all duration-500 cursor-pointer">
                  <Image 
                    src="/industry/award-ussearch-2024.png" 
                    alt="US Search Awards 2024 Winner" 
                    width={120} 
                    height={120} 
                    className="mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="group text-center transform hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer">
                  <Image 
                    src="/industry/award-ussearch-2023.png" 
                    alt="US Search Awards 2023 Winner" 
                    width={120} 
                    height={120} 
                    className="mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="group text-center transform hover:scale-110 hover:-rotate-2 transition-all duration-500 cursor-pointer">
                  <Image 
                    src="/industry/award-ussearch-2022.png" 
                    alt="US Search Awards 2022 Silver" 
                    width={120} 
                    height={120} 
                    className="mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="group text-center transform hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer">
                  <Image 
                    src="/industry/award-globalsearch-2023.png" 
                    alt="Global Search Awards 2023 Winner" 
                    width={120} 
                    height={120} 
                    className="mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-semibold text-slate-700 mb-6">
                  Trusted by the world's leading PPC and growth teams
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Image 
                      src="/industry/publicis-logo.png" 
                      alt="Publicis Groupe" 
                      width={120} 
                      height={60} 
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Image 
                      src="/industry/peakace.png" 
                      alt="Peak Ace" 
                      width={120} 
                      height={60} 
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Image 
                      src="/industry/iprospect.svg" 
                      alt="iProspect" 
                      width={120} 
                      height={60} 
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="group transform hover:scale-105 transition-all duration-300">
                    <Image 
                      src="/industry/emmasleep.png" 
                      alt="Emma. The Sleep Company" 
                      width={120} 
                      height={60} 
                      className="mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
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
