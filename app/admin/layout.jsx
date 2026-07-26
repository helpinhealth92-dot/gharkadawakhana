"use client";

export default function AdminLayout({ children }) {

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f5fff5",
        direction:"rtl"
      }}
    >

      <main>
        {children}
      </main>

    </div>

  );

}
