import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function SiteBanner() {
  return (
    <Carousel>
      <Carousel.Item >
        <Image style={{
          display: 'block',
          width: '100%',
          height: '500px',
          maxHeight: '500px'
        }} src="https://api.bamf.bg//uploads/16063856325181.jpeg" />
      </Carousel.Item>
      <Carousel.Item >
        <Image style={{
          display: 'block',
          width: '100%',
          height: '500px',
          maxHeight: '500px',
          objectFit: 'cover',
          objectPosition: '50% 15%'
        }}
          src="https://api.bamf.bg//uploads/16866725926652.jpeg" />
      </Carousel.Item>
      <Carousel.Item>
        <Image style={{
          display: 'block',
          width: '100%',
          height: '500px',
          maxHeight: '500px',
          imageResolution: '300dpi',
          objectFit: 'fill',
          objectPosition: '50% 15%'
        }}
          src="https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-6/242659602_3119576571610595_4314646241482848061_n.png?_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_ohc=EPSbVblhDrQAX-GpdQz&_nc_ht=scontent-sof1-1.xx&oh=00_AfCJ75fFmJttK5t3_9pl1Ev3BUrUHNIj3yocDL_icVRgfg&oe=65765938" />
      </Carousel.Item>
    </Carousel>
  );
}