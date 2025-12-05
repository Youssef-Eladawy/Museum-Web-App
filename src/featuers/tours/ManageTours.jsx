import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCreateTour, useUpdateTour, useDeleteTour } from "./toursHooks";
import { getTours } from "../../services/apiTours";
import {
  Loader2,
  Plus,
  Edit2,
  Trash2,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ManageTours() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const queryClient = useQueryClient();

  // Expose queryClient to window for debugging (temporary)
  window.queryClient = queryClient;

  // Fetch all tours
  const {
    data: toursData = { tours: [], count: 0 },
    isLoading: isLoadingTours,
  } = useQuery({
    queryKey: ["all-tours"],
    // fetch newest tours first so recently added items appear on first page
    queryFn: () =>
      getTours({
        filter: null,
        sortBy: { field: "created_at", direction: "desc" },
      }),
  });

  // Mutations
  const { create, isPending: isCreating } = useCreateTour();
  const { update, isPending: isUpdating } = useUpdateTour();
  const { remove, isPending: isDeleting } = useDeleteTour();

  // Form setup
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      shortDescription: "",
      price: "",
      guideName: "",
      date: "",
      location: "",
      availableSeats: "",
      duration: "",
      broughts: [{ value: "" }],
      highlights: [{ value: "" }],
    },
  });

  const {
    fields: broughtsFields,
    append: appendBrought,
    remove: removeBrought,
  } = useFieldArray({
    control,
    name: "broughts",
  });

  const {
    fields: highlightsFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({
    control,
    name: "highlights",
  });

  // Handle form submission
  const onSubmit = (data) => {
    // Clean up empty strings from arrays
    const cleanData = {
      ...data,
      broughts: data.broughts
        .map((item) => item.value)
        .filter((value) => value.trim() !== ""),
      highlights: data.highlights
        .map((item) => item.value)
        .filter((value) => value.trim() !== ""),
      price: data.price ? parseFloat(data.price) : null,
      availableSeats: data.availableSeats
        ? parseInt(data.availableSeats, 10)
        : 0,
    };

    if (editingId) {
      update(
        { id: editingId, tourData: cleanData },
        {
          onSuccess: () => {
            closeModal();
          },
        }
      );
    } else {
      create(cleanData, {
        onSuccess: () => {
          closeModal();
        },
      });
    }
  };

  // Handle edit
  const handleEdit = (tour) => {
    setEditingId(tour.id);
    reset({
      title: tour.title || "",
      description: tour.description || "",
      shortDescription: tour.shortDescription || "",
      price: tour.price || "",
      guideName: tour.guideName || "",
      date: tour.date || "",
      location: tour.location || "",
      availableSeats: tour.availableSeats || "",
      duration: tour.duration || "",
      broughts: tour.broughts?.length
        ? tour.broughts.map((item) => ({ value: item }))
        : [{ value: "" }],
      highlights: tour.highlights?.length
        ? tour.highlights.map((item) => ({ value: item }))
        : [{ value: "" }],
    });
    setIsModalOpen(true);
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      // let the mutation's optimistic update handle UI removal and rollback
      remove(id);
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    reset();
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Tours</h1>
          <p className="text-gray-600 mt-1">Create, edit, or delete tours</p>
        </div>
        <button
          onClick={() => {
            setEditingId(null);
            reset();
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Add Tour
        </button>
      </div>

      {/* Tours Table - Responsive */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoadingTours ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-blue-600" size={32} />
          </div>
        ) : toursData.tours?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No tours found. Create one to get started!
            </p>
          </div>
        ) : (
          <React.Fragment>
            {/* Mobile View - Card Layout */}
            <div className="md:hidden p-4">
              {toursData.tours?.map((tour) => (
                <div key={tour.id} className="bg-white border border-gray-200 rounded-lg mb-4 shadow-sm">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <button
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === tour.id ? null : tour.id
                          )
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
                          onClick={() => handleEdit(tour)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          disabled={isUpdating}
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(tour.id)}
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
                        <span className="text-gray-900 font-medium">{tour.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Price:</span>
                        <span className="text-gray-900 font-semibold">${tour.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Available Seats:</span>
                        <span className="text-gray-900">{tour.availableSeats}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Details - Mobile */}
                  {expandedRow === tour.id && (
                    <div className="bg-gray-50 border-t p-4">
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Description</p>
                          <p className="text-gray-900 text-sm">{tour.description || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Guide</p>
                          <p className="text-gray-900 text-sm">{tour.guideName || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Date</p>
                          <p className="text-gray-900 text-sm">{tour.date || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Duration</p>
                          <p className="text-gray-900 text-sm">{tour.duration || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">Highlights</p>
                          <ul className="text-gray-900 text-sm list-disc list-inside">
                            {tour.highlights?.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            )) || <li>N/A</li>}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-1">What to Bring</p>
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

            {/* Desktop View - Table Layout */}
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
                  {toursData.tours?.map((tour) => (
                    <React.Fragment key={tour.id}>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <button
                            onClick={() =>
                              setExpandedRow(
                                expandedRow === tour.id ? null : tour.id
                              )
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
                              onClick={() => handleEdit(tour)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              disabled={isUpdating}
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(tour.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                              disabled={isDeleting}
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Details - Desktop */}
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

            </React.Fragment>
          )}
        </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b bg-white">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? "Edit Tour" : "Create New Tour"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tour Title *
                  </label>
                  <input
                    type="text"
                    {...register("title", {
                      required: "Title is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter tour title"
                  />
                  {errors.title && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    {...register("location", {
                      required: "Location is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location"
                  />
                  {errors.location && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    {...register("price", {
                      required: "Price is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                  {errors.price && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Seats *
                  </label>
                  <input
                    type="number"
                    {...register("availableSeats", {
                      required: "Available seats is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                  {errors.availableSeats && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.availableSeats.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guide Name
                  </label>
                  <input
                    type="text"
                    {...register("guideName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter guide name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    {...register("date")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    {...register("duration")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 3 days, 5 hours"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter detailed description"
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description
                </label>
                <textarea
                  {...register("shortDescription")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter brief description"
                  rows="2"
                />
              </div>

              {/* What to Bring - FieldArray */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    What to Bring
                  </label>
                  <button
                    type="button"
                    onClick={() => appendBrought({ value: "" })}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + Add Item
                  </button>
                </div>
                {broughtsFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      {...register(`broughts.${index}.value`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Sunscreen, Hat, Water bottle"
                    />
                    {broughtsFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeBrought(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Highlights - FieldArray */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Highlights
                  </label>
                  <button
                    type="button"
                    onClick={() => appendHighlight({ value: "" })}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + Add Highlight
                  </button>
                </div>
                {highlightsFields.map((field, index) => (
                  <div key={field.id} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      {...register(`highlights.${index}.value`)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Beautiful scenery, Local culture"
                    />
                    {highlightsFields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeHighlight(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating || isUpdating}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isCreating || isUpdating ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {editingId ? "Updating..." : "Creating..."}
                    </>
                  ) : editingId ? (
                    "Update Tour"
                  ) : (
                    "Create Tour"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
