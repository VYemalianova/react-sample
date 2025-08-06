import { useContext, useState } from 'react';
import { Button, Divider } from '@mui/material';

import { GlobalContext } from '@store/globalContext';
import { useIsMobile } from '@hooks/useIsMobile';
import type { ISign } from '@models/sign.model';

import style from './HoroscopeDashboard.module.scss';
import ZodiacSignChecker from '../ZodiacChecker/ZodiacChecker';
import DialogWrapper from '../common/DialogWrapper/DialogWrapper';
import SignsOverview from '../SignsOverview/SignsOverview';

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
          <DialogWrapper isOpen={showZodiacResultOverview} onClose={handleHideSignsOverview}>
            <SignsOverview sign={selectedSign} />
            <div className="btn-actions">
              <Button variant="light" onClick={handleHideSignsOverview}>
                OK
              </Button>
            </div>
          </DialogWrapper>
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
