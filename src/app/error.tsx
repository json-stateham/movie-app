'use client';

import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { Button } from 'shared/ui';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  const { lang } = useTranslation();

  console.error(error);

  const handleReset = useCallback(() => reset(), [reset]);

  return (
    <html lang={lang}>
      <body>
        <div className="flex flexCol flexAlCent">
          <h2 className="mb32 mt32">Something went wrong</h2>
          <Button onClick={handleReset}>
            <span>Refresh Page</span>
          </Button>
        </div>
      </body>
    </html>
  );
}
