import Link from "next/link";
import { getRouteCommitteesById } from "@/shared/const/route.const";
import { Typography } from "@/shared/ui/typography";
import { GetAllCommitteesQuery } from "@/shared/graphql/__generated__";

const CommitteesCard = ({
  item,
}: {
  item: GetAllCommitteesQuery["committees"][0];
}) => {
  return (
    <Link
      key={item.id}
      href={getRouteCommitteesById(`${item.id}`)}
      className="bg-background-primary group flex min-h-[266px] flex-col justify-between gap-4 rounded-[8px] p-6 transition-shadow duration-300 hover:shadow-lg md:p-8"
    >
      <Typography
        variant="header-m-caps"
        tag="p"
        className="group-hover:text-text-accent transition-colors duration-300"
      >
        {item.title}
      </Typography>

      {item.members[0] && (
        <div className="flex flex-col gap-1.5">
          <Typography variant="body-m-strong" tag="p">
            {item.members[0].user.first_name} {item.members[0].user.last_name}
          </Typography>

          <Typography
            className="text-text-secondary"
            variant="body-m"
            tag="span"
          >
            Председатель
          </Typography>
        </div>
      )}
    </Link>
  );
};

export { CommitteesCard };
