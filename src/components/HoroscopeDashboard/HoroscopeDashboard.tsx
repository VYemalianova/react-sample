import { useContext, useState } from 'react';
import type { ISign } from '../../models/sign.model';
import ZodiacSignChecker from '../ZodiacChecker/ZodiacChecker';

import style from './HoroscopeDashboard.module.scss';
import { GlobalContext } from '../../store/context';
import SignsOverview from '../SignsOverview/SignsOverview';
import { useIsMobile } from '@hooks/useIsMobile';
import { Divider } from '@mui/material';
import Popup from '../common/Popup/Popup';

const HoroscopeDashboard = () => {
  const { signs } = useContext(GlobalContext);
  const isMobile = useIsMobile();

  const [selectedSign, setSelectedSign] = useState<ISign | null>(null);
  const [showZodiacResultOverview, setShowZodiacResultOverview] = useState(false);

  const handleHideSignsOverview = () => setShowZodiacResultOverview(false);

  const handleShowDetails = (sign: ISign | null) => {
    setSelectedSign(sign);

    setShowZodiacResultOverview(true);
  };

  const shouldDisplay = showZodiacResultOverview && selectedSign;
  return (
    <div>
      <div className="content-wrapper mt-xl mb-xl pr-m pl-m">
        <ZodiacSignChecker onSignSelect={handleShowDetails} />
        {!isMobile && shouldDisplay && (
          <Popup isOpen={showZodiacResultOverview} handleClose={handleHideSignsOverview}>
            <SignsOverview sign={selectedSign} />
          </Popup>
        )}

        {isMobile && shouldDisplay && (
          <div className="mt-l">
            <Divider />
            <SignsOverview sign={selectedSign} action={handleHideSignsOverview} />
          </div>
        )}
      </div>
      <div className="gradient--selago-wisppink pt-l pb-l pr-l pl-l">
        <div className="content-wrapper">
          <h2 className="text-capitalize text-center ">Read more about sings</h2>
          <div className={style['sign-overview-list']}>
            {signs.map((sign) => (
              <div key={sign.id} className={style['sign-tile']}>
                <SignsOverview sign={sign} isPreview action={handleShowDetails} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeDashboard;
