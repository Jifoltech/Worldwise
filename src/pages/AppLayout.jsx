// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import User from "../components/User";
import SideBar from "../components/sideBar";
import styles from "./appLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
