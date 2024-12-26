'use client';

import useTranslation from 'next-translate/useTranslation';
import { CategoryPreview } from 'components/pages/home/preview-category/CategoryPreview';
import { Wrapper } from 'components/shared';

import { HeroSlider } from './hero-slider/HeroSlider';

export const HomePage = ({ trendMovies, topMovies }) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      {trendMovies && <HeroSlider items={trendMovies} />}
      {trendMovies && (
        <CategoryPreview
          link="/movies/popular"
          title={t('trending')}
          items={trendMovies}
        />
      )}
      {topMovies && (
        <CategoryPreview
          link="/movies/top_rated"
          title={t('topRated')}
          items={topMovies}
        />
      )}
    </Wrapper>
  );
};
