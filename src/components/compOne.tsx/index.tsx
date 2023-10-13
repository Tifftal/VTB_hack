import './compOne.scss';
import { useCompOne } from './useCompOne';

export function CompOne() {
  const {
    buttonProps,
  } = useCompOne();

  return (
    <div>
      <button {...buttonProps}>Click me</button>
    </div>
  )
}
