const FEATURES = [
  {
    label: "Mobile On-Site Repairs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="#f97316" strokeWidth="2" />
        <path d="M16 8h4l3 3v5h-7V8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" stroke="#f97316" strokeWidth="2" />
        <circle cx="18.5" cy="18.5" r="2.5" stroke="#f97316" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Preventive Maintenance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#f97316" strokeWidth="2" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Multiple Forklift Types",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Dallas-Fort Worth Coverage",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f97316" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="#f97316" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function FeatureBar() {
  return (
    <div className="bg-[#f3f4f6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex items-center gap-3 px-6 py-4">
              <div className="flex-shrink-0">{f.icon}</div>
              <span className="text-gray-700 text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
