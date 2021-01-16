import PageLink from '@/elements/PageLink';
import FeaturedPost from '@/components/FeaturedPost';
import styles from './Featured.module.scss';

const Featured = ({ posts }) => (
  <section className={styles.featured}>
    <div className="container">
      <div className={styles.wrapper}>
        {/* <div className={styles['page-link']}>
            <PageLink data={pageLink} />
          </div> */}
        <div className={styles.posts}>
          <ul className={styles.row}>
            {posts.map((post) => (
              <li className={styles.col} key={post.uuid}>
                <FeaturedPost data={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
