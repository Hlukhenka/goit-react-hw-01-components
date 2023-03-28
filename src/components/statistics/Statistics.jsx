import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { randomColor } from '../utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title ?? 'Upload stats'}</h2>

      <ul className={css.statlist}>
        {stats.map(item => (
          <li
            className={css.item}
            style={{ backgroundColor: randomColor() }}
            key={item.id}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
