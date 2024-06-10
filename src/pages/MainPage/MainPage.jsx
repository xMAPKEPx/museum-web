import styles from './MainPage.module.scss';
import Section1 from '../../components/MainPage-components/Section1/Section1.jsx'
import Section2 from '../../components/MainPage-components/Section2/Section2.jsx'
import Section3 from '../../components/MainPage-components/Section3/Section3.jsx'
import Section4 from '../../components/MainPage-components/Section4/Section4.jsx'
import Section5 from '../../components/MainPage-components/Section5/Section5.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import NavBar from "../../components/NavigationBar/NavBar";
import React from "react";

function MainPage() {
    return <div className={styles.main}>
        <NavBar />
        <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>;
}

export default MainPage;
