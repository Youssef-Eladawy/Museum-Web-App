# ManageTours Component Integration Guide

## Files Created/Modified

### 1. **apiTours.js** (Modified)

- Added `createTour(tourData)` - Creates a new tour
- Added `updateTour(id, tourData)` - Updates an existing tour
- Added `deleteTour(id)` - Deletes a tour

### 2. **toursHooks.js** (Modified)

- Added `useCreateTour()` - Mutation hook for creating tours
- Added `useUpdateTour()` - Mutation hook for updating tours
- Added `useDeleteTour()` - Mutation hook for deleting tours

### 3. **ManageTours.jsx** (New)

Complete component with:

- Tour listing table with expandable rows to see full details
- Create/Edit/Delete functionality
- React Hook Form with validation
- useFieldArray for dynamic arrays (broughts, highlights)
- React Query integration for state management
- Toast notifications for success/error
- Beautiful Tailwind styling

## How to Integrate into App.jsx

Add this import in your `App.jsx`:

```jsx
import ManageTours from "./featuers/tours/ManageTours";
```

Then add the route in your routing configuration:

```jsx
<Route path="/admin/manage-tours" element={<ManageTours />} />
```

Or if you're using the AdminLayout component, add it as a tab/section within the admin dashboard.

## Features

✅ **Create Tours** - Add new tours with all details
✅ **Edit Tours** - Update existing tour information
✅ **Delete Tours** - Remove tours with confirmation
✅ **Dynamic Arrays** - Add/remove "What to Bring" and "Highlights" items
✅ **Form Validation** - Required fields with error messages
✅ **Loading States** - Visual feedback during operations
✅ **Expandable Rows** - View full tour details by clicking on title
✅ **Toast Notifications** - Success/error messages
✅ **Responsive Design** - Works on all screen sizes
✅ **Auto-refresh** - Lists update automatically after operations

## Form Fields

**Required Fields:**

- Title
- Location
- Price
- Available Seats

**Optional Fields:**

- Description
- Short Description
- Guide Name
- Date
- Duration
- What to Bring (array)
- Highlights (array)

## Data Flow

1. Component loads all tours using React Query
2. User can:
   - Add new tour → `create()` → API call → Success toast → List refreshes
   - Edit tour → `update()` → API call → Success toast → List refreshes
   - Delete tour → `remove()` → API call → Success toast → List refreshes
3. Arrays (broughts, highlights) are properly filtered to remove empty values before submission

## Notes

- Images and gallery are excluded as requested
- Date format is handled by HTML5 date input (YYYY-MM-DD)
- Arrays are stored as text arrays in Supabase
- Component handles null/undefined values gracefully
- All async operations show loading states
