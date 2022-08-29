import { useState } from 'react';
import classes from './Bar.module.css';

const tabs = [
  {
    title: 'Цена',
  },
  {
    title: 'Доставка',
  },
  {
    title: 'Контакты',
  },
];

const Bar = () => {
  const [tabTitle, setTabTitle] = useState(tabs[0].title);

  function handleChangeTab(tab) {
    setTabTitle(tab);
  }

  const list = tabs.map((tab) => (
    <li
      onClick={() => handleChangeTab(tab.title)}
      className={`${tabTitle === tab.title && classes.active} ${classes.tab}`}
      key={tab.title}
    >
      {tab.title}
    </li>
  ));

  return (
    <div className={classes.wrap}>
      <ul className={classes.list}>{list}</ul>
      {tabTitle === 'Цена' && (
        <div>
          <h3>Самые низкие цены!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ea perspiciatis
            ratione unde soluta quaerat eligendi, voluptas earum similique incidunt, nam cumque
            eaque quidem quis hic dolor voluptate a ducimus!
          </p>
        </div>
      )}
      {tabTitle === 'Доставка' && (
        <div>
          <h3>Самая быстрая доставка!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ea perspiciatis
            ratione unde soluta quaerat eligendi, voluptas earum similique incidunt, nam cumque
            eaque quidem quis hic dolor voluptate a ducimus!
          </p>
        </div>
      )}
      {tabTitle === 'Контакты' && (
        <div className={classes.contacts}>
          <a href='tel:88888888'>Позвонить</a>
          <span>88888888</span>
        </div>
      )}
    </div>
  );
};

export default Bar;
