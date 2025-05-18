import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export const useUtmParams = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const utmValues = utmParams.reduce((acc, param) => {
      const value = searchParams.get(param);
      if (value) { acc[param] = value; }
      return acc;
    }, {} as Record<string, string>);

    if (Object.keys(utmValues).length > 0) {
      sessionStorage.setItem('utmParams', JSON.stringify(utmValues));
    }
  }, [searchParams]);

  return JSON.parse(sessionStorage.getItem('utmParams') || '{}');
}; 