import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AffiliateProvider } from "@/contexts/AffiliateContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BuiltDifferent from "@/pages/BuiltDifferent";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Calculator from "@/pages/Calculator";
import ThankYou from "@/pages/ThankYou";
import Mentors from "@/pages/Mentors";
import Vendors from "@/pages/Vendors";
import VendorCategory from "@/pages/VendorCategory";
import OnboardingCall from "@/pages/OnboardingCall";
import BookingConfirmed from "@/pages/BookingConfirmed";
import OnboardingCallConfirmed from "@/pages/OnboardingCallConfirmed";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AdvisorCall from "@/pages/AdvisorCall";
import AdvisorCallConfirmed from "@/pages/AdvisorCallConfirmed";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/built-different" component={BuiltDifferent} />
        <Route path="/built-different/mentors" component={Mentors} />
        <Route path="/built-different/vendors" component={Vendors} />
        <Route path="/built-different/vendors/:categoryId" component={VendorCategory} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/onboarding-call" component={OnboardingCall} />
        <Route path="/booking-confirmed" component={BookingConfirmed} />
        <Route path="/onboarding-call-confirmed" component={OnboardingCallConfirmed} />
        <Route path="/profitability-call" component={AdvisorCall} />
        <Route path="/profitability-call-confirmed" component={AdvisorCallConfirmed} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AffiliateProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AffiliateProvider>
    </QueryClientProvider>
  );
}

export default App;
