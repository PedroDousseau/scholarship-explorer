import { Navigate, Route, Routes } from "react-router";
import ScholarshipsPage from "./pages/Scholarships";
import { useUtmParams } from "./hooks/useUtmParams";

function App() {
  useUtmParams(); 

  return (
    <Routes>
      <Route path="/scholarships" element={<ScholarshipsPage />} />
      <Route path="*" element={<Navigate to="/scholarships" replace />} />
    </Routes>
  );
}

export default App;
