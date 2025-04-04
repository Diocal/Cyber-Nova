"use client";
import React from 'react';

// Definir el tipo para las preguntas frecuentes
interface FAQItem {
  question: string;
  answer: string;
}

const DEFAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is web scraping and how does it work?",
      answer:
        "Web scraping is an automated process used to extract data from websites. By using specialized tools and scripts, we can gather information from web pages and transform it into structured data for analysis and reporting.",
    },
    {
      question: "Is web scraping legal?",
      answer:
        "Web scraping is legal as long as it complies with website terms and conditions and avoids collecting sensitive or personal data without authorization. We ensure all our web scraping solutions adhere to ethical guidelines.",
    },
    {
      question: "How do you handle websites with anti-scraping mechanisms?",
      answer:
        "We implement techniques such as rotating proxies, headless browsers, and human-like behavior emulation to bypass anti-scraping systems responsibly, ensuring data is collected efficiently without breaching legal boundaries.",
    },
    {
      question: "What types of data can be extracted using web scraping?",
      answer:
        "We can extract data such as product prices, reviews, social media content, job postings, real estate listings, financial information, and much more depending on the project's needs.",
    },
    {
      question: "How do you ensure data accuracy and reliability?",
      answer:
        "We validate the extracted data through multiple sources, implement redundancy checks, and ensure real-time updates to maintain the highest level of accuracy and reliability.",
    },
    {
      question: "What industries benefit from web scraping?",
      answer:
        "Industries such as e-commerce, finance, healthcare, marketing, and real estate benefit greatly from web scraping for competitive analysis, price monitoring, and data aggregation.",
    },
    {
      question: "What is ETL and how does it relate to data engineering?",
      answer:
        "ETL stands for Extract, Transform, Load. It's a process used in data engineering to extract data from various sources, transform it into a suitable format, and load it into a data warehouse or database for analysis.",
    },
    {
      question: "Can you integrate data pipelines with existing systems?",
      answer:
        "Absolutely! We design custom data pipelines that seamlessly integrate with your current infrastructure, allowing smooth data flow and enhancing your existing data architecture.",
    },
    {
      question: "How do you handle large-scale data processing?",
      answer:
        "We leverage technologies such as Apache Spark, Kafka, and AWS Lambda to build scalable and distributed data processing systems capable of handling terabytes of data efficiently.",
    },
    {
      question: "Do you provide ongoing maintenance for web scraping projects?",
      answer:
        "Yes, we offer continuous monitoring and maintenance to ensure web scraping tools stay functional even as websites update their structures or anti-scraping defenses.",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-gray-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-700 bg-gray-800 hover:bg-gray-900 transition-all"
            >
              <h3 className="text-3xl font-semibold">{faq.question}</h3>
              <p className="text-gray-300 mt-4">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DEFAQ;
