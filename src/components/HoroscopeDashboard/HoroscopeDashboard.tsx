import { useCallback, useContext, useState } from 'react';
import { Button, Divider } from '@mui/material';

import { GlobalContext } from '@store/globalContext';
import { useIsMobile } from '@hooks/useIsMobile';
import type { ISign } from '@models/sign.model';

import style from './HoroscopeDashboard.module.scss';
import ZodiacSignChecker from '../ZodiacChecker/ZodiacChecker';
import DialogWrapper from '../common/DialogWrapper/DialogWrapper';
import SignOverview from '../SignOverview/SignOverview';

const HoroscopeDashboard = () => {
  const { signs } = useContext(GlobalContext);
  const isMobile = useIsMobile();

  const [selectedSign, setSelectedSign] = useState<ISign | null>(null);
  const [showSignOverviewModal, setShowSignOverviewModal] = useState(false);

  const handleSelectSign = useCallback(
    (sign: ISign | null) => {
      setSelectedSign(sign ?? null);

      if (!isMobile) {
        setShowSignOverviewModal(!showSignOverviewModal);
      }
    },
    [setSelectedSign]
  );

  const handleHideSignOverview = useCallback(() => {
    handleSelectSign(null);
  }, [handleSelectSign]);

  return (
    <div>
      <div className="content-wrapper mt-xl mb-xl pr-m pl-m">
        <ZodiacSignChecker onSignSelect={handleSelectSign} />

        {selectedSign && (
          <>
            <DialogWrapper isOpen={showSignOverviewModal} onClose={handleHideSignOverview}>
              <SignOverview sign={selectedSign} />
              <div className="btn-actions">
                <Button variant="light" onClick={handleHideSignOverview}>
                  OK
                </Button>
              </div>
            </DialogWrapper>

            {isMobile && (
              <div className="mt-l">
                <Divider />
                <SignOverview sign={selectedSign} />
                <div className="btn-actions">
                  <Button variant="light" onClick={handleHideSignOverview}>
                    OK
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="gradient--selago-wisppink pt-l pb-l pr-l pl-l">
        <div className="content-wrapper">
          <h2 className="text-capitalize text-center ">Read more about sings</h2>
          <div className={style['sign-overview-list']}>
            {signs.map((sign) => (
              <div key={sign.id} className={style['sign-tile']}>
                <SignOverview sign={sign} isPreview onShowMore={handleSelectSign} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeDashboard;
