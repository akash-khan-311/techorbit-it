"use client";
import Container from "@/components/ui/Container";
import PricingCard from "@/components/ui/shared/PricingCard";
import { useTranslation } from "@/hooks/useTranslation";

const PricingPage = () => {
  const t = useTranslation();
  return (
    <section id="pricing">
      <Container>
        <div className="min-h-screen py-20 ">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              {t.pricing.title}
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">{t.pricing.text}</p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
            {t.pricing.plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PricingPage;
