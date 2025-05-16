import Image from "next/image";
import styles from "./page.module.css";
import HomeContent from "@/components/pages/1-homeContent/index.jsx";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeContent />
    </div>
  );
}
