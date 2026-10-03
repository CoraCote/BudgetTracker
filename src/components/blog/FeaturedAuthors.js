import InitialsAvatar from '@/components/InitialsAvatar';

const authors = [
  {
    id: 1,
    name: "AdsOptima Research Team",
    title: "Data studies and benchmark reports"
  },
  {
    id: 2,
    name: "AdsOptima Product Team",
    title: "Feature deep dives and release notes"
  },
  {
    id: 3,
    name: "AdsOptima Customer Success",
    title: "Onboarding guides and best practices"
  },
  {
    id: 4,
    name: "AdsOptima Paid Search Team",
    title: "Google Ads and Microsoft Advertising strategy"
  },
  {
    id: 5,
    name: "Northfield Digital",
    title: "Guest contributor, performance agency"
  },
  {
    id: 6,
    name: "Tallgrass Media",
    title: "Guest contributor, agency"
  }
];

export default function FeaturedAuthors() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Authors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our in-house teams and guest contributors from the PPC community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="text-center">
              <div className="relative mb-4 w-24 h-24 mx-auto">
                <InitialsAvatar
                  name={author.name}
                  size="xl"
                  className="border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-white" aria-hidden="true"></div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {author.name}
              </h3>
              <p className="text-xs text-gray-600 leading-tight">
                {author.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
