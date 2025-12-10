import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateUser as updateUserApi,
  updateUserPassword as updateUserPasswordApi,
} from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ fullName, phoneNumber }) =>
      updateUserApi({ fullName, phoneNumber }),
    onSuccess: () => {
      toast.success("updated successfully");
      queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateUser };
}

export function useUpdatePassword() {
  const { mutate: updatePassword, isPending: isUpdatingPassword } = useMutation(
    {
      mutationFn: (newPassword) => updateUserPasswordApi(newPassword),
      onSuccess: () => {
        toast.success("Password updated successfully");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );

  return { isUpdatingPassword, updatePassword };
}
