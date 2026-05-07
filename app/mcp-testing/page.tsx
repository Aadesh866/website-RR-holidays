"use client";

export default function MCPTestingPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          MCP UI Autofix Testing
        </h1>
        <p className="text-lg text-gray-300">
          This page is designed to test the UI Autofix MCP server with intentional design violations
        </p>
      </header>

      {/* Main Content - Centered Square */}
      <div className="flex items-center justify-center">
        <div 
          className="bg-blue-500 shadow-lg"
          style={{
            width: "300px",
            height: "300px",
            padding: "16px",
            margin: "16px",
            borderRadius: "12px"
          }}
        >
        </div>
      </div>

      {/* Additional Content with Violations */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-3 gap-5">
        <div 
          className="bg-white p-5 shadow rounded transition-colors hover:bg-gray-100 cursor-pointer"
          style={{
            padding: "16px",
            borderRadius: "8px"
          }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ lineHeight: "1.15" }}>
            Card One
          </h3>
          <p className="text-gray-600" style={{ lineHeight: "1.6" }}>
            This card has 17px padding and 7px border radius.
          </p>
        </div>

        <div 
          className="bg-white p-5 shadow rounded transition-colors hover:bg-gray-100 cursor-pointer"
          style={{
            padding: "16px",
            borderRadius: "12px"
          }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ lineHeight: "1.25" }}>
            Card Two
          </h3>
          <p className="text-gray-600" style={{ lineHeight: "1.55" }}>
            This card has 19px padding and 11px border radius.
          </p>
        </div>

        <div 
          className="bg-white p-5 shadow rounded transition-colors hover:bg-gray-100 cursor-pointer"
          style={{
            padding: "24px",
            borderRadius: "8px"
          }}
        >
          <h3 className="text-xl font-semibold mb-2 text-gray-900" style={{ lineHeight: "1.18" }}>
            Card Three
          </h3>
          <p className="text-gray-600" style={{ lineHeight: "1.52" }}>
            This card has 21px padding and 9px border radius.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-400">
        <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
          Ready for MCP UI Autofix testing! Run: fix UI issues on http://localhost:3000/mcp-testing
        </p>
      </footer>
    </div>
  );
}
