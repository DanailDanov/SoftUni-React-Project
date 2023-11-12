import styles from './SiteBanner.module.css'

import Carousel from 'react-bootstrap/Carousel';

export default function SiteBanner () {
    return (
        <Carousel>
          <Carousel.Item>
           <img className={styles['slide-banner']} src="https://api.bamf.bg//uploads/16063856325181.jpeg" alt="" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className={styles['slide-banner']} src="https://safenews.bg/wp-content/uploads/2023/10/395560394_366895359433372_6701062969774088313_n-750x375.webp" alt="" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className={styles['slide-banner']} src="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/242659602_3119576571610595_4314646241482848061_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JECzY_-5BdUAX9jJNxM&_nc_ht=scontent-sof1-1.xx&oh=00_AfD1tPEAksBfcqjXRiyNhgoTV8XyOdQa6l77QOM3Dk_wHw&oe=6554BAF8" alt="" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}