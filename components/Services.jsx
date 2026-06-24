import { SERVICES } from '@/config/constants';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section id="layanan" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-4">Layanan Kami</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Solusi percetakan lengkap untuk kebutuhan bisnis dan akademik Anda
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
