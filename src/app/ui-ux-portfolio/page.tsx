import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import UiUxPortfolio from '@/components/UiUxPortfolio';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'UI/UX Portfolio | Chetan Pujari',
  description: 'Figma wireframes to pixel-perfect prototypes. Explore UI/UX design projects across web, mobile, and product.',
};

export default function UiUxPortfolioPage() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen w-full font-sans text-white selection:bg-[#ff6b35] selection:text-white">
      <Navbar />
      <UiUxPortfolio />
      <Footer />
    </main>
  );
}
