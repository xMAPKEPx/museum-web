import styles from './Exhibitions.module.scss';
import Footer from '../../components/Footer/Footer.jsx'
import NavBar from "../../components/NavigationBar/NavBar";
import ExhibitionsList from "../../components/Exhibitions-components/Exhibitions/Exhibitions";

function Exhibitions() {

  return <>
    <div className={styles.main}>
      <NavBar />
      <ExhibitionsList />
      <Footer />
    </div>
  </>
}

export default Exhibitions;
