<div
  style={{
    display:"flex",
    gap:"8px",
    alignItems:"center",
    flexWrap:"wrap"
  }}
>

  <NavItem 
    href="/" 
    text="🏠 Home"
  />


  {/* Admin Dashboard یہاں آئے گا */}

  {
    admin ?

    <div
      style={{
        position:"relative"
      }}
    >

      <button
        onClick={()=>setOpen(!open)}
        style={{
          background:"#1b5e20",
          color:"white",
          border:"none",
          padding:"8px 12px",
          borderRadius:"20px",
          fontSize:"13px",
          fontWeight:"bold",
          cursor:"pointer"
        }}
      >
        ⚙️ Admin
      </button>


      {
        open &&
        <div style={dropdown}>

          <MenuItem 
            href="/admin/dashboard" 
            text="📊 Dashboard"
          />

          <MenuItem 
            href="/admin/products" 
            text="➕ Add Product"
          />

          <MenuItem 
            href="/admin/products" 
            text="📦 Manage Products"
          />

          <button
            onClick={logout}
            style={logoutButton}
          >
            🚪 Logout
          </button>

        </div>
      }

    </div>

    :

    <NavItem
      href="/admin/login"
      text="🔐 Login"
    />

  }



  {/* Contact اب یہاں آئے گا */}

  <NavItem
    href="/contact"
    text="📞 Contact"
  />



  {/* Products اپنی جگہ رہے گا */}

  <NavItem
    href="/products"
    text="🌿 Products"
  />


</div>
