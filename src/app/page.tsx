import { Top } from "@/components/01_top";
import { About } from "@/components/02_about";
import {Profile} from "@/components/04_profile";
import {Project} from "@/components/03_about_project";
import {Message} from "@/components/05_MESSAGE";
import {Requirement} from "@/components/06_requirement";
import {Last} from "@/components/07_last";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Top />
      <About />
      <Profile />
      <Message />
      <Requirement />
      <Last />
    </main>
  );
}
