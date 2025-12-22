import { useState } from 'react';
import { Calendar, Mail, Phone, Users, FileText } from 'lucide-react';
import { useApp } from '../../utils/AppContext';
import { BookingFormData } from '../../utils/types';

export function BookingsTab() {
  const { bookings } = useApp();
  const [selectedBooking, setSelectedBooking] = useState<BookingFormData | null>(null);

  const sortedBookings = [...bookings].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-gray-900">All Bookings</h2>
        <p className="text-sm text-gray-600">{bookings.length} total bookings</p>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No bookings yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Contact</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Package</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Travel Date</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">People</th>
                <th className="text-left py-3 px-4 text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(booking.timestamp).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{booking.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <div className="flex flex-col gap-1">
                      <a href={`mailto:${booking.email}`} className="text-emerald-600 hover:underline">
                        {booking.email}
                      </a>
                      <a href={`tel:${booking.phone}`} className="text-emerald-600 hover:underline">
                        {booking.phone}
                      </a>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-emerald-100 text-emerald-800">
                      {booking.packageType} - {booking.packagePersons}P
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(booking.travelDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.numberOfPeople}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="text-sm text-emerald-600 hover:text-emerald-700"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl text-gray-900">Booking Details</h3>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Customer Name</p>
                  <p className="text-gray-900">{selectedBooking.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Package Type</p>
                  <p className="text-gray-900 capitalize">{selectedBooking.packageType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href={`mailto:${selectedBooking.email}`} className="text-emerald-600 hover:underline">
                    {selectedBooking.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href={`tel:${selectedBooking.phone}`} className="text-emerald-600 hover:underline">
                    {selectedBooking.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Number of People</p>
                  <p className="text-gray-900">{selectedBooking.numberOfPeople}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Travel Date</p>
                  <p className="text-gray-900">
                    {new Date(selectedBooking.travelDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Booking Date</p>
                  <p className="text-gray-900">
                    {new Date(selectedBooking.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Customer Expectations</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-900 whitespace-pre-wrap">{selectedBooking.expectations}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
