import { PricingFeature, PricingPlan } from "@/types";
import Link from "next/link";
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className={`relative shadow-[0px_0px_15px_0px_#1BCDD2] flex flex-col justify-between p-8 rounded-2xl transition-transform hover:-translate-y-2  text-white bg-slate-900 ${
        plan.popular?.isPopular ? "border-4 border-[#1BCDD2]" : ""
      }`}
    >
      {plan.popular?.isPopular && (
        <span className="absolute top-4 right-4 bg-[#1BCDD2] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {plan.popular.text}
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
      <p className="text-gray-300 mb-4">{plan.description}</p>
      <p className="text-3xl font-extrabold mb-2">{plan.priceYear}</p>
      {plan.renewalMonthly && (
        <p className="text-sm text-gray-400 mb-6">{plan.renewalMonthly}</p>
      )}
      <ul className="space-y-2 mb-6">
        {plan.features.map((feature: PricingFeature, i: number) => {
          const Icon = feature.icon;
          const iconColor =
            Icon === FaCheck
              ? "#1BCDD2"
              : Icon === FaTimes
              ? "#ff4d4d"
              : "#ffffff";
          return (
            <li key={i} className="flex items-center space-x-2">
              <Icon style={{ color: iconColor }} />
              <span>{feature.text}</span>
            </li>
          );
        })}
      </ul>
      {plan.title === "Custom" || plan.title === "কাস্টম" ? (
        <>
          <WhatsAppButton
            phone="8801870018508"
            message="Hello! I want to know about your service."
          >
            {plan.button}
          </WhatsAppButton>
        </>
      ) : (
        <Link
          href={{
            pathname: "/checkout",
            query: {
              plan: plan.title,
              amount: plan.priceYear,
            },
          }}
        >
          <button className="mt-auto w-full bg-[#1BCDD2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#099196] transition cursor-pointer">
            {plan.button}
          </button>
        </Link>
      )}
    </div>
  );
};

export default PricingCard;
