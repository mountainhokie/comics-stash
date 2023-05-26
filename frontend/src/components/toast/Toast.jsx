import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";
import "./Toast.css";

const Toast = (props) => {
  const {
    toastList,
    position,
    autoDelete,
    autoDeleteTime,
    toastType,
    title,
    description,
  } = props;
  const [list, setList] = useState(toastList);
  const [icon, setIcon] = useState();

  useEffect(() => {
    switch (toastList[0]) {
      case "success":
        setIcon(checkIcon);
        break;
      case "danger":
        setIcon(errorIcon);
        break;
      case "info":
        setIcon(infoIcon);
        break;
      case "warning":
        setIcon(warningIcon);
        break;
      default:
        setList([]);
    }

    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setTimeout(deleteTimer, autoDeleteTime);
    return () => {
      clearTimeout(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastList, autoDelete, autoDeleteTime, list]);

  const deleteTimer = () => {
    if (autoDelete && toastList.length && list.length) {
      deleteToast(toastList[0].id);
    }
  };

  const deleteToast = (id) => {
    const index = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(index, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position} ${toastType}`}
          >
            <button onClick={() => deleteToast(toast.id)}>X</button>
            <div className="notification-image">
              <img src={icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{title}</p>
              <p className="notification-message">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Toast.defaultProps = {
  position: "bottom-right",
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
  toastType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Toast;
