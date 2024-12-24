"use client";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ChevronDown, Laptop } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const images = [
  "/dragon.png",
  "/cat.png",
  "/doggy.png",
  "/magician.png",
  "/squid.png",
  "/brown_bear.png",
  "/eagle.png",
  "/cyborg.png",
];
export default function LandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="h-[78vh] relative flex-grow flex items-center justify-center bg-gradient-to-b from-background to-secondary overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={images[i % images.length]}
                  alt={`Image ${i + 1}`}
                  width={300}
                  height={300}
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative z-10 text-center space-y-6 p-8 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Welcome to GenWalls
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Create, share, and enjoy <br /> the best images generated by the
            community
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-blue-700"
          >
            <SignUpButton>Join the community</SignUpButton>
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-primary"
            {...fadeInUp}
          >
            Why Choose GenWalls?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FeatureCard
              title="Easy Image Creation"
              description="Write a prompt, One click, and get a high-quality image in a minute."
              imageSrc="/amazed.png"
              imageAlt="Easy Image Creation"
            />
            <FeatureCard
              title="Quality Images"
              description="Access thousands of high-quality images generated by the community."
              imageSrc="/dragon.png"
              imageAlt="Quality Images"
            />
            <FeatureCard
              title="Free download"
              description="Download any image for free and use it for your own projects."
              imageSrc="/free.png"
              imageAlt="Free download"
            />
            <FeatureCard
              title="Community Interaction"
              description="Like, comment(soon) and share your images with the community."
              imageSrc="/sharing.png"
              imageAlt="Community Interaction"
            />
          </div>
        </motion.div>
      </section>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-primary"
            {...fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="Is GenWalls free to use?"
              answer="Yes, GenWalls is currently free for all users. We plan to introduce premium features in the future, but a free tier will always be available."
              index={0}
              expandedFaq={expandedFaq}
              setExpandedFaq={setExpandedFaq}
            />
            <FaqItem
              question="What are the future plans for GenWalls?"
              answer="We're constantly working on improving GenWalls. Future plans include AI assited prompt generation, collaborative creation, and various styles of images."
              index={1}
              expandedFaq={expandedFaq}
              setExpandedFaq={setExpandedFaq}
            />
            <FaqItem
              question="How can I reach out?"
              answer="You can reach out to me on LinkedIn (see link in the footer)"
              index={2}
              expandedFaq={expandedFaq}
              setExpandedFaq={setExpandedFaq}
            />
            <FaqItem
              question="I would like to contribute to GenWalls, how can I do that?"
              answer="Send me a DM on LinkedIn (see footer)"
              index={3}
              expandedFaq={expandedFaq}
              setExpandedFaq={setExpandedFaq}
            />
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-4 bg-background text-center">
        <p className="text-sm text-muted-foreground text-center text-orange-500">
          Created by Salif Tankoano
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://saliftankoano.com"
            className="text-primary hover:underline"
          >
            <Laptop size={24} />
          </a>
          <a
            href="https://saliftankoano.com"
            className="text-primary hover:underline"
          >
            My Website
          </a>
          <a
            href="https://www.linkedin.com/in/salif-tankoano/"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saliftankoano"
            className="text-primary hover:underline"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: false }}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function FaqItem({
  question,
  answer,
  index,
  expandedFaq,
  setExpandedFaq,
}: {
  question: string;
  answer: string;
  index: number;
  expandedFaq: number | null;
  setExpandedFaq: (index: number | null) => void;
}) {
  const isExpanded = index === expandedFaq;

  return (
    <motion.div
      className="border border-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-card hover:bg-muted/50 transition-colors"
        onClick={() => setExpandedFaq(isExpanded ? null : index)}
      >
        <span className="font-semibold">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isExpanded ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-background">
          <p>{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
