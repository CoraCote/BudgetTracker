const authors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Account Management Lead, AdsOptima",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "CEO and Co-Founder of AdsOptima. #1 most influential PPC expert of 2024 & 2025.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Co-Founder, AdsOptima",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 4,
    name: "David Kim",
    title: "Microsoft Advertising Ads Liaison & Former AdsOptima Evangelist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Head of Paid Search at Compound Growth Marketing",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Founder & Chief Strategy Officer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
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
            Our diverse authors with expansive industry knowledge
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {authors.map((author) => (
            <div key={author.id} className="text-center">
              <div className="relative mb-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-white"></div>
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
