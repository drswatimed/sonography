import { useRouter } from '@/lib/router';
import { useMeta } from '@/lib/seo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { HomePage } from '@/pages/HomePage';
import { TrainingPage } from '@/pages/TrainingPage';
import { ClinicSetupPage } from '@/pages/ClinicSetupPage';
import { HandholdingPage } from '@/pages/HandholdingPage';
import { AboutPage } from '@/pages/AboutPage';
import { SuccessStoriesPage } from '@/pages/SuccessStoriesPage';
import { ContactPage } from '@/pages/ContactPage';
import { BlogPage } from '@/pages/BlogPage';

function App() {
  const { route } = useRouter();
  useMeta(route);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar route={route} />
      <main className="flex-1">
        {route.name === 'home' && <HomePage />}
        {route.name === 'training' && <TrainingPage />}
        {route.name === 'clinic-setup' && <ClinicSetupPage />}
        {route.name === 'handholding' && <HandholdingPage />}
        {route.name === 'about' && <AboutPage />}
        {route.name === 'success-stories' && <SuccessStoriesPage />}
        {route.name === 'contact' && <ContactPage />}
        {route.name === 'blog' && <BlogPage />}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
