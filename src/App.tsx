import React from 'react';
import {Home} from "./pages/home/ui/Home";
import {Routes, Route} from "react-router-dom";
import {Registration} from "./pages/registration/ui/Registration";
import {Auth} from "./pages/auth/ui/Auth";
import {AuthProvider} from "./contexts/AuthContext";

const Loading = () => <p>Loading ...</p>;

function App() {
  return (
      <React.Suspense fallback={<Loading />}>
          <AuthProvider>
            <Routes>
                <Route path="/register" element={<Registration/>}/>
                <Route path="/login" element={<Auth/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
          </AuthProvider>
      </React.Suspense>
  );
}

export default App;
