import Image from "next/image";
import { Phone, Settings, Sun, Users } from "lucide-react";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { SIDEBAR_ROUTES } from "@/routes";

const isLoggedIn = false;


export function Sidebar() {

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="logo" width={50} height={50} />

      <div>
        {SIDEBAR_ROUTES.map((item) => (
          <Link href={item.url} key={item.url}>
            <item.icon size={35} />
          </Link>
        ))}
      </div>
      <Sun size={35} />
    </div>
  );
}
