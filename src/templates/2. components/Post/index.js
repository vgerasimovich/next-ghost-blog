import Image from 'next/image';
import Link from 'next/link';
import Tags from '@/elements/Tags';
import styles from './Post.module.scss';

const Post = ({ data }) => {
  const { slug, title, feature_image, tags, excerpt } = data;

  return (
    <article className={styles.article}>
      <div className={styles.wrapper}>
        {feature_image && (
          <div className={styles.cover}>
            <Link href={`/${slug}`}>
              <a className={styles.pic} aria-label="Go to the post">
                <Image
                  src={feature_image}
                  alt="Representative image"
                  width={100}
                  height={70}
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>
            <Link href={`/${slug}`}>
              <a className={styles.title__link}>
                <span>{title}</span>
              </a>
            </Link>
          </h2>
          <div className={styles.additional}>
            <Tags tags={tags} />
            <div className={styles.excerpt}>
              <p>{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
