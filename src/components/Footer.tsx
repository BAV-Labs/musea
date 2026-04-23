import { Link } from "react-router-dom";
import { Brand } from "./Brand";

export const Footer = () => (
  <footer className="bg-ink text-paper">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Brand variant="light" />
          <p className="mt-6 text-paper/60 text-sm max-w-sm leading-relaxed">
            A series of considered museum apps by BAV Labs. Volume one opens
            The Met's open access collection.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.2em] text-paper/40 mb-4">Site</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/#features" className="text-paper/80 hover:text-paper transition-colors">Features</a></li>
            <li><a href="/#about" className="text-paper/80 hover:text-paper transition-colors">About</a></li>
            <li><a href="/#screens" className="text-paper/80 hover:text-paper transition-colors">Screens</a></li>
            <li><a href="/#team" className="text-paper/80 hover:text-paper transition-colors">Team</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.2em] text-paper/40 mb-4">Legal</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/impressum" className="text-paper/80 hover:text-paper transition-colors">Impressum</Link></li>
            <li><Link to="/privacy" className="text-paper/80 hover:text-paper transition-colors">Privacy Policy</Link></li>
            <li><a href="mailto:bav-labs@proton.me" className="text-paper/80 hover:text-paper transition-colors">bav-labs@proton.me</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-paper/10 text-xs text-paper/50 space-y-2">
        <p>Data provided by The Metropolitan Museum of Art Open Access API.</p>
        <p>This app is not affiliated with or endorsed by The Metropolitan Museum of Art.</p>
        <p className="pt-3">© {new Date().getFullYear()} BAV Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
