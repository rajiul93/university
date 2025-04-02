 
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setUser } from "../features/auth/authSlice";
import { RootState } from "./../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions):Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    // Attempt to refresh the token
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          })
        );
        result = await baseQuery(args, api, extraOptions);
      }else{
        api.dispatch(logOut())
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
// const newToken = data?.data?.accessToken;

// if (newToken) {
//   // Update Redux state with the new token
//   const user = (api.getState() as RootState).auth.user;
//   api.dispatch(
//     setUser({
//       user,
//       token: newToken,
//     })
//   );

//   // Retry the original request with the new token
//   result = await baseQuery(args, api, extraOptions);
// }
