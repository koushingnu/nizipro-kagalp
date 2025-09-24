import { About } from "@/components/01_about";
import {Profile} from "@/components/02_profile";
import {Debut} from "@/components/03_profile_debut";
import {Message} from "@/components/04_MESSAGE";
import {Requirement} from "@/components/06_requirement";
import {Last} from "@/components/07_last";


export default function Home() {
  return (
    <main className="min-h-screen">
      <About />
      <Profile />
      <Debut />
      <Message />
      <Requirement />
      <Last />
    </main>
  );
}
