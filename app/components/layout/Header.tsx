import { Menu, CircleUser } from "lucide-react";
export default function Header() {
  return (
    <header className="w-full  h-15">
      <nav className="w-full h-full p-5 flex items-center justify-between">
        <div>
          <Menu />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Celestial Observer</h1>
        </div>
        <div>
          <CircleUser />
        </div>
      </nav>
    </header>
  );
}
