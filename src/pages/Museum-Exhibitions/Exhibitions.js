import styles from './Exhibitions.module.scss';
import PropTypes from 'prop-types';
import Section1 from '../../components/MainPage-components/Section1/Section1.jsx'
import Section2 from '../../components/MainPage-components/Section2/Section2.jsx'
import Section3 from '../../components/MainPage-components/Section3/Section3.jsx'
import Section4 from '../../components/MainPage-components/Section4/Section4.jsx'
import Section5 from '../../components/MainPage-components/Section5/Section5.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Exhibitions(props) {
  return <>
    <div className={styles.main}>
      <Section1 />
      <a href='/social/id1'>click</a>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  </>
}

Exhibitions.propTypes = {
  className: PropTypes.string
};

export default Exhibitions;
