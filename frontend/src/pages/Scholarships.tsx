import ScholarshipList from "../components/ScholarshipList"

function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 px-10 py-10">
      <div className="max-w-500 mx-auto">
        <div className="flex flex-col gap-4 mb-15">
          <h1 className="text-3xl font-bold text-fuchsia-950">Scholarship Explorer</h1>
          <p className="text-neutral-500">
            Find the perfect scholarship for your needs.
          </p>
        </div>
        <ScholarshipList />
      </div>
    </div>
  )
}

export default ScholarshipsPage
