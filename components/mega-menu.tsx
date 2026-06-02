import Link from "next/link"
import { megaMenuData } from "@/data/mega-menu-data"

export function MegaMenu() {
  return (
    <div className="fixed top-[100px] left-0 w-full h-[calc(100vh-100px)] pointer-events-none z-50 flex justify-center">
      {/* 
        The outer container spans full width to center the inner menu, but is pointer-events-none 
        so it doesn't block the page. The inner container restores pointer-events.
      */}
      <div className="w-full max-w-[1200px] px-6 opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 pointer-events-auto">
        <div className="bg-white shadow-2xl border-t-4 border-[#E31E24] p-8 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-5 gap-8">
            {megaMenuData.columns.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6">
                {column.map((section, secIdx) => (
                  <div key={section.title} className="flex flex-col">
                    <h3 className="text-[#1a1f4e] font-bold text-[15px] mb-3 pb-1 border-b border-gray-100">
                      {section.title}
                    </h3>
                    <ul className="space-y-[6px]">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-700 hover:text-[#E31E24] text-[13px] font-medium transition-colors flex items-center"
                          >
                            <span className="mr-2 text-gray-400 text-xs">•</span>
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    
                    {/* If this is the last column and last section, show the View All button */}
                    {colIdx === megaMenuData.columns.length - 1 && secIdx === column.length - 1 && (
                      <div className="mt-8">
                        <Link
                          href="/packages"
                          className="inline-block bg-[#1a1f4e] hover:bg-[#E31E24] text-white font-bold py-2.5 px-6 text-[12px] uppercase tracking-wider transition-colors shadow-md w-full text-center"
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
