import clsx from 'clsx';
import css from './FriendsList.module.css';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
