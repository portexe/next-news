import styles from '../styles/Recognition.module.css';
import { Toolbar } from '../components/toolbar';

export const Recognition = () => {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div></div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async pageContext => {

//   const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news');

//   return {
//     props: {
//       articles: articles,
//       pageNumber: Number.parseInt(pageNumber),
//     },
//   };
// };

export default Recognition;
