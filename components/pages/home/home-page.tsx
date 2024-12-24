'use client';

import useTranslation from 'next-translate/useTranslation';
import { CategoryPreview } from 'components/pages/home/preview-category/CategoryPreview';
import { HeroSlider } from 'components/pages/home/hero-slider';
import { Wrapper } from 'components/shared';

export const HomePage = ({ trendMovies, topMovies }) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper className="pb-50">
      {trendMovies && <HeroSlider images={trendMovies} />}
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
