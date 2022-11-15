// import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import AuthContext from '../../context/AuthContext';
import styles from './BotNavbar.module.css'

function BotNavbar(props) {
  const history = useHistory();
  // let { user} = useContext(AuthContext)

  const handleHistory = () => {
    history.goBack();
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.navButton} onClick={handleHistory}>back</button>
        {/* <Link to='/main'>
          <button className={styles.navButton}>home</button>
        </Link> */}
      </div>
        <div>
          <button className={styles.navButton}>
            Hello, young
          </button>
        </div>
    </div>
  );
}

export default BotNavbar;