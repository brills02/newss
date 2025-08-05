import React from 'react';
const Header = ({ onMenuSelect }) => {
  const Logo = (
    <img
      src="/logo.png"
      alt="Merake Sports Logo"
      style={{
        width: 90,
        height: 'auto',
        display: "block",
        objectFit: "contain",
        userSelect: "none",
        marginLeft: 2,
      }}
    />
  );
  const navItems = [
    { label: "Home", link: "#" },
    {
      label: "Africa", dropdown: [
        { name: "Africa Cup of Nations", link: "/africa-cup" },
        { name: "CAF Champions League", link: "/caf-champions" },
        { name: "Rest Of Africa", link: "/rest-of-africa" },
      ]
    },
    { label: "Diaspora", link: "#" },
    { label: "YesterYear", link: "#" },
    { label: "Fixtures And Results", link: "#" },
    { label: "South Africa", link: "#" },
    {
      label: "Nigeria", dropdown: [
        { name: "Nigeria League", link: "/nigeria-league" },
        { name: "Federation Cup", link: "/federation-cup" },
        { name: "Super Cup", link: "/super-cup" }
      ]
    },
    {
      label: "Zambia", dropdown: [
        { name: "Zambia League", link: "/zambia-league" },
        { name: "ABSA Cup", link: "/absa-cup" }
      ]
    },
    {
      label: "Zimbabwe", dropdown: [
        { name: "Zimbabwe Premier Soccer League", link: "/zimbabwe-premier" },
        { name: "Independence Cup", link: "/independence-cup" },
        { name: "Chibuku Super Cup", link: "/chibuku-super-cup" }
      ]
    }
  ];
  function Dropdown({ label, options, onMenuSelect }) {
    const [open, setOpen] = React.useState(false);
    
    const handleItemClick = (item) => {
      // Call the parent's onMenuSelect with a value indicating "no news updates"
      if (onMenuSelect) {
        onMenuSelect({
          type: "no-news-updates",
          category: item.name,
          label: label
        });
      }
    };
    
    return (
      <div
        style={{ position: "relative", height: "100%" }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span style={{ cursor: "pointer", padding: "0 1em", display: "inline-flex", alignItems: "center", height: "100%" }}>
          {label} <span style={{ fontSize: 12, marginLeft: 3 }}>▼</span>
        </span>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "white",
              color: "#ec0c0c",
              borderRadius: "0 0 6px 6px",
              minWidth: 180,
              fontWeight: 500,
              fontSize: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              zIndex: 99
            }}
          >
            {options.map(opt => (
              <div
                key={opt.name}
                style={{
                  padding: "0.7em 1.2em",
                  cursor: "pointer",
                  borderBottom: "1px solid #f1f1f1",
                  background: "#fff",
                  color: "#ec0c0c"
                }}
                onClick={() => handleItemClick(opt)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleItemClick(opt);
                  }
                }}
              >
                {opt.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <header
        style={{
          width: "100%",
          background: "#ec0c0c",
          color: "white",
          minHeight: 70,
          display: "flex",
          alignItems: "center",
          padding: "0 32px 0 16px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 10
        }}
      >
        {/* Logo and hamburger */}
        <div style={{ display: "flex", alignItems: "center", flex: "0 0 auto", marginRight: 40 }}>
          <div style={{
            width: 44,
            height: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
            cursor: "pointer"
          }}>
            <div style={{
              width: 32,
              height: 5,
              background: "white",
              borderRadius: 2,
              margin: "3px 0"
            }} />
            <div style={{
              width: 32,
              height: 5,
              background: "white",
              borderRadius: 2,
              margin: "3px 0"
            }} />
            <div style={{
              width: 32,
              height: 5,
              background: "white",
              borderRadius: 2,
              margin: "3px 0"
            }} />
          </div>
          {Logo}
        </div>
        {/* Nav */}
        <nav style={{
          display: "flex",
          flex: "1 1 auto",
          height: 70,
          alignItems: "center",
          justifyContent: "flex-end"
        }}>
          {navItems.map(item =>
            item.dropdown ? (
              <Dropdown
                key={item.label}
                label={item.label}
                options={item.dropdown}
                onMenuSelect={onMenuSelect}
              />
            ) : (
              <span
                key={item.label}
                style={{
                  cursor: "pointer",
                  padding: "0 1em",
                  fontWeight: 500,
                  fontSize: "1.07rem",
                  display: "inline-flex",
                  alignItems: "center",
                  height: "100%"
                }}
                onClick={() => onMenuSelect && onMenuSelect(item.label)}
              >
                {item.label}
              </span>
            )
          )}
        </nav>
      </header>
      <div style={{ width: "100%", height: 14, background: "#1020ca" }} />
    </div>
  );
}
export default Header;