import BlogList from "@/components/home/BlogList";
import CTA from "@/components/home/CTA";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Incentivos from "@/components/home/Incentives";
import LogoCloud from "@/components/home/LogoCloud";
import UseCases from "@/components/home/UseCases";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-28">
      <Header />
      <Incentivos />
      <UseCases />
      <Features />
      <CTA />
      <LogoCloud />
      <BlogList />
    </div>
  );
}
