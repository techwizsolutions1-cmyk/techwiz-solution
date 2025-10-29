import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const cards = [
  {
    title: "SEO Optimization",
    desc: "Boost your visibility with strategic keyword targeting, technical SEO, and performance optimization to dominate search engine rankings.",
    color: "bg-purple-600",
  },
  {
    title: "Content Marketing",
    desc: "Create powerful content strategies that engage your audience, build authority, and drive consistent organic traffic across platforms.",
    color: "bg-orange-500",
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience through creative social campaigns that grow followers, enhance brand loyalty, and drive conversions.",
    color: "bg-green-500",
  },
  {
    title: "PPC Advertising",
    desc: "Maximize ROI with high-performing Google Ads and Meta campaigns — designed for precision targeting and measurable results.",
    color: "bg-blue-600",
  },
  {
    title: "Email Marketing",
    desc: "Automate personalized email campaigns to nurture leads, increase customer retention, and boost overall marketing performance.",
    color: "bg-amber-500",
  },
  {
    title: "Brand Strategy & Design",
    desc: "Build a unique brand identity with powerful visuals, storytelling, and consistent digital experiences that leave a lasting impression.",
    color: "bg-cyan-500",
  },
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen flex items-center justify-center  overflow-hidden">
      <div className="flex flex-wrap justify-center gap-[-50px]">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{
              rotate: [-8, -4, 3, 7, -6, 10][i % 6],
              y: 0,
            }}
            whileHover={{
              rotate: 0,
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 10 },
            }}
            className={`${card.color} text-white w-64 h-80 rounded-2xl shadow-xl p-6 flex flex-col justify-between m-[-30px] transform-gpu`}
          >
            <div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-sm leading-snug">{card.desc}</p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full">
                <Rocket className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
