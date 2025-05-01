// pages/validator.js
import Link from "next/link";
import { motion } from "framer-motion";

const validators = [
  { name: "Akash", url: "https://akash.network" },
  { name: "Gitopia", url: "https://gitopia.com" },
  { name: "Q Blockchain", url: "https://qblockchain.org" },
  { name: "Avail", url: "https://availproject.org" },
];

export default function ValidatorPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <Link href="/">
        <button className="mb-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition">
          Back
        </button>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Testnet Validators</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {validators.map((v, index) => (
          <motion.a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block border border-white rounded-xl p-6 hover:bg-white hover:text-black transition-colors"
          >
            <h2 className="text-xl font-semibold">{v.name}</h2>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
