// our-domain.com/news/DetailsPage

import { useRouter } from "next/router";

export const details = [
  { id: '1', name: 'Yash', role: 'Senior Developer' },
  { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
  { id: '3', name: 'Suresh', role: 'Frontend Developer' }
];

const DetailsPage = () => {
  const router = useRouter();
  const teamId = router.query.teamId;

  const teamMember = details.find((member) => member.id === teamId);

  return (
    <div>
      {teamMember ? (
        <div>
          <h1>{teamMember.name}</h1>
          <p>{teamMember.role}</p>
        </div>
      ) : (
        <p>Developer Not found!!!</p>
      )}
    </div>
  );
};

export default DetailsPage;

