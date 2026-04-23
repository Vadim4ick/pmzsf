// import { getChamberMembers } from "@/shared/services/get-chamber-members";
import { ChamberMembersPage } from "@/views/chamber-members-page";

export const metadata = {
  title: "Члены Палаты",
};

// const PER_PAGE = 200;

export const revalidate = 60;

const ChamberMembers = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; letter?: string }>;
}) => {
  const { letter } = await searchParams;
  // const currentPage = Math.max(1, Number(page ?? 1));

  // const data = await getChamberMembers({
  //   page: currentPage,
  //   limit: PER_PAGE,
  //   letter: letter || undefined,
  // });

  // const totalItems = data.meta?.filter_count ?? 0;
  // const totalPages = Math.ceil(totalItems / PER_PAGE);

  return (
    <ChamberMembersPage
      letter={letter}
      // members={data.data}
      // currentPage={currentPage}
      // totalPages={totalPages}
    />
  );
};

export default ChamberMembers;
