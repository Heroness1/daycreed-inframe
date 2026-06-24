import { WHY_US } from '@/config/constants';
import { WhyCard } from './WhyCard';

export function WhyUs() {
  return (
    <section id="kenapa-kami" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-16">Kenapa Pilih Subur Maju?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {WHY_US.map((reason) => (
            <WhyCard
              key={reason.id}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
