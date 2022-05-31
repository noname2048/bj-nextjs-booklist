import styles from "./MainNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const menus = [
  { name: "search", link: "/search" },
  { name: "books", link: "/books" },
];

export default function MainNav() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul>
        {menus.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
