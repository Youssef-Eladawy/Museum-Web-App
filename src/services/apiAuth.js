import supabase from "./supabase";

//  SIGNUP (also insert a profile record) useable function for admins or users
export async function signUp({
  fullName,
  phoneNumber,
  email,
  password,
  role = "USER",
  isAdminAction = false,
}) {
  // 1️ If admin action, verify current user is an admin
  if (isAdminAction) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error("You must be logged in to create users");
    }

    if (currentUser.role !== "ADMIN") {
      throw new Error("Only admins can create new users");
    }

    // Validate role parameter
    if (role !== "USER" && role !== "ADMIN") {
      throw new Error("Invalid role. Must be USER or ADMIN");
    }
  } else {
    // Regular signup - force USER role
    role = "USER";
  }

  // 2️ Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  // 3️ Insert user profile record
  const user = data.user;
  if (user) {
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: user.id,
        fullName,
        phoneNumber,
        role,
      },
    ]);

    if (profileError) throw new Error(profileError.message);
  }

  return data;
}

//  LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

//  GET CURRENT USER (with profile)
export async function getCurrentUser() {
  // 1️ Get current session
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  if (sessionError) throw new Error(sessionError.message);

  const session = sessionData?.session;
  if (!session) return null;

  // 2️ Get auth user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) throw new Error(userError.message);
  if (!user) return null;

  // 3️ Get profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError && profileError.code !== "PGRST116") {
    throw new Error(profileError.message);
  }

  return {
    id: user.id,
    email: user.email,
    phoneNumber: profile.phoneNumber,
    fullName: profile.fullName,
    role: profile.role,
  };
}

// 🟢 LOGOUT
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Cannot logout");
}

export async function updateUser({ fullName, phoneNumber }) {
  // Step 1: Get the current authenticated user
  const user = await getCurrentUser();
  if (!user) throw new Error("No authenticated user found.");

  // Step 2: Update the 'profiles' table (linked by id)
  const { data, error } = await supabase
    .from("profiles")
    .update({
      fullName: fullName?.trim(),
      phoneNumber: phoneNumber?.trim(),
    })
    .eq("id", user.id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateUserPassword(newPassword) {
  // Step 1: Ensure a user is authenticated
  const user = await getCurrentUser();
  if (!user) throw new Error("No authenticated user found.");

  // Step 2: Update the user's password using Supabase Auth
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);

  return data;
}
