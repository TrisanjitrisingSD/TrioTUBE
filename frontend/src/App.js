import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/HeaderSection/Header";
import Feed from './components/FeedSection/Feed';
import SearchVideoResult from "./components/SearchSection/SearchVideoResult";
import VideoDetails from "./components/VideoSection/VideoDetails";
import { AppContext } from "./useContextHook/useContextApi";
import { ThemeProvider } from "./useContextHook/useTheme";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={key}>
      <AppContext>
        <ThemeProvider>
          <BrowserRouter>
            <div className="flex flex-col w-full">
              {/* Protect pages */}
              <SignedIn>
                <Header />
                <Routes>
                  <Route path="/" element={<Feed />} />
                  <Route path="/search/:searchQuery" element={<SearchVideoResult />} />
                  <Route path="/video/:categoryId/:videoId" element={<VideoDetails />} />
                </Routes>
              </SignedIn>

              {/* Redirect to sign-in if not logged in */}
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </AppContext>
    </ClerkProvider>
  );
}

export default App;
