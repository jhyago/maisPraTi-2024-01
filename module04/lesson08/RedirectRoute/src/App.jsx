// Importing necessary components and hooks from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Custom protected route component
import Home from './components/Home'; // Home component
import Login from './components/Login'; // Login component

// Main App component
function App() {
  return (
    <>
      {/* Setting up the Router for managing routes */}
      <Router>
        <Routes>
          {/* Public route for the Login page */}
          <Route path='/Login' element={<Login />} />

          {/* Protected route for the Home page */}
          <Route
            path="/Home"
            element={
              // ProtectedRoute component checks if the user is logged in
              <ProtectedRoute isLoggedIn={true}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

// Exporting App component as default export
export default App;
