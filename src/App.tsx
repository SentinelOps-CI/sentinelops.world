
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Mission from "./pages/Mission";
import Docs from "./pages/Docs";

import Status from "./pages/Status";
import Contact from "./pages/Contact";
import ContactSuccess from "./pages/ContactSuccess";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import SubscribeSuccess from "./pages/SubscribeSuccess";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import VerifiableAIEcosystem from "./pages/blog/VerifiableAIEcosystem";
import EcosystemTimeline from "./pages/blog/EcosystemTimeline";
import MappingSpace from "./pages/blog/MappingSpace";
import BuildingInfrastructure from "./pages/blog/BuildingInfrastructure";
import CurrentInitiatives from "./pages/blog/CurrentInitiatives";
import HowToGetInvolved from "./pages/blog/HowToGetInvolved";
import PaperViewer from "./pages/PaperViewer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/docs" element={<Docs />} />
        
        <Route path="/status" element={<Status />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/success" element={<ContactSuccess />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/verifiable-ai-ecosystem" element={<VerifiableAIEcosystem />} />
        <Route path="/blog/ecosystem-development-timeline" element={<EcosystemTimeline />} />
        <Route path="/blog/mapping-the-space" element={<MappingSpace />} />
        <Route path="/blog/building-verification-infrastructure" element={<BuildingInfrastructure />} />
        <Route path="/blog/current-initiatives" element={<CurrentInitiatives />} />
        <Route path="/blog/how-to-get-involved" element={<HowToGetInvolved />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/subscribe/success" element={<SubscribeSuccess />} />
        <Route path="/papers/view" element={<PaperViewer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
