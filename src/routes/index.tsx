import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import AppLayout from "@/layout";

// Pages
import Interview from "@/pages/Interview";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Interview />
            </AppLayout>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
