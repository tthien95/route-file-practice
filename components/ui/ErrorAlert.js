import { alert } from './error-alert.module.css';

export default function ErrorAlert({ children }) {
  return <div className={alert}>{children}</div>;
}
