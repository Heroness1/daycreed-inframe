export function WhyCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition">
      <h3 className="font-bold text-xl mb-3 text-orange-600">
        {icon} {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
