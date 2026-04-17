import { Typography } from "@/shared/ui/typography";
import { HierarchyCardUser } from "@/shared/types/deputat.types";
import { MemberCard } from "./member-card";

type CommittieCardProps = {
  role: string;
  users: HierarchyCardUser[];
};

const DeputatCard = ({ role, users }: CommittieCardProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <Typography variant="header-m-caps" tag="h2">
        {role}
      </Typography>

      <div className="flex flex-col gap-4">
        {users.map((member) => (
          <MemberCard key={member.id} user={member} />
        ))}
      </div>
    </div>
  );
};

export { DeputatCard };
