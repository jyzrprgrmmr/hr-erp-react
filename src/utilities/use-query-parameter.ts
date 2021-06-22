import { useLocation } from 'react-router-dom';

export function useQueryParameter() {
  return new URLSearchParams(useLocation().search);
}
