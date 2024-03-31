import { getEventTypeLimit } from "@/actions/subscription/apiLimit";
import { checkSubscription } from "@/actions/subscription/subscription";
import HeaderDashboard from "@/components/HeaderDashboard";
import MainSideBar from "@/components/Sidebar";

interface SettingsLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = async ({ children }: SettingsLayoutProps) => {
	// const apiLimitCount = 2;
	const apiLimitCount = await getEventTypeLimit();

	const isPro = await checkSubscription();

	return (
		<>
			<div className="flex flex-col h-screen">
				<div className="flex flex-1 h-full overflow-hidden">
					<MainSideBar isPro={isPro} apiLimitCount={apiLimitCount} />

					<div className="w-ful p-0 md:p-2 mb-0 rounded-sm container mt-[80px]  overflow-y-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-primary">
						<HeaderDashboard />
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardLayout;
