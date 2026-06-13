import Link from "next/link"
import { indiaMegaMenuData } from "@/data/india-mega-menu-data"

export function IndiaMegaMenu() {
  return (
    <div className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] pointer-events-none z-50 flex justify-center group-hover/mega:pointer-events-auto">
      <div className="absolute inset-0 bg-[#0d1130]/10 backdrop-blur-[2px] opacity-0 group-hover/mega:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative w-full max-w-[850px] px-6 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 pointer-events-auto origin-top transform scale-y-95 group-hover/mega:scale-y-100">
        <div className="bg-white rounded-b-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-200/50 py-4 max-h-[80vh] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div className="grid grid-cols-4 divide-x divide-gray-100">
            {indiaMegaMenuData.columns.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 px-6 first:pl-8 last:pr-8">
                {column.map((section, secIdx) => (
                  <div key={section.title} className="flex flex-col">
                    <h3 className="text-[#1a1f4e] font-heading font-bold text-[14px] tracking-wide uppercase mb-2 pb-1 border-b border-gray-100/80">
                      {section.title}
                    </h3>
                    <ul className="space-y-0.5 mt-1">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group/link text-gray-600 hover:text-[#1a1f4e] text-[12.5px] font-medium transition-all duration-300 flex items-center py-[2px] px-2 -mx-2 hover:bg-gray-50/80 rounded-md"
                          >
                            <span className="mr-2 text-[#E31E24]/60 text-[8px] transition-transform duration-300 group-hover/link:scale-150 group-hover/link:text-[#E31E24]">●</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                      
                      {colIdx === 2 && secIdx === column.length - 1 && (
                        <li className="mt-2 pt-2 border-t border-gray-100/80">
                          <Link
                            href="/india"
                            className="group/link text-[#E31E24] hover:text-[#ff3a40] text-[12.5px] font-bold transition-all duration-300 flex items-center py-[2px] px-2 -mx-2 hover:bg-gray-50/80 rounded-md"
                          >
                            <span className="mr-2 text-[#E31E24] text-[8px] transition-transform duration-300 group-hover/link:scale-150">►</span>
                            Explore All India Tours
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
