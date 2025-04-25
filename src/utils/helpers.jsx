export const generateRandomChange = (coin) => {
  const fluctuation = (value, factor = 0.02) => {
    const change = value * (Math.random() * factor * (Math.random() < 0.5 ? -1 : 1));
    return parseFloat((value + change).toFixed(2));
  };

  return {
    newPrice: fluctuation(coin.price),
    percent1h: parseFloat((Math.random() * 2 - 1).toFixed(2)),
    percent24h: parseFloat((Math.random() * 4 - 2).toFixed(2)),
    percent7d: parseFloat((Math.random() * 6 - 3).toFixed(2)),
    newVolume: fluctuation(coin.volume_24h, 0.1),
  };
};
