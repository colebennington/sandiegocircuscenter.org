'use client';

import { useContactForm } from '@/hooks/useContactForm';

export function ContactForm() {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    updateField,
    handleSubmit,
    resetForm,
  } = useContactForm();

  if (isSubmitted) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-lg mx-auto shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We&apos;ve received your inquiry and will get back to you within 24 hours with information about our youth circus classes.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Check your email for a confirmation message with next steps.
          </p>
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-lg mx-auto shadow-2xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Learn more about our circus classes!
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
          disabled={isSubmitting}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <select
          value={formData.childAge}
          onChange={(e) => updateField('childAge', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
          disabled={isSubmitting}
        >
          <option value="">Select Child Age</option>
          <option value="Ages 5-7 (Petite Cirque)">Ages 5-7 (Petite Cirque)</option>
          <option value="Ages 8-17 (Youth Cirque)">Ages 8-17 (Youth Cirque)</option>
          <option value="Not Sure">Not Sure</option>
        </select>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-lg text-xl hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'CONTACT US'
          )}
        </button>
      </form>
      
      <p className="text-sm text-gray-600 mt-4 text-center">
        Free trial class available! No experience required.
      </p>
    </div>
  );
}

