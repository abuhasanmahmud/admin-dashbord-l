import Orders from "@/app/components/Orders/Orders";
import Sidebar from "@/app/components/shared/Sidebar";

const page = () => {
  return (
    <div>
      <Sidebar component={<Orders />} />
    </div>
  );
};

export default page;
