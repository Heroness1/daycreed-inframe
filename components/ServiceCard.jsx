export function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-10 rounded-3xl border hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center">
      <div className="text-6xl mb-6 group-hover:scale-110 transition">{icon}</div>
      <h3 className="font-bold text-2xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
