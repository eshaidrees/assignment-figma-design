import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectManagement from "../components/Project-management";
import WorkTogether from "../components/Work-together";
import Footer from "@/components/Footer";
import Customize1 from "@/components/Customize-1";
import Customize2 from "@/components/Customize-2";

export default function Home() {
  return(
    <div>
      <Header />
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <Customize1 />
       <Customize2 />
      <Footer />
      </div>
  );
}
