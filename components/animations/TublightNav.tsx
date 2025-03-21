"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [isMobile, setIsMobile] = useState(false);
  let dropdownTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-2 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = activeTab === item.name;
          const isDropdownActive = activeDropdown === item.name;

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setActiveDropdown(item.name);
              }}
              onMouseLeave={() => {
                dropdownTimeout = setTimeout(() => {
                  setActiveDropdown(null);
                }, 200); // Small delay to allow animation visibility
              }}
            >
              <a
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">{item.icon}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>

              {/* Animated Dropdown */}
              <AnimatePresence>
                {isDropdownActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-black w-[40rem] bg-white border border-border rounded-xl shadow-lg"
                  >
                    <div className="py-10 px-4 grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Analytics</p>
                            <p className="text-xs text-gray-500">
                              Get a better understanding of your traffic
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Engagement</p>
                            <p className="text-xs text-gray-500">
                              Speak directly to your customers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Security</p>
                            <p className="text-xs text-gray-500">
                              Your customers' data will be safe
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Integrations</p>
                            <p className="text-xs text-gray-500">
                              Connect with third-party tools
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Automations</p>
                            <p className="text-xs text-gray-500">
                              Build strategic funnels
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded" />
                          <div>
                            <p className="text-sm font-medium">Reports</p>
                            <p className="text-xs text-gray-500">
                              Manage and create decisions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 mt-2 bg-gray-100 px-4 py-6 rounded-lg">
                      <p className="text-sm font-medium">
                        Enterprise{" "}
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                          New
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        Empower your team with advanced tools.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
