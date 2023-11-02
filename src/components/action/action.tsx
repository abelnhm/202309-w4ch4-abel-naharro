import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
export function Action() {
  const { isActiveCall } = useContext(AppContext);

  const handleClickToCall = () => {};

  const handleClickToHang = () => {};

  return (
    <>
      {/* {isActiveCall ? (
        <a href="#" className="call active" onClick={() => handleClickToCall()}>
          Call
        </a>
      ) : (
        <a href="#" className="hang active" onClick={() => handleClickToHang()}>
          Hang
        </a>
      )} */}
      {isActiveCall && (
        <a href="#" className="call active" onClick={() => handleClickToCall()}>
          Call
        </a>
      )}
    </>
  );
}
