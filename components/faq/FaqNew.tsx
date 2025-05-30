import { Accordion, AccordionContent, AccordionItem } from "./accordianTwo";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

function FaqNew() {
  return (
    <div className="space-y-4 max-w-5xl mx-auto px-4">
      <div className="mx-auto flex  flex-col text-left md:text-center">
        <h2 className="font-helvatica mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
          Frequently asked questions
        </h2>
        <p className="font-helvatica text-muted-foreground lg:text-lg">
          Find answers to common questions about our products. Can't find what
          you're looking for? Contact our support team.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-5">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="font-helvatica flex flex-1 items-center justify-between py-2 text-left text-lg font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                {item.title}
                <Plus
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="font-helvatica pb-2 text-base pt-2 opacity-80 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { FaqNew };
