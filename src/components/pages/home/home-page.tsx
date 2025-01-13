'use client';

import useTranslation from 'next-translate/useTranslation';
import { CategoryPreview } from 'components/pages/home/preview-category/CategoryPreview';
import { Wrapper } from 'shared/ui';

import { HeroSlider } from './hero-slider/HeroSlider';

export const HomePage = ({ trendMovies, topMovies, trendTrailers }) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      {trendMovies && <HeroSlider items={trendTrailers} />}
      {trendMovies && (
        <CategoryPreview
          category="popular"
          title={t('trending')}
          items={trendMovies}
        />
      )}
      {topMovies && (
        <CategoryPreview
          category="top_rated"
          title={t('topRated')}
          items={topMovies}
        />
      )}
    </Wrapper>
  );
};
