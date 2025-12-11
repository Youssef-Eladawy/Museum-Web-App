import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCreateTour, useUpdateTour, useDeleteTour } from "./toursHooks";
import { getTours } from "../../services/apiTours";
import TourTable from "./TourTable";
import Pagination from "./Pagination";
import { Loader2, Plus, X } from "lucide-react";

export default function ManageTours() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const queryClient = useQueryClient();

  // Expose queryClient to window for debugging (temporary)
  // window.queryClient = queryClient;

  // pagination state
  const [page, setPage] = useState(1);

  // Fetch tours (server-side pagination)
  const {
    data: toursData = { tours: [], count: 0 },
    isLoading: isLoadingTours,
  } = useQuery({
    queryKey: ["tours", page],
    queryFn: () =>
      getTours({
        filter: null,
        sortBy: { field: "created_at", direction: "desc" },
        page,
      }),
    keepPreviousData: true,
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
          // go back to first page so new item is visible
          setPage(1);
          closeModal();
        },
      });
    }
  };

  // If current page becomes empty after a delete, move to previous page
  useEffect(() => {
    if (toursData?.tours && toursData.tours.length === 0 && page > 1) {
      setPage((p) => Math.max(1, p - 1));
    }
  }, [toursData?.tours, page]);

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
            <TourTable
              tours={toursData.tours}
              expandedRow={expandedRow}
              setExpandedRow={setExpandedRow}
              onEdit={handleEdit}
              onDelete={handleDelete}
              isUpdating={isUpdating}
              isDeleting={isDeleting}
            />

            <div className="p-4">
              <Pagination
                page={page}
                setPage={setPage}
                totalCount={toursData.count}
              />
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
