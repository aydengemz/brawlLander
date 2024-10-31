import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "./card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export const FAQSection = () => {
    const faqs = [
      {
        question: "Why do you need my information?",
        answer: "We require basic verification to ensure fair distribution of rewards and prevent multiple claims from the same player. This helps us maintain the integrity of our gem distribution system and ensures all players have an equal opportunity to receive rewards."
      },
      {
        question: "When do I enter my player tag?",
        answer: "You'll be prompted to enter your player tag only after successfully completing the required offers. This ensures accurate delivery of gems to your account. We use this method to maintain security and prevent any delivery errors."
      },
      {
        question: "How long until I receive my gems?",
        answer: "After completing the required offers, please allow 2-3 minutes for our system to verify and process your reward. The gems will be automatically sent to your in-game inbox once verification is complete. Make sure to check your inbox!"
      },
      {
        question: "What if I don't receive my gems?",
        answer: "Most rewards are delivered automatically within minutes. If you haven't received your gems after 5 minutes of completing the offers, please ensure you've entered your player tag correctly. Remember to check your in-game inbox thoroughly."
      },
      {
        question: "Can I claim rewards multiple times?",
        answer: "To ensure fairness for all players, rewards can only be claimed once per account. Our verification system tracks completions to maintain this policy. Multiple attempts from the same account will not be processed."
      },
      {
        question: "Are the offers safe to complete?",
        answer: "Yes! We partner only with trusted and verified offer providers to ensure a safe experience for our players. All offers are carefully screened and monitored for security and reliability."
      }
    ];
  
    return (
      <Card className="w-full bg-white/95 rounded-xl border border-pink-200 backdrop-blur-sm mt-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="w-6 h-6 text-pink-500" />
            <h2 className="text-xl font-bold text-pink-600">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`}
                className="border-b border-pink-100 last:border-0"
              >
                <AccordionTrigger className="text-pink-600 font-medium hover:text-pink-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    );
  };