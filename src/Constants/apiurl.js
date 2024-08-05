export const apiurl =
  import.meta.env.VITE_LOCAL_URL === "production"
    ? "http://localhost:4000"
    : `http://localhost:4000`;

  const Roles = {
      ADMIN : "Admin",
      User : "User"
  }
  
  export default Roles