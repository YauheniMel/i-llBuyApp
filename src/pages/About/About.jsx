import Bar from '../../components/Bar/Bar';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.section}>
      <div className={`${classes.container} container`}>
        <div className={classes.info}>
          <h2>i'LLBuy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, veniam eius maiores
            atque odit fugit quisquam. Pariatur mollitia hic doloremque similique, sit dicta earum,
            veritatis deleniti perferendis, perspiciatis harum voluptates!
          </p>
        </div>
        <Bar />
      </div>
    </section>
  );
};

export default About;
