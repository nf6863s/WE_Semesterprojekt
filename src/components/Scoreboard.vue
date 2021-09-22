<template>
  <div class="scoreboard">
    <div class="score">
      <div>
        <span class="score-title">Black</span>
        <span>{{black}}</span>
      </div>
      <span class="score-separator">:</span>
      <div>
        <span class="score-title">White</span>
        <span>{{white}}</span>
      </div>
    </div>
    <hr class="line">
    <div class="winrate">
      <span>Win-Rate Black: <span>{{get_wr_for_last_ten_games()}}</span></span>
      <span>(Winrate of last 10 Games)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scoreboard",
  data() {
    return {
      white: 0,
      black: 0,
      history: []
    }
  },
  methods: {
    updateScore(winner) {
      if (winner === 0) {
        this.white++;
      } else {
        this.black++;
      }

      this.history.push(winner);
    },

    get_wr_for_last_ten_games() {
      let last_ten = [];
      if (this.history.length === 0) {
        return '0%';
      }

      if (this.history.length > 10) {
        last_ten = this.history.slice(this.history.length - 10);
      } else {
        last_ten = this.history;
      }

      let black_wins = 0;

      last_ten.forEach(el => black_wins += el);

      console.log(black_wins, black_wins/last_ten.length);

      return parseFloat(black_wins/last_ten.length * 100).toFixed(0)+"%";
    }
  }
}
</script>

<style scoped>
  .scoreboard {
    width: 500px;
    height: 275px;
    background-color: #333333;
    color: #fa8265;
    font-size: 50px;
    padding: 10px 70px;
    border-style: solid;
  }

  .score {
    font-size: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .score > div {
    display: flex;
    flex-direction: column;
  }

  .score-title {
    font-size: 50px;
  }

  .score-separator {
    padding-top: 50px;
  }

  .winrate {
    margin-top: 20px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
  }

  .winrate > *:last-child {
    font-size: 15px;
  }

  .line {
    width: 100%;
    height: 3px;
  }

</style>