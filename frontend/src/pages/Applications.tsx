import { useQuery } from "@tanstack/react-query";
import Table from "../components/common/Table";

interface Application {
  id: number;
  studentName: string;
  studentEmail: string;
  message: string;
  createdAt: string;
  scholarship: {
    title: string;
  };
}

const fetchApplications = async (): Promise<Application[]> => {
  const response = await fetch("http://localhost:3000/api/applications");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function ApplicationsPage() {
  const {
    data: applications,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching applications</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-10 py-10">
      <div className="max-w-500 mx-auto">
        <h1 className="text-3xl font-bold text-fuchsia-950 mb-10">Applications</h1>
        <Table
          data={applications.map((application) => ({
            'ID': application.id.toString(),
            'Submitted At': new Date(application.createdAt).toLocaleString(),
            'Student Name': application.studentName,
            'Student Email': application.studentEmail,
            'Scholarship': application.scholarship.title,
            'Message': application.message,
          }))}
        />
      </div>
    </div>
  );
}

export default ApplicationsPage;
