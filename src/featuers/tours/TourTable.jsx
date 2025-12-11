import React from "react";
import { ChevronDown, ChevronUp, Edit2, Trash2 } from "lucide-react";

export default function TourTable({
  tours,
  expandedRow,
  setExpandedRow,
  onEdit,
  onDelete,
  isUpdating,
  isDeleting,
}) {
  return (
    <>
      {/* Mobile View - Card Layout */}
      <div className="md:hidden p-4">
        {tours?.map((tour) => (
          <div
            key={tour.id}
            className="bg-white border border-gray-200 rounded-lg mb-4 shadow-sm"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <button
                  onClick={() =>
                    setExpandedRow(expandedRow === tour.id ? null : tour.id)
                  }
                  className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 flex-1 text-left"
                >
                  {expandedRow === tour.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                  {tour.title}
                </button>
                <div className="flex gap-1 ml-2">
                  <button
                    onClick={() => onEdit(tour)}
                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    disabled={isUpdating}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(tour.id)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                    disabled={isDeleting}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="text-gray-900 font-medium">
                    {tour.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Price:</span>
                  <span className="text-gray-900 font-semibold">
                    ${tour.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Available Seats:</span>
                  <span className="text-gray-900">{tour.availableSeats}</span>
                </div>
              </div>
            </div>

            {/* Mobile */}
            {expandedRow === tour.id && (
              <div className="bg-gray-50 border-t p-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Description
                    </p>
                    <p className="text-gray-900 text-sm">
                      {tour.description || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Guide
                    </p>
                    <p className="text-gray-900 text-sm">
                      {tour.guideName || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Date
                    </p>
                    <p className="text-gray-900 text-sm">
                      {tour.date || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Duration
                    </p>
                    <p className="text-gray-900 text-sm">
                      {tour.duration || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      Highlights
                    </p>
                    <ul className="text-gray-900 text-sm list-disc list-inside">
                      {tour.highlights?.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      )) || <li>N/A</li>}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      What to Bring
                    </p>
                    <ul className="text-gray-900 text-sm list-disc list-inside">
                      {tour.broughts?.map((brought, idx) => (
                        <li key={idx}>{brought}</li>
                      )) || <li>N/A</li>}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
        {/* Table Layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Seats
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tours?.map((tour) => (
              <React.Fragment key={tour.id}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button
                      onClick={() =>
                        setExpandedRow(expandedRow === tour.id ? null : tour.id)
                      }
                      className="flex items-center gap-2 font-medium hover:text-blue-600"
                    >
                      {expandedRow === tour.id ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                      {tour.title}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {tour.location}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ${tour.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {tour.availableSeats}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => onEdit(tour)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        disabled={isUpdating}
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => onDelete(tour.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        disabled={isDeleting}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>

                    
                {expandedRow === tour.id && (
                  <tr>
                    <td colSpan="5" className="px-6 py-0">
                      <div className="bg-gray-50 border-t">
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                Description
                              </p>
                              <p className="text-gray-900 text-sm">
                                {tour.description || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                Guide
                              </p>
                              <p className="text-gray-900 text-sm">
                                {tour.guideName || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                Date
                              </p>
                              <p className="text-gray-900 text-sm">
                                {tour.date || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                Duration
                              </p>
                              <p className="text-gray-900 text-sm">
                                {tour.duration || "N/A"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                Highlights
                              </p>
                              <ul className="text-gray-900 text-sm list-disc list-inside">
                                {tour.highlights?.map((highlight, idx) => (
                                  <li key={idx}>{highlight}</li>
                                )) || <li>N/A</li>}
                              </ul>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-600 mb-1">
                                What to Bring
                              </p>
                              <ul className="text-gray-900 text-sm list-disc list-inside">
                                {tour.broughts?.map((brought, idx) => (
                                  <li key={idx}>{brought}</li>
                                )) || <li>N/A</li>}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
