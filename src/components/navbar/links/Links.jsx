import styles from "./Links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    { title: "Home Page", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
 //Temporary values
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title}/>
      ))}{session  ? (
        <>  
       {isAdmin ? (<NavLink item={{title: "Admin", path: "/admin"}} />) : null}
        </>) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
        )}
    </div>
  );
};

export default Links;
