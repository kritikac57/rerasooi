import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FoodSpecificationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    expiry: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.foodType.trim()) newErrors.foodType = 'Food type is required';
    if (!formData.quantity || formData.quantity < 1) newErrors.quantity = 'Minimum 1 kg required';
    if (!formData.expiry) newErrors.expiry = 'Expiry date and time is required';
    if (formData.notes.length > 500) newErrors.notes = 'Notes cannot exceed 500 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? parseFloat(value) || '' : value
    }));
    // Clear error for field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
    // Reset form after successful submission
    setFormData({ foodType: '', quantity: '', expiry: '', notes: '' });
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 animate-fade-in">
          Donate Food Surplus
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg animate-slide-up"
          noValidate
        >
          {/* Food Type Field */}
          <div className="mb-6">
            <label
              htmlFor="foodType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Food Type
            </label>
            <input
              id="foodType"
              name="foodType"
              type="text"
              value={formData.foodType}
              onChange={handleChange}
              placeholder="e.g., Fresh Produce, Baked Goods"
              aria-invalid={!!errors.foodType}
              aria-describedby={errors.foodType ? 'foodType-error' : null}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.foodType
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-cyan-500'
              } focus:outline-none focus:ring-2 transition-colors duration-300`}
            />
            {errors.foodType && (
              <p
                id="foodType-error"
                className="text-red-500 text-sm mt-2"
                role="alert"
              >
                {errors.foodType}
              </p>
            )}
          </div>

          {/* Quantity Field */}
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Quantity (kg)
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              step="0.1"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g., 5.5"
              aria-invalid={!!errors.quantity}
              aria-describedby={errors.quantity ? 'quantity-error' : null}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.quantity
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-cyan-500'
              } focus:outline-none focus:ring-2 transition-colors duration-300`}
            />
            {errors.quantity && (
              <p
                id="quantity-error"
                className="text-red-500 text-sm mt-2"
                role="alert"
              >
                {errors.quantity}
              </p>
            )}
          </div>

          {/* Expiry Field */}
          <div className="mb-6">
            <label
              htmlFor="expiry"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Expiry Date & Time
            </label>
            <input
              id="expiry"
              name="expiry"
              type="datetime-local"
              value={formData.expiry}
              onChange={handleChange}
              aria-invalid={!!errors.expiry}
              aria-describedby={errors.expiry ? 'expiry-error' : null}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.expiry
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-cyan-500'
              } focus:outline-none focus:ring-2 transition-colors duration-300`}
            />
            {errors.expiry && (
              <p
                id="expiry-error"
                className="text-red-500 text-sm mt-2"
                role="alert"
              >
                {errors.expiry}
              </p>
            )}
          </div>

          {/* Notes Field */}
          <div className="mb-6">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="e.g., Storage instructions or special handling"
              rows="4"
              maxLength="500"
              aria-describedby={errors.notes ? 'notes-error' : null}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.notes
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-cyan-500'
              } focus:outline-none focus:ring-2 transition-colors duration-300 resize-y`}
            />
            <p className="text-gray-500 text-sm mt-1">
              {formData.notes.length}/500 characters
            </p>
            {errors.notes && (
              <p
                id="notes-error"
                className="text-red-500 text-sm mt-2"
                role="alert"
              >
                {errors.notes}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 transition-all duration-300 shadow-md"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

FoodSpecificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default FoodSpecificationForm;