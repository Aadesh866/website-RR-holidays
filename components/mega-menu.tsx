import Link from "next/link"
import { megaMenuData } from "@/data/mega-menu-data"

export function MegaMenu() {
  return (
    <div className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] pointer-events-none z-50 flex justify-center group-hover/mega:pointer-events-auto">
      {/* 
        Subtle backdrop blur for premium feel.
      */}
      <div className="absolute inset-0 bg-[#0d1130]/10 backdrop-blur-[2px] opacity-0 group-hover/mega:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="relative w-full max-w-[1200px] px-6 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-4 group-hover/mega:translate-y-0 mt-6">
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-gray-200/50 p-8 max-h-[80vh] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          <div className="grid grid-cols-5 gap-8">
            {megaMenuData.columns.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6">
                {column.map((section, secIdx) => (
                  <div key={section.title} className="flex flex-col">
                    <h3 className="text-[#1a1f4e] font-heading font-bold text-[15px] tracking-wide uppercase mb-3 pb-2 border-b border-gray-100/80">
                      {section.title}
                    </h3>
                    <ul className="space-y-1 mt-1">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group/link text-gray-600 hover:text-[#1a1f4e] text-[13.5px] font-medium transition-all duration-300 flex items-center py-1.5 px-2 -mx-2 hover:bg-gray-50/80 rounded-md"
                          >
                            <span className="mr-2.5 text-[#E31E24]/60 text-[10px] transition-transform duration-300 group-hover/link:scale-150 group-hover/link:text-[#E31E24]">●</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                    {/* If this is the last column and last section, show the View All button */}
                    {colIdx === megaMenuData.columns.length - 1 && secIdx === column.length - 1 && (
                      <div className="mt-8 pt-6 border-t border-gray-100/80">
                        <Link
                          href="/packages"
                          className="flex items-center justify-center bg-gradient-to-r from-[#1a1f4e] to-[#2a3170] hover:from-[#E31E24] hover:to-[#ff3a40] text-white font-bold py-3 px-6 text-[12px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#1a1f4e]/20 hover:shadow-[#E31E24]/30 rounded-lg w-full"
                        >
                          View All Packages
                        </Link>
                      </div>
                    )}
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
