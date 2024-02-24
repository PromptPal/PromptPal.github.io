import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Developer experience",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        With CLI and SDK support. you are be able to have better developer
        experience than ever.
      </>
    ),
  },
  {
    title: "On-Premise and Cloud-Native",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        PromptPal excels in both on-premise and cloud-native environments,
        making it a versatile solution for AI projects. Its lightweight
        architecture guarantees efficient resource utilization, ensuring optimal
        performance. And all this feature only need 12.3MB memory!
      </>
    ),
  },
  {
    title: "Easy to use",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        One configuration file + One line of code. that's all you need to start
        the PromptPal
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
