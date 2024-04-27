// An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card ID equal to id, checks in at the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card ID equal to id, checks out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time it takes to travel from startStation to endStation.
// The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
// The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
// There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
// You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.

class UndergroundSystem {
  private sessions: Record<
    number,
    {
      stationName: string;
      t: number;
    }
  > = {};

  private stats: Record<
    string,
    Record<string, { sum: number; amount: number }>
  > = {};

  constructor() {}

  checkIn(id: number, stationName: string, t: number): void {
    this.sessions[id] = {
      stationName,
      t,
    };
  }

  checkOut(id: number, stationName: string, t: number): void {
    const { stationName: checkInStation, t: checkInTime } = this.sessions[id];

    if (!this.stats[checkInStation]) {
      this.stats[checkInStation] = {};
    }

    if (!this.stats[checkInStation][stationName]) {
      this.stats[checkInStation][stationName] = {
        sum: 0,
        amount: 0,
      };
    }

    this.stats[checkInStation][stationName].sum += t - checkInTime;
    this.stats[checkInStation][stationName].amount += 1;

    delete this.sessions[id];
  }

  getAverageTime(startStation: string, endStation: string): number {
    const { sum, amount } = this.stats[startStation][endStation];
    return sum / amount;
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
