import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    goto: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Core Concepts',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        goto: "docs/engineering-team-overview/overview",
        description: (
            <>
                Learn about who we are and the way we work together to deliver excellence
            </>
        ),
    },
    {
        title: 'Process & Practice',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        goto: "docs/coding-practice/ai-assisted",
        description: (
            <>
                Things that will help you get going quickly in our environment
            </>
        ),
    }
];

function Feature({title, Svg, description, goto}: FeatureItem) {
    return (
        <div className={clsx('col col--6')}>
            <div className="text--center">
                <a href={goto}>
                    <Svg className={styles.featureSvg} role="img" />
                </a>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
