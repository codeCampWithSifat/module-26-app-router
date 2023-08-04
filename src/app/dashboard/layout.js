import SideBarLayout from "@/components/shared/SideBar";

export const metaData = {
  title: "Dashboard Layout",
  description: "Very Valuable thing",
};
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBarLayout />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
