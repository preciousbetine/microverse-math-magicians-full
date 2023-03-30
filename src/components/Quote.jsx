import React, { useState, useEffect } from 'react';
import Styles from '@/styles/Quote.module.scss';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.api-ninjas.com/v1/quotes',
      {
        headers: {
          'X-Api-Key': '3yAD376I615Fp66RCjy0eA==wPqdsJ0pIwlv9YA3',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setCategory(data[0].category);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className={Styles.quotes}>
      {
        loading || error ? (
          <div className={loading ? Styles.loading : Styles.error}>
            {loading ? <div className={Styles.loader} /> : `Error: ${error}` }
          </div>
        ) : (
          <>
            {quote}
            <div className={Styles['quote-author_category']}>
              -
              {' '}
              {author}
              {' '}
              (
              {category}
              )
            </div>
          </>
        )
      }
    </div>
  );
}

export default Quotes;
