//Loader
export const DesignLoader = async () => {
  const res = await fetch("http://localhost:8080/designer/mydesigns");
  return res.json();
};
