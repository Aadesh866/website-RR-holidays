import Link from "next/link"
import { megaMenuData } from "@/data/mega-menu-data"

export function MegaMenu() {
  return (
    <div className="fixed top-[100px] left-0 w-full bg-white shadow-2xl opacity-0 invisible group-hover/mega:opacity-100 group-hover/mega:visible transition-all duration-300 border-t-[3px] border-[#E31E24] z-50">
      <div className="max-w-[1400px] mx-auto p-8 lg:p-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {megaMenuData.packages.map((category) => (
            <div key={category.title} className="flex flex-col">
              <h3 className="text-[#1a1f4e] font-bold text-lg mb-4 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#E31E24] text-sm font-medium transition-colors flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[#E31E24] before:rounded-full before:mr-2 before:opacity-0 hover:before:opacity-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Button placeholder at the bottom of the last column if needed, or we can add it below */}
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
          <Link
            href="/packages"
            className="inline-block bg-[#1a1f4e] hover:bg-[#E31E24] text-white font-bold py-3 px-8 text-sm uppercase tracking-wider transition-colors shadow-md"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </div>
  )
}
