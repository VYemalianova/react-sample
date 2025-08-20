import { Avatar, Button } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { useState } from 'react';

import type { ISign } from '@models/sign.model';
import { useIsMobile } from '@hooks/useIsMobile';

import styles from './SignOverview.module.scss';

interface IProps {
  sign: ISign;
  isPreview?: boolean;
  onShowMore?: (sign: ISign) => void;
}

const SignOverview = ({ sign, isPreview, onShowMore }: IProps) => {
  const isMobile = useIsMobile();
  const [isShowMore, setIsShowMore] = useState(false);

  const handleShowDetails = () => {
    if (!isMobile) {
      onShowMore?.(sign);
    } else {
      setIsShowMore(!isShowMore);
    }
  };

  return (
    <div className={styles['sign-overview-wrapper']}>
      <div className={styles['title-wrapper']}>
        <h3 className="text-capitalize">{sign.signType} Overview</h3>
        <Avatar alt={sign.signType} src={sign.imageDir} sx={{ width: 67, height: 67 }} />
      </div>
      <div className="mt-m mb-m">
        <div className="mb-s">
          <h4>Element:</h4>
          {sign.element}
        </div>
        {(!isPreview || isShowMore) && (
          <div className="mb-s">
            <h4>Planet:</h4>
            {sign.planet}
          </div>
        )}
        {(!isPreview || isShowMore) && (
          <div className="mb-s">
            <h4>Traits:</h4>

            {sign.traits.map((trait, i) => (
              <span key={trait} className="text-capitalize">
                {i > 0 ? ', ' : ''}
                {trait}
              </span>
            ))}
          </div>
        )}
        <div>
          <h4>Fact:</h4>
          <div className={isPreview ? styles['truncate'] : ''}>{sign.fact}</div>
        </div>
      </div>

      {isPreview && (
        <Button variant="text" startIcon={<PreviewIcon />} onClick={handleShowDetails}>
          {isShowMore ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  );
};

export default SignOverview;
