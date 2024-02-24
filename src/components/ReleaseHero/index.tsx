import styles from "./styles.module.css";
import clsx from "clsx";
import logo from "@site/static/img/logo.png";
console.log("logo", logo);

type RelaseHeroProps = {
  version: string;
  features: string[];
};
function ReleaseHero(props: RelaseHeroProps) {
  const { version, features } = props;
  return (
    <div className={styles.container}>
      <img src={logo} alt="promptpal logo" className={styles.logo} />
      <div>
        <h2 className={styles.version}>PromptPal {version}</h2>
        <ul className={styles.features}>
          {features.map((x) => (
            <li
              key={x}
              className={clsx(
                "raycast-tag",
                styles.feature,
                styles.featureText,
              )}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReleaseHero;
