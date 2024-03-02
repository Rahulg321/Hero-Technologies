import { createClient } from "@/prismicio";
import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const CoreTeamMemberIndex = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const client = createClient();
  const coreTeamMembers = await client.getAllByType("coreteammember");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
      {coreTeamMembers.map((member, index) => {
        return (
          <TeamMemberCard
            key={index}
            memberImage={member.data.memberimage}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinlink}
            memberName={member.data.name}
          />
        );
      })}
      {coreTeamMembers.map((member, index) => {
        return (
          <TeamMemberCard
            key={index}
            memberImage={member.data.memberimage}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinlink}
            memberName={member.data.name}
          />
        );
      })}
      {coreTeamMembers.map((member, index) => {
        return (
          <TeamMemberCard
            key={index}
            memberImage={member.data.memberimage}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinlink}
            memberName={member.data.name}
          />
        );
      })}
      {coreTeamMembers.map((member, index) => {
        return (
          <TeamMemberCard
            key={index}
            memberImage={member.data.memberimage}
            memberPosition={member.data.designation}
            LinkedinLink={member.data.linkedinlink}
            memberName={member.data.name}
          />
        );
      })}
    </div>
  );
};

export default CoreTeamMemberIndex;
