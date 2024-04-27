// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

// BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
// void visit(string url) Visits url from the current page. It clears up all the forward history.
// string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
// string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class BrowserHistory {
  private history: string[];
  private index: number;

  constructor(homepage: string) {
    this.history = [homepage];
    this.index = 0;
  }

  visit(url: string): void {
    this.history.splice(this.index + 1, this.history.length);
    this.history.push(url);
    this.index++;
  }

  back(steps: number): string {
    this.index = Math.max(this.index - steps, 0);
    return this.history[this.index];
  }

  forward(steps: number): string {
    this.index = Math.min(this.index + steps, this.history.length - 1);
    return this.history[this.index];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
