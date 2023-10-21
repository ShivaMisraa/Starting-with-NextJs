// our-domain.com/AboutUsPage

import { Fragment } from "react";
import { details } from "./[teamId]";
import Link from "next/link";

const AboutUsPage = () => {
  const teamMemberNames = details.map((teamMember) => (
    <li key={teamMember.id}>
      <Link href={`/aboutUs/${teamMember.id}`}>
        {teamMember.name}
      </Link>
    </li>
  ));

  return (
    <Fragment>
      <h1>This is AboutUs Page</h1>
      <ul>{teamMemberNames}</ul>
    </Fragment>
  );
};

export default AboutUsPage;
