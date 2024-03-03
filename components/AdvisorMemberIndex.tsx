import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const AdvisorMemberIndex = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const client = createClient();
  const advisors = await client.getAllByType("advisormember");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
      {advisors.map((member, index) => {
        return (
          <TeamMemberCard
            key={index}
            memberImage={member.data.advisor_image}
            memberName={member.data.name}
            BioLink={`/advisors/${member.uid}`}
          />
        );
      })}
    </div>
  );
};

export default AdvisorMemberIndex;
