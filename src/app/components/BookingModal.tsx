import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '../utils/translations';
import { useApp } from '../utils/AppContext';
import { BookingFormData } from '../utils/types';

export function BookingModal() {
  const { t } = useTranslation();
  const { addBooking } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{
    type: 'sightseeing' | 'accommodation';
    persons: number;
    title: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    travelDate: '',
    expectations: ''
  });

  useEffect(() => {
    const handleOpenBooking = (event: CustomEvent) => {
      setSelectedPackage(event.detail);
      setIsOpen(true);
    };

    window.addEventListener('openBookingModal' as any, handleOpenBooking);
    return () => {
      window.removeEventListener('openBookingModal' as any, handleOpenBooking);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPackage) return;

    const booking: BookingFormData = {
      id: Date.now().toString(),
      packageType: selectedPackage.type,
      packagePersons: selectedPackage.persons,
      ...formData,
      timestamp: new Date().toISOString()
    };

    addBooking(booking);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      numberOfPeople: 1,
      travelDate: '',
      expectations: ''
    });
    
    setIsOpen(false);
    alert('Booking request submitted successfully! We will contact you soon.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl text-gray-900">Book Your Package</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {selectedPackage && (
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-emerald-900">
                <span className="font-semibold">Selected Package:</span> {selectedPackage.title}
              </p>
              <p className="text-emerald-700 text-sm mt-1">
                For {selectedPackage.persons} {selectedPackage.persons === 1 ? 'person' : 'persons'}
              </p>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label htmlFor="numberOfPeople" className="block text-sm text-gray-700 mb-2">
              Number of People *
            </label>
            <input
              type="number"
              id="numberOfPeople"
              required
              min="1"
              max="20"
              value={formData.numberOfPeople}
              onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="travelDate" className="block text-sm text-gray-700 mb-2">
              Preferred Travel Date *
            </label>
            <input
              type="date"
              id="travelDate"
              required
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div>
            <label htmlFor="expectations" className="block text-sm text-gray-700 mb-2">
              What are you expecting from this trip? *
            </label>
            <textarea
              id="expectations"
              required
              rows={4}
              value={formData.expectations}
              onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none"
              placeholder="Tell us about your expectations, special requirements, or any specific interests..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
