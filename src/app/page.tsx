import { Top } from "@/components/01_top";
import { About } from "@/components/02_about";
import {Profile} from "@/components/03_profile";
import {Debut} from "@/components/04_profile_debut";
import {Message} from "@/components/05_MESSAGE";
import {Requirement} from "@/components/06_requirement";
import {Last} from "@/components/07_last";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Top />
      <About />
      <Profile />
      <Debut />
      <Message />
      <Requirement />
      <Last />
    </main>
  );
}
