"use client";

import React from "react";
import { cn } from "@/lib/utils";
import ShinyText from "@/components/shiny-text";
import { servicesData, productsData } from "@/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="group rounded-2xl border border-white/5 bg-neutral-900/30 p-6 transition-all duration-300 hover:bg-neutral-900/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <motion.div
          className="text-2xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {service.icon}
        </motion.div>
        <h3 className="text-lg font-medium text-white">{service.title}</h3>
      </motion.div>

      <motion.p
        className="text-squirrel-neutral-100 text-sm leading-relaxed mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {service.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      >
        {service.features.slice(0, 3).map((feature, featureIndex) => (
          <motion.span
            key={featureIndex}
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.5 + featureIndex * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.05 }}
          >
            {feature}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ product, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400";
      case "Beta":
        return "bg-blue-500/20 text-blue-400";
      case "Coming Soon":
        return "bg-orange-500/20 text-orange-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <motion.div
      className="group rounded-2xl border border-white/5 bg-neutral-900/30 p-6 transition-all duration-300 hover:bg-neutral-900/50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div
        className="flex items-center justify-between mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {product.icon}
          </motion.div>
          <h3 className="text-lg font-medium text-white">{product.title}</h3>
        </div>
        <motion.span
          className={cn(
            "px-2 py-1 text-xs rounded-full",
            getStatusColor(product.status)
          )}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.3,
            type: "spring",
            stiffness: 300,
          }}
          whileHover={{ scale: 1.1 }}
        >
          {product.status}
        </motion.span>
      </motion.div>

      <motion.p
        className="text-squirrel-neutral-100 text-sm leading-relaxed mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
      >
        {product.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      >
        {product.features.slice(0, 3).map((feature, featureIndex) => (
          <motion.span
            key={featureIndex}
            className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.6 + featureIndex * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.05 }}
          >
            {feature}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          variants={headerVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-b from-white to-[#363535] text-transparent bg-clip-text leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
            Our Products & Services
          </h2>
          <p className="text-base sm:text-lg font-normal leading-7 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Innovative solutions and services designed to accelerate your
            digital transformation
          </p>
        </motion.div>{" "}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={sectionVariants}
        >
          {/* Products Section */}
          <motion.div className="space-y-6" variants={sectionVariants}>
            <motion.div
              className="text-center lg:text-left mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text mb-2">
                Our Products
              </h3>
              <p className="text-zinc-400 text-sm">
                Ready-to-use solutions for immediate impact
              </p>
            </motion.div>
            <div className="grid gap-4">
              {productsData.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div className="space-y-6" variants={sectionVariants}>
            <motion.div
              className="text-center lg:text-left mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text mb-2">
                Our Services
              </h3>
              <p className="text-zinc-400 text-sm">
                Custom development tailored to your needs
              </p>
            </motion.div>
            <div className="grid gap-4">
              {servicesData.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
