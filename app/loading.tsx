import { Skeleton, Wrapper } from 'components/shared';

export default function Loading() {
  return (
    <Wrapper>
      <Skeleton width={1280} height={738} />
    </Wrapper>
  );
}
