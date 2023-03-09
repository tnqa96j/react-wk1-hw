import styles from './descriptionlayout.module.css'
import '../../App.css';
export default function DescriptionLayout({descriptiontitle,descriptioncontent}){
    return(

        <article className={styles.descriptionLayout}>
        <div className="container">
          <h1 className='h1'>{descriptiontitle}</h1>
          <hr className={styles.dividerLight} />
          <p className={styles.descriptionContent}>
            {descriptioncontent}
          </p>
        </div>
      </article>
    );

}
