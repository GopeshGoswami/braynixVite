import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  MousePointerClick,
  Fingerprint,
  Grid,
  RefreshCcw,
  BarChart3,
} from "lucide-react";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8 bg-transparent relative z-10"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {items.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.url}
              className="text-sm/6 font-semibold text-white hover:text-indigo-600"
            >
              {item.name}
            </a>
            <AnimatePresence>
              {activeDropdown === item.name && (
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
                  <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                    <div className="flex items-start gap-4 pt-8 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <PieChart className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">Analytics</p>
                        <p className="text-sm text-gray-600">
                          Get a better understanding of your traffic
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pt-8 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <MousePointerClick className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">Engagement</p>
                        <p className="text-sm text-gray-600">
                          Speak directly to your customers with our engagement
                          tool
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Fingerprint className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">Security</p>
                        <p className="text-sm text-gray-600">
                          Your customers' data will be safe and secure
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Grid className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">
                          Integrations
                        </p>
                        <p className="text-sm text-gray-600">
                          Connect with third-party tools and find out
                          expectations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <RefreshCcw className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">
                          Automations
                        </p>
                        <p className="text-sm text-gray-600">
                          Build strategic funnels that will convert
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 px-8 ">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium mb-1">Reports</p>
                        <p className="text-sm text-gray-600">
                          Edit, manage and create newly informed decisions
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2 mt-6 px-8 py-6 bg-gray-100 rounded-b-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-lg font-medium">Enterprise</p>
                        <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                          New
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Empower your entire team with even more advanced tools.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-white">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
