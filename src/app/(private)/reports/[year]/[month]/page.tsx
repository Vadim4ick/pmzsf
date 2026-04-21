import { CreateReports } from "@/views/create-reports";

const ReportPage = async ({
  params,
}: {
  params: { year: string; month: string };
}) => {
  const { year, month } = await params;

  return <CreateReports year={year} month={month} />;
};

export default ReportPage;
