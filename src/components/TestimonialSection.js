export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -left-8 -top-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50"></div>
            <div className="absolute -left-6 -top-2 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30"></div>
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
              Here&apos;s what performance marketing teams have to say about the{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rule Engine
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold" aria-hidden="true">
                    ND
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight text-gray-900">Northfield Digital</div>
                    <div className="text-sm text-gray-500">Performance agency</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-lg font-bold text-gray-900">5</span>
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
                "The Rule Engine is what our team relies on most. Our B2B clients constantly need to pace budgets up or down, and rules let us do that across every account without manual checks. Blueprints keep accounts healthy, and having alerts land in Slack means we catch issues the same day."
              </blockquote>

              <div className="border-t border-gray-100 pt-6">
                <div className="font-bold text-gray-900 text-lg">Head of Paid Media</div>
                <div className="text-gray-600">Northfield Digital</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">"Rules now handle our routine bid and budget checks, which gives the team a few hours back every week."</p>
            <div className="font-semibold text-gray-900">Head of Paid Search</div>
            <div className="text-sm text-gray-600">Harborline Outfitters</div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">"Automated pausing of low-stock inventory ads keeps our spend focused on vehicles we can actually sell."</p>
            <div className="font-semibold text-gray-900">Digital Marketing Manager</div>
            <div className="text-sm text-gray-600">Summit Ridge Auto</div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">"Custom rules let us turn our own playbooks into automations, so strategies we used to run by hand now run on schedule."</p>
            <div className="font-semibold text-gray-900">Managing Director</div>
            <div className="text-sm text-gray-600">Tallgrass Media</div>
          </div>
        </div>
      </div>
    </section>
  );
}
