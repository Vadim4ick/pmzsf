import { MemberItem } from "@/components/member-item";
import { CHAMBER_MEMBERS } from "@/modules/chamber-members-page";

const PredecessorsTab = () => {
  return (
    <div className="max-tablet:grid-cols-1 grid grid-cols-2 gap-8">
      {CHAMBER_MEMBERS[0].members.slice(0, 3).map((member) => (
        <MemberItem
          variant="secondary"
          key={member.id}
          image={member.image}
          name={member.name}
          desc={member.desc}
        />
      ))}
    </div>
  );
};

export { PredecessorsTab };
