// import React, { createContext, useState, useEffect, useContext } from "react";
// import { auth } from "../firebase";
// import { getUserProfile } from "../api/userApi";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchUserProfile(uid) {
//     try {
//       const profile = await getUserProfile(uid);
//       setUserProfile(profile);
//     } catch (error) {
//       console.error("Failed to fetch user profile:", error);
//     }
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       setCurrentUser(user);
//       if (user) {
//         await fetchUserProfile(user.uid);
//       } else {
//         setUserProfile(null);
//       }
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     userProfile,
//     refreshUserProfile: () => fetchUserProfile(currentUser?.uid),
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
