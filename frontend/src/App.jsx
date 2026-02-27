import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AiSymptomCheckerInterface from './pages/AiSymptomCheckerInterface';
import AiXRayAnalysisTool from './pages/AiXRayAnalysisTool';
import EmergencyClinicLocator from './pages/EmergencyClinicLocator';
import FirstAidKnowledgeBase from './pages/FirstAidKnowledgeBase';
import HealthReportsAnalytics from './pages/HealthReportsAnalytics';
import MainWellnessDashboard from './pages/MainWellnessDashboard';
import MedicationManagerCalendar from './pages/MedicationManagerCalendar';
import PatientProfileRecords from './pages/PatientProfileRecords';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const LayoutContainer = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideBackButton = ["/", "/login", "/create-account"].includes(location.pathname);

  return (
    <div className="relative">
      {!hideBackButton && (
        <button
          onClick={() => navigate("/")}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-bold pr-1">Back to Dashboard</span>
        </button>
      )}
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<MainWellnessDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/ai-symptom-checker-interface" element={<AiSymptomCheckerInterface />} />
          <Route path="/ai-x-ray-analysis-tool" element={<AiXRayAnalysisTool />} />
          <Route path="/emergency-clinic-locator" element={<EmergencyClinicLocator />} />
          <Route path="/first-aid-knowledge-base" element={<FirstAidKnowledgeBase />} />
          <Route path="/health-reports-analytics" element={<HealthReportsAnalytics />} />
          <Route path="/main-wellness-dashboard" element={<MainWellnessDashboard />} />
          <Route path="/medication-manager-calendar" element={<MedicationManagerCalendar />} />
          <Route path="/patient-profile-records" element={<PatientProfileRecords />} />
        </Routes>
      </LayoutContainer>
    </Router>
  );
}

export default App;
