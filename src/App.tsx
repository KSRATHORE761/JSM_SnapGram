import { Routes, Route } from "react-router-dom";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { AllUsers, CreatePost, EditPost, Explorer, Home, PostDetails, Profile, Saved, UpdateProfile } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout></AuthLayout>}>
          <Route path="/sign-in" element={<SigninForm></SigninForm>}></Route>
          <Route path="/sign-up" element={<SignupForm></SignupForm>}></Route>
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout></RootLayout>}>
          <Route index element={<Home />}></Route>
          <Route path='/explore' element={<Explorer/>}/>
          <Route path='/saved' element={<Saved/>}/>
          <Route path='/all-users' element={<AllUsers/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:id' element={<EditPost/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/update-profile/:id' element={<UpdateProfile/>}/>
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
