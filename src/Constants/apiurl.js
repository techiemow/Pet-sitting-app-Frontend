export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "https://paws-and-claws-61ks.onrender.com"
    : `http://localhost:4000`;
