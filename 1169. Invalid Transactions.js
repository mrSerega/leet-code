// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.
function invalidTransactions(transactions) {
  const hash = {};
  const invalid = new Set();

  transactions.forEach((transaction, index) => {
    const [name, time, amount, city] = transaction.split(",");

    if (hash[name]) {
      hash[name].push([name, time, amount, city, index]);
    } else {
      hash[name] = [[name, time, amount, city, index]];
    }

    if (Number.parseInt(amount) > 1000) {
      invalid.add(index);
    }

    hash[name].forEach((tr) => {
      const [n, t, a, c, i] = tr;

      if (c !== city) {
        const parsedTime = Number.parseInt(time);
        const parsedT = Number.parseInt(t);
        if (Math.abs(parsedTime - parsedT) <= 60) {
          invalid.add(index);
          invalid.add(i);
        }
      }
    });
  });

  return Array.from(invalid).map((i) => transactions[i]);
}
