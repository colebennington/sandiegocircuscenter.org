"use client";

import { useState } from "react";
import { Phone, Mail, User, Users } from "lucide-react";

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  childAge: string;
  additionalQuestions: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
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
        setMessage(result.message);
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
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Start Your Circus Journey
          </h3>
          <p className="text-sm text-gray-600">
            Get information about our youth circus classes
          </p>
        </div>

        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              isSuccess
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-medium text-gray-700 mb-1 text-left"
            >
              Parent/Guardian Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-medium text-gray-700 mb-1 text-left"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
                placeholder="(619) 123-4567"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700 mb-1 text-left"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-sm"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="childAge"
              className="block text-xs font-medium text-gray-700 mb-1 text-left"
            >
              Child&apos;s Age Group
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleInputChange}
                required
                className="w-full pl-9 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white text-gray-900 text-sm"
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
          </div>

          <div>
            <label
              htmlFor="additionalQuestions"
              className="block text-xs font-medium text-gray-700 mb-1 text-left"
            >
              Additional Questions or Comments
            </label>
            <textarea
              id="additionalQuestions"
              name="additionalQuestions"
              value={formData.additionalQuestions}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-vertical text-sm"
              placeholder="Tell us about your child's experience, interests, or any questions you have..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm"
            style={{
              background: isSubmitting
                ? undefined
                : "linear-gradient(135deg, #0249AC 0%, #0260D9 50%, #0377FF 100%)",
            }}
          >
            {isSubmitting ? "Sending..." : "Get Class Information"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-3">
          We&apos;ll send you details about class schedules, pricing, and next
          steps within 24 hours.
        </p>
      </div>
    </div>
  );
}
