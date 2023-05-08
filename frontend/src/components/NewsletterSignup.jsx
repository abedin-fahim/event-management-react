import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();

  const { data, state } = fetcher;

  console.log(data, state);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        name='email'
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
