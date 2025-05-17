import ScholarshipCard from "./ScholarshipCard"
import { useQuery } from '@tanstack/react-query'

interface Scholarship {
  id: number;
  title: string;
  amount: number;
  deadline: string;
  description: string;
  imgUrl: string;
}

const fetchScholarships = async (): Promise<Scholarship[]> => {
  const response = await fetch('http://localhost:3000/api/scholarships')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

function ScholarshipList() {
  const { data: scholarships, isError, isPending } = useQuery({ queryKey: ['scholarships'], queryFn: fetchScholarships, })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching scholarships</div>
  }

  return (
    <div className="flex flex-row flex-wrap gap-8 w-full justify-center">
      {scholarships.map((scholarship) => (
        <ScholarshipCard
          id={scholarship.id}
          title={scholarship.title}
          amount={scholarship.amount}
          deadline={scholarship.deadline}
          description={scholarship.description}
          imgUrl={scholarship.imgUrl}
          key={scholarship.id}
        />
      ))}
    </div>
  )
}

export default ScholarshipList