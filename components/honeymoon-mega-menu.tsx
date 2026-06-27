import Link from "next/link"

export function HoneymoonMegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-auto pointer-events-none z-50 flex justify-center group-hover/mega:pointer-events-auto">
      <div className="relative w-[280px] pt-4 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 pointer-events-auto origin-top transform scale-y-95 group-hover/mega:scale-y-100">
        <div className="bg-white rounded-b-xl rounded-t-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-200/50 p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col">
            <h3 className="text-[#1a1f4e] font-heading font-bold text-[14px] tracking-wide uppercase mb-2 pb-1 border-b border-gray-100/80">
              Romantic Escapes
            </h3>
            <ul className="space-y-0.5 mt-1">
              {[
                { name: "Maldives Honeymoon", href: "/packages/asia/maldives" },
                { name: "Santorini Getaway", href: "/packages/europe/greece" },
                { name: "Swiss Alps Romance", href: "/packages/europe/switzerland" },
                { name: "Parisian Getaway", href: "/packages/europe/france" },
                { name: "Kerala Backwaters", href: "/india/south-india?state=kerala" },
                { name: "Kashmir Paradise", href: "/india/north-india?state=jammu-and-kashmir" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group/link text-gray-600 hover:text-[#1a1f4e] text-[12.5px] font-medium transition-all duration-300 flex items-center py-[4px] px-2 -mx-2 hover:bg-gray-50/80 rounded-md"
                  >
                    <span className="mr-2 text-[#E31E24]/60 text-[8px] transition-transform duration-300 group-hover/link:scale-150 group-hover/link:text-[#E31E24]">●</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-100/80">
              <Link
                href="/honeymoon"
                className="flex items-center justify-center bg-gradient-to-r from-[#1a1f4e] to-[#2a3170] hover:from-[#E31E24] hover:to-[#ff3a40] text-white font-bold py-2.5 px-4 text-[11px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#1a1f4e]/20 hover:shadow-[#E31E24]/30 rounded-lg w-full"
              >
                View All Honeymoon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
