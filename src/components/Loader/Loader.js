import { Bars } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export function Loader() {
  return (
    <div className={css.loader}>
      <Bars
        height="80"
        width="80"
        color=" #303f9f"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
