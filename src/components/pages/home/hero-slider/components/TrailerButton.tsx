import { Button, CloseIcon, PlayIcon } from 'src/shared/ui';
import { useHeroSlider } from '../useHeroSlider';
import { TrailerAction } from '../types';
import styles from '../styles/TrailerButton.module.css';

type Props = {
  action: TrailerAction;
  handleTrailer: ReturnType<typeof useHeroSlider>['handleTrailer'];
};

export const TrailerButton = ({ handleTrailer, action }: Props) => {
  const icon = action === 'open' ? <PlayIcon /> : <CloseIcon />;

  return (
    <Button className={styles[action]} onClick={() => handleTrailer(action)}>
      {icon}
    </Button>
  );
};
