"use client";

import { useState } from "react";
import { User, Phone, Mail, Users } from "lucide-react";
import { trackFormSubmission, trackConversion } from "@/utils/tracking";

interface FooterContactFormData {
  fullName: string;
  phone: string;
  email: string;
  childAge: string;
  additionalQuestions: string;
}

export function FooterContactForm() {
  const [formData, setFormData] = useState<FooterContactFormData>({
    fullName: "",
    phone: "",
    email: "",
    childAge: "",
    additionalQuestions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Track form submission attempt
    trackFormSubmission("footer", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(
          "Form submitted successfully! Check your email for confirmation."
        );

        // Track successful conversion
        trackConversion("lead", 50);

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          childAge: "",
          additionalQuestions: "",
        });
      } else {
        setIsSuccess(false);
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setIsSuccess(false);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {message && (
        <div
          className={`mb-3 p-2 rounded-lg text-xs ${
            isSuccess
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="relative">
            <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Your full name"
              className="w-full pl-7 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="(619) 123-4567"
              className="w-full pl-7 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="your.email@example.com"
            className="w-full pl-7 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
          <select
            name="childAge"
            value={formData.childAge}
            onChange={handleInputChange}
            required
            className="w-full pl-7 pr-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
          >
            <option value="">Select age group</option>
            <option value="Ages 5-7 (Petite Cirque)">
              Ages 5-7 (Petite Cirque)
            </option>
            <option value="Ages 8-12 (Youth Cirque)">
              Ages 8-12 (Youth Cirque)
            </option>
            <option value="Ages 13-17 (Teen Cirque)">
              Ages 13-17 (Teen Cirque)
            </option>
            <option value="Mixed Ages">Mixed Ages</option>
          </select>
        </div>

        <div>
          <textarea
            name="additionalQuestions"
            value={formData.additionalQuestions}
            onChange={handleInputChange}
            rows={2}
            placeholder="Additional questions or comments..."
            className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 resize-vertical"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          style={{
            background: isSubmitting
              ? undefined
              : "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
          }}
        >
          {isSubmitting ? "Sending..." : "Get Class Information"}
        </button>
      </form>
    </div>
  );
}
