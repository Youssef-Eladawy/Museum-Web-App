import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCurrentUser,
  login as loginApi,
  logout as logoutApi,
  signUp as signUpApi,
} from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: async () => {
      toast.success("Logged In Successfully");

      await queryClient.invalidateQueries(["user"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, login };
}

export function useSession() {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isError };
}

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("logged out successfully");
      navigate("/", { replace: true });
    },
  });

  return { logout, isPending };
}

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: ({ fullName, phoneNumber, email, password }) =>
      signUpApi({ fullName, phoneNumber, email, password }),
    onSuccess: () => {
      toast.success(
        "Account successfully created please verify the new account from the user's email address "
      );
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { signUp, isPending };
}

export function useAdminCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createUser, isPending } = useMutation({
    mutationFn: ({ fullName, phoneNumber, email, password, role }) =>
      signUpApi({
        fullName,
        phoneNumber,
        email,
        password,
        role,
        isAdminAction: true,
      }),
    onSuccess: () => {
      toast.success("User created successfully");
      // queryClient.invalidateQueries(["users"]);
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create user");
    },
  });

  return { createUser, isPending };
}
