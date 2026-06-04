import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent"; 

export default function Home() {
  return (
    <>
      <Menu />
      <main style={{ minHeight: '70vh' }}>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}