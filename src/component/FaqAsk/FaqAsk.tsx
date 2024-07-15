import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import shop from '../../assets/others/shop.webp';
  
  type FAQItem = {
    question: string;
    answer: string;
  };
  
  const faqs: FAQItem[] = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase if it is in its original condition and packaging. Please contact our support team to initiate a return.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive an email with a tracking number and a link to track your order online.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit/debit cards, PayPal, and other online payment options.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team via email at support@example.com or by calling our toll-free number at 1-800-123-4567.',
    },
  ];
  
  const FaqAsk = () => {
    return (
      <div className=" py-12">
        <h2 className="text-4xl text-center font-bold mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="container mx-auto flex flex-col lg:flex-row items-start p-8 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="mt-2 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={shop}
              alt="FAQ"
              className="w-full max-w-md shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default FaqAsk;
  