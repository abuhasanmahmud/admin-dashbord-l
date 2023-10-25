import DashboardHome from "../components/dashboard/DashboardHome";
import Sidebar from "../components/shared/Sidebar";
import { getAllProducts } from "@/app/controllers/product.controller";
export default async function Home() {
  const allProducts = await getAllProducts();
  return (
    <>
      <Sidebar component={<DashboardHome allProducts={allProducts} />} />
    </>
  );
}
