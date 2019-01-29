
const rp = require('request-promise');
const cheerio = require('cheerio');

function getoptions(number) {
  const options = {
    uri: 'https://phonenumber-lookup.info',
    body: `phone=${number}`,
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transform(body) {
      return cheerio.load(body);
    },
  };
  return options;
}

function getphone(number) {
    const options = getoptions(number);
    rp(options)
      .then(($) => {
        const type = $('tr:nth-of-type(2) td:nth-of-type(2)').text();
        const location = $('tr:nth-of-type(5) td:nth-of-type(2)').text();
        const contrycode = $('tr:nth-of-type(6) td:nth-of-type(2)').text();
        const countryname = $('tr:nth-of-type(7) td:nth-of-type(2)').text();
        const contrynetwork = $('tr:nth-of-type(8) td:nth-of-type(2)').text();
        const info = {
          number, type, location, contrycode, countryname, contrynetwork,
        };
        console.log(info); // infos
      })
      .catch((err) => {
        console.log(err);
      });
}

getphone('551130568628')