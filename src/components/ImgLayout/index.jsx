import '../../App.css';
import styles from "./imglayout.module.css"
import { Row, Col, Spin } from "antd";
import ImgItem from "../ImgItem";
import { LoadingOutlined } from '@ant-design/icons';


export default function ImgLayout({ images ,isLoading }) {

    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 100,
          }}
          spin
        />
      );

    return (
        <>
        {isLoading

        ?(
            <div className='spinner-wrap'>
                 <Spin indicator={antIcon} className='spinner'/>
            </div>
        )
        :(<article className={styles.imageLayout}>
            <div className="container">
                <h1 className="h1">
                    IMAGES
                </h1>
                <hr className={styles.dividerDark} />
                <Row gutter={[32, 32]}>
                    {images.map(
                        image => (
                            <Col
                                key={image.id}
                                sm={{ span: 12 }}
                                lg={{ span: 8 }}
                                xl={{ span: 6 }}

                            >
                                <ImgItem key={image.id}
                                    image={image} />
                            </Col>

                        ))}

                </Row>

            </div>
        </article>
        )
        }
        </>
    );



}
