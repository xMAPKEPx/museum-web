import styles from './CollectionsPage.module.scss';
import Footer from '../../components/Footer/Footer.jsx'
import NavBar from "../../components/NavigationBar/NavBar";
import CollectionsList from "../../components/Collections-components/Collections/CollectionsList";
import React, {useEffect, useState} from "react";
import {getCollections} from "../../api.auth";
import {useNavigate} from "react-router-dom";

function CollectionsPage({user = '0'}) {
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCollections(user)
        setCollections(response)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, []);

  return <>
    <NavBar />
    <div className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.flex_col}>
          <h1 className={styles.title}>
            Хранилище коллекций <br/>
            <button onClick={() => navigate('/collections/create')}>Создать коллекцию</button>
          </h1>
          <CollectionsList collections={collections}/>
        </div>
      </section>
    </div>
    <Footer/>
  </>
}


export default CollectionsPage;
