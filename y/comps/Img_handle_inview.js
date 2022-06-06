import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ImgHandleInView = ({ src, alt, width, borderRadius = 0, threshold = 0.5, style={}}) => {

     const [opacity, setOpacity] = useState(0);
     const [visible, setVisible] = useState(false);

     const { ref, inView, entry } = useInView({
          threshold,
          triggerOnce: true,
     });

     useEffect(() => {
          if (inView) {
               setVisible(true),
                    setInterval(() => { setOpacity(1) }, 100)
          }
     }, [inView]);

     const stylePicture = {
          display: 'flex',
          transition: `opacity 2000ms ease`,
          opacity,
     };

     return (
          <div ref={ref} style={stylePicture} >
               {
                    visible && (
                         <img
                              src={src}
                              alt={alt}
                              width={width}
                              style={{ borderRadius }}
                              className={style }
                         />
                    )
               }
          </div>
     );
};


export default ImgHandleInView;
