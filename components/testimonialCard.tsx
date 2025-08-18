"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TestimonialCardProps {
  feedback: string;
  client: string;
  title: string;
  img: string;
}

export function TestimonialCard({
  feedback,
  client,
  title,
  img,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg"
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <p className="text-gray-600 mb-6 leading-relaxed">{feedback}</p>
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src={img} alt={client} />
          <AvatarFallback>{client.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-gray-900">{client}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
