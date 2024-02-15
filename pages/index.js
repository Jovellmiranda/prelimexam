import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title> No Talent Required</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> My name is Jovell Christian Q. Miranda. I am 21 years old.While  I don’t have a favorite or specific music, sometimes I prefer listening to OPM music because it makes me calm when I’m really stressed about doing something. Favorite Food: Much like seafood, Hobbies are more on playing games, watching movies and looking at things that I can have an interest in. 
IT is my first choice. My parents supported me in choosing IT.
I don’t know what I would be expecting in my future because time changes and anything can happen. I can still continue pursuing my IT more on databases.
This subject is new to me because it is my first time taking the subject and some new Programming Languages. 
</p>

<p>10 Things that require 0 talent:</p>
        <ol>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ol>
<p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
