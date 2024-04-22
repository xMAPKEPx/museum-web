import styles from './MainPage.module.scss';
import PropTypes from 'prop-types';
import Section1 from '../components/MainPage-components/Section1/Section1.jsx'
import Section2 from '../components/MainPage-components/Section2/Section2.jsx'
import Section3 from '../components/MainPage-components/Section3/Section3.jsx'
import Section4 from '../components/MainPage-components/Section4/Section4.jsx'
import Section5 from '../components/MainPage-components/Section5/Section5.jsx'
import Section6 from '../components/MainPage-components/Section6/Section6.jsx'

function MainPage(props) {
  return (
    <main className={styles.main}>
      <Section1 props={props}/>
      <Section2 props={props} />
      <Section3 props={props} />
      <Section4 props={props} />
      <Section5 props={props} />
      <Section6 props={props} />
    </main>
  );
}

MainPage.propTypes = {
  className: PropTypes.string
};

export default MainPage;
