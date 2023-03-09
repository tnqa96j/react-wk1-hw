import styles from './imgitem.module.css'
import '../../App.css';


export default function ImgItem({ image }) { /*JSON參數*//*每一個圖片*/
    return (   
            <div className={styles.image}>   
                <a href="" className={styles.Link}>
                    <img src={image.src}  className={styles.Style} />
                </a>
                <p className={styles.Title}> 
                    {image.imageTitle}
                </p>
            </div>
    );
}