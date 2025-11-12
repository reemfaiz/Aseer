// Compatibility wrapper so importing "./pages/OUR VISION" resolves correctly.
// It re-exports the actual index component that lives in the nested `client/pages` folder.
import Index from "./client/pages/Index";

export default Index;
